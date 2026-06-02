/* Tako — Tako Go product page (ride-go.html) */
import { t as tr } from '../lib/i18n.js';

const BASE = 700;
const PERKM = 230;
const SEATS = 4;

function fare(km) { return Math.round((BASE + PERKM * km) / 100) * 100; }

const BENEFITS = [
  ['car-front', tr('Reliable everyday cars', 'Des voitures fiables au quotidien'), tr('Clean, well-kept 4-seaters from drivers who know Cameroon’s roads — your default ride, any day of the week.', 'Des 4 places propres et bien entretenues, conduites par des chauffeurs qui connaissent les routes du Cameroun — votre course par défaut, tous les jours.')],
  ['users', tr('Up to 4 seats', 'Jusqu’à 4 places'), tr('Room for you and three more — perfect for the commute, a market run, or a night out with friends.', 'De la place pour vous et trois autres — idéal pour le trajet quotidien, une virée au marché ou une sortie entre amis.')],
  ['wallet', tr('Upfront fares', 'Prix transparents'), tr('See the exact price before you confirm. No meter, no haggling, no surprises when you arrive.', 'Voyez le prix exact avant de confirmer. Pas de compteur, pas de marchandage, pas de surprise à l’arrivée.')],
  ['smartphone', tr('Cashless or cash', 'Sans espèces ou en liquide'), tr('Pay with MTN MoMo or Orange Money, or settle in cash — whatever is easiest for the trip.', 'Payez avec MTN MoMo ou Orange Money, ou réglez en espèces — comme cela vous arrange.')],
];

function GoHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', color: '#fff' }}>
      <AnimatedLanes style={{ opacity: 0.6 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88 }} className="stack-pad">
        <a href="ride.html" className="link-amber" style={{ fontSize: 15, marginBottom: 22, display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--tako-amber)' }}><SIcon name="arrow-left" size={17} /> {tr('All ride options', 'Toutes les options')}</a>
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Tako Go', 'Tako Go')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0, maxWidth: 620 }}>
          {tr('Your everyday ride.', 'Votre course de tous les jours.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 34px', maxWidth: 540 }}>
          {tr('The affordable car you reach for first — from Akwa to Bonabéri, a quick errand to the daily commute. Reliable, cashless or cash, with the fare shown before you go.', 'La voiture abordable que vous choisissez en premier — d’Akwa à Bonabéri, d’une course rapide au trajet quotidien. Fiable, avec ou sans espèces, et le prix affiché avant de partir.')}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 30 }}>
          <SBtn variant="amber" icon="arrow-right" href="auth.html" size="lg">{tr('Request Tako Go', 'Réserver Tako Go')}</SBtn>
          <SBtn variant="outlineLight" href="reserve.html" size="lg">{tr('Reserve for later', 'Réserver pour plus tard')}</SBtn>
        </div>
        <div style={{ display: 'flex', gap: 26, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15 }}><SIcon name="wallet" size={18} color="var(--tako-amber)" /> {tr('from', 'dès')} {fmt(fare(4))} FCFA</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15 }}><SIcon name="users" size={18} color="var(--tako-amber)" /> {SEATS} {tr('seats', 'places')}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15 }}><SIcon name="clock" size={18} color="var(--tako-amber)" /> {tr('~4 min away', '~4 min')}</span>
        </div>
      </div>
    </section>
  );
}

