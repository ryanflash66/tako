/* Tako — Home page */
import { t as tr } from '../lib/i18n.js';

// A little top-view car marker (amber = a free/available driver, grey = busy).
function MapCar({ free }) {
  const body = free ? 'var(--tako-amber)' : '#43443c';
  const stroke = free ? 'rgba(10,10,10,0.55)' : 'rgba(255,255,255,0.22)';
  const glass = free ? 'rgba(10,10,10,0.32)' : 'rgba(200,220,235,0.55)';
  return (
    <g>
      {/* wheels */}
      <rect x="-9" y="-7.6" width="6" height="3" rx="1.5" fill="#0c0d0a" />
      <rect x="-9" y="4.6" width="6" height="3" rx="1.5" fill="#0c0d0a" />
      <rect x="5" y="-7.6" width="6" height="3" rx="1.5" fill="#0c0d0a" />
      <rect x="5" y="4.6" width="6" height="3" rx="1.5" fill="#0c0d0a" />
      {/* body */}
      <rect x="-13" y="-6.5" width="26" height="13" rx="4.5" fill={body} stroke={stroke} strokeWidth="1" />
      {/* cabin */}
      <rect x="-6" y="-4.3" width="11" height="8.6" rx="2.4" fill={glass} />
      {/* front windshield wedge */}
      <path d="M 5 -4.3 L 10.2 -2.6 L 10.2 2.6 L 5 4.3 Z" fill={glass} />
    </g>
  );
}

// Top-view car marker as an HTML string (for Leaflet divIcons).
function carHTML(free, angle) {
  const body = free ? '#f7951d' : '#43443c';
  const stroke = free ? 'rgba(10,10,10,0.55)' : 'rgba(255,255,255,0.22)';
  const glass = free ? 'rgba(10,10,10,0.32)' : 'rgba(200,220,235,0.55)';
  return '<div class="car-rot" style="width:30px;height:26px;transform:rotate(' + angle + 'deg);">'
    + '<svg width="30" height="26" viewBox="-15 -13 30 26" style="display:block;overflow:visible;filter:drop-shadow(0 1px 2px rgba(0,0,0,.55))">'
    + '<rect x="-9" y="-7.6" width="6" height="3" rx="1.5" fill="#0c0d0a"/>'
    + '<rect x="-9" y="4.6" width="6" height="3" rx="1.5" fill="#0c0d0a"/>'
    + '<rect x="5" y="-7.6" width="6" height="3" rx="1.5" fill="#0c0d0a"/>'
    + '<rect x="5" y="4.6" width="6" height="3" rx="1.5" fill="#0c0d0a"/>'
    + '<rect x="-13" y="-6.5" width="26" height="13" rx="4.5" fill="' + body + '" stroke="' + stroke + '" stroke-width="1"/>'
    + '<rect x="-6" y="-4.3" width="11" height="8.6" rx="2.4" fill="' + glass + '"/>'
    + '<path d="M 5 -4.3 L 10.2 -2.6 L 10.2 2.6 L 5 4.3 Z" fill="' + glass + '"/>'
    + '</svg></div>';
}

// Sample a position + heading (deg) at fraction p along a lat/lng route.
function sampleRoute(m, p) {
  if (!m._cum) {
    const cum = [0]; let tot = 0;
    for (let i = 1; i < m.route.length; i++) {
      tot += Math.hypot(m.route[i][0] - m.route[i - 1][0], m.route[i][1] - m.route[i - 1][1]);
      cum.push(tot);
    }
    m._cum = cum; m._tot = tot || 1;
  }
  const target = p * m._tot;
  let i = 1;
  while (i < m._cum.length - 1 && m._cum[i] < target) i++;
  const a = m.route[i - 1], b = m.route[i];
  const seg = (m._cum[i] - m._cum[i - 1]) || 1;
  const f = Math.max(0, Math.min(1, (target - m._cum[i - 1]) / seg));
  // screen heading: north (lat+) is up, so screen-dy = -dLat, screen-dx = dLng
  const ang = Math.atan2(-(b[0] - a[0]), (b[1] - a[1])) * 180 / Math.PI;
  return { lat: a[0] + (b[0] - a[0]) * f, lng: a[1] + (b[1] - a[1]) * f, ang };
}

