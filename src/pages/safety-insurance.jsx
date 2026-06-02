/* Tako — Insurance & Protection (Uber/Lyft-informed coverage page) */
import { t as tr } from '../lib/i18n.js';

const RIDER_COVER = [
  ['shield-check', tr('Injury protection', 'Protection en cas de blessure'),
    tr('If you’re hurt in an accident during your trip, your medical costs are covered up to the policy limit — no paperwork at the roadside.',
       'Si vous êtes blessé dans un accident pendant votre trajet, vos frais médicaux sont pris en charge jusqu’au plafond de la police — sans paperasse au bord de la route.')],
  ['users-round', tr('Third-party liability', 'Responsabilité civile'),
    tr('Cover for injury or damage to other people and their property while you’re a passenger on a Tako trip.',
       'Couverture des blessures ou dommages causés à des tiers et à leurs biens pendant que vous êtes passager d’un trajet Tako.')],
  ['package', tr('Personal belongings', 'Effets personnels'),
    tr('Items damaged in a covered incident may be eligible for compensation — keep your receipt and report it through the app.',
       'Les objets endommagés lors d’un incident couvert peuvent donner droit à une indemnisation — conservez votre reçu et signalez-le via l’app.')],
];

const DRIVER_COVER = [
  ['car-front', tr('Vehicle damage', 'Dommages au véhicule'),
    tr('Damage to your car from a covered accident during a trip is protected, subject to the policy excess, so you can get back on the road.',
       'Les dommages causés à votre voiture lors d’un accident couvert pendant un trajet sont protégés, sous réserve de la franchise, pour reprendre la route rapidement.')],
  ['shield-check', tr('Your own injuries', 'Vos propres blessures'),
    tr('Drivers are covered for medical costs from an accident while on an active Tako trip — your wellbeing comes first.',
       'Les chauffeurs sont couverts pour les frais médicaux liés à un accident survenu pendant un trajet Tako actif — votre santé passe avant tout.')],
  ['wallet', tr('Lost-earnings support', 'Soutien en cas de perte de revenus'),
    tr('If a covered incident keeps you off the road, support may be available so a bad day doesn’t become a bad month.',
       'Si un incident couvert vous empêche de conduire, un soutien peut être disponible pour qu’une mauvaise journée ne devienne pas un mauvais mois.')],
];

const PHASES = [
  ['map-pinned', tr('En route to pick-up', 'En route vers le passager'),
    tr('From the moment a driver accepts your trip and heads to you, limited coverage is already in effect.',
       'Dès qu’un chauffeur accepte votre course et se dirige vers vous, une couverture limitée est déjà en vigueur.')],
  ['route', tr('During the trip', 'Pendant le trajet'),
    tr('From pick-up to drop-off, the fullest level of protection applies for both the rider and the driver.',
       'Du départ à la destination, le niveau de protection le plus complet s’applique au passager comme au chauffeur.')],
  ['clock', tr('Between trips', 'Entre les trajets'),
    tr('When a driver is online but hasn’t accepted a trip, a separate limited cover applies. It does not replace personal motor insurance.',
       'Lorsqu’un chauffeur est en ligne sans avoir accepté de course, une couverture limitée distincte s’applique. Elle ne remplace pas l’assurance auto personnelle.')],
];

function Hero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88, maxWidth: 900 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Protection', 'Protection')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Every trip is covered.', 'Chaque trajet est couvert.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 620 }}>
          {tr('Every ride booked through Tako includes insurance for riders and drivers. You don’t buy anything extra and you don’t fill in a form before you travel — protection is simply part of the trip.',
              'Chaque course réservée via Tako comprend une assurance pour les passagers et les chauffeurs. Vous n’achetez rien de plus et ne remplissez aucun formulaire avant de partir — la protection fait simplement partie du trajet.')}
        </p>
      </div>
    </section>
  );
}

