/* Tako — per-city template (city.html?name=Douala) */
import { t as tr } from '../lib/i18n.js';

const CITIES = [
  { name: 'Douala', region: 'Littoral', status: 'live', drivers: '3,200+', since: '2023', routes: ['Akwa ↔ Bonabéri', 'Airport ↔ Bonapriso', 'Deido ↔ Akwa'] },
  { name: 'Yaoundé', region: 'Centre', status: 'live', drivers: '2,600+', since: '2023', routes: ['Bastos ↔ Centre-ville', 'Nsam ↔ Mvan', 'Airport ↔ Bastos'] },
  { name: 'Bafoussam', region: 'Ouest', status: 'live', drivers: '720+', since: '2024', routes: ['Marché A ↔ Tamdja', 'Kamkop ↔ Centre'] },
  { name: 'Bamenda', region: 'Nord-Ouest', status: 'live', drivers: '680+', since: '2024', routes: ['Commercial Ave ↔ Up Station', 'Nkwen ↔ Mile 4'] },
  { name: 'Buea', region: 'Sud-Ouest', status: 'live', drivers: '540+', since: '2024', routes: ['Molyko ↔ Town', 'Mile 17 ↔ Bonduma'] },
  { name: 'Limbe', region: 'Sud-Ouest', status: 'live', drivers: '410+', since: '2024', routes: ['Down Beach ↔ Mile 4', 'Bota ↔ Town'] },
  { name: 'Kribi', region: 'Sud', status: 'live', drivers: '230+', since: '2025', routes: ['Beach ↔ Centre', 'Port ↔ Town'] },
  { name: 'Edéa', region: 'Littoral', status: 'live', drivers: '190+', since: '2025', routes: ['Centre ↔ Gare', 'Pongo ↔ Marché'] },
  { name: 'Garoua', region: 'Nord', status: 'live', drivers: '300+', since: '2025', routes: ['Marché Central ↔ Roumdé', 'Airport ↔ Centre'] },
  { name: 'Maroua', region: 'Extrême-Nord', status: 'live', drivers: '240+', since: '2025', routes: ['Domayo ↔ Centre', 'Marché ↔ Hardé'] },
  { name: 'Ngaoundéré', region: 'Adamaoua', status: 'live', drivers: '210+', since: '2025', routes: ['Gare ↔ Centre', 'Dang ↔ Ville'] },
  { name: 'Bertoua', region: 'Est', status: 'soon', drivers: '—', since: 'Q3 2026', routes: ['Launching soon'] },
];

function getCity() {
  let city = CITIES[0];
  try { const n = new URLSearchParams(window.location.search).get('name'); const m = CITIES.find(c => c.name === n); if (m) city = m; } catch (e) {}
  return city;
}

function CityPage() {
  useIcons();
  const city = getCity();
  const live = city.status === 'live';
  const others = CITIES.filter(c => c.name !== city.name).slice(0, 6);
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="cities.html" />
      <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <AnimatedLanes style={{ opacity: 0.45 }} />
        <div style={{ ...WRAP, position: 'relative', paddingTop: 72, paddingBottom: 72 }} className="stack-pad">
          <a href="cities.html" className="link-amber" style={{ fontSize: 15, marginBottom: 20, display: 'inline-flex', color: 'var(--tako-amber)' }}><SIcon name="arrow-left" size={17} /> {tr('All cities', 'Toutes les villes')}</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 12, flexWrap: 'wrap' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(44px,6vw,72px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>{tr('Tako in', 'Tako à')} {city.name}</h1>
            <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '6px 12px', borderRadius: 999, whiteSpace: 'nowrap',
              background: live ? 'var(--success-bg)' : 'var(--warning-bg)', color: live ? 'var(--success)' : 'var(--tako-amber-deep)' }}>{live ? tr('● Live', '● En service') : tr('Coming soon', 'Bientôt')}</span>
          </div>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, color: 'var(--gray-300)', margin: '18px 0 28px' }}>{tr('Region', 'Région')} {city.region} · {live ? `${tr('serving since', 'actif depuis')} ${city.since}` : `${tr('launching', 'lancement')} ${city.since}`}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" href={live ? 'auth.html' : 'reserve.html'}>{live ? `${tr('Request a ride in', 'Réserver une course à')} ${city.name}` : tr('Get notified', 'Être prévenu')}</SBtn>
            <SBtn variant="outlineLight" href="reserve.html">{tr('Reserve in advance', 'Réserver à l’avance')}</SBtn>
          </div>
        </div>
      </section>
      <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 64 }} className="stack-pad">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 48 }} className="grid-3">
          {[[city.drivers, tr('drivers nearby', 'chauffeurs à proximité')], [city.since, live ? tr('serving since', 'actif depuis') : tr('launching', 'lancement')], [String(city.routes.length), tr('popular routes', 'trajets populaires')]].map(([n, l]) => (
            <div key={l} style={{ background: 'var(--bg-2)', border: '1px solid var(--border-1)', borderRadius: 18, padding: '24px 26px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30 }}>{n}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', fontWeight: 600 }}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--fg-3)', marginBottom: 14 }}>{tr('Popular routes', 'Trajets populaires')}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {city.routes.map(r => <span key={r} style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 14, background: 'var(--bg-3)', borderRadius: 999, padding: '9px 16px' }}>{r}</span>)}
        </div>
      </section>
      <section style={{ background: 'var(--bg-2)', paddingTop: 64, paddingBottom: 96 }}>
        <div style={WRAP} className="stack-pad">
          <SectionHead over={tr('Coverage', 'Couverture')} title={tr('Other Tako cities', 'Autres villes Tako')} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }} className="grid-3">
            {others.map(c => (
              <a key={c.name} href={`city.html?name=${encodeURIComponent(c.name)}`} className="lift" style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '18px 20px', textDecoration: 'none', color: 'var(--fg-1)' }}>
                <SIcon name="map-pin" size={18} color={c.status === 'live' ? 'var(--tako-amber-deep)' : 'var(--gray-400)'} />
                <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{c.name}</span>
                <SIcon name="arrow-right" size={16} color="var(--gray-400)" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CityPage />);
