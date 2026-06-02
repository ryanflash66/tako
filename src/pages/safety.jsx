/* Tako — Safety page */
import { t as tr } from '../lib/i18n.js';

const SAFETY_PHASES = {
  Before: {
    icon: 'user-check',
    intro: tr('Trust starts before the trip does.', 'La confiance commence avant le trajet.'),
    items: [
      ['id-card', tr('Verified drivers', 'Chauffeurs vérifiés'), tr('Every driver passes identity checks, document review and a vehicle inspection before they can accept a single ride.', 'Chaque chauffeur passe un contrôle d’identité, une vérification des documents et une inspection du véhicule avant d’accepter la moindre course.')],
      ['car-front', tr('Know your car', 'Reconnaissez votre voiture'), tr('See the driver’s name, photo, rating and plate number before you get in — match it every time.', 'Voyez le nom, la photo, la note et la plaque du chauffeur avant de monter — vérifiez à chaque fois.')],
      ['badge-cent', tr('Upfront fares', 'Prix à l’avance'), tr('The price is locked before you book, so there’s never pressure or confusion at the kerb.', 'Le prix est fixé avant la réservation : ni pression ni confusion au moment de monter.')],
    ],
  },
  During: {
    icon: 'route',
    intro: tr('Eyes on every trip, the whole way.', 'Un œil sur chaque trajet, du début à la fin.'),
    items: [
      ['share-2', tr('Share your trip', 'Partagez votre trajet'), tr('Send your live route and ETA to family or friends with two taps — they can follow until you arrive.', 'Envoyez votre itinéraire en direct et votre heure d’arrivée à vos proches en deux tapes — ils vous suivent jusqu’à l’arrivée.')],
      ['siren', tr('Emergency button', 'Bouton d’urgence'), tr('One tap connects you to local emergency response and shares your exact location and trip details.', 'Une tape vous met en relation avec les secours locaux et partage votre position exacte et les détails du trajet.')],
      ['map-pinned', tr('Route monitoring', 'Surveillance de l’itinéraire'), tr('Tako watches for long stops and off-route detours and checks in if something looks off.', 'Tako détecte les arrêts prolongés et les détours et vous contacte si quelque chose semble anormal.')],
    ],
  },
  After: {
    icon: 'star',
    intro: tr('We follow up so the next ride is better.', 'Nous assurons le suivi pour que la prochaine course soit meilleure.'),
    items: [
      ['star', tr('Two-way ratings', 'Évaluations mutuelles'), tr('Riders and drivers rate each trip. Low ratings trigger review — repeat issues mean removal.', 'Passagers et chauffeurs notent chaque trajet. Les mauvaises notes déclenchent un examen — les problèmes récurrents mènent à l’exclusion.')],
      ['flag', tr('Report anything', 'Signalez tout'), tr('Flag a concern from your trip history any time. Our safety team investigates every report.', 'Signalez un problème depuis votre historique à tout moment. Notre équipe sécurité enquête sur chaque signalement.')],
      ['search', tr('Lost & found', 'Objets trouvés'), tr('Left something behind? Reconnect with your driver and recover it through the app.', 'Vous avez oublié quelque chose ? Reprenez contact avec votre chauffeur et récupérez-le via l’app.')],
    ],
  },
};

function SafetyHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88, maxWidth: 900 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Safety', 'Sécurité')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Built to look out for you.', 'Conçu pour veiller sur vous.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 600 }}>
          {tr('Safety isn’t a feature we added — it’s the foundation Tako is built on. Here’s how we look out for you before, during and after every ride.', 'La sécurité n’est pas une option que nous avons ajoutée — c’est la base de Tako. Voici comment nous veillons sur vous avant, pendant et après chaque course.')}
        </p>
      </div>
    </section>
  );
}

