/* Tako — Terms of Use (placeholder legal page) */

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

function LegalBody({ sections }) {
  return (
    <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 96, maxWidth: 820 }} className="stack-pad">
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 36px' }}>
        This is a placeholder document for the Tako concept site. It is not legal advice and does not
        constitute a binding agreement.
      </p>
      {sections.map(([h, body], i) => (
        <div key={h} style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', margin: '0 0 10px' }}>{i + 1}. {h}</h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>{body}</p>
        </div>
      ))}
    </section>
  );
}

function Terms() {
  useIcons();
  const sections = [
    ['Acceptance of terms', 'By creating a Tako account or using the Tako apps and website, you agree to these Terms of Use and to our Privacy Notice. If you do not agree, please do not use the service.'],
    ['Your account', 'You are responsible for keeping your account credentials secure and for all activity under your account. You must be at least 18 years old to ride or drive with Tako.'],
    ['Rides and payments', 'Fares are shown before you confirm a trip and may adjust for changes such as added stops, route changes or wait time. Payment is taken by cash or Mobile Money as selected. Drivers are independent contractors, not employees of Tako.'],
    ['Acceptable use', 'Treat drivers, riders and support staff with respect. Do not use Tako for any unlawful purpose, and do not interfere with the safe operation of the service.'],
    ['Disclaimers and liability', 'The service is provided on an "as is" basis. To the extent permitted by law, Tako is not liable for indirect or consequential losses arising from your use of the service.'],
    ['Changes to these terms', 'We may update these terms from time to time. Material changes will be notified in the app, and continued use after an update means you accept the revised terms.'],
  ];
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <LegalHero over="Legal" title="Terms of Use" updated="1 June 2026" />
      <LegalBody sections={sections} />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Terms />);
