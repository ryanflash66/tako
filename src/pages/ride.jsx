/* Tako — Ride page */

const RIDE_TIERS = [
  { key: 'moto', name: 'Tako Moto', icon: 'bike', desc: 'Beat the traffic on two wheels — the fastest way across town.', base: 400, perkm: 110, etaMin: 2, seats: '1' },
  { key: 'go', name: 'Tako Go', icon: 'car', desc: 'Affordable everyday rides for getting around the city.', base: 700, perkm: 230, etaMin: 4, seats: '4' },
  { key: 'comfort', name: 'Tako Comfort', icon: 'car-front', desc: 'Newer cars, extra legroom and top-rated drivers.', base: 1100, perkm: 340, etaMin: 5, seats: '4' },
  { key: 'xl', name: 'Tako XL', icon: 'users', desc: 'Roomy rides for groups and luggage, up to six seats.', base: 1500, perkm: 430, etaMin: 7, seats: '6' },
];

function kmFor(from, to) {
  if (!from.trim() || !to.trim()) return null;
  return 3 + (Math.abs(hash(from.toLowerCase() + '→' + to.toLowerCase())) % 190) / 10; // 3.0–22.0 km
}
function priceFor(t, km) { return Math.round((t.base + t.perkm * km) / 100) * 100; }

function FareEstimator() {
  const [from, setFrom] = React.useState('Akwa, Douala');
  const [to, setTo] = React.useState('Bonabéri, Douala');
  const [sel, setSel] = React.useState('go');
  const km = kmFor(from, to);
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 24, padding: 24, boxShadow: 'var(--shadow-lg)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
        <SIcon name="calculator" size={18} color="var(--tako-amber-deep)" />
        <span className="tako-overline" style={{ color: 'var(--fg-2)' }}>Fare estimate</span>
      </div>
      <div style={{ position: 'relative', display: 'grid', gap: 10, marginBottom: 18 }}>
        <div style={{ position: 'absolute', left: 19, top: 22, bottom: 22, width: 2, background: 'var(--border-1)' }} />
        <label style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--border-1)', borderRadius: 12, padding: '12px 16px', background: 'var(--bg-2)' }}>
          <SIcon name="circle-dot" size={18} color="var(--gray-500)" />
          <input value={from} onChange={e => setFrom(e.target.value)} placeholder="Pick-up" style={{ border: 'none', outline: 'none', flex: 1, minWidth: 0, fontWeight: 600, fontSize: 15, background: 'transparent' }} />
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid var(--border-1)', borderRadius: 12, padding: '12px 16px', background: 'var(--bg-2)' }}>
          <SIcon name="square" size={16} color="var(--tako-amber-deep)" />
          <input value={to} onChange={e => setTo(e.target.value)} placeholder="Where to?" style={{ border: 'none', outline: 'none', flex: 1, minWidth: 0, fontWeight: 600, fontSize: 15, background: 'transparent' }} />
        </label>
      </div>
      {km ? (
        <React.Fragment>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 700, color: 'var(--fg-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Choose a ride</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-2)' }}>≈ {km.toFixed(1)} km</span>
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            {RIDE_TIERS.map(t => {
              const active = sel === t.key;
              return (
                <button key={t.key} onClick={() => setSel(t.key)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', borderRadius: 14, cursor: 'pointer',
                  border: active ? '2px solid var(--tako-black)' : '1px solid var(--border-1)', background: active ? 'var(--bg-2)' : '#fff', textAlign: 'left', transition: 'all .15s' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: active ? 'var(--tako-black)' : 'var(--gray-100)', color: active ? '#fff' : 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={t.icon} size={20} /></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15 }}>{t.name}</div>
                    <div style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-3)' }}>{t.etaMin} min away · {t.seats} seat{t.seats !== '1' ? 's' : ''}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16 }}>{fmt(priceFor(t, km))}</div>
                </button>
              );
            })}
          </div>
          <SBtn variant="amber" icon="arrow-right" href="auth.html" style={{ width: '100%', marginTop: 16 }}>Request {RIDE_TIERS.find(t => t.key === sel).name}</SBtn>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-3)', textAlign: 'center', margin: '12px 0 0' }}>Estimates in FCFA. Final fare confirmed in the app before you ride.</p>
        </React.Fragment>
      ) : (
        <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--fg-3)', fontWeight: 600 }}>Enter a pick-up and destination to compare fares.</div>
      )}
    </div>
  );
}

function RideHero() {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: 56, alignItems: 'center', paddingTop: 72, paddingBottom: 72 }} className="hero-grid stack-pad">
        <div>
          <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>Ride</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
            Your ride,<br />across Cameroon.
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '24px 0 32px', maxWidth: 480 }}>
            From a quick Moto through Douala traffic to an XL for the whole family — see the fare before you book, every time.
          </p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[['badge-cent', 'Upfront pricing'], ['smartphone', 'Pay cash or Mobile Money'], ['route', 'Live trip tracking']].map(([ic, t]) => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14 }}><SIcon name={ic} size={18} color="var(--tako-amber-deep)" /> {t}</span>
            ))}
          </div>
        </div>
        <FareEstimator />
      </div>
    </section>
  );
}

function RideOptions() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over="Ride options" title="Pick the ride that fits the moment" sub="Four ways to move, all with fares shown up front and drivers you can trust." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {RIDE_TIERS.map((t, i) => (
          <Reveal key={t.key} delay={i * 60} className="lift" style={{ display: 'flex', gap: 22, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 28 }}>
            <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={t.icon} size={30} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 6 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: 0 }}>{t.name}</h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15 }}>from {fmt(t.base + t.perkm * 4)}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 14px' }}>{t.desc}</p>
              <div style={{ display: 'flex', gap: 16, fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 600, color: 'var(--fg-3)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><SIcon name="user" size={15} /> {t.seats} seat{t.seats !== '1' ? 's' : ''}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><SIcon name="clock" size={15} /> ~{t.etaMin} min away</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function RideFeatures() {
  const feats = [
    ['badge-cent', 'Fares up front', 'See the exact price before you confirm. No surprises, no meter anxiety.'],
    ['smartphone', 'Pay your way', 'Cash or Mobile Money (MTN & Orange) — whatever works for you.'],
    ['route', 'Track in real time', 'Watch your driver approach and follow the whole trip on the map.'],
    ['calendar-clock', 'Schedule ahead', 'Book a ride for later — airport runs, early meetings, you name it.'],
    ['map-pinned', 'Add stops', 'Pick up a friend or run an errand with multiple stops on one trip.'],
    ['headset', '24/7 support', 'A real team in Cameroon, ready whenever you need a hand.'],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over="Why ride with Tako" title="Everything the trip needs, nothing it doesn’t" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
          {feats.map(([ic, t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RideSteps() {
  const steps = [
    { icon: 'map-pin', t: 'Set your destination', d: 'Tell us where you’re headed and we’ll show options and fares instantly.' },
    { icon: 'navigation', t: 'Match with a driver', d: 'We connect you to the nearest verified driver in seconds.' },
    { icon: 'flag', t: 'Ride and pay', d: 'Track your trip, arrive, and pay by cash or Mobile Money.' },
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over="How it works" title="Three taps to your ride" />
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

function Ride() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="ride.html" />
      <RideHero />
      <RideOptions />
      <RideFeatures />
      <RideSteps />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Ride />);
