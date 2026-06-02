/* Tako — Driver earnings page */
import { t as tr } from '../lib/i18n.js';

const EARN_CITIES = [
  { name: 'Douala', rate: 2400 },
  { name: 'Yaoundé', rate: 2300 },
  { name: 'Bamenda', rate: 1850 },
  { name: 'Bafoussam', rate: 1750 },
  { name: 'Buea', rate: 1900 },
];

function Calculator() {
  const [hours, setHours] = React.useState(28);
  const [cityIdx, setCityIdx] = React.useState(0);
  const rate = EARN_CITIES[cityIdx].rate;
  const weeklyLow = Math.round(hours * rate / 1000) * 1000;
  const weeklyHigh = Math.round(hours * rate * 1.28 / 1000) * 1000;
  const monthly = Math.round(weeklyHigh * 4.33 / 1000) * 1000;
  const trips = Math.round(hours * 1.9);
  return (
    <div style={{ background: '#fff', borderRadius: 24, padding: 28, boxShadow: 'var(--shadow-xl)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <SIcon name="wallet" size={18} color="var(--tako-amber-deep)" />
        <span className="tako-overline" style={{ color: 'var(--fg-2)' }}>{tr('Earnings estimator', 'Estimateur de revenus')}</span>
      </div>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 22px' }}>
        {tr('Set your weekly hours and city to see what you could take home.', 'Définissez vos heures hebdomadaires et votre ville pour voir votre revenu possible.')}
      </p>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12, gap: 12 }}>
          <label style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: 'var(--tako-black)' }}>{tr('Hours per week', 'Heures par semaine')}</label>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 18, whiteSpace: 'nowrap', color: 'var(--tako-black)' }}>{hours}h</span>
        </div>
        <input type="range" className="t-range" min="5" max="60" step="1" value={hours} onChange={e => setHours(+e.target.value)} aria-label={tr('Hours driven per week', 'Heures conduites par semaine')} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontFamily: 'var(--font-text)', fontSize: 12, fontWeight: 600, color: 'var(--fg-3)' }}>
          <span>{tr('5h · part-time', '5 h · temps partiel')}</span>
          <span style={{ color: 'var(--tako-amber-deep)' }}>≈ {trips} {tr('trips / week', 'courses / sem.')}</span>
          <span>{tr('60h · full-time', '60 h · temps plein')}</span>
        </div>
      </div>
      <div style={{ marginBottom: 26 }}>
        <label style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: 'var(--tako-black)', display: 'block', marginBottom: 12 }}>{tr('Your city', 'Votre ville')}</label>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {EARN_CITIES.map((c, i) => (
            <button key={c.name} onClick={() => setCityIdx(i)} style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
              border: cityIdx === i ? '2px solid var(--tako-black)' : '1px solid var(--border-1)', background: cityIdx === i ? 'var(--tako-black)' : '#fff', color: cityIdx === i ? '#fff' : 'var(--fg-1)', transition: 'all .15s' }}>{c.name}</button>
          ))}
        </div>
      </div>
      <div style={{ background: 'var(--tako-black)', borderRadius: 18, padding: '24px 26px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <LaneMotif style={{ opacity: 0.3 }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 700, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{tr('You could earn about', 'Vous pourriez gagner environ')}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, letterSpacing: '-0.02em', lineHeight: 1 }}>{fmt(weeklyLow)}–{fmt(weeklyHigh)}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--tako-amber)', marginTop: 6 }}>{tr('FCFA / week · ≈', 'FCFA / sem. · ≈')} {fmt(monthly)} {tr('a month', 'par mois')}</div>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-3)', textAlign: 'center', margin: '14px 0 0' }}>{tr('Estimate before expenses. Actual earnings vary with demand, hours and tips.', 'Estimation avant charges. Les revenus réels varient selon la demande, les heures et les pourboires.')}</p>
    </div>
  );
}

