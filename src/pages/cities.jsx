/* Tako — Cities page */

const CITIES = [
  { name: 'Douala', region: 'Littoral', status: 'live', drivers: '3,200+', since: '2023', routes: ['Akwa ↔ Bonabéri', 'Airport ↔ Bonapriso', 'Deido ↔ Akwa'], x: 18, y: 64 },
  { name: 'Yaoundé', region: 'Centre', status: 'live', drivers: '2,600+', since: '2023', routes: ['Bastos ↔ Centre-ville', 'Nsam ↔ Mvan', 'Airport ↔ Bastos'], x: 42, y: 58 },
  { name: 'Bafoussam', region: 'Ouest', status: 'live', drivers: '720+', since: '2024', routes: ['Marché A ↔ Tamdja', 'Kamkop ↔ Centre'], x: 33, y: 49 },
  { name: 'Bamenda', region: 'Nord-Ouest', status: 'live', drivers: '680+', since: '2024', routes: ['Commercial Ave ↔ Up Station', 'Nkwen ↔ Mile 4'], x: 28, y: 42 },
  { name: 'Buea', region: 'Sud-Ouest', status: 'live', drivers: '540+', since: '2024', routes: ['Molyko ↔ Town', 'Mile 17 ↔ Bonduma'], x: 13, y: 58 },
  { name: 'Limbe', region: 'Sud-Ouest', status: 'live', drivers: '410+', since: '2024', routes: ['Down Beach ↔ Mile 4', 'Bota ↔ Town'], x: 11, y: 63 },
  { name: 'Kribi', region: 'Sud', status: 'live', drivers: '230+', since: '2025', routes: ['Beach ↔ Centre', 'Port ↔ Town'], x: 26, y: 74 },
  { name: 'Edéa', region: 'Littoral', status: 'live', drivers: '190+', since: '2025', routes: ['Centre ↔ Gare', 'Pongo ↔ Marché'], x: 24, y: 65 },
  { name: 'Garoua', region: 'Nord', status: 'live', drivers: '300+', since: '2025', routes: ['Marché Central ↔ Roumdé', 'Airport ↔ Centre'], x: 60, y: 22 },
  { name: 'Maroua', region: 'Extrême-Nord', status: 'live', drivers: '240+', since: '2025', routes: ['Domayo ↔ Centre', 'Marché ↔ Hardé'], x: 72, y: 10 },
  { name: 'Ngaoundéré', region: 'Adamaoua', status: 'live', drivers: '210+', since: '2025', routes: ['Gare ↔ Centre', 'Dang ↔ Ville'], x: 56, y: 34 },
  { name: 'Bertoua', region: 'Est', status: 'soon', drivers: '—', since: 'Q3 2026', routes: ['Launching soon'], x: 58, y: 56 },
];

function MapPanel({ active, onPick }) {
  return (
    <div style={{ position: 'relative', height: '100%', minHeight: 420, background: 'var(--tako-charcoal)', borderRadius: 24, overflow: 'hidden' }}>
      <svg viewBox="0 0 100 90" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="0.4">
          {CITIES.filter(c => c.status === 'live').map((c, i) => {
            const n = CITIES[(i + 1) % CITIES.length];
            return <line key={c.name} x1={c.x} y1={c.y} x2={n.x} y2={n.y} />;
          })}
        </g>
      </svg>
      {CITIES.map(c => {
        const isLive = c.status === 'live';
        const sel = active === c.name;
        return (
          <button key={c.name} onClick={() => onPick(c.name)} title={c.name}
            style={{ position: 'absolute', left: `${c.x}%`, top: `${c.y}%`, transform: 'translate(-50%,-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, zIndex: sel ? 5 : 2 }}>
            <span className={sel ? 'pulse' : ''} style={{ display: 'block', width: sel ? 18 : 12, height: sel ? 18 : 12, borderRadius: 999,
              background: isLive ? 'var(--tako-amber)' : 'transparent', border: isLive ? '2px solid #fff' : '2px dashed var(--gray-500)',
              boxShadow: sel ? '0 0 0 6px rgba(247,149,29,0.25)' : 'none', transition: 'all .15s' }} />
            {sel && <span style={{ position: 'absolute', left: '50%', top: -26, transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, color: '#fff', background: 'rgba(10,10,10,0.7)', padding: '3px 8px', borderRadius: 6 }}>{c.name}</span>}
          </button>
        );
      })}
      <div style={{ position: 'absolute', bottom: 16, left: 16, display: 'flex', gap: 16, fontFamily: 'var(--font-text)', fontSize: 12, fontWeight: 600, color: 'var(--gray-300)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--tako-amber)', border: '1.5px solid #fff' }} /> Live</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}><span style={{ width: 10, height: 10, borderRadius: 999, border: '1.5px dashed var(--gray-500)' }} /> Coming soon</span>
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
              {city.status === 'live' ? '● Live' : 'Coming soon'}
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-3)', fontWeight: 600, marginBottom: 24 }}>{city.region} Region</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div style={{ background: 'var(--bg-2)', borderRadius: 14, padding: '16px 18px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24 }}>{city.drivers}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-2)', fontWeight: 600 }}>drivers nearby</div>
            </div>
            <div style={{ background: 'var(--bg-2)', borderRadius: 14, padding: '16px 18px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24 }}>{city.since}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-2)', fontWeight: 600 }}>{city.status === 'live' ? 'serving since' : 'launching' }</div>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--fg-3)', marginBottom: 12 }}>Popular routes</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {city.routes.map(r => <span key={r} style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 13, background: 'var(--bg-3)', borderRadius: 999, padding: '7px 14px' }}>{r}</span>)}
          </div>
          <SBtn variant={city.status === 'live' ? 'primary' : 'outline'} icon="arrow-right" style={{ width: '100%' }}>
            {city.status === 'live' ? `Request a ride in ${city.name}` : `Notify me when ${city.name} is live`}
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
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>Coverage</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0, maxWidth: 760 }}>
          Now moving across Cameroon.
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '20px 0 0', maxWidth: 560 }}>
          Eleven cities live and growing — from the coast at Limbe to Maroua in the far north. Tap a pin to explore.
        </p>
      </div>
    </section>
  );
}

function AllCities() {
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over="Every city" title="The full Tako map" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }} className="grid-4">
          {CITIES.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 50} className="lift" style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                <SIcon name="map-pin" size={18} color={c.status === 'live' ? 'var(--tako-amber-deep)' : 'var(--gray-400)'} />
                <span style={{ width: 8, height: 8, borderRadius: 999, background: c.status === 'live' ? 'var(--success)' : 'var(--warning)' }} />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{c.name}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)', fontWeight: 600 }}>{c.region}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequestCity() {
  return (
    <section style={{ ...WRAP, paddingTop: 16, paddingBottom: 96 }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', borderRadius: 28, padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <LaneMotif style={{ opacity: 0.4 }} />
        <div style={{ position: 'relative', maxWidth: 480 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 12px' }}>Don’t see your city?</h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: 0 }}>Tell us where you want Tako next. Demand decides where we go.</p>
        </div>
        <div style={{ position: 'relative', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <input className="t-input" placeholder="Your city" style={{ width: 200, background: '#fff' }} />
          <SBtn variant="amber" icon="arrow-right">Request Tako</SBtn>
        </div>
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
