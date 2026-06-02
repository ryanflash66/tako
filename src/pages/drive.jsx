/* Tako — Drive page */

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
        <span className="tako-overline" style={{ color: 'var(--fg-2)' }}>Earnings estimator</span>
      </div>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 22px' }}>
        See what you could make. Drag the slider to set your weekly hours and pick your city — we’ll estimate your take-home.
      </p>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12, gap: 12 }}>
          <label style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: 'var(--tako-black)' }}>How many hours will you drive each week?</label>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 18, whiteSpace: 'nowrap', color: 'var(--tako-black)' }}>{hours}h</span>
        </div>
        <input type="range" className="t-range" min="5" max="60" step="1" value={hours} onChange={e => setHours(+e.target.value)} aria-label="Hours driven per week" />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontFamily: 'var(--font-text)', fontSize: 12, fontWeight: 600, color: 'var(--fg-3)' }}>
          <span>5h · part-time</span>
          <span style={{ color: 'var(--tako-amber-deep)' }}>≈ {trips} trips / week</span>
          <span>60h · full-time</span>
        </div>
      </div>
      <div style={{ marginBottom: 26 }}>
        <label style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: 'var(--tako-black)', display: 'block', marginBottom: 12 }}>Where will you drive?</label>
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
          <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 700, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>You could earn about</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, letterSpacing: '-0.02em', lineHeight: 1 }}>{fmt(weeklyLow)}–{fmt(weeklyHigh)}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--tako-amber)', marginTop: 6 }}>FCFA / week · ≈ {fmt(monthly)} a month</div>
          <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--gray-300)', marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            Driving <strong style={{ color: '#fff' }}>{hours}h / week</strong> in <strong style={{ color: '#fff' }}>{DRIVE_CITIES[cityIdx].name}</strong>
          </div>
        </div>
      </div>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-3)', textAlign: 'center', margin: '14px 0 0' }}>Estimate before expenses. Actual earnings vary with demand, hours and tips.</p>
    </div>
  );
}

function DriveHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', display: 'grid', gridTemplateColumns: '1fr 0.82fr', gap: 56, alignItems: 'center', paddingTop: 80, paddingBottom: 80 }} className="hero-grid stack-pad">
        <div>
          <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>Drive with Tako</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,66px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: 0 }}>
            Your car.<br />Your hours.<br />Your money.
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 460 }}>
            Turn your vehicle into income on your own schedule. Get paid every week and keep more of every fare with Tako.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" href="#signup">Start earning</SBtn>
            <SBtn variant="outlineLight" href="#requirements">See requirements</SBtn>
          </div>
        </div>
        <EarningsCalculator />
      </div>
    </section>
  );
}

function DriveBenefits() {
  const feats = [
    ['calendar-check', 'Drive any time', 'Go online when it suits you. No shifts, no boss, no minimum hours.'],
    ['banknote', 'Weekly payouts', 'Your earnings land every week via Mobile Money — reliable, on time.'],
    ['percent', 'Keep more', 'Lower commission than the competition means more of the fare stays with you.'],
    ['trending-up', 'Earn more at peak', 'Amber zones show you where demand is highest, so every hour counts.'],
    ['navigation', 'Built-in navigation', 'Turn-by-turn directions and the best routes, right in the driver app.'],
    ['life-buoy', 'Driver support', 'A local team and 24/7 help for anything you hit on the road.'],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over="Why drive with Tako" title="Built around the driver" />
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
  const driver = ['18+ with a valid Cameroonian driver’s licence', 'National ID card or passport', 'Clean driving record', 'A smartphone (Android 8+ / iOS 13+)'];
  const vehicle = ['4-door car, 2010 or newer (Go) — or a registered motorcycle (Moto)', 'Valid registration (carte grise) & insurance', 'Roadworthy, in good condition', 'Passes a quick Tako vehicle inspection'];
  return (
    <section id="requirements" style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over="Requirements" title="What you need to get started" sub="Have these ready and most drivers are approved within a couple of days." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="grid-2">
          {[['user-round', 'You, the driver', driver], ['car', 'Your vehicle', vehicle]].map(([ic, title, items]) => (
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
    { icon: 'file-text', t: 'Sign up online', d: 'Tell us about you and your vehicle and upload your documents — 10 minutes.' },
    { icon: 'badge-check', t: 'Get verified', d: 'We review your documents and run a quick vehicle inspection.' },
    { icon: 'steering-wheel', t: 'Go online & earn', d: 'Download the driver app, switch on, and accept your first trip.' },
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over="Getting started" title="On the road in three steps" />
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
    { q: 'I clear my weekly target driving evenings only. The payout never misses.', n: 'Emmanuel T.', r: 'Driving since 2024 · Yaoundé' },
    { q: 'The amber demand zones changed how I work. I drive smarter, not longer.', n: 'Roland K.', r: 'Tako Go · Douala' },
    { q: 'Started on my motorcycle. Now it pays my rent and my daughter’s school fees.', n: 'Brice N.', r: 'Tako Moto · Bafoussam' },
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over="Driver stories" title="Earnings that show up" />
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.4vw,44px)', letterSpacing: '-0.025em', color: '#fff', margin: '0 0 16px' }}>Ready to earn on your terms?</h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: '0 0 28px' }}>Sign up in minutes. Drive this week.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" size="lg" href="auth.html">Become a Tako driver</SBtn>
            <SBtn variant="outlineLight" size="lg" href="help.html">Talk to our team</SBtn>
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
