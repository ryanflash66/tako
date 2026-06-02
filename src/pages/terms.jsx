/* Tako — Terms of Use (placeholder legal page) */
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

function LegalBody({ sections }) {
  return (
    <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 96, maxWidth: 820 }} className="stack-pad">
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 36px' }}>
        {tr('This is a placeholder document for the Tako concept site. It is not legal advice and does not constitute a binding agreement.', 'Ce document est un texte fictif pour le site concept Tako. Il ne constitue pas un conseil juridique ni un accord contraignant.')}
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
    [tr('Acceptance of terms', 'Acceptation des conditions'), tr('By creating a Tako account or using the Tako apps and website, you agree to these Terms of Use and to our Privacy Notice. If you do not agree, please do not use the service.', 'En créant un compte Tako ou en utilisant les applications et le site Tako, vous acceptez les présentes Conditions d’utilisation et notre Avis de confidentialité. Si vous n’êtes pas d’accord, veuillez ne pas utiliser le service.')],
    [tr('Your account', 'Votre compte'), tr('You are responsible for keeping your account credentials secure and for all activity under your account. You must be at least 18 years old to ride or drive with Tako.', 'Vous êtes responsable de la sécurité de vos identifiants et de toute activité sur votre compte. Vous devez avoir au moins 18 ans pour voyager ou conduire avec Tako.')],
    [tr('Rides and payments', 'Courses et paiements'), tr('Fares are shown before you confirm a trip and may adjust for changes such as added stops, route changes or wait time. Payment is taken by cash or Mobile Money as selected. Drivers are independent contractors, not employees of Tako.', 'Les prix sont affichés avant la confirmation d’un trajet et peuvent varier en cas d’arrêts ajoutés, de changement d’itinéraire ou de temps d’attente. Le paiement se fait en espèces ou par Mobile Money selon votre choix. Les chauffeurs sont des prestataires indépendants, pas des employés de Tako.')],
    [tr('Acceptable use', 'Utilisation acceptable'), tr('Treat drivers, riders and support staff with respect. Do not use Tako for any unlawful purpose, and do not interfere with the safe operation of the service.', 'Traitez les chauffeurs, les passagers et l’équipe d’assistance avec respect. N’utilisez pas Tako à des fins illégales et n’entravez pas le bon fonctionnement du service.')],
    [tr('Disclaimers and liability', 'Avertissements et responsabilité'), tr('The service is provided on an "as is" basis. To the extent permitted by law, Tako is not liable for indirect or consequential losses arising from your use of the service.', 'Le service est fourni « en l’état ». Dans les limites permises par la loi, Tako n’est pas responsable des dommages indirects ou consécutifs liés à votre utilisation du service.')],
    [tr('Changes to these terms', 'Modifications des conditions'), tr('We may update these terms from time to time. Material changes will be notified in the app, and continued use after an update means you accept the revised terms.', 'Nous pouvons mettre à jour ces conditions de temps à autre. Les changements importants seront notifiés dans l’app, et toute utilisation après une mise à jour vaut acceptation des conditions révisées.')],
  ];
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <LegalHero over={tr('Legal', 'Mentions légales')} title={tr('Terms of Use', 'Conditions d’utilisation')} updated={tr('1 June 2026', '1 juin 2026')} />
      <LegalBody sections={sections} />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Terms />);
