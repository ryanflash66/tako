/* Tako — Accessibility (placeholder legal page) */
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

function Accessibility() {
  useIcons();
  const sections = [
    [tr('Our commitment', 'Notre engagement'), tr('Tako wants every rider to move freely, whatever their abilities. We aim to make both the ride itself and the app that books it usable by as many people as possible, and we treat accessibility as part of designing the service, not an afterthought.', 'Tako veut que chaque passager se déplace librement, quelles que soient ses capacités. Nous cherchons à rendre à la fois le trajet et l’app qui le réserve utilisables par le plus grand nombre, et nous considérons l’accessibilité comme une partie intégrante de la conception du service, et non comme une réflexion après coup.')],
    [tr('An app everyone can use', 'Une app utilisable par tous'), tr('We design the app to work with screen readers, to respect your device’s large-text and high-contrast settings, and to be operable without precise gestures. Clear labels and good colour contrast help riders with low vision or motor differences book a trip with confidence.', 'Nous concevons l’app pour qu’elle fonctionne avec les lecteurs d’écran, qu’elle respecte les réglages de grand texte et de contraste élevé de votre appareil, et qu’elle s’utilise sans gestes de précision. Des libellés clairs et un bon contraste des couleurs aident les passagers malvoyants ou ayant des différences motrices à réserver un trajet en toute confiance.')],
    [tr('Accessible rides', 'Trajets accessibles'), tr('Where available in your city, you can request a wheelchair-accessible vehicle, and you can save accessibility preferences on your profile so drivers know how best to help. Service animals are always welcome.', 'Là où le service est disponible dans votre ville, vous pouvez demander un véhicule accessible en fauteuil roulant et enregistrer des préférences d’accessibilité sur votre profil afin que les chauffeurs sachent comment vous aider au mieux. Les animaux d’assistance sont toujours les bienvenus.')],
    [tr('Requesting accommodations', 'Demander des aménagements'), tr('If you need a specific accommodation for a trip, you can note it in the app before you ride or tell your driver directly. We ask drivers to provide reasonable assistance, such as help with stowing a mobility aid.', 'Si vous avez besoin d’un aménagement particulier pour un trajet, vous pouvez l’indiquer dans l’app avant de partir ou en informer directement votre chauffeur. Nous demandons aux chauffeurs de fournir une aide raisonnable, par exemple pour ranger une aide à la mobilité.')],
    [tr('Feedback', 'Vos retours'), tr('Accessibility is never finished. If something is hard to use or you have an idea that would help, please tell us — your feedback directly shapes what we improve next.', 'L’accessibilité n’est jamais terminée. Si quelque chose est difficile à utiliser ou si vous avez une idée qui pourrait aider, dites-le-nous — vos retours orientent directement nos prochaines améliorations.')],
  ];
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <LegalHero over={tr('Legal', 'Mentions légales')} title={tr('Accessibility', 'Accessibilité')} updated={tr('1 June 2026', '1 juin 2026')} />
      <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 96, maxWidth: 820 }} className="stack-pad">
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 36px' }}>
          {tr('This placeholder statement describes how Tako would approach accessibility for riders and drivers. It is provided for the concept site and is not a binding commitment.', 'Cette déclaration fictive décrit la façon dont Tako aborderait l’accessibilité pour les passagers et les chauffeurs. Elle est fournie pour le site concept et ne constitue pas un engagement contraignant.')}
        </p>
        {sections.map(([h, body], i) => (
          <div key={h} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', margin: '0 0 10px' }}>{i + 1}. {h}</h2>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>{body}</p>
          </div>
        ))}
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.65, margin: '8px 0 0' }}>
          {tr('Share accessibility feedback or request help via our ', 'Partagez vos retours sur l’accessibilité ou demandez de l’aide via notre ')}
          <a href="contact.html" className="link-amber" style={{ color: 'var(--tako-amber-deep)', fontWeight: 600 }}>{tr('contact page', 'page de contact')}</a>.
        </p>
      </section>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Accessibility />);