function EarnHero() {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 0.82fr', gap: 56, alignItems: 'center', paddingTop: 72, paddingBottom: 72 }} className="hero-grid stack-pad">
        <div>
          <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>{tr('Earnings', 'Revenus')}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
            {tr('Earn on your terms.', 'Gagnez selon vos conditions.')}
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '24px 0 32px', maxWidth: 480 }}>
            {tr('Transparent fares, weekly payouts and 100% of your tips. Drive when you want and keep more of every trip with Tako.', 'Des prix transparents, des paiements hebdomadaires et 100 % de vos pourboires. Conduisez quand vous voulez et gardez plus sur chaque course avec Tako.')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Start earning', 'Commencer à gagner')}</SBtn>
            <SBtn variant="outline" href="requirements.html">{tr('See requirements', 'Voir les conditions')}</SBtn>
          </div>
        </div>
        <Calculator />
      </div>
    </section>
  );
}

function FareBreakdown() {
  const parts = [
    ['badge-cent', tr('Base fare', 'Prix de base'), tr('A flat amount on every trip to get you moving.', 'Un montant fixe sur chaque course pour démarrer.')],
    ['clock', tr('Time & distance', 'Temps & distance'), tr('You earn for every minute and kilometre you drive.', 'Vous gagnez pour chaque minute et chaque kilomètre parcourus.')],
    ['trending-up', tr('Peak bonuses', 'Bonus de pointe'), tr('Earn more when and where demand is highest.', 'Gagnez plus là où et quand la demande est la plus forte.')],
    ['banknote', tr('100% of tips', '100 % des pourboires'), tr('Every tip a rider leaves is yours, in full.', 'Chaque pourboire laissé par un passager vous revient, en entier.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64 }} className="stack-pad">
      <SectionHead over={tr('How pay works', 'Comment ça paie')} title={tr('What goes into every fare', 'Ce qui compose chaque course')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="grid-4">
        {parts.map(([ic, t2, d], i) => (
          <Reveal key={t2} delay={(i % 4) * 60} style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 24 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, margin: '0 0 6px' }}>{t2}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Payouts() {
  const opts = [
    ['banknote', tr('Weekly deposit', 'Versement hebdomadaire'), tr('Your earnings land automatically every week via Mobile Money — reliable and on time.', 'Vos revenus arrivent automatiquement chaque semaine par Mobile Money — fiable et à l’heure.')],
    ['smartphone', tr('Cash out anytime', 'Retrait à tout moment'), tr('Need it sooner? Cash out your balance to Mobile Money in seconds, up to several times a day.', 'Besoin plus tôt ? Retirez votre solde sur Mobile Money en quelques secondes, plusieurs fois par jour.')],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 64, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Getting paid', 'Être payé')} title={tr('Your money, when you want it', 'Votre argent, quand vous voulez')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
          {opts.map(([ic, t2, d], i) => (
            <Reveal key={t2} delay={(i % 2) * 70} style={{ display: 'flex', gap: 20, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={26} /></div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 6px' }}>{t2}</h3>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EarnCTA() {
  return (
    <section style={{ ...WRAP, paddingTop: 16, paddingBottom: 96 }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', borderRadius: 28, padding: '64px 56px', textAlign: 'center' }}>
        <LaneMotif style={{ opacity: 0.4 }} />
        <div style={{ position: 'relative', maxWidth: 540, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.4vw,44px)', letterSpacing: '-0.025em', color: '#fff', margin: '0 0 16px' }}>{tr('Start earning this week', 'Commencez à gagner cette semaine')}</h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: '0 0 28px' }}>{tr('Sign up in minutes. Most drivers are on the road within a couple of days.', 'Inscrivez-vous en quelques minutes. La plupart des chauffeurs roulent en quelques jours.')}</p>
          <SBtn variant="amber" icon="arrow-right" size="lg" href="auth.html">{tr('Become a Tako driver', 'Devenir chauffeur Tako')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function Earnings() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="drive.html" />
      <EarnHero />
      <FareBreakdown />
      <Payouts />
      <EarnCTA />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Earnings />);