function PhaseTabs() {
  const keys = Object.keys(SAFETY_PHASES);
  const [tab, setTab] = React.useState('Before');
  const phase = SAFETY_PHASES[tab];
  return (
    <section style={{ ...WRAP, paddingTop: 80, paddingBottom: 96 }} className="stack-pad">
      <div style={{ display: 'inline-flex', gap: 6, background: 'var(--bg-3)', borderRadius: 999, padding: 6, marginBottom: 44 }}>
        {keys.map(k => (
          <button key={k} onClick={() => setTab(k)} style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, padding: '10px 22px', borderRadius: 999, cursor: 'pointer', border: 'none',
            background: tab === k ? 'var(--tako-black)' : 'transparent', color: tab === k ? '#fff' : 'var(--fg-2)', transition: 'all .15s' }}>{k === 'Before' ? tr('Before the ride', 'Avant la course') : k === 'During' ? tr('During the ride', 'Pendant la course') : tr('After the ride', 'Après la course')}</button>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
        <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={phase.icon} size={26} /></div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px,2.6vw,32px)', letterSpacing: '-0.02em', margin: 0 }}>{phase.intro}</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3" key={tab}>
        {phase.items.map(([ic, t, d], i) => (
          <div key={t} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28, animation: `float-up .4s cubic-bezier(.2,0,0,1) ${i * 0.07}s both` }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Commitments() {
  const stats = [
    ['100%', tr('of drivers identity-verified', 'des chauffeurs vérifiés')],
    ['24/7', tr('in-app safety support', 'assistance sécurité dans l’app')],
    ['< 30s', tr('avg emergency connect time', 'connexion d’urgence moy.')],
    [tr('Every trip', 'Chaque trajet'), tr('GPS-tracked end to end', 'suivi GPS de bout en bout')],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 80, paddingBottom: 80, borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="grid-4 stack-pad">
        {stats.map(([n, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: 'var(--tako-amber-deep)' }}>{n}</div>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', fontWeight: 600, marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Standards() {
  const items = [
    ['shield', tr('Community guidelines', 'Règles de la communauté'), tr('Clear standards of respect for riders and drivers — and real consequences when they’re broken.', 'Des standards de respect clairs pour passagers et chauffeurs — et de vraies conséquences en cas de manquement.')],
    ['eye-off', tr('Your data, protected', 'Vos données, protégées'), tr('Phone numbers are masked in-app and your trip data is never sold. Privacy by default.', 'Les numéros sont masqués dans l’app et vos données de trajet ne sont jamais vendues. Confidentialité par défaut.')],
    ['handshake', tr('Insurance on every trip', 'Assurance sur chaque trajet'), tr('Every Tako ride is covered, so riders and drivers are protected if the unexpected happens.', 'Chaque course Tako est couverte : passagers et chauffeurs sont protégés en cas d’imprévu.')],
    ['graduation-cap', tr('Driver education', 'Formation des chauffeurs'), tr('Ongoing safety training and road-conduct standards keep our community sharp.', 'Des formations à la sécurité continues et des règles de conduite maintiennent notre communauté au niveau.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Our commitments', 'Nos engagements')} title={tr('Standards we hold, every day', 'Des standards que nous tenons, chaque jour')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {items.map(([ic, t, d], i) => (
          <Reveal key={t} delay={(i % 2) * 70} style={{ display: 'flex', gap: 20, border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={26} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 6px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function EmergencyBand() {
  return (
    <section style={{ ...WRAP, paddingTop: 16, paddingBottom: 96 }} className="stack-pad">
      <div style={{ background: 'var(--tako-amber-soft)', border: '1px solid var(--tako-amber)', borderRadius: 24, padding: '40px 44px', display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
        <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="siren" size={30} /></div>
        <div style={{ flex: 1, minWidth: 260 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', margin: '0 0 6px' }}>{tr('In an emergency, help is one tap away', 'En cas d’urgence, l’aide est à une tape')}</h3>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--gray-700)', margin: 0 }}>{tr('Use the in-app emergency button during any ride to reach local response and share your live location instantly.', 'Utilisez le bouton d’urgence dans l’app pendant une course pour joindre les secours locaux et partager votre position en direct instantanément.')}</p>
        </div>
        <SBtn variant="primary" href="help.html">{tr('Visit the Help Centre', 'Aller au centre d’aide')}</SBtn>
      </div>
    </section>
  );
}

function Safety() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="safety.html" />
      <SafetyHero />
      <PhaseTabs />
      <Commitments />
      <Standards />
      <EmergencyBand />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Safety />);
