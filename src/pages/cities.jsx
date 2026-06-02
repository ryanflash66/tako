/* Tako — Cities page */
import { t as tr } from '../lib/i18n.js';

const CITIES = [
  { name: 'Douala', region: 'Littoral', status: 'live', drivers: '3,200+', since: '2023', routes: ['Akwa ↔ Bonabéri', 'Airport ↔ Bonapriso', 'Deido ↔ Akwa'], lat: 4.051, lng: 9.768 },
  { name: 'Yaoundé', region: 'Centre', status: 'live', drivers: '2,600+', since: '2023', routes: ['Bastos ↔ Centre-ville', 'Nsam ↔ Mvan', 'Airport ↔ Bastos'], lat: 3.866, lng: 11.516 },
  { name: 'Bafoussam', region: 'Ouest', status: 'live', drivers: '720+', since: '2024', routes: ['Marché A ↔ Tamdja', 'Kamkop ↔ Centre'], lat: 5.478, lng: 10.418 },
  { name: 'Bamenda', region: 'Nord-Ouest', status: 'live', drivers: '680+', since: '2024', routes: ['Commercial Ave ↔ Up Station', 'Nkwen ↔ Mile 4'], lat: 5.963, lng: 10.159 },
  { name: 'Buea', region: 'Sud-Ouest', status: 'live', drivers: '540+', since: '2024', routes: ['Molyko ↔ Town', 'Mile 17 ↔ Bonduma'], lat: 4.155, lng: 9.241 },
  { name: 'Limbe', region: 'Sud-Ouest', status: 'live', drivers: '410+', since: '2024', routes: ['Down Beach ↔ Mile 4', 'Bota ↔ Town'], lat: 4.017, lng: 9.215 },
  { name: 'Kribi', region: 'Sud', status: 'live', drivers: '230+', since: '2025', routes: ['Beach ↔ Centre', 'Port ↔ Town'], lat: 2.937, lng: 9.910 },
  { name: 'Edéa', region: 'Littoral', status: 'live', drivers: '190+', since: '2025', routes: ['Centre ↔ Gare', 'Pongo ↔ Marché'], lat: 3.800, lng: 10.134 },
  { name: 'Garoua', region: 'Nord', status: 'live', drivers: '300+', since: '2025', routes: ['Marché Central ↔ Roumdé', 'Airport ↔ Centre'], lat: 9.301, lng: 13.398 },
  { name: 'Maroua', region: 'Extrême-Nord', status: 'live', drivers: '240+', since: '2025', routes: ['Domayo ↔ Centre', 'Marché ↔ Hardé'], lat: 10.591, lng: 14.316 },
  { name: 'Ngaoundéré', region: 'Adamaoua', status: 'live', drivers: '210+', since: '2025', routes: ['Gare ↔ Centre', 'Dang ↔ Ville'], lat: 7.327, lng: 13.584 },
  { name: 'Bertoua', region: 'Est', status: 'soon', drivers: '—', since: 'Q3 2026', routes: ['Launching soon'], lat: 4.577, lng: 13.685 },
];

// Pin markup for a city on the Leaflet map (amber dot = live, dashed = soon;
// selected city gets a pulsing ring + a name label).
function cityPinHTML(c, sel) {
  const live = c.status === 'live';
  const size = sel ? 18 : 12;
  const dot = live
    ? `width:${size}px;height:${size}px;border-radius:999px;background:var(--tako-amber);border:2px solid #fff;box-shadow:${sel ? '0 0 0 6px rgba(247,149,29,.25)' : '0 1px 3px rgba(0,0,0,.55)'};`
    : `width:${size}px;height:${size}px;border-radius:999px;background:transparent;border:2px dashed var(--gray-500);`;
  const ring = sel && live ? '<span class="cm-ring"></span>' : '';
  const label = sel ? `<span class="cm-label">${c.name}</span>` : '';
  return `<div class="cm-pin">${ring}<span class="cm-dot" style="${dot}"></span>${label}</div>`;
}