function GoBenefits() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Why Tako Go', 'Pourquoi Tako Go')} title={tr('The dependable default, every trip', 'La valeur sûre, à chaque trajet')} sub={tr('Built to be the easy choice: a clean car, a fair price you can see, and a payment method that works for you.', 'Pensé pour être le choix facile : une voiture propre, un prix juste et visible, et un mode de paiement qui vous convient.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {BENEFITS.map(([ic, ti, d], i) => (
          <Reveal key={ti} delay={(i % 2) * 70} className="lift" style={{ display: 'flex', gap: 20, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 28 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={28} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 8px' }}>{ti}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function GoFare() {
  const km = 5;
  const total = fare(km);
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }} className="hero-grid stack-pad">
        <div>
          <SectionHead over={tr('How fares work', 'Comment le prix se calcule')} title={tr('A clear price, every time', 'Un prix clair, à chaque fois')} style={{ marginBottom: 20 }} />
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 18px', maxWidth: 460 }}>
            {tr('Every Tako Go fare starts with a base charge, then adds a flat rate for each kilometre. You see the total before you confirm — never after.', 'Chaque course Tako Go commence par un tarif de base, puis ajoute un montant fixe par kilomètre. Vous voyez le total avant de confirmer — jamais après.')}
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700, color: 'var(--fg-2)' }}>
            <span>{tr('Base', 'Base')} {fmt(BASE)} FCFA</span>
            <span>·</span>
            <span>{fmt(PERKM)} FCFA / km</span>
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 24, padding: 32, boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <SIcon name="car-front" size={18} color="var(--tako-amber-deep)" />
            <span className="tako-overline" style={{ color: 'var(--fg-2)' }}>{tr('Example · 5 km trip', 'Exemple · trajet de 5 km')}</span>
          </div>
          <div style={{ display: 'grid', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--fg-2)' }}><span>{tr('Base fare', 'Tarif de base')}</span><span>{fmt(BASE)}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--fg-2)' }}><span>5 km × {fmt(PERKM)}</span><span>{fmt(PERKM * km)}</span></div>
            <div style={{ height: 1, background: 'var(--border-1)', margin: '4px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700, fontSize: 22 }}><span style={{ fontFamily: 'var(--font-display)' }}>{tr('Total', 'Total')}</span><span>{fmt(total)} <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>FCFA</span></span></div>
          </div>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 12.5, color: 'var(--fg-3)', margin: '18px 0 0', lineHeight: 1.5 }}>
            {tr('Estimate in FCFA. The exact fare is confirmed in the app before you ride.', 'Estimation en FCFA. Le prix exact est confirmé dans l’app avant de partir.')}
          </p>
        </div>
      </div>
    </section>
  );
}

function GoCompare() {
  const tiers = [
    ['Tako Moto', 'bike', 'ride-moto.html'],
    ['Tako Comfort', 'car-front', 'ride-comfort.html'],
    ['Tako XL', 'users', 'ride-xl.html'],
    ['Tako Green', 'badge-check', 'ride-green.html'],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Compare tiers', 'Comparer les options')} title={tr('Need something different?', 'Besoin d’autre chose ?')} sub={tr('Tako Go is the everyday default — but there’s a ride for every moment.', 'Tako Go est la valeur sûre du quotidien — mais il y a une course pour chaque moment.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="grid-4">
        {tiers.map(([name, icon, href], i) => (
          <Reveal key={href} delay={(i % 4) * 60}>
            <a href={href} className="lift" style={{ display: 'flex', flexDirection: 'column', gap: 14, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 24, textDecoration: 'none', color: 'var(--fg-1)', height: '100%' }}>
              <div style={{ width: 50, height: 50, borderRadius: 13, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={icon} size={24} /></div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{name}</span>
              <span className="link-amber" style={{ fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 'auto' }}>{tr('View', 'Voir')} <SIcon name="arrow-right" size={16} /></span>
            </a>
          </Reveal>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        <a href="ride.html" className="link-amber" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 6 }}>{tr('See all ride options and compare fares', 'Voir toutes les options et comparer les prix')} <SIcon name="arrow-right" size={17} /></a>
      </div>
    </section>
  );
}

function GoCTA() {
  return (
    <section style={{ ...WRAP, padding: '0 32px 96px' }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-charcoal)', borderRadius: 28, padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <LaneMotif style={{ opacity: 0.5 }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 12px' }}>
            {tr('Ready when you are.', 'Prêt quand vous l’êtes.')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: 0, maxWidth: 420 }}>
            {tr('Request a Tako Go now, or schedule one for later.', 'Réservez un Tako Go maintenant, ou planifiez-en un pour plus tard.')}
          </p>
        </div>
        <div style={{ position: 'relative', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <SBtn variant="amber" icon="arrow-right" href="auth.html" size="lg">{tr('Request Tako Go', 'Réserver Tako Go')}</SBtn>
          <SBtn variant="outlineLight" href="reserve.html" size="lg">{tr('Reserve for later', 'Réserver pour plus tard')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function RideGo() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="ride.html" />
      <GoHero />
      <GoBenefits />
      <GoFare />
      <GoCompare />
      <GoCTA />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RideGo />);
