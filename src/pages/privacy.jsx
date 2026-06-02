/* Tako — Privacy Notice (placeholder legal page) */
import { t as tr } from '../lib/i18n.js';

function LegalHero({ over, title, updated }) {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 72, paddingBottom: 48 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>{over}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,4.6vw,56px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0 }}>{title}</h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-3)', margin: '18px 0 0' }}>{tr('Last updated', 'Dernière mise à jour')} {updated}</p>
      </div>
    </section>
  );
}

function Privacy() {
  useIcons();
  const sections = [
    [tr('Information we collect', 'Informations que nous collectons'), tr('Account details (name, phone or email), trip information (pick-up and drop-off, route and fare), payment method, device and approximate location while you use the app.', 'Coordonnées du compte (nom, téléphone ou e-mail), informations de trajet (départ et destination, itinéraire et prix), moyen de paiement, appareil et position approximative pendant que vous utilisez l’app.')],
    [tr('How we use your information', 'Comment nous utilisons vos informations'), tr('To match you with drivers, process payments, provide support, keep the service safe, and improve how Tako works. We do not sell your personal data.', 'Pour vous associer à des chauffeurs, traiter les paiements, fournir une assistance, assurer la sécurité du service et améliorer le fonctionnement de Tako. Nous ne vendons pas vos données personnelles.')],
    [tr('Sharing', 'Partage'), tr('We share trip details with your driver to complete the ride, with payment partners to process fares, and with authorities only where required by law.', 'Nous partageons les détails du trajet avec votre chauffeur pour réaliser la course, avec les partenaires de paiement pour traiter les prix, et avec les autorités uniquement lorsque la loi l’exige.')],
    [tr('Your choices and rights', 'Vos choix et vos droits'), tr('You can access or update your information in the app, control trip-sharing, and request deletion of your account. Contact us to exercise any data rights available to you.', 'Vous pouvez consulter ou mettre à jour vos informations dans l’app, contrôler le partage de trajet et demander la suppression de votre compte. Contactez-nous pour exercer vos droits sur vos données.')],
    [tr('Data security', 'Sécurité des données'), tr('Phone numbers are masked in-app and we use industry-standard safeguards to protect your data. No system is perfectly secure, so please protect your account credentials.', 'Les numéros de téléphone sont masqués dans l’app et nous utilisons des protections conformes aux standards du secteur. Aucun système n’est parfaitement sûr ; protégez donc vos identifiants.')],
    [tr('Contact', 'Contact'), tr('Questions about privacy? Email privacy@tako.cm and our team will respond within one business day.', 'Des questions sur la confidentialité ? Écrivez à privacy@tako.cm et notre équipe répondra sous un jour ouvré.')],
  ];
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <LegalHero over={tr('Legal', 'Mentions légales')} title={tr('Privacy Notice', 'Avis de confidentialité')} updated={tr('1 June 2026', '1 juin 2026')} />
      <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 96, maxWidth: 820 }} className="stack-pad">
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 36px' }}>
          {tr('This placeholder notice explains, in plain terms, what Tako would collect and how it would be used. It is provided for the concept site and is not a binding privacy policy.', 'Cet avis fictif explique, en termes simples, ce que Tako collecterait et comment ces données seraient utilisées. Il est fourni pour le site concept et ne constitue pas une politique de confidentialité contraignante.')}
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