// A real dark map of Douala, Cameroon (Leaflet + CARTO tiles) with live drivers.
function LiveMapBg() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!window.L || !ref.current) return;
    const RIDER = [4.0470, 9.7320];
    const map = L.map(ref.current, {
      center: [4.0470, 9.7300], zoom: 14, zoomSnap: 0.25,
      zoomControl: false, attributionControl: true, dragging: false, scrollWheelZoom: false,
      doubleClickZoom: false, boxZoom: false, keyboard: false, touchZoom: false,
      tap: false, fadeAnimation: false, inertia: false,
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd', maxZoom: 20, detectRetina: true,
      attribution: '&copy; OpenStreetMap &copy; CARTO',
    }).addTo(map);

    const carIcon = (free, ang) => L.divIcon({ className: 'tako-car', iconSize: [30, 26], iconAnchor: [15, 13], html: carHTML(free, ang) });

    // OSRM (real road network) — route + snap helpers, so cars stay on the streets.
    let alive = true;
    const OSRM = 'https://router.project-osrm.org';
    // OSRM is a public demo server — guard every call with a timeout so a hung
    // request can't stall the animation; callers fall back to straight lines.
    const fetchJSON = async (url, ms = 4000) => {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), ms);
      try { return await (await fetch(url, { signal: ctrl.signal })).json(); }
      finally { clearTimeout(timer); }
    };
    async function roadRoute(a, b) {
      const url = OSRM + '/route/v1/driving/' + a[1] + ',' + a[0] + ';' + b[1] + ',' + b[0] + '?overview=full&geometries=geojson';
      const j = await fetchJSON(url);
      if (j.code !== 'Ok' || !j.routes || !j.routes[0]) throw new Error('no route');
      return j.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
    }
    async function snapToRoad(la, ln) {
      const j = await fetchJSON(OSRM + '/nearest/v1/driving/' + ln + ',' + la);
      if (!j.waypoints || !j.waypoints[0]) throw new Error('no snap');
      const loc = j.waypoints[0].location;
      return [loc[1], loc[0]];
    }

    // Parked / available drivers — placed near real Douala roads, then snapped onto them.
    const idle = [
      [4.0560, 9.7180, true, -16], [4.0530, 9.7480, true, 8], [4.0400, 9.7560, true, 95],
      [4.0360, 9.7260, false, 90], [4.0590, 9.7400, true, 92], [4.0330, 9.7460, false, 4],
      [4.0620, 9.7300, true, -8], [4.0440, 9.7620, false, 88],
    ];
    idle.forEach(([la, ln, free, ang]) => {
      const mk = L.marker([la, ln], { icon: carIcon(free, ang), interactive: false, keyboard: false }).addTo(map);
      snapToRoad(la, ln).then(s => { if (alive) mk.setLatLng(s); }).catch(() => {});
    });

    // Rider — your live location.
    L.marker(RIDER, {
      icon: L.divIcon({ className: 'tako-rider', iconSize: [26, 26], iconAnchor: [13, 13], html: '<span class="r-ring"></span><span class="r-dot"></span>' }),
      interactive: false, keyboard: false, zIndexOffset: 1000,
    }).addTo(map);

    // Drivers on the move — straight fallback first, real road geometry once OSRM responds.
    const movers = [
      { ends: [[4.0610, 9.7680], [4.0340, 9.7250]], dur: 34, off: 0.1, free: true },
      { ends: [[4.0440, 9.7740], [4.0580, 9.7280]], dur: 38, off: 0.5, free: false },
      { ends: [[4.0660, 9.7440], [4.0380, 9.7560]], dur: 32, off: 0.8, free: true },
    ];
    movers.forEach(m => {
      m.route = m.ends.slice();
      m.marker = L.marker(m.ends[0], { icon: carIcon(m.free, 0), interactive: false, keyboard: false }).addTo(map);
      m.rotEl = m.marker._icon && m.marker._icon.querySelector('.car-rot');
      roadRoute(m.ends[0], m.ends[1]).then(g => { if (alive && g.length > 1) { m.route = g; m._cum = null; } }).catch(() => {});
    });

    let raf; const start = performance.now();
    const tick = (now) => {
      const t = (now - start) / 1000;
      movers.forEach(m => {
        const p = (((t / m.dur) + m.off) % 1 + 1) % 1;
        const s = sampleRoute(m, p);
        m.marker.setLatLng([s.lat, s.lng]);
        if (m.rotEl) m.rotEl.style.transform = 'rotate(' + s.ang.toFixed(1) + 'deg)';
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const fix = () => map.invalidateSize({ animate: false });
    setTimeout(fix, 60); setTimeout(fix, 400);
    window.addEventListener('resize', fix);
    return () => { alive = false; cancelAnimationFrame(raf); window.removeEventListener('resize', fix); map.remove(); };
  }, []);
  return <div ref={ref} className="hero-leaflet" style={{ position: 'absolute', inset: 0, background: '#1c1d1a', zIndex: 0 }} aria-hidden="true" />;
}

