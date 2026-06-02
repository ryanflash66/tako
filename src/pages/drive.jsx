/* Tako — Drive page */
import { t as tr } from '../lib/i18n.js';

const DRIVE_CITIES = [
  { name: 'Douala', rate: 2400 },
  { name: 'Yaoundé', rate: 2300 },
  { name: 'Bamenda', rate: 1850 },
  { name: 'Bafoussam', rate: 1750 },
  { name: 'Buea', rate: 1900 },
];

function EarningsCalculator() {
  const [hours, setHours] = React.useState(28);
  const [cityIdx, setCityIdx] = React.useState(0);
  const rate = DRIVE_CITIES[cityIdx].rate;
  const weeklyLow = Math.round(hours * rate / 1000) * 1000;
  const weeklyHigh = Math.round(hours * rate * 1.28 / 1000) * 1000;
  const monthly = Math.round(weeklyHigh * 4.33 / 1000) * 1000;
  const trips = Math.round(hours * 1.9);
  const pct = Math.round(((hours - 5) / (60 - 5)) * 100);
  return (
    <div style={{ background: '#fff', borderRadius: 24, padding: 28, boxShadow: 'var(--shadow-xl)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <SIcon name="wallet" size={18} color="var(--tako-amber-deep)" />
        <span className="tako-overline" style={{ color: 'var(--fg-2)' }}>{tr('Earnings estimator', 'Estimateur de revenus')}</span>
      </div>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 22px' }}>
        {tr('See what you could make. Drag the slider to set your weekly hours and pick your city — we’ll estimate your take-home.', 'Voyez ce que vous pourriez gagner. Faites glisser le curseur pour définir vos heures hebdomadaires et choisissez votre ville — nous estimons votre revenu.')}
      </p>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12, gap: 12 }}>
          <label style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: 'var(--tako-black)' }}>{tr('How many hours will you drive each week?', 'Combien d’heures conduirez-vous par semaine ?')}</label>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 18, whiteSpace: 'nowrap', color: 'var(--tako-black)' }}>{hours}h</span>
        </div>
        <input type="range" className="t-range" min="5" max="60" step="1" value={hours} onChange={e => setHours(+e.target.value)} aria-label="Hours driven per week" />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontFamily: 'var(--font-text)', fontSize: 12, fontWeight: 600, color: 'var(--fg-3)' }}>
          <span>{tr('5h · part-time', '5 h · temps partiel')}</span>
          <span style={{ color: 'var(--tako-amber-deep)' }}>≈ {trips} {tr('trips / week', 'courses / sem.')}</span>
          <span>{tr('60h · full-time', '60 h · temps plein')}</span>
        </div>
      </div>
      <div style={{ marginBottom: 26 }}>
        <label style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: 'var(--tako-black)', display: 'block', marginBottom: 12 }}>{tr('Where will you drive?', 'Où allez-vous conduire ?')}</label>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {DRIVE_CITIES.map((c, i) => (
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
          <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--gray-300)', marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            {tr('Driving', 'En conduisant')} <strong style={{ color: '#fff' }}>{hours}h / {tr('week', 'sem.')}</strong> {tr('in', 'à')} <strong style={{ color: '#fff' }}>{DRIVE_CITIES[cityIdx].name}</strong>
          </div>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-3)', textAlign: 'center', margin: '14px 0 0' }}>{tr('Estimate before expenses. Actual earnings vary with demand, hours and tips.', 'Estimation avant charges. Les revenus réels varient selon la demande, les heures et les pourboires.')}</p>
    </div>
  );
}

function DriveHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', display: 'grid', gridTemplateColumns: '1fr 0.82fr', gap: 56, alignItems: 'center', paddingTop: 80, paddingBottom: 80 }} className="hero-grid stack-pad">
        <div>
          <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Drive with Tako', 'Conduire avec Tako')}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,66px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: 0 }}>
            {tr('Your car.', 'Votre voiture.')}<br />{tr('Your hours.', 'Vos horaires.')}<br />{tr('Your money.', 'Votre argent.')}
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 460 }}>
            {tr('Turn your vehicle into income on your own schedule. Get paid every week and keep more of every fare with Tako.', 'Transformez votre véhicule en revenus, à votre rythme. Payé chaque semaine et gardez plus sur chaque course avec Tako.')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" href="#signup">{tr('Start earning', 'Commencer à gagner')}</SBtn>
            <SBtn variant="outlineLight" href="#requirements">{tr('See requirements', 'Voir les conditions')}</SBtn>
          </div>
        </div>
        <EarningsCalculator />
      </div>
    </section>
  );
}

function DriveBenefits() {
  const feats = [
    ['calendar-check', tr('Drive any time', 'Conduisez quand vous voulez'), tr('Go online when it suits you. No shifts, no boss, no minimum hours.', 'Connectez-vous quand ça vous arrange. Pas d’horaires imposés, pas de patron, pas de minimum.')],
    ['banknote', tr('Weekly payouts', 'Paiements hebdomadaires'), tr('Your earnings land every week via Mobile Money — reliable, on time.', 'Vos revenus arrivent chaque semaine par Mobile Money — fiable, à l’heure.')],
    ['percent', tr('Keep more', 'Gardez plus'), tr('Lower commission than the competition means more of the fare stays with you.', 'Une commission plus basse que la concurrence : une plus grande part de la course vous revient.')],
    ['trending-up', tr('Earn more at peak', 'Gagnez plus en pointe'), tr('Amber zones show you where demand is highest, so every hour counts.', 'Les zones ambrées indiquent où la demande est la plus forte, pour que chaque heure compte.')],
    ['navigation', tr('Built-in navigation', 'Navigation intégrée'), tr('Turn-by-turn directions and the best routes, right in the driver app.', 'Guidage virage par virage et meilleurs itinéraires, directement dans l’app chauffeur.')],
    ['life-buoy', tr('Driver support', 'Assistance chauffeur'), tr('A local team and 24/7 help for anything you hit on the road.', 'Une équipe locale et une aide 24/7 pour tout imprévu sur la route.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Why drive with Tako', 'Pourquoi conduire avec Tako')} title={tr('Built around the driver', 'Pensé pour le chauffeur')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {feats.map(([ic, t, d], i) => (
          <Reveal key={t} delay={(i % 3) * 70} style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Requirements() {
  const driver = [tr('18+ with a valid Cameroonian driver’s licence', 'Plus de 18 ans avec un permis de conduire camerounais valide'), tr('National ID card or passport', 'Carte nationale d’identité ou passeport'), tr('Clean driving record', 'Casier de conduite vierge'), tr('A smartphone (Android 8+ / iOS 13+)', 'Un smartphone (Android 8+ / iOS 13+)')];
  const vehicle = [tr('4-door car, 2010 or newer (Go) — or a registered motorcycle (Moto)', 'Voiture 4 portes, 2010 ou plus récente (Go) — ou une moto immatriculée (Moto)'), tr('Valid registration (carte grise) & insurance', 'Carte grise et assurance valides'), tr('Roadworthy, in good condition', 'En bon état, apte à circuler'), tr('Passes a quick Tako vehicle inspection', 'Réussit une inspection rapide du véhicule Tako')];
  return (
    <section id="requirements" style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Requirements', 'Conditions')} title={tr('What you need to get started', 'Ce qu’il faut pour commencer')} sub={tr('Have these ready and most drivers are approved within a couple of days.', 'Préparez ces éléments et la plupart des chauffeurs sont approuvés en quelques jours.')} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-2">
          {[['user-round', tr('You, the driver', 'Vous, le chauffeur'), driver], ['car', tr('Your vehicle', 'Votre véhicule'), vehicle]].map(([ic, title, items]) => (
            <div key={title} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={ic} size={22} /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: 0 }}>{title}</h3>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 14 }}>
                {items.map(it => (
                  <li key={it} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <SIcon name="check" size={20} color="var(--success)" style={{ marginTop: 1 }} />
                    <span style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-1)', fontWeight: 500, lineHeight: 1.45 }}>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DriveSteps() {
  const steps = [
    { icon: 'file-text', t: tr('Sign up online', 'Inscrivez-vous en ligne'), d: tr('Tell us about you and your vehicle and upload your documents — 10 minutes.', 'Parlez-nous de vous et de votre véhicule et téléversez vos documents — 10 minutes.') },
    { icon: 'badge-check', t: tr('Get verified', 'Faites-vous vérifier'), d: tr('We review your documents and run a quick vehicle inspection.', 'Nous examinons vos documents et réalisons une inspection rapide du véhicule.') },
    { icon: 'steering-wheel', t: tr('Go online & earn', 'Connectez-vous et gagnez'), d: tr('Download the driver app, switch on, and accept your first trip.', 'Téléchargez l’app chauffeur, mettez-vous en ligne et acceptez votre première course.') },
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Getting started', 'Pour commencer')} title={tr('On the road in three steps', 'Sur la route en trois étapes')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }} className="grid-3">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: 'var(--tako-amber-deep)' }}>0{i + 1}</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border-1)' }} />
              <div style={{ width: 44, height: 44, borderRadius: 12, border: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={s.icon === 'steering-wheel' ? 'navigation' : s.icon} size={22} /></div>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, margin: '0 0 8px' }}>{s.t}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{s.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function DriverVoices() {
  const items = [
    { q: tr('I clear my weekly target driving evenings only. The payout never misses.', 'J’atteins mon objectif hebdomadaire en conduisant seulement le soir. Le paiement est toujours au rendez-vous.'), n: 'Emmanuel T.', r: tr('Driving since 2024 · Yaoundé', 'Chauffeur depuis 2024 · Yaoundé') },
    { q: tr('The amber demand zones changed how I work. I drive smarter, not longer.', 'Les zones de demande ambrées ont changé ma façon de travailler. Je conduis plus malin, pas plus longtemps.'), n: 'Roland K.', r: 'Tako Go · Douala' },
    { q: tr('Started on my motorcycle. Now it pays my rent and my daughter’s school fees.', 'J’ai commencé avec ma moto. Elle paie aujourd’hui mon loyer et la scolarité de ma fille.'), n: 'Brice N.', r: 'Tako Moto · Bafoussam' },
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Driver stories', 'Témoignages de chauffeurs')} title={tr('Earnings that show up', 'Des revenus au rendez-vous')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 80} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <SIcon name="quote" size={26} color="var(--tako-amber)" />
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, lineHeight: 1.4, margin: 0, letterSpacing: '-0.01em' }}>“{t.q}”</p>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--tako-charcoal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>{t.n[0]}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15 }}>{t.n}</div>
                  <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)' }}>{t.r}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignupCTA() {
  return (
    <section id="signup" style={{ ...WRAP, paddingTop: 16, paddingBottom: 96 }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', borderRadius: 28, padding: '72px 56px', textAlign: 'center' }}>
        <LaneMotif style={{ opacity: 0.4 }} />
        <div style={{ position: 'relative', maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.4vw,44px)', letterSpacing: '-0.025em', color: '#fff', margin: '0 0 16px' }}>{tr('Ready to earn on your terms?', 'Prêt à gagner selon vos conditions ?')}</h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: '0 0 28px' }}>{tr('Sign up in minutes. Drive this week.', 'Inscrivez-vous en quelques minutes. Conduisez cette semaine.')}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" size="lg" href="auth.html">{tr('Become a Tako driver', 'Devenir chauffeur Tako')}</SBtn>
            <SBtn variant="outlineLight" size="lg" href="help.html">{tr('Talk to our team', 'Parler à notre équipe')}</SBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Drive() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="drive.html" />
      <DriveHero />
      <DriveBenefits />
      <Requirements />
      <DriveSteps />
      <DriverVoices />
      <SignupCTA />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Drive />);
