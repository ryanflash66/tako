/* Tako — Newsroom page */

const POSTS = [
  { date: '12 May 2026', tag: 'Expansion', title: 'Tako launches in Ngaoundéré, Bertoua next', excerpt: 'Tako brings upfront-priced rides to the Adamaoua region, with Bertoua scheduled for Q3 2026.' },
  { date: '3 Apr 2026', tag: 'Safety', title: 'New in-app emergency button rolls out nationwide', excerpt: 'A single tap now connects riders to local response and shares live location and trip details.' },
  { date: '18 Feb 2026', tag: 'Drivers', title: 'Weekly Mobile Money payouts reach 8,000 drivers', excerpt: 'Tako drivers across eleven cities now receive reliable, on-time earnings every week.' },
  { date: '20 Jan 2026', tag: 'Company', title: 'Tako Business opens to companies across Cameroon', excerpt: 'One account, one invoice and full trip visibility for teams that move every day.' },
];

function NewsHero() {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 72, paddingBottom: 56, maxWidth: 760 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>Newsroom</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,4.8vw,60px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          What's new at Tako.
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '20px 0 0' }}>
          Announcements, milestones and stories from the road. For media enquiries, email <a href="mailto:press@tako.cm" className="link-amber">press@tako.cm</a>.
        </p>
      </div>
    </section>
  );
}

function Posts() {
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 96 }} className="stack-pad">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {POSTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 70} className="lift" style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--tako-amber-deep)', background: 'var(--tako-amber-soft)', padding: '4px 9px', borderRadius: 999 }}>{p.tag}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)' }}>{p.date}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', margin: 0, lineHeight: 1.2 }}>{p.title}</h2>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{p.excerpt}</p>
            <a href="#" className="link-amber" style={{ fontSize: 14, marginTop: 'auto' }}>Read more <SIcon name="arrow-right" size={16} /></a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Newsroom() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <NewsHero />
      <Posts />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Newsroom />);
