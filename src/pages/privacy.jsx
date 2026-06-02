/* Tako — Privacy Notice (placeholder legal page) */

function LegalHero({ over, title, updated }) {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 72, paddingBottom: 48 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>{over}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,4.6vw,56px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0 }}>{title}</h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-3)', margin: '18px 0 0' }}>Last updated {updated}</p>
      </div>
    </section>
  );
}

function Privacy() {
  useIcons();
  const sections = [
    ['Information we collect', 'Account details (name, phone or email), trip information (pick-up and drop-off, route and fare), payment method, device and approximate location while you use the app.'],
    ['How we use your information', 'To match you with drivers, process payments, provide support, keep the service safe, and improve how Tako works. We do not sell your personal data.'],
    ['Sharing', 'We share trip details with your driver to complete the ride, with payment partners to process fares, and with authorities only where required by law.'],
    ['Your choices and rights', 'You can access or update your information in the app, control trip-sharing, and request deletion of your account. Contact us to exercise any data rights available to you.'],
    ['Data security', 'Phone numbers are masked in-app and we use industry-standard safeguards to protect your data. No system is perfectly secure, so please protect your account credentials.'],
    ['Contact', 'Questions about privacy? Email privacy@tako.cm and our team will respond within one business day.'],
  ];
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <LegalHero over="Legal" title="Privacy Notice" updated="1 June 2026" />
      <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 96, maxWidth: 820 }} className="stack-pad">
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 36px' }}>
          This placeholder notice explains, in plain terms, what Tako would collect and how it would be used.
          It is provided for the concept site and is not a binding privacy policy.
        </p>
        {sections.map(([h, body], i) => (
          <div key={h} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', margin: '0 0 10px' }}>{i + 1}. {h}</h2>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>{body}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Privacy />);
