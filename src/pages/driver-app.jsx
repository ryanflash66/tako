/* Tako — Driver app page */
import { t as tr } from '../lib/i18n.js';

function PhoneMock() {
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: 280, height: 560, borderRadius: 40, background: 'var(--tako-black)', padding: 12, boxShadow: 'var(--shadow-xl)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 30, overflow: 'hidden', background: '#1c1d1a' }}>
          <AnimatedLanes style={{ opacity: 0.7 }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(247,149,29,0.16)', color: 'var(--tako-amber)', borderRadius: 999, padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700 }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--tako-amber)' }} className="pulse" /> {tr('ONLINE', 'EN LIGNE')}
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-400)' }}>{fmt(12400)} FCFA</span>
            </div>
            <div style={{ background: 'rgba(10,10,10,0.78)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 18, padding: 18, backdropFilter: 'blur(8px)' }}>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--gray-400)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tr('New trip · 4 min away', 'Nouvelle course · à 4 min')}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: '#fff', margin: '6px 0 2px' }}>Bonapriso → Akwa</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--tako-amber)' }}>2 400 FCFA · 6.2 km</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                <span style={{ flex: 1, background: 'var(--tako-amber)', color: 'var(--tako-black)', borderRadius: 10, padding: '10px 0', textAlign: 'center', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14 }}>{tr('Accept', 'Accepter')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{ ...WRAP, position: 'relative', display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: 56, alignItems: 'center', paddingTop: 80, paddingBottom: 80 }} className="hero-grid stack-pad">
        <div>
          <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Driver app', 'App chauffeur')}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
            {tr('Everything to drive, in one app.', 'Tout pour conduire, en une app.')}
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 460 }}>
            {tr('Turn-by-turn navigation, live earnings and support — the Tako Driver app puts every trip and every franc at your fingertips.', 'Navigation virage par virage, revenus en direct et assistance — l’app chauffeur Tako met chaque course et chaque franc à portée de main.')}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a className="store-btn" href="https://apps.apple.com/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}><AppleLogo size={24} /><div style={{ textAlign: 'left' }}><div style={{ fontSize: 11, color: 'var(--gray-400)' }}>{tr('Download on the', 'Télécharger sur l’')}</div><div style={{ fontSize: 17, fontWeight: 700, fontFamily: 'var(--font-display)' }}>App Store</div></div></a>
            <a className="store-btn" href="https://play.google.com/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}><SIcon name="play" size={24} /><div style={{ textAlign: 'left' }}><div style={{ fontSize: 11, color: 'var(--gray-400)' }}>{tr('Get it on', 'Disponible sur')}</div><div style={{ fontSize: 17, fontWeight: 700, fontFamily: 'var(--font-display)' }}>Google Play</div></div></a>
          </div>
        </div>
        <PhoneMock />
      </div>
    </section>
  );
}

function AppFeatures() {
  const feats = [
    ['navigation', tr('Built-in navigation', 'Navigation intégrée'), tr('Turn-by-turn directions and the smartest routes for Cameroonian roads — no second app needed.', 'Guidage virage par virage et les meilleurs itinéraires pour les routes camerounaises — sans seconde app.')],
    ['wallet', tr('Live earnings', 'Revenus en direct'), tr('Watch your balance grow trip by trip, with a clear weekly breakdown.', 'Voyez votre solde grandir course après course, avec un récapitulatif hebdomadaire clair.')],
    ['trending-up', tr('Demand map', 'Carte de la demande'), tr('Amber zones show where riders are waiting, so every online hour counts.', 'Les zones ambrées montrent où les passagers attendent, pour que chaque heure en ligne compte.')],
    ['headset', tr('Help, in-app', 'Aide, dans l’app'), tr('Reach a real Cameroon-based team 24/7, right from the screen you’re on.', 'Joignez une vraie équipe basée au Cameroun 24/7, directement depuis votre écran.')],
    ['star', tr('Ratings & feedback', 'Notes & retours'), tr('See your rating, recent compliments and tips to keep trips smooth.', 'Consultez votre note, les compliments récents et des conseils pour des courses fluides.')],
    ['shield-check', tr('Safety tools', 'Outils de sécurité'), tr('Share your trip, flag a concern, or hit the emergency button without leaving the road.', 'Partagez votre trajet, signalez un souci ou utilisez le bouton d’urgence sans quitter la route.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('What’s inside', 'Ce qu’elle contient')} title={tr('Tools that work as hard as you do', 'Des outils aussi investis que vous')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {feats.map(([ic, t2, d], i) => (
          <Reveal key={t2} delay={(i % 3) * 70} style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t2}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function DriverApp() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="drive.html" />
      <AppHero />
      <AppFeatures />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<DriverApp />);
