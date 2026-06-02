/* Tako — Airport rides page */
import { t as tr } from '../lib/i18n.js';

const AIRPORTS = [
  ['Douala International', 'DLA', 'Douala'],
  ['Yaoundé Nsimalen', 'NSI', 'Yaoundé'],
  ['Garoua International', 'GOU', 'Garoua'],
  ['Maroua Salak', 'MVR', 'Maroua'],
  ['Ngaoundéré', 'NGE', 'Ngaoundéré'],
  ['Bafoussam Bamougoum', 'BFX', 'Bafoussam'],
];

function AirportHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80, maxWidth: 760 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Airport rides', 'Trajets aéroport')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Land, walk out, ride.', 'Atterrissez, sortez, roulez.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 560 }}>
          {tr('Reliable pickups and drop-offs at airports across Cameroon — with flight tracking, clear pickup zones and a price locked in before you fly.', 'Des prises en charge fiables dans les aéroports du Cameroun — avec suivi des vols, zones de prise en charge claires et un prix garanti avant le départ.')}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <SBtn variant="amber" icon="arrow-right" href="reserve.html">{tr('Reserve an airport ride', 'Réserver un trajet aéroport')}</SBtn>
          <SBtn variant="outlineLight" href="ride.html">{tr('See ride options', 'Voir les options')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function AirportHow() {
  const steps = [
    { icon: 'plane', t: tr('Add your flight', 'Ajoutez votre vol'), d: tr('Enter your flight number when you reserve — we track it automatically.', 'Saisissez votre numéro de vol à la réservation — nous le suivons automatiquement.') },
    { icon: 'clock', t: tr('We adjust to your landing', 'On s’adapte à l’atterrissage'), d: tr('Early or delayed, your driver is timed to when you actually arrive.', 'En avance ou en retard, votre chauffeur est calé sur votre arrivée réelle.') },
    { icon: 'map-pinned', t: tr('Meet at the pickup zone', 'Rendez-vous à la zone de prise en charge'), d: tr('Clear directions guide you to the designated Tako pickup point.', 'Des indications claires vous mènent au point de prise en charge Tako.') },
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64 }} className="stack-pad">
      <SectionHead over={tr('How it works', 'Comment ça marche')} title={tr('No guessing at arrivals', 'Plus d’incertitude à l’arrivée')} />
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

function Airports() {
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 64, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Where we fly', 'Où nous opérons')} title={tr('Airports we serve', 'Les aéroports desservis')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }} className="grid-3">
          {AIRPORTS.map(([name, code, city], i) => (
            <Reveal key={code} delay={(i % 3) * 50} className="lift" style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '18px 20px' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{code}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{name}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)', fontWeight: 600 }}>{city}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Airport() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="ride.html" />
      <AirportHero />
      <AirportHow />
      <Airports />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Airport />);