// A real dark map of Cameroon (Leaflet + CARTO tiles) with the live-city pins.
function MapPanel({ active, onPick }) {
  const ref = React.useRef(null);
  const markers = React.useRef({});
  const pick = React.useRef(onPick);
  pick.current = onPick;

  React.useEffect(() => {
    if (!window.L || !ref.current) return;
    const map = L.map(ref.current, {
      zoomControl: false, attributionControl: true, dragging: false, scrollWheelZoom: false,
      doubleClickZoom: false, boxZoom: false, keyboard: false, touchZoom: false,
      tap: false, fadeAnimation: false, inertia: false,
    });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd', maxZoom: 20, detectRetina: true,
      attribution: '&copy; OpenStreetMap &copy; CARTO',
    }).addTo(map);
    // Frame the whole country (SW + NE corners of Cameroon).
    map.fitBounds([[1.55, 8.30], [13.20, 16.30]], { padding: [24, 24] });

    CITIES.forEach(c => {
      const mk = L.marker([c.lat, c.lng], {
        icon: L.divIcon({ className: 'cities-pin', iconSize: [22, 22], iconAnchor: [11, 11], html: cityPinHTML(c, false) }),
        keyboard: false, title: c.name, riseOnHover: true,
      }).addTo(map);
      mk.on('click', () => pick.current && pick.current(c.name));
      markers.current[c.name] = { mk, c };
    });

    const fix = () => map.invalidateSize({ animate: false });
    setTimeout(fix, 60); setTimeout(fix, 400);
    window.addEventListener('resize', fix);
    return () => { window.removeEventListener('resize', fix); map.remove(); markers.current = {}; };
  }, []);

  // Re-skin pins whenever the selected city changes.
  React.useEffect(() => {
    Object.values(markers.current).forEach(({ mk, c }) => {
      const sel = active === c.name;
      mk.setIcon(L.divIcon({ className: 'cities-pin', iconSize: [22, 22], iconAnchor: [11, 11], html: cityPinHTML(c, sel) }));
      mk.setZIndexOffset(sel ? 1000 : 0);
    });
  }, [active]);

  return (
    <div style={{ position: 'relative', height: '100%', minHeight: 440, background: 'var(--tako-charcoal)', borderRadius: 24, overflow: 'hidden' }}>
      <div ref={ref} className="cities-leaflet" style={{ position: 'absolute', inset: 0, background: 'var(--tako-charcoal)' }} />
      <div style={{ position: 'absolute', bottom: 16, left: 16, zIndex: 1000, pointerEvents: 'none', display: 'flex', gap: 16, fontFamily: 'var(--font-text)', fontSize: 12, fontWeight: 600, color: 'var(--gray-300)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--tako-amber)', border: '1.5px solid #fff' }} /> {tr('Live', 'En service')}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ width: 10, height: 10, borderRadius: 999, border: '1.5px dashed var(--gray-500)' }} /> {tr('Coming soon', 'Bientôt')}</span>
      </div>
    </div>
  );
}