function Hero() {
  const [from, setFrom] = React.useState('Akwa, Douala');
  const [to, setTo] = React.useState('');
  const [fare, setFare] = React.useState(null);
  const estimate = () => {
    if (!to.trim()) { setFare('hint'); return; }
    const base = 1500 + Math.floor((Math.abs(hash(from + to)) % 36) + 6) * 180;
    const low = Math.round(base / 100) * 100;
    setFare({ low, high: low + 900 });
  };
  const rider = { x: 68, y: 62 };
  return (
    <section style={{ position: 'relative', overflow: 'hidden', color: '#fff', isolation: 'isolate' }}>
      <LiveMapBg rider={rider} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(100deg, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.82) 34%, rgba(10,10,10,0.42) 60%, rgba(10,10,10,0.30) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(to top, rgba(10,10,10,0.55) 0%, transparent 26%)' }} />

      <div style={{ ...WRAP, position: 'relative', zIndex: 2 }} className="stack-pad">
        <div style={{ position: 'relative', minHeight: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 80, paddingBottom: 96 }}>
          <div style={{ maxWidth: 600 }}>
            <div className="tako-overline" style={{ marginBottom: 20, color: 'var(--tako-amber)' }}>{tr('Rideshare · Cameroon', 'Covoiturage · Cameroun')}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(46px,5.6vw,76px)',
              lineHeight: 0.98, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
              {tr('Get there.', 'Allez-y.')}<br />{tr('Anywhere in', 'Partout au')}<br />{tr('Cameroon.', 'Cameroun.')}
            </h1>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.5, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 460 }}>
              {tr('Request a ride in seconds, see your fare up front, and track your driver from Douala to Yaoundé and beyond.', 'Réservez une course en quelques secondes, voyez votre prix à l’avance et suivez votre chauffeur de Douala à Yaoundé et au-delà.')}
            </p>
            <div style={{ display: 'flex', gap: 8, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 16,
              padding: 8, maxWidth: 560, backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', boxShadow: 'var(--shadow-lg)', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 180, display: 'flex', alignItems: 'center', gap: 10, padding: '6px 14px' }}>
                <SIcon name="circle-dot" size={18} color="var(--tako-amber)" />
                <input value={from} onChange={e => setFrom(e.target.value)} style={{ border: 'none', outline: 'none', flex: 1, minWidth: 0, fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15, background: 'transparent', color: '#fff' }} />
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,0.18)', alignSelf: 'stretch' }} />
              <div style={{ flex: 1, minWidth: 180, display: 'flex', alignItems: 'center', gap: 10, padding: '6px 14px' }}>
                <SIcon name="square" size={16} color="rgba(255,255,255,0.6)" />
                <input value={to} onChange={e => setTo(e.target.value)} onKeyDown={e => e.key === 'Enter' && estimate()} placeholder={tr('Where to?', 'Où aller ?')} style={{ border: 'none', outline: 'none', flex: 1, minWidth: 0, fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15, background: 'transparent', color: '#fff' }} />
              </div>
              <SBtn variant="amber" icon="arrow-right" onClick={estimate} style={{ flexShrink: 0 }}>{tr('See prices', 'Voir les prix')}</SBtn>
            </div>
            {fare && (
              <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', animation: 'float-up .3s cubic-bezier(.2,0,0,1)' }}>
                {fare === 'hint' ? (
                  <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--gray-300)', fontWeight: 600 }}>{tr('Enter a destination to see an estimate.', 'Saisissez une destination pour voir une estimation.')}</span>
                ) : (
                  <React.Fragment>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 18, color: '#fff' }}>{fmt(fare.low)}–{fmt(fare.high)} <span style={{ fontSize: 12, color: 'var(--tako-amber)' }}>FCFA</span></span>
                    <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--gray-300)', fontWeight: 600 }}>{tr('· est. with Tako Go · ~14 min', '· est. avec Tako Go · ~14 min')}</span>
                  </React.Fragment>
                )}
              </div>
            )}
          </div>

          <div className="desktop-only" style={{ position: 'absolute', top: 80, right: 0, display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(10,10,10,0.82)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, padding: '8px 14px', zIndex: 3 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--tako-amber)' }} className="pulse" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#fff' }}>{tr('LIVE · Akwa, Douala', 'EN DIRECT · Akwa, Douala')}</span>
          </div>
          <div className="desktop-only" style={{ position: 'absolute', bottom: 64, right: 0, width: 300, display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(10,10,10,0.74)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 16, padding: '14px 18px', zIndex: 3 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--tako-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <SIcon name="car-front" size={22} color="var(--tako-black)" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: '#fff' }}>{tr('8 drivers available', '8 chauffeurs disponibles')}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--tako-amber)' }}>{tr('Nearest car · 2 min away', 'Voiture la plus proche · à 2 min')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [['11', tr('cities live', 'villes desservies')], ['8,000+', tr('active drivers', 'chauffeurs actifs')], ['2 min', tr('avg pickup', 'prise en charge moy.')], ['4.9★', tr('avg trip rating', 'note moyenne')]];
  return (
    <div style={{ borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)', background: 'var(--bg-2)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, paddingTop: 32, paddingBottom: 32 }} className="grid-4 stack-pad">
        {stats.map(([n, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.02em' }}>{n}</div>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', fontWeight: 600 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tiers() {
  const data = [
    { icon: 'car', name: 'Tako Go', desc: tr('Affordable everyday rides for getting around town.', 'Des courses abordables au quotidien pour vos déplacements en ville.'), price: '1 620', seats: '4' },
    { icon: 'car-front', name: 'Tako Comfort', desc: tr('Newer cars, extra legroom, top-rated drivers.', 'Voitures récentes, plus d’espace, chauffeurs les mieux notés.'), price: '2 460', seats: '4' },
    { icon: 'users', name: 'Tako XL', desc: tr('Roomy rides for groups of up to six passengers.', 'Des courses spacieuses pour les groupes jusqu’à six passagers.'), price: '3 220', seats: '6' },
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Choose your ride', 'Choisissez votre course')} title={tr('A ride for every trip', 'Une course pour chaque trajet')} sub={tr('Pick the option that fits — the fare is always shown before you confirm.', 'Choisissez l’option qui vous convient — le prix est toujours affiché avant de confirmer.')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
          {data.map((t, i) => (
            <Reveal key={i} delay={i * 80} className="lift" style={{ background: '#fff', borderRadius: 20, padding: 28, border: '1px solid var(--border-1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SIcon name={t.icon} size={28} />
                </div>
                <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, color: 'var(--fg-3)', display: 'inline-flex', alignItems: 'center', gap: 5 }}><SIcon name="user" size={14} /> {t.seats}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: '0 0 8px' }}>{t.name}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 18px' }}>{t.desc}</p>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16, color: 'var(--tako-black)' }}>{tr('from', 'dès')} {t.price} <span style={{ fontSize: 12, color: 'var(--fg-3)' }}>FCFA</span></div>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 32 }}><a href="ride.html" className="link-amber" style={{ fontSize: 16 }}>{tr('Explore all ride options', 'Découvrir toutes les options')} <SIcon name="arrow-right" size={18} /></a></div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { icon: 'map-pin', t: tr('Set your destination', 'Indiquez votre destination'), d: tr('Open the app and tell us where you’re headed.', 'Ouvrez l’app et dites-nous où vous allez.') },
    { icon: 'navigation', t: tr('Match instantly', 'Trouvez un chauffeur'), d: tr('We find the nearest driver and show your fare up front.', 'Nous trouvons le chauffeur le plus proche et affichons votre prix à l’avance.') },
    { icon: 'flag', t: tr('Ride and arrive', 'Roulez et arrivez'), d: tr('Track your trip in real time and pay by cash or Mobile Money.', 'Suivez votre trajet en temps réel et payez en espèces ou par Mobile Money.') },
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('How it works', 'Comment ça marche')} title={tr('Three taps to your ride', 'Votre course en trois tapes')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }} className="grid-3">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: 'var(--tako-amber-deep)' }}>0{i + 1}</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border-1)' }} />
              <div style={{ width: 44, height: 44, borderRadius: 12, border: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={s.icon} size={22} /></div>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, margin: '0 0 8px' }}>{s.t}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{s.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SafetyTeaser() {
  const feats = [
    ['shield-check', tr('Verified drivers', 'Chauffeurs vérifiés'), tr('Every driver is identity-checked and vehicle-inspected before their first trip.', 'Chaque chauffeur passe un contrôle d’identité et une inspection du véhicule avant sa première course.')],
    ['share-2', tr('Share your trip', 'Partagez votre trajet'), tr('Send your live location and ETA to anyone, on every ride.', 'Envoyez votre position en direct et votre heure d’arrivée à vos proches, à chaque course.')],
    ['phone-call', tr('Help when you need it', 'De l’aide en cas de besoin'), tr('In-app emergency button connects you to local response, fast.', 'Le bouton d’urgence dans l’app vous met en relation avec les secours locaux, rapidement.')],
  ];
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }} className="hero-grid">
          <div>
            <SectionHead over={tr('Safety first', 'La sécurité d’abord')} dark title={tr('Built to look out for you', 'Conçu pour veiller sur vous')} sub={tr("Safety isn't a feature — it's the foundation. Tako is engineered around trust, on every road.", 'La sécurité n’est pas une option — c’est la base. Tako est pensé autour de la confiance, sur chaque route.')} />
            <SBtn variant="amber" icon="arrow-right" href="safety.html">{tr('See how we keep you safe', 'Découvrir notre sécurité')}</SBtn>
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            {feats.map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 70} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: 'var(--tako-charcoal)', borderRadius: 16, padding: '22px 24px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(247,149,29,0.14)', color: 'var(--tako-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={22} /></div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, margin: '0 0 4px' }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--gray-400)', lineHeight: 1.5, margin: 0 }}>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CitiesTeaser() {
  const cities = ['Douala', 'Yaoundé', 'Bamenda', 'Bafoussam', 'Buea', 'Limbe', 'Garoua', 'Maroua', 'Kribi', 'Ngaoundéré', 'Bertoua', 'Edéa'];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
        <SectionHead over={tr('Coverage', 'Couverture')} title={tr('Now moving across Cameroon', 'Désormais partout au Cameroun')} sub={tr('Twelve cities and growing.', 'Douze villes, et ça continue.')} style={{ marginBottom: 0 }} />
        <a href="cities.html" className="link-amber" style={{ fontSize: 16 }}>{tr('View all cities', 'Voir toutes les villes')} <SIcon name="arrow-right" size={18} /></a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }} className="grid-4">
        {cities.map((c, i) => (
          <a key={c} href="cities.html" className="lift" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 20px', border: '1px solid var(--border-1)', borderRadius: 14, textDecoration: 'none', color: 'var(--fg-1)' }}>
            <SIcon name="map-pin" size={18} color="var(--tako-amber-deep)" />
            <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 16 }}>{c}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function DriverCTA() {
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="hero-grid stack-pad">
        <div style={{ paddingTop: 88, paddingBottom: 88 }}>
          <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>{tr('Drive with Tako', 'Conduire avec Tako')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,3.6vw,46px)', letterSpacing: '-0.025em', lineHeight: 1.04, margin: '0 0 20px' }}>
            {tr('Your car.', 'Votre voiture.')}<br />{tr('Your hours.', 'Vos horaires.')}<br />{tr('Your money.', 'Votre argent.')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--fg-2)', lineHeight: 1.55, margin: '0 0 32px', maxWidth: 420 }}>
            {tr('Turn your vehicle into income. Drive when you want, get paid weekly, and keep more of every fare.', 'Transformez votre véhicule en revenus. Conduisez quand vous voulez, payé chaque semaine, et gardez plus sur chaque course.')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" href="drive.html">{tr('Start earning', 'Commencer à gagner')}</SBtn>
            <SBtn variant="outline" href="drive.html">{tr('See requirements', 'Voir les conditions')}</SBtn>
          </div>
        </div>
        {/* Branded drive panel. To feature a real driver photo instead, swap this
            for an <img> with object-fit: cover at the same border radius. */}
        <div style={{ position: 'relative', minHeight: 420, paddingTop: 40, paddingBottom: 40, display: 'flex' }}>
          <div style={{ position: 'relative', overflow: 'hidden', width: '100%', minHeight: 360, borderRadius: 20,
            background: 'var(--tako-black)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 30 }}>
            <AnimatedLanes style={{ opacity: 0.85 }} />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--tako-amber)', border: '1px solid rgba(247,149,29,0.4)', borderRadius: 999, padding: '6px 14px' }}>{tr('WEEKLY PAYOUTS', 'PAIEMENTS HEBDO')}</span>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <SIcon name="car-front" size={26} />
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--gray-400)' }}>{tr('Top drivers earn around', 'Les meilleurs chauffeurs gagnent environ')}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,4vw,46px)', color: '#fff', letterSpacing: '-0.02em', margin: '6px 0 4px', lineHeight: 1 }}>
                {fmt(72000)} <span style={{ fontSize: 18, color: 'var(--tako-amber)' }}>FCFA</span>
              </div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--gray-400)' }}>{tr('a week in Douala · about 28 hours driving', 'par semaine à Douala · environ 28 h de conduite')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: tr('Pickup was 2 minutes. The price I saw was the price I paid. This is how it should work.', 'La prise en charge a pris 2 minutes. Le prix affiché était le prix payé. C’est comme ça que ça doit marcher.'), n: 'Aminata D.', r: tr('Rider · Douala', 'Passagère · Douala') },
    { q: tr('I drive mornings before my shop opens. Tako pays out every week, no stories.', 'Je conduis le matin avant l’ouverture de ma boutique. Tako paie chaque semaine, sans histoires.'), n: 'Emmanuel T.', r: tr('Driver · Yaoundé', 'Chauffeur · Yaoundé') },
    { q: tr('Sharing my trip with my sister every night makes the late rides home feel safe.', 'Partager mon trajet avec ma sœur chaque soir rend les retours tardifs rassurants.'), n: 'Clarisse M.', r: tr('Rider · Buea', 'Passagère · Buea') },
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('From the road', 'Sur la route')} title={tr('People who move with Tako', 'Ils se déplacent avec Tako')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {items.map((t, i) => (
          <Reveal key={i} delay={i * 80} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <SIcon name="quote" size={26} color="var(--tako-amber)" />
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, lineHeight: 1.4, margin: 0, color: 'var(--tako-black)', letterSpacing: '-0.01em' }}>“{t.q}”</p>
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--tako-charcoal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>{t.n[0]}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15 }}>{t.n}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)' }}>{t.r}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Home() {
  useIcons();
  const [user, setUser] = React.useState(null);
  const [trip, setTrip] = React.useState(null);
  const [allTrips, setAllTrips] = React.useState(false);
  const [acctTab, setAcctTab] = React.useState(null); // 'wallet' | 'receipts' | 'account'
  React.useEffect(() => {
    try { const u = JSON.parse(localStorage.getItem('tako_user') || 'null'); if (u && u.first) setUser(u); } catch (e) {}
  }, []);
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="index.html" />
      {user && <AccountBar user={user} onOpen={(t) => setAcctTab(t === 'receipts' ? 'receipts' : t)} />}
      <Hero />
      {user && <AccountActivity user={user} onOpenTrip={setTrip} onAllTrips={() => setAllTrips(true)} />}
      <StatsBar />
      <Tiers />
      <Steps />
      <SafetyTeaser />
      <CitiesTeaser />
      <DriverCTA />
      <Testimonials />
      <AppsSection />
      <Footer />
      {trip && <TripDetail trip={trip} onClose={() => setTrip(null)} />}
      {allTrips && <AllTrips onClose={() => setAllTrips(false)} onPick={(t) => { setAllTrips(false); setTrip(t); }} />}
      {acctTab && <AccountModal tab={acctTab} setTab={setAcctTab} user={user} onClose={() => setAcctTab(null)} onPickTrip={(t) => { setAcctTab(null); setTrip(t); }} />}
    </div>
  );
}

// --- helpers ---
ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
