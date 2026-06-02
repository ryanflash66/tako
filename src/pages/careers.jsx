/* Tako — Careers page */

const ROLES = [
  { title: 'Senior Backend Engineer', team: 'Engineering', city: 'Douala', type: 'Full-time' },
  { title: 'City Operations Manager', team: 'Operations', city: 'Yaoundé', type: 'Full-time' },
  { title: 'Driver Support Specialist', team: 'Support', city: 'Douala', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', city: 'Remote · Cameroon', type: 'Full-time' },
];

function CareersHero() {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 72, paddingBottom: 56, maxWidth: 760 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>Careers</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,4.8vw,60px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          Help build the way Cameroon moves.
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '20px 0 0' }}>
          We're a small, fast team solving real problems on real roads. If that sounds like you, we'd love to talk.
        </p>
      </div>
    </section>
  );
}

function Perks() {
  const perks = [
    ['trending-up', 'Real ownership', 'Small team, big scope — your work ships and matters from day one.'],
    ['handshake', 'Local impact', 'Build something that improves daily life for thousands across Cameroon.'],
    ['life-buoy', 'Look after you', 'Competitive pay, health cover and Tako ride credit every month.'],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 80, paddingBottom: 56 }} className="stack-pad">
      <SectionHead over="Why Tako" title="A place to do your best work" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {perks.map(([ic, t2, d], i) => (
          <Reveal key={t2} delay={i * 70} style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t2}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function OpenRoles() {
  return (
    <section style={{ ...WRAP, paddingTop: 40, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over="Open roles" title="Find your seat" />
      <div style={{ display: 'grid', gap: 12 }}>
        {ROLES.map((r) => (
          <a key={r.title} href="mailto:careers@tako.cm" className="lift" style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 24px', textDecoration: 'none', color: 'var(--fg-1)' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19 }}>{r.title}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', marginTop: 2 }}>{r.team} · {r.city} · {r.type}</div>
            </div>
            <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--tako-amber-deep)' }}>Apply <SIcon name="arrow-right" size={17} /></span>
          </a>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', margin: '28px 0 0' }}>
        No role that fits? We're always glad to meet good people — email <a href="mailto:careers@tako.cm" className="link-amber">careers@tako.cm</a>.
      </p>
    </section>
  );
}

function Careers() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <CareersHero />
      <Perks />
      <OpenRoles />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Careers />);