function CityExplorer() {
  const [active, setActive] = React.useState('Douala');
  const city = CITIES.find(c => c.name === active);
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 96 }} className="stack-pad">
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 28, alignItems: 'stretch' }} className="hero-grid">
        <MapPanel active={active} onPick={setActive} />
        <div style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 24, padding: 32, boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.02em', margin: 0 }}>{city.name}</h3>
            <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '6px 12px', borderRadius: 999, whiteSpace: 'nowrap', flexShrink: 0,
              background: city.status === 'live' ? 'var(--success-bg)' : 'var(--warning-bg)', color: city.status === 'live' ? 'var(--success)' : 'var(--tako-amber-deep)' }}>
              {city.status === 'live' ? tr('● Live', '● En service') : tr('Coming soon', 'Bientôt')}
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-3)', fontWeight: 600, marginBottom: 24 }}>{tr('Region', 'Région')} {city.region}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div style={{ background: 'var(--bg-2)', borderRadius: 14, padding: '16px 18px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24 }}>{city.drivers}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-2)', fontWeight: 600 }}>{tr('drivers nearby', 'chauffeurs à proximité')}</div>
            </div>
            <div style={{ background: 'var(--bg-2)', borderRadius: 14, padding: '16px 18px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24 }}>{city.since}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-2)', fontWeight: 600 }}>{city.status === 'live' ? tr('serving since', 'actif depuis') : tr('launching', 'lancement') }</div>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--fg-3)', marginBottom: 12 }}>{tr('Popular routes', 'Trajets populaires')}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {city.routes.map(r => <span key={r} style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 13, background: 'var(--bg-3)', borderRadius: 999, padding: '7px 14px' }}>{r}</span>)}
          </div>
          <SBtn variant={city.status === 'live' ? 'primary' : 'outline'} icon="arrow-right" style={{ width: '100%' }}
            href={city.status === 'live' ? 'auth.html' : '#request-city'}>
            {city.status === 'live' ? `${tr('Request a ride in', 'Réserver une course à')} ${city.name}` : `${tr('Notify me when', 'Me prévenir au lancement à')} ${city.name}${tr(' is live', '')}`}
          </SBtn>
        </div>
      </div>
    </section>
  );
}

function CitiesHero() {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 72, paddingBottom: 56 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>{tr('Coverage', 'Couverture')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0, maxWidth: 760 }}>
          {tr('Now moving across Cameroon.', 'Désormais partout au Cameroun.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '20px 0 0', maxWidth: 560 }}>
          {tr('Eleven cities live and growing — from the coast at Limbe to Maroua in the far north. Tap a pin to explore.', 'Onze villes en service, et ça continue — de la côte à Limbe à Maroua dans l’extrême nord. Touchez un point pour explorer.')}
        </p>
      </div>
    </section>
  );
}

function AllCities() {
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Every city', 'Chaque ville')} title={tr('The full Tako map', 'La carte complète de Tako')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }} className="grid-4">
          {CITIES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 50}>
              <a href={`city.html?name=${encodeURIComponent(c.name)}`} className="lift" style={{ display: 'block', background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 22px', textDecoration: 'none', color: 'var(--fg-1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <SIcon name="map-pin" size={18} color={c.status === 'live' ? 'var(--tako-amber-deep)' : 'var(--gray-400)'} />
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: c.status === 'live' ? 'var(--success)' : 'var(--warning)' }} />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{c.name}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)', fontWeight: 600 }}>{c.region}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequestCity() {
  const [city, setCity] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); if (city.trim()) setSent(true); };
  return (
    <section id="request-city" style={{ ...WRAP, paddingTop: 16, paddingBottom: 96 }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', borderRadius: 28, padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <LaneMotif style={{ opacity: 0.4 }} />
        <div style={{ position: 'relative', maxWidth: 480 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 12px' }}>{tr('Don’t see your city?', 'Votre ville n’y est pas ?')}</h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: 0 }}>{tr('Tell us where you want Tako next. Demand decides where we go.', 'Dites-nous où vous voulez Tako ensuite. La demande décide de nos prochaines villes.')}</p>
        </div>
        {sent ? (
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 14, background: 'var(--success-bg)', color: 'var(--success)', borderRadius: 14, padding: '18px 22px', maxWidth: 360 }}>
            <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--success)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="check" size={24} /></div>
            <p style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15, lineHeight: 1.45, margin: 0 }}>{tr('Thanks — we’ll let you know when Tako reaches', 'Merci — nous vous préviendrons dès que Tako arrive à')} {city.trim()}.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ position: 'relative', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input className="t-input" placeholder={tr('Your city', 'Votre ville')} value={city} onChange={e => setCity(e.target.value)} style={{ width: 200, background: '#fff' }} />
            <SBtn variant="amber" icon="arrow-right">{tr('Request Tako', 'Demander Tako')}</SBtn>
          </form>
        )}
      </div>
    </section>
  );
}

function Cities() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="cities.html" />
      <CitiesHero />
      <CityExplorer />
      <AllCities />
      <RequestCity />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Cities />);
