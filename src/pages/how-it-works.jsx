/* Tako — How it works page */
import { t as tr } from '../lib/i18n.js';

const RIDER_STEPS = [
  {
    icon: 'smartphone',
    t: tr('Open the app & set your destination', 'Ouvrez l’app et indiquez votre destination'),
    d: tr('Type where you’re headed — Akwa, Bonabéri, the airport, anywhere in town. Tako finds your pick-up automatically and shows the fare before you commit.', 'Saisissez votre destination — Akwa, Bonabéri, l’aéroport, partout en ville. Tako repère votre point de départ et affiche le prix avant que vous confirmiez.'),
  },
  {
    icon: 'car-front',
    t: tr('Choose your ride', 'Choisissez votre course'),
    d: tr('Pick the option that fits the moment — Moto to beat the traffic, Go for every day, Comfort for newer cars, XL for the group, or Green for a low-emission trip. Each shows its fare up front.', 'Choisissez l’option qui convient — Moto pour éviter les embouteillages, Go au quotidien, Comfort pour des voitures récentes, XL pour le groupe, ou Green pour un trajet bas-carbone. Chaque option affiche son prix à l’avance.'),
    link: { href: 'ride.html', label: tr('Compare rides & fares', 'Comparer courses et prix') },
  },
  {
    icon: 'user-check',
    t: tr('Get matched with a nearby driver', 'Trouvez un chauffeur tout près'),
    d: tr('Tako connects you to the closest verified driver in seconds. You see their name, photo, rating and plate number before they arrive — and watch them approach on the map.', 'Tako vous connecte au chauffeur vérifié le plus proche en quelques secondes. Vous voyez son nom, sa photo, sa note et sa plaque avant son arrivée — et le suivez approcher sur la carte.'),
  },
  {
    icon: 'route',
    t: tr('Track your trip & share it', 'Suivez votre trajet et partagez-le'),
    d: tr('Follow the whole route in real time. Share your live trip with family so someone always knows where you are, and reach support without leaving the screen.', 'Suivez tout l’itinéraire en temps réel. Partagez votre trajet en direct avec vos proches pour que quelqu’un sache toujours où vous êtes, et joignez l’assistance sans quitter l’écran.'),
    link: { href: 'safety.html', label: tr('How we keep you safe', 'Comment nous assurons votre sécurité') },
  },
  {
    icon: 'wallet',
    t: tr('Pay cashless or cash, rate your driver', 'Payez sans espèces ou en cash, notez votre chauffeur'),
    d: tr('Settle up the way that suits you — Mobile Money (MTN & Orange) or cash. Your receipt lands instantly, then leave a star rating to keep every Tako ride dependable.', 'Réglez comme vous voulez — Mobile Money (MTN & Orange) ou espèces. Votre reçu arrive aussitôt, puis laissez une note en étoiles pour que chaque course Tako reste fiable.'),
  },
];

function HowHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88 }} className="stack-pad">
        <div style={{ maxWidth: 760 }}>
          <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('How it works', 'Comment ça marche')}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.2vw,66px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: 0 }}>
            {tr('Getting a Tako,', 'Prendre un Tako,')}<br />{tr('step by step.', 'étape par étape.')}
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 560 }}>
            {tr('From opening the app to rating your driver, here’s exactly how a Tako ride goes — plus how driving and Tako for Business work, so the whole journey makes sense in a minute.', 'De l’ouverture de l’app à la note de votre chauffeur, voici précisément comment se déroule une course Tako — ainsi que le fonctionnement de la conduite et de Tako Entreprise, pour tout comprendre en une minute.')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Get started', 'Commencer')}</SBtn>
            <SBtn variant="outlineLight" href="ride.html">{tr('See rides & fares', 'Voir courses et prix')}</SBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function RiderJourney() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('For riders', 'Pour les passagers')} title={tr('Five steps, from tap to drop-off', 'Cinq étapes, du clic à l’arrivée')} sub={tr('Every Tako trip follows the same simple flow — clear, trackable and paid your way.', 'Chaque trajet Tako suit le même déroulement simple — clair, traçable et payé à votre façon.')} />
      <div style={{ display: 'grid', gap: 20 }}>
        {RIDER_STEPS.map((s, i) => (
          <Reveal key={i} delay={(i % 2) * 70} className="lift" style={{ display: 'flex', gap: 28, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 22, padding: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, flexShrink: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--tako-amber-deep)' }}>{i + 1}</div>
              {i < RIDER_STEPS.length - 1 && <span style={{ flex: 1, width: 2, background: 'var(--border-1)' }} />}
            </div>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={s.icon} size={28} /></div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 23, margin: '0 0 8px', letterSpacing: '-0.01em' }}>{s.t}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0, maxWidth: 680 }}>{s.d}</p>
              {s.link && <a href={s.link.href} className="link-amber" style={{ fontSize: 15, marginTop: 14, display: 'inline-flex', fontWeight: 700 }}>{s.link.label} <SIcon name="arrow-right" size={17} /></a>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function OtherJourneys() {
  const cards = [
    {
      icon: 'navigation',
      over: tr('Drive with Tako', 'Conduire avec Tako'),
      title: tr('Earn on your own schedule', 'Gagnez selon votre horaire'),
      d: tr('Sign up online, get verified and pass a quick vehicle check, then go online whenever it suits you. Accept trips nearby, follow built-in navigation, and your fares land every week by Mobile Money — minus a lower-than-average commission.', 'Inscrivez-vous en ligne, faites-vous vérifier et passez un contrôle rapide du véhicule, puis connectez-vous quand cela vous arrange. Acceptez les courses à proximité, suivez la navigation intégrée, et vos revenus arrivent chaque semaine par Mobile Money — avec une commission plus basse que la moyenne.'),
      link: { href: 'drive.html', label: tr('How driving works', 'Comment conduire') },
    },
    {
      icon: 'briefcase',
      over: tr('Tako for Business', 'Tako Entreprise'),
      title: tr('Move your whole team', 'Déplacez toute votre équipe'),
      d: tr('Set up one account for the company, add your people, and let them ride with rules you control. Trips are billed centrally each month with one clear invoice, and spend reports show who travelled where, when and for how much — no more chasing paper receipts.', 'Créez un seul compte pour l’entreprise, ajoutez vos collaborateurs et laissez-les se déplacer selon vos règles. Les courses sont facturées de façon centralisée chaque mois sur une facture claire, et les rapports montrent qui s’est déplacé où, quand et pour combien — fini la chasse aux reçus papier.'),
      link: { href: 'business.html', label: tr('How teams use Tako', 'Comment les équipes utilisent Tako') },
    },
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Beyond the ride', 'Au-delà de la course')} title={tr('Two more ways Tako works', 'Deux autres façons d’utiliser Tako')} sub={tr('The same app powers earning behind the wheel and moving a whole team.', 'La même app permet de gagner au volant et de déplacer toute une équipe.')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
          {cards.map((c, i) => (
            <Reveal key={c.over} delay={i * 80} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 22, padding: 36, display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 54, height: 54, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}><SIcon name={c.icon} size={27} /></div>
              <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 10 }}>{c.over}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 25, margin: '0 0 12px', letterSpacing: '-0.015em' }}>{c.title}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.55, margin: '0 0 22px' }}>{c.d}</p>
              <a href={c.link.href} className="link-amber" style={{ fontSize: 15, marginTop: 'auto', display: 'inline-flex', fontWeight: 700 }}>{c.link.label} <SIcon name="arrow-right" size={17} /></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowCTA() {
  return (
    <section style={{ ...WRAP, paddingTop: 16, paddingBottom: 96 }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', borderRadius: 28, padding: '72px 56px', textAlign: 'center' }}>
        <LaneMotif style={{ opacity: 0.4 }} />
        <div style={{ position: 'relative', maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.4vw,44px)', letterSpacing: '-0.025em', color: '#fff', margin: '0 0 16px' }}>{tr('Ready to take your first Tako?', 'Prêt à prendre votre premier Tako ?')}</h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: '0 0 28px' }}>{tr('Set up your account in minutes and ride across Cameroon today.', 'Créez votre compte en quelques minutes et déplacez-vous partout au Cameroun dès aujourd’hui.')}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" size="lg" href="auth.html">{tr('Get started', 'Commencer')}</SBtn>
            <SBtn variant="outlineLight" size="lg" href="ride.html">{tr('See rides & fares', 'Voir courses et prix')}</SBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="how-it-works.html" />
      <HowHero />
      <RiderJourney />
      <OtherJourneys />
      <HowCTA />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HowItWorks />);