function CoverGroup({ over, title, items, dark }) {
  return (
    <div>
      <SectionHead over={over} title={title} dark={dark} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {items.map(([ic, h, body], i) => (
          <Reveal key={h} delay={i * 70} style={{ background: dark ? 'rgba(255,255,255,0.04)' : '#fff', border: dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: dark ? 'var(--tako-amber)' : 'var(--tako-black)', color: dark ? 'var(--tako-black)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px', color: dark ? '#fff' : 'var(--tako-black)' }}>{h}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: dark ? 'var(--gray-300)' : 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function RiderCover() {
  return (
    <section style={{ ...WRAP, paddingTop: 88, paddingBottom: 88 }} className="stack-pad">
      <CoverGroup over={tr('For riders', 'Pour les passagers')} title={tr('What’s covered when you ride', 'Ce qui est couvert quand vous voyagez')} items={RIDER_COVER} />
    </section>
  );
}

function DriverCover() {
  return (
    <section style={{ background: 'var(--tako-charcoal)' }}>
      <div style={{ ...WRAP, paddingTop: 88, paddingBottom: 88 }} className="stack-pad">
        <CoverGroup over={tr('For drivers', 'Pour les chauffeurs')} title={tr('What’s covered when you drive', 'Ce qui est couvert quand vous conduisez')} items={DRIVER_COVER} dark />
      </div>
    </section>
  );
}

function WhenItApplies() {
  return (
    <section style={{ ...WRAP, paddingTop: 88, paddingBottom: 88 }} className="stack-pad">
      <SectionHead over={tr('When coverage applies', 'Quand la couverture s’applique')} title={tr('Protected from the first turn of the key', 'Protégé dès le premier tour de clé')}
        sub={tr('Coverage steps up through the trip. Here’s exactly when each level kicks in.', 'La couverture s’étend tout au long du trajet. Voici précisément quand chaque niveau s’active.')} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {PHASES.map(([ic, h, body], i) => (
          <Reveal key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 20, border: '1px solid var(--border-1)', borderRadius: 16, padding: '24px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700, color: 'var(--fg-3)' }}>{String(i + 1).padStart(2, '0')}</span>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={ic} size={24} /></div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 6px' }}>{h}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.55, margin: '24px 0 0', maxWidth: 760 }}>
        {tr('Coverage is provided through Tako’s insurance partners and is subject to the terms, limits and excesses of the underlying policy. It complements — and does not replace — any insurance the law requires a driver to hold.',
            'La couverture est fournie par les partenaires assureurs de Tako et est soumise aux conditions, plafonds et franchises de la police sous-jacente. Elle complète — sans la remplacer — toute assurance que la loi impose au chauffeur.')}
      </p>
    </section>
  );
}

function HowToClaim() {
  const steps = [
    ['flag', tr('Report it in the app', 'Signalez-le dans l’app'),
      tr('Open the trip in your history, tap Report a safety issue and tell us what happened. Do this as soon as you’re safe.',
         'Ouvrez le trajet dans votre historique, touchez Signaler un problème de sécurité et décrivez ce qui s’est passé. Faites-le dès que vous êtes en sécurité.')],
    ['file-text', tr('Share the details', 'Communiquez les détails'),
      tr('Add photos, the date and time, and any police report number. The more we have, the faster the claim moves.',
         'Ajoutez des photos, la date et l’heure, ainsi que tout numéro de constat de police. Plus nous avons d’éléments, plus le dossier avance vite.')],
    ['headset', tr('We guide you through', 'Nous vous accompagnons'),
      tr('Our claims team and insurance partner take it from there and keep you updated until the claim is resolved.',
         'Notre équipe sinistres et notre partenaire assureur prennent le relais et vous tiennent informé jusqu’à la résolution du dossier.')],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 88, paddingBottom: 88 }} className="stack-pad">
        <SectionHead over={tr('Making a claim', 'Déclarer un sinistre')} title={tr('If something happens, here’s how to file', 'En cas d’imprévu, voici comment déclarer')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 36 }} className="grid-3">
          {steps.map(([ic, h, body], i) => (
            <Reveal key={h} delay={i * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{h}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{body}</p>
            </Reveal>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 24px', flexWrap: 'wrap' }}>
          <SIcon name="phone-call" size={22} color="var(--tako-amber-deep)" />
          <span style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-1)', fontWeight: 600 }}>
            {tr('Urgent claim? Email', 'Sinistre urgent ? Écrivez à')} <a href="mailto:claims@tako.cm" className="link-amber" style={{ color: 'var(--tako-amber-deep)', fontWeight: 700 }}>claims@tako.cm</a> {tr('or use the Help Centre any time.', 'ou utilisez le centre d’aide à tout moment.')}
          </span>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 32 }} className="stack-pad">
      <div style={{ background: 'var(--tako-amber-soft)', border: '1px solid var(--tako-amber)', borderRadius: 24, padding: '40px 44px', display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
        <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="shield-check" size={30} /></div>
        <div style={{ flex: 1, minWidth: 260 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', margin: '0 0 6px' }}>{tr('Protection you don’t have to think about', 'Une protection à laquelle vous n’avez pas à penser')}</h3>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--gray-700)', margin: 0 }}>{tr('Ride or drive with confidence — coverage comes with every Tako trip.', 'Voyagez ou conduisez en confiance — la couverture accompagne chaque trajet Tako.')}</p>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <SBtn variant="primary" href="safety.html" icon="arrow-right">{tr('Explore safety', 'Découvrir la sécurité')}</SBtn>
          <SBtn variant="outline" href="drive.html">{tr('Start driving', 'Commencer à conduire')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function ExploreMore() {
  const links = [
    ['shield-check', tr('Driver screening', 'Vérification des chauffeurs'), 'safety-driver-screening.html'],
    ['share-2', tr('Share your trip', 'Partagez votre trajet'), 'safety-share-trip.html'],
    ['siren', tr('Emergency help', 'Aide d’urgence'), 'safety-emergency.html'],
    ['handshake', tr('Community guidelines', 'Règles de la communauté'), 'safety-community-guidelines.html'],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 16, paddingBottom: 96 }} className="stack-pad">
      <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 18 }}>{tr('Explore more safety', 'Découvrir plus sur la sécurité')}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }} className="grid-4">
        {links.map(([ic, label, href]) => (
          <a key={href} href={href} className="link-amber" style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--border-1)', borderRadius: 14, padding: '16px 18px', textDecoration: 'none', color: 'var(--fg-1)' }}>
            <SIcon name={ic} size={20} color="var(--tako-amber-deep)" />
            <span style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15 }}>{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Insurance() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="safety.html" />
      <Hero />
      <RiderCover />
      <DriverCover />
      <WhenItApplies />
      <HowToClaim />
      <CTA />
      <ExploreMore />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Insurance />);
