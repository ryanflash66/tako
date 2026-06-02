/* Tako — Cookie Policy (placeholder legal page) */
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

function Cookies() {
  useIcons();
  const sections = [
    [tr('What cookies are', 'Ce que sont les cookies'), tr('Cookies are small text files a website or app stores on your device. Similar technologies, such as local storage and device identifiers, work in much the same way. Together they help a service remember you between visits.', 'Les cookies sont de petits fichiers texte qu’un site ou une app enregistre sur votre appareil. Des technologies similaires, comme le stockage local et les identifiants d’appareil, fonctionnent de manière comparable. Ensemble, ils aident un service à vous reconnaître d’une visite à l’autre.')],
    [tr('Essential cookies', 'Cookies essentiels'), tr('These keep Tako working: they sign you in securely, remember your trip in progress, and protect against fraud. The service cannot function properly without them, so they cannot be switched off.', 'Ils font fonctionner Tako : ils vous connectent en toute sécurité, mémorisent votre trajet en cours et protègent contre la fraude. Le service ne peut pas fonctionner correctement sans eux ; ils ne peuvent donc pas être désactivés.')],
    [tr('Preference cookies', 'Cookies de préférences'), tr('These remember your choices, such as your language (English or French) and display settings, so you do not have to set them again each time you return.', 'Ils mémorisent vos choix, comme votre langue (français ou anglais) et vos réglages d’affichage, pour que vous n’ayez pas à les définir à nouveau à chaque visite.')],
    [tr('Analytics cookies', 'Cookies d’analyse'), tr('With your consent, these would help us understand how the app and site are used — which pages are popular and where people run into trouble — so we can improve Tako. The data is aggregated and never used to sell your information.', 'Avec votre consentement, ils nous aideraient à comprendre comment l’app et le site sont utilisés — quelles pages sont populaires et où les utilisateurs rencontrent des difficultés — afin d’améliorer Tako. Les données sont agrégées et ne servent jamais à vendre vos informations.')],
    [tr('Managing cookies', 'Gérer les cookies'), tr('You can accept or decline non-essential cookies from the consent banner, and you can change your mind at any time in your settings. Most browsers also let you block or delete cookies, though some features may stop working if you do.', 'Vous pouvez accepter ou refuser les cookies non essentiels depuis la bannière de consentement, et changer d’avis à tout moment dans vos réglages. La plupart des navigateurs permettent aussi de bloquer ou supprimer les cookies, mais certaines fonctionnalités peuvent alors cesser de fonctionner.')],
    [tr('More information', 'En savoir plus'), tr('Cookies are part of how we handle data overall. For the full picture, see our Privacy Notice.', 'Les cookies font partie de notre gestion des données dans son ensemble. Pour une vue complète, consultez notre Avis de confidentialité.')],
  ];
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <LegalHero over={tr('Legal', 'Mentions légales')} title={tr('Cookie Policy', 'Politique des cookies')} updated={tr('1 June 2026', '1 juin 2026')} />
      <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 96, maxWidth: 820 }} className="stack-pad">
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.65, margin: '0 0 36px' }}>
          {tr('This placeholder policy explains, in plain terms, how Tako would use cookies and similar technologies. It is provided for the concept site and is not a binding cookie policy.', 'Cette politique fictive explique, en termes simples, comment Tako utiliserait les cookies et technologies similaires. Elle est fournie pour le site concept et ne constitue pas une politique de cookies contraignante.')}
        </p>
        {sections.map(([h, body], i) => (
          <div key={h} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', margin: '0 0 10px' }}>{i + 1}. {h}</h2>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.65, margin: 0 }}>{body}</p>
          </div>
        ))}
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.65, margin: '8px 0 0' }}>
          {tr('Related: ', 'À consulter : ')}
          <a href="privacy.html" className="link-amber" style={{ color: 'var(--tako-amber-deep)', fontWeight: 600 }}>{tr('Privacy Notice', 'Avis de confidentialité')}</a>
          {' · '}
          <a href="terms.html" className="link-amber" style={{ color: 'var(--tako-amber-deep)', fontWeight: 600 }}>{tr('Terms of Use', 'Conditions d’utilisation')}</a>
        </p>
      </section>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Cookies />);
