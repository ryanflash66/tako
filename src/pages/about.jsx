/* Tako — About page */

function AboutHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88, maxWidth: 860 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>About Tako</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.2vw,66px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          Moving Cameroon forward, one ride at a time.
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 620 }}>
          Tako is a homegrown rideshare service built for the way Cameroon really moves — from Douala
          gridlock to rural roads, with fair fares for riders and real earnings for drivers.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64, maxWidth: 820 }} className="stack-pad">
      <SectionHead over="Our story" title="Built here, for here" />
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.7, margin: '0 0 18px' }}>
        Tako started with a simple frustration: getting around Cameroonian cities was slower, pricier and
        less predictable than it should be. We set out to fix that with technology designed for local
        roads, local payments and local trust.
      </p>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.7, margin: 0 }}>
        Today Tako connects thousands of drivers with riders across eleven cities, with upfront pricing,
        cash and Mobile Money payments, and a safety system that looks out for everyone on the road.
      </p>
    </section>
  );
}

function ByNumbers() {
  const stats = [['11', 'cities live'], ['8,000+', 'active drivers'], ['2 min', 'avg pickup'], ['4.9★', 'avg trip rating']];
  return (
    <div style={{ borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)', background: 'var(--bg-2)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, paddingTop: 40, paddingBottom: 40 }} className="grid-4 stack-pad">
        {stats.map(([n, l]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, letterSpacing: '-0.02em' }}>{n}</div>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', fontWeight: 600 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Values() {
  const vals = [
    ['shield-check', 'Safety first', 'Trust is the foundation — verified drivers, live trip sharing and help when you need it.'],
    ['badge-cent', 'Fair for everyone', 'Upfront fares for riders, lower commission and weekly payouts for drivers.'],
    ['map-pinned', 'Built for Cameroon', 'Local roads, local payments, local support — designed around how people actually move here.'],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 80, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over="What we believe" title="The values behind every trip" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {vals.map(([ic, t2, d], i) => (
          <Reveal key={t2} delay={i * 70} style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t2}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <AboutHero />
      <Story />
      <ByNumbers />
      <Values />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<About />);
