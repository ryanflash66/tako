/* Tako — Tako Green (lower-emission eco tier) product page */
import { t as tr } from '../lib/i18n.js';
import { Leaf, Zap, BatteryCharging, Wind } from 'lucide';

// The curated icon set in src/lib/icons.js is tree-shaken from the icons existing
// pages reference, so it lacks the eco glyphs this page needs. Register them on
// the shared lucide registry before useIcons() runs, without editing icons.js.
if (window.lucide && window.lucide.icons) {
  Object.assign(window.lucide.icons, { Leaf, Zap, BatteryCharging, Wind });
}

const BASE = 900;   // FCFA
const PERKM = 280;  // FCFA / km
const SEATS = 4;

// Cross-link siblings in the ride lineup (between Go and Comfort)
const SIBLINGS = [
  { name: 'Tako Moto', icon: 'bike', href: 'ride-moto.html' },
  { name: 'Tako Go', icon: 'car', href: 'ride-go.html' },
  { name: 'Tako Comfort', icon: 'car-front', href: 'ride-comfort.html' },
  { name: 'Tako XL', icon: 'users', href: 'ride-xl.html' },
];

function GreenHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80, maxWidth: 760 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Tako Green', 'Tako Green')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('A cleaner way to move.', 'Une façon plus propre de se déplacer.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 580 }}>
          {tr('Tako Green pairs you with a hybrid or electric car for a lower-emission trip — same upfront fares, less smog over Douala and Yaoundé. Choose Green and ride a little lighter on the city.', 'Tako Green vous associe à une voiture hybride ou électrique pour un trajet à plus faibles émissions — mêmes prix transparents, moins de pollution sur Douala et Yaoundé. Choisissez Green et roulez plus léger pour la ville.')}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 30, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 22 }}>
            {tr('from', 'dès')} {fmt(BASE + PERKM * 4)} <span style={{ fontSize: 13, color: 'var(--gray-400)' }}>FCFA</span>
          </div>
          <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: 'var(--gray-300)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <SIcon name="user" size={15} color="var(--tako-amber)" /> {SEATS} {tr('seats', 'places')}
          </span>
          <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: 'var(--gray-300)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <SIcon name="leaf" size={15} color="var(--tako-amber)" /> {tr('Hybrid & electric', 'Hybride & électrique')}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Request Tako Green', 'Réserver Tako Green')}</SBtn>
          <SBtn variant="outlineLight" href="ride.html">{tr('See all ride options', 'Voir toutes les options')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function WhyGreen() {
  const cards = [
    ['battery-charging', tr('Hybrid & electric cars', 'Voitures hybrides & électriques'), tr('Every Green trip is matched to a verified hybrid or fully electric vehicle — quieter, smoother and far thriftier on fuel.', 'Chaque course Green est confiée à un véhicule hybride ou 100 % électrique vérifié — plus silencieux, plus doux et bien plus économe en carburant.')],
    ['wind', tr('Lower emissions per trip', 'Moins d’émissions par trajet'), tr('A hybrid or EV puts out a fraction of the tailpipe CO₂ of a standard petrol car, so each ride leaves a lighter footprint.', 'Un hybride ou un VE rejette une fraction du CO₂ d’une voiture à essence classique, pour une empreinte plus légère à chaque course.')],
    ['wallet', tr('Same upfront fares', 'Mêmes prix transparents'), tr('Green costs no more than a comparable Go ride. You see the exact price before you confirm — cleaner shouldn’t mean pricier.', 'Green ne coûte pas plus cher qu’une course Go comparable. Vous voyez le prix exact avant de confirmer — plus propre ne veut pas dire plus cher.')],
    ['leaf', tr('Cleaner air for our cities', 'Un air plus pur pour nos villes'), tr('Fewer fumes on the road means healthier streets for Douala, Yaoundé and every city Tako serves.', 'Moins de gaz d’échappement sur la route, ce sont des rues plus saines pour Douala, Yaoundé et toutes les villes desservies par Tako.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64 }} className="stack-pad">
      <SectionHead over={tr('Why Green', 'Pourquoi Green')} title={tr('Lower-emission rides, no compromise', 'Des trajets à plus faibles émissions, sans compromis')} sub={tr('All the convenience of a Tako, in a cleaner car and at the same fare you already trust.', 'Tout le confort d’un Tako, dans une voiture plus propre et au prix que vous connaissez déjà.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {cards.map(([ic, title, d], i) => (
          <Reveal key={title} delay={(i % 2) * 70} style={{ display: 'flex', gap: 20, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 28 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={26} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ImpactStrip() {
  const stats = [
    ['zap', '≈ 0.9 kg', tr('estimated CO₂ saved on a typical 10 km trip versus a standard petrol car', 'CO₂ estimé économisé sur un trajet type de 10 km par rapport à une voiture à essence classique')],
    ['leaf', '~40%', tr('lower tailpipe emissions on average for a hybrid or electric vehicle', 'd’émissions à l’échappement en moins en moyenne pour un véhicule hybride ou électrique')],
    ['wind', '0', tr('extra cost — Green is priced the same as a comparable everyday ride', 'coût supplémentaire — Green est au même prix qu’une course quotidienne comparable')],
  ];
  return (
    <section style={{ background: 'var(--tako-charcoal)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <LaneMotif style={{ opacity: 0.35 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 72, paddingBottom: 72 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 16 }}>{tr('Estimated impact', 'Impact estimé')}</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.2vw,42px)', letterSpacing: '-0.025em', lineHeight: 1.05, margin: '0 0 40px', maxWidth: 620 }}>
          {tr('Small choices, added up across the city', 'De petits choix, multipliés à l’échelle de la ville')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }} className="grid-3">
          {stats.map(([ic, n, d], i) => (
            <Reveal key={i} delay={i * 70}>
              <div style={{ display: 'inline-flex', width: 44, height: 44, borderRadius: 12, background: 'rgba(247,149,29,0.15)', color: 'var(--tako-amber)', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><SIcon name={ic} size={22} /></div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 'clamp(32px,4vw,44px)', letterSpacing: '-0.02em', color: 'var(--tako-amber)' }}>{n}</div>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--gray-300)', lineHeight: 1.5, margin: '8px 0 0' }}>{d}</p>
            </Reveal>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--gray-500)', margin: '32px 0 0', maxWidth: 680 }}>
          {tr('Figures are illustrative estimates based on typical hybrid and electric vehicle efficiency — actual savings vary by car, route and traffic.', 'Ces chiffres sont des estimations indicatives basées sur l’efficacité type des véhicules hybrides et électriques — les économies réelles varient selon la voiture, l’itinéraire et le trafic.')}
        </p>
      </div>
    </section>
  );
}

function FareExample() {
  const km = 5;
  const total = BASE + PERKM * km;
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64 }} className="stack-pad">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.9fr', gap: 48, alignItems: 'center' }} className="hero-grid">
        <div>
          <SectionHead over={tr('How fares work', 'Comment se calcule le prix')} title={tr('Transparent, every trip', 'Transparent, à chaque course')} sub={tr('Green starts at a fixed base fare, then adds a steady rate per kilometre. You always see the exact price before you confirm.', 'Green démarre à un tarif de base fixe, puis ajoute un montant régulier par kilomètre. Vous voyez toujours le prix exact avant de confirmer.')} style={{ marginBottom: 24 }} />
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 26 }}>{fmt(BASE)} <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>FCFA</span></div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 600, color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tr('base fare', 'tarif de base')}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 26 }}>{fmt(PERKM)} <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>FCFA/km</span></div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 600, color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tr('per kilometre', 'par kilomètre')}</div>
            </div>
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 24, padding: 28, boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
            <SIcon name="leaf" size={18} color="var(--tako-amber-deep)" />
            <span className="tako-overline" style={{ color: 'var(--fg-2)' }}>{tr('Fare example · 5 km', 'Exemple de prix · 5 km')}</span>
          </div>
          <div style={{ display: 'grid', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 15 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--fg-2)' }}>{tr('Base fare', 'Tarif de base')}</span>
              <span style={{ fontWeight: 700 }}>{fmt(BASE)} FCFA</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--fg-2)' }}>5 km × {fmt(PERKM)} FCFA</span>
              <span style={{ fontWeight: 700 }}>{fmt(PERKM * km)} FCFA</span>
            </div>
            <div style={{ height: 1, background: 'var(--border-1)', margin: '4px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 16 }}>{tr('Estimated total', 'Total estimé')}</span>
              <span style={{ fontWeight: 700, fontSize: 22 }}>{fmt(total)} FCFA</span>
            </div>
          </div>
          <SBtn variant="amber" icon="arrow-right" href="auth.html" style={{ width: '100%', marginTop: 20 }}>{tr('Request Tako Green', 'Réserver Tako Green')}</SBtn>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-3)', textAlign: 'center', margin: '12px 0 0' }}>{tr('Estimate in FCFA. Final fare confirmed in the app before you ride.', 'Estimation en FCFA. Prix final confirmé dans l’app avant de partir.')}</p>
        </div>
      </div>
    </section>
  );
}

function CompareTiers() {
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 64, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Compare tiers', 'Comparer les options')} title={tr('Other ways to ride', 'Autres façons de rouler')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }} className="grid-2">
          {SIBLINGS.map(s => (
            <a key={s.href} href={s.href} className="lift" style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 22px', textDecoration: 'none', color: 'var(--fg-1)' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={s.icon} size={22} /></div>
              <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>{s.name}</span>
              <SIcon name="arrow-right" size={18} color="var(--gray-400)" />
            </a>
          ))}
        </div>
        <a href="ride.html" className="link-amber" style={{ fontSize: 15, marginTop: 24, display: 'inline-flex' }}>{tr('See all ride options', 'Voir toutes les options')} <SIcon name="arrow-right" size={17} /></a>
      </div>
    </section>
  );
}

function GreenCTA() {
  return (
    <section style={{ ...WRAP, padding: '0 32px 96px' }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', borderRadius: 28, padding: '64px 56px' }}>
        <AnimatedLanes style={{ opacity: 0.4 }} />
        <div style={{ position: 'relative', maxWidth: 620 }}>
          <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 16 }}>{tr('Ride Green', 'Roulez Green')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.2vw,42px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 16px' }}>
            {tr('Your next ride can be a cleaner one', 'Votre prochaine course peut être plus propre')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', lineHeight: 1.55, margin: '0 0 28px' }}>
            {tr('Request a Green car now, or reserve one ahead for that early start. Same fares, lighter footprint.', 'Réservez une voiture Green maintenant, ou planifiez-la à l’avance pour un départ matinal. Mêmes prix, empreinte plus légère.')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Request Tako Green', 'Réserver Tako Green')}</SBtn>
            <SBtn variant="outlineLight" href="reserve.html">{tr('Reserve for later', 'Réserver pour plus tard')}</SBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function RideGreen() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="ride.html" />
      <GreenHero />
      <WhyGreen />
      <ImpactStrip />
      <FareExample />
      <CompareTiers />
      <GreenCTA />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RideGreen />);
