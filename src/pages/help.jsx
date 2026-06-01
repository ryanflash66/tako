/* Tako — Help page */

const FAQS = [
  { c: 'Rides', q: 'How do I request a ride?', a: 'Open the Tako app, enter your destination, choose a ride option (Moto, Go, Comfort or XL) and tap Request. We’ll match you with the nearest driver and show your fare before you confirm.' },
  { c: 'Rides', q: 'Can I schedule a ride in advance?', a: 'Yes. When setting your destination, tap the clock icon to pick a date and time. We’ll have a driver ready for your scheduled pickup.' },
  { c: 'Rides', q: 'How do I add a stop to my trip?', a: 'Before or during your ride, tap “Add stop” and enter the address. Your fare updates automatically to include the extra stop.' },
  { c: 'Payments', q: 'What payment methods can I use?', a: 'You can pay with cash or Mobile Money (MTN Mobile Money and Orange Money). Choose your default in Payment settings, and switch per trip whenever you like.' },
  { c: 'Payments', q: 'Why is the final fare different from the estimate?', a: 'Fares are confirmed before you book and rarely change. If your route changes — extra stops, a longer path, heavy traffic — the fare adjusts and you’ll always see why in your receipt.' },
  { c: 'Payments', q: 'How do I get a receipt?', a: 'Every trip receipt is saved under Your Trips in the app and emailed to you automatically. Tap any past trip to view or re-send it.' },
  { c: 'Account', q: 'How do I create a Tako account?', a: 'Download the Tako app, enter your phone number, and verify it with the code we text you. Add your name and you’re ready to ride.' },
  { c: 'Account', q: 'I changed my phone number. What now?', a: 'Go to Settings → Account → Phone number to update it. We’ll verify the new number with a code to keep your account secure.' },
  { c: 'Safety', q: 'How do I share my trip with someone?', a: 'During any ride, tap “Share trip”. Your contact gets a live link with your route, driver details and ETA until you arrive.' },
  { c: 'Safety', q: 'What is the emergency button?', a: 'Tap the shield icon during a ride to reach local emergency response. Tako shares your live location and trip details so help can find you fast.' },
  { c: 'Driving', q: 'How do I become a Tako driver?', a: 'Visit the Drive page and sign up online with your licence, ID and vehicle documents. Most drivers are verified within a couple of days.' },
  { c: 'Driving', q: 'When and how do I get paid?', a: 'Driver earnings are paid out every week via Mobile Money. You can track your balance and trip history any time in the driver app.' },
  { c: 'Business', q: 'How does Tako Business billing work?', a: 'Your company gets one monthly invoice for all rides, payable by bank transfer or Mobile Money. Admins can see every trip and export reports from the dashboard.' },
];

const HELP_CATS = [
  ['user-round', 'Account', 'Sign up, profile and settings'],
  ['credit-card', 'Payments', 'Fares, receipts and Mobile Money'],
  ['car', 'Rides', 'Booking, options and trips'],
  ['shield-check', 'Safety', 'Sharing trips and emergencies'],
  ['steering-wheel', 'Driving', 'Becoming a driver and payouts'],
  ['briefcase', 'Business', 'Company accounts and billing'],
];

function HelpHero({ query, setQuery }) {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <LaneMotif style={{ opacity: 0.35 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80, maxWidth: 800, textAlign: 'center', marginInline: 'auto' }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>Help Centre</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,4.6vw,56px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0 }}>
          How can we help?
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderRadius: 16, padding: '6px 6px 6px 18px', maxWidth: 560, margin: '32px auto 0', boxShadow: 'var(--shadow-lg)' }}>
          <SIcon name="search" size={22} color="var(--gray-500)" />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search help articles…" style={{ border: 'none', outline: 'none', flex: 1, minWidth: 0, fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 16, padding: '12px 0', color: 'var(--fg-1)' }} />
          {query && <button onClick={() => setQuery('')} style={{ background: 'var(--bg-3)', border: 'none', borderRadius: 999, width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name="x" size={18} color="var(--fg-2)" /></button>}
        </div>
      </div>
    </section>
  );
}

function Categories({ setQuery }) {
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 24 }} className="stack-pad">
      <SectionHead over="Browse topics" title="Find answers by category" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="grid-3">
        {HELP_CATS.map(([ic, t, d], i) => (
          <Reveal key={t} delay={(i % 3) * 60}>
            <button onClick={() => setQuery(t)} className="lift" style={{ width: '100%', textAlign: 'left', display: 'flex', gap: 16, alignItems: 'center', background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 24, cursor: 'pointer' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic === 'steering-wheel' ? 'navigation' : ic} size={24} /></div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{t}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)' }}>{d}</div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AccordionItem({ item, open, onToggle }) {
  const bodyRef = React.useRef(null);
  return (
    <div className={`acc-item ${open ? 'open' : ''}`}>
      <button className="acc-head" onClick={onToggle}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--tako-amber-deep)', background: 'var(--tako-amber-soft)', padding: '4px 9px', borderRadius: 999 }}>{item.c}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--tako-black)' }}>{item.q}</span>
        </span>
        <span className="acc-chevron"><SIcon name="chevron-down" size={22} color="var(--fg-2)" /></span>
      </button>
      <div className="acc-body" ref={bodyRef} style={{ maxHeight: open ? (bodyRef.current ? bodyRef.current.scrollHeight + 4 : 400) : 0 }}>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 760 }}>{item.a}</p>
      </div>
    </div>
  );
}

function FAQList({ query }) {
  const [open, setOpen] = React.useState(0);
  const q = query.trim().toLowerCase();
  const list = q ? FAQS.filter(f => (f.q + ' ' + f.a + ' ' + f.c).toLowerCase().includes(q)) : FAQS;
  return (
    <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 96 }} className="stack-pad">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', margin: 0 }}>{q ? 'Search results' : 'Frequently asked'}</h2>
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', fontWeight: 600 }}>{list.length} article{list.length !== 1 ? 's' : ''}</span>
      </div>
      {list.length ? (
        <div style={{ marginTop: 16, borderTop: '1px solid var(--border-1)' }}>
          {list.map((f, i) => <AccordionItem key={f.q} item={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--fg-3)' }}>
          <SIcon name="search-x" size={40} color="var(--gray-400)" />
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, fontWeight: 600, margin: '16px 0 0' }}>No articles match “{query}”. Try a different word, or contact us below.</p>
        </div>
      )}
    </section>
  );
}

function ContactBand() {
  const opts = [
    ['message-circle', 'Chat in the app', 'Fastest way to reach us — open the app and tap Help.', 'Open chat'],
    ['mail', 'Email support', 'support@tako.cm · we reply within one business day.', 'Send email'],
    ['phone', 'Call us', 'Mon–Sat, 8am–8pm WAT for urgent ride issues.', 'See number'],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 88, paddingBottom: 96, borderTop: '1px solid var(--border-1)' }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over="Still stuck?" title="Talk to a human" sub="Our support team is based in Cameroon and ready to help with anything the articles didn’t cover." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
          {opts.map(([ic, t, d, cta], i) => (
            <Reveal key={t} delay={i * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 30, display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={26} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 8px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 20px', flex: 1 }}>{d}</p>
              <a href="#" className="link-amber" style={{ fontSize: 15 }}>{cta} <SIcon name="arrow-right" size={17} /></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Help() {
  useIcons();
  const [query, setQuery] = React.useState('');
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="help.html" />
      <HelpHero query={query} setQuery={setQuery} />
      <Categories setQuery={setQuery} />
      <FAQList query={query} />
      <ContactBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Help />);
