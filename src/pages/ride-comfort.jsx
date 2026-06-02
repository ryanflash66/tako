/* Tako — Tako Comfort product page */
import { t as tr } from '../lib/i18n.js';

const BASE = 1100;
const PER_KM = 340;
const SAMPLE_KM = 5;

// Sibling ride types for the compare row (matches ride.jsx fare model).
const SIBLINGS = [
  { name: 'Tako Moto', icon: 'bike', href: 'ride-moto.html' },
  { name: 'Tako Go', icon: 'car', href: 'ride-go.html' },
  { name: 'Tako XL', icon: 'users', href: 'ride-xl.html' },
  { name: 'Tako Green', icon: 'route', href: 'ride-green.html' },
];

function ComfortHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80, maxWidth: 760 }} className="stack-pad">
        <a href="ride.html" className="link-amber" style={{ fontSize: 15, marginBottom: 22, display: 'inline-flex' }}><SIcon name="arrow-left" size={17} /> {tr('All ride options', 'Toutes les options')}</a>
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Tako Comfort', 'Tako Comfort')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('A little more room to breathe.', 'Un peu plus d’espace pour respirer.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 560 }}>
          {tr('Newer cars, extra legroom and our top-rated drivers — for the days you want the ride across Douala or Yaoundé to feel a notch above the everyday.', 'Des voitures récentes, plus d’espace pour les jambes et nos chauffeurs les mieux notés — pour les jours où vous voulez que la course à Douala ou Yaoundé soit un cran au-dessus du quotidien.')}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
          <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Request Tako Comfort', 'Réserver Tako Comfort')}</SBtn>
          <SBtn variant="outlineLight" href="reserve.html">{tr('Reserve for later', 'Réserver pour plus tard')}</SBtn>
        </div>
        <div style={{ display: 'flex', gap: 26, flexWrap: 'wrap' }}>
          {[['star', tr('4.8★+ drivers', 'Chauffeurs 4,8★+')], ['user', tr('4 seats', '4 places')], ['badge-cent', tr('Fare shown up front', 'Prix affiché à l’avance')]].map(([ic, label]) => (
            <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: 'var(--gray-300)' }}><SIcon name={ic} size={18} color="var(--tako-amber)" /> {label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComfortBenefits() {
  const benefits = [
    ['car-front', tr('Newer, roomier cars', 'Voitures récentes et spacieuses'), tr('Recent models with extra legroom and a tidy boot — vetted before they ever carry the Comfort badge.', 'Des modèles récents avec plus d’espace pour les jambes et un coffre dégagé — vérifiés avant de porter le badge Comfort.')],
    ['star', tr('Top-rated drivers', 'Chauffeurs les mieux notés'), tr('Only drivers holding a 4.8★ rating and a clean record qualify for Comfort trips.', 'Seuls les chauffeurs notés 4,8★ et au dossier irréprochable sont éligibles aux courses Comfort.')],
    ['message-circle', tr('Quiet-ride preference', 'Trajet en silence'), tr('Set a quiet ride in the app and your driver keeps the chat and music to a minimum.', 'Activez le mode silencieux dans l’app et votre chauffeur réduit conversation et musique au minimum.')],
    ['sliders-horizontal', tr('Air-conditioning, your way', 'Climatisation à votre goût'), tr('Every Comfort car runs working A/C — tell us the temperature you prefer before you ride.', 'Chaque voiture Comfort dispose d’une climatisation en état de marche — indiquez la température souhaitée avant de partir.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('What you get', 'Ce que vous obtenez')} title={tr('A step up, in every detail', 'Un cran au-dessus, dans chaque détail')} sub={tr('Comfort is the same trusted Tako, with a few touches that make the longer trips and the bigger days feel easier.', 'Comfort, c’est le même Tako de confiance, avec quelques attentions qui rendent les longs trajets et les grands jours plus agréables.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {benefits.map(([ic, title, desc], i) => (
          <Reveal key={title} delay={(i % 2) * 70} className="lift" style={{ display: 'flex', gap: 22, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 28 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={28} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ComfortFare() {
  const total = BASE + PER_KM * SAMPLE_KM;
  const rows = [
    [tr('Base fare', 'Prise en charge'), fmt(BASE)],
    [`${tr('Distance', 'Distance')} · ${SAMPLE_KM} km × ${fmt(PER_KM)}`, fmt(PER_KM * SAMPLE_KM)],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96, borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 0.9fr', gap: 56, alignItems: 'center' }} className="hero-grid stack-pad">
        <div>
          <SectionHead over={tr('How the fare works', 'Comment le prix est calculé')} title={tr('Clear pricing, before you ride', 'Un prix clair, avant de partir')} sub={tr('Comfort starts at a 1 100 FCFA base plus 340 FCFA per kilometre. You see the exact total before you confirm — no meter, no surprises.', 'Comfort démarre à une prise en charge de 1 100 FCFA, plus 340 FCFA par kilomètre. Vous voyez le total exact avant de confirmer — sans compteur, sans surprise.')} style={{ marginBottom: 0 }} />
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 24, padding: 28, boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
            <SIcon name="calculator" size={18} color="var(--tako-amber-deep)" />
            <span className="tako-overline" style={{ color: 'var(--fg-2)' }}>{tr('Example · 5 km trip', 'Exemple · trajet de 5 km')}</span>
          </div>
          <div style={{ display: 'grid', gap: 12, marginBottom: 16 }}>
            {rows.map(([label, val]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)' }}>{label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16 }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid var(--border-1)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{tr('Estimated total', 'Total estimé')}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 26 }}>{fmt(total)} <span style={{ fontSize: 14, color: 'var(--fg-3)' }}>FCFA</span></span>
          </div>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-3)', margin: '14px 0 0' }}>{tr('Estimate in FCFA. Final fare confirmed in the app before you ride.', 'Estimation en FCFA. Prix final confirmé dans l’app avant de partir.')}</p>
        </div>
      </div>
    </section>
  );
}

function ComfortCompare() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Compare tiers', 'Comparer les options')} title={tr('Not quite the right fit?', 'Pas tout à fait ce qu’il vous faut ?')} sub={tr('Comfort is one of several ways to move with Tako. Explore the rest and pick the one that suits the trip.', 'Comfort n’est qu’une des façons de vous déplacer avec Tako. Découvrez les autres et choisissez celle qui convient au trajet.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }} className="grid-2">
        {SIBLINGS.map((s, i) => (
          <Reveal key={s.name} delay={(i % 2) * 60}>
            <a href={s.href} className="lift" style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 22px', textDecoration: 'none', color: 'var(--fg-1)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={s.icon} size={24} /></div>
              <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{s.name}</span>
              <SIcon name="arrow-right" size={18} color="var(--gray-400)" />
            </a>
          </Reveal>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        <a href="ride.html" className="link-amber" style={{ fontSize: 15, display: 'inline-flex' }}>{tr('See every ride option', 'Voir toutes les options')} <SIcon name="arrow-right" size={17} /></a>
      </div>
    </section>
  );
}

function ComfortCTA() {
  return (
    <section style={{ ...WRAP, padding: '0 32px 96px' }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-charcoal)', borderRadius: 28, padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <LaneMotif style={{ opacity: 0.5 }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 12px' }}>
            {tr('Ready when you are', 'Prêt quand vous l’êtes')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: 0, maxWidth: 420 }}>
            {tr('Request a Comfort ride now, or reserve one ahead for the meeting that can’t be late.', 'Réservez une course Comfort maintenant, ou planifiez-la à l’avance pour le rendez-vous à ne pas manquer.')}
          </p>
        </div>
        <div style={{ position: 'relative', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Request Tako Comfort', 'Réserver Tako Comfort')}</SBtn>
          <SBtn variant="outlineLight" href="reserve.html">{tr('Reserve for later', 'Réserver pour plus tard')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function RideComfort() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="ride.html" />
      <ComfortHero />
      <ComfortBenefits />
      <ComfortFare />
      <ComfortCompare />
      <ComfortCTA />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RideComfort />);
