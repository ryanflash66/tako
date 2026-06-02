/* Tako — Help Centre · Account category page */
import { t as tr } from '../lib/i18n.js';

// Account Q&As — the two from help.jsx plus the topics this category covers
// (sign-up, profile, login, language, deleting an account).
const FAQS = [
  {
    q: tr('How do I create a Tako account?', 'Comment créer un compte Tako ?'),
    a: tr('Download the Tako app, enter your phone number, and verify it with the code we text you. Add your name and you’re ready to ride.', 'Téléchargez l’app Tako, saisissez votre numéro de téléphone et validez-le avec le code que nous vous envoyons par SMS. Ajoutez votre nom et vous êtes prêt à rouler.'),
  },
  {
    q: tr('How do I log in on a new phone?', 'Comment me connecter sur un nouveau téléphone ?'),
    a: tr('Open the app on the new phone and sign in with the same phone number. We’ll text you a one-time code to confirm it’s you, and your trips, receipts and settings come straight back.', 'Ouvrez l’app sur le nouveau téléphone et connectez-vous avec le même numéro. Nous vous envoyons un code à usage unique par SMS pour confirmer votre identité, et vos trajets, reçus et paramètres reviennent aussitôt.'),
  },
  {
    q: tr('I changed my phone number. What now?', 'J’ai changé de numéro. Que faire ?'),
    a: tr('Go to Settings → Account → Phone number to update it. We’ll verify the new number with a code to keep your account secure.', 'Allez dans Paramètres → Compte → Numéro de téléphone pour le mettre à jour. Nous vérifierons le nouveau numéro avec un code pour sécuriser votre compte.'),
  },
  {
    q: tr('How do I edit my profile?', 'Comment modifier mon profil ?'),
    a: tr('Tap your profile picture, then Edit. You can change your name, photo and email any time. A clear name and photo help your driver find you at pickup.', 'Appuyez sur votre photo de profil, puis sur Modifier. Vous pouvez changer votre nom, votre photo et votre e-mail à tout moment. Un nom et une photo clairs aident votre chauffeur à vous retrouver au point de prise en charge.'),
  },
  {
    q: tr('How do I change the app language?', 'Comment changer la langue de l’app ?'),
    a: tr('Tako is available in English and French. Go to Settings → Language and pick the one you prefer — the whole app switches instantly, including receipts and notifications.', 'Tako est disponible en français et en anglais. Allez dans Paramètres → Langue et choisissez celle que vous préférez — toute l’app bascule aussitôt, y compris les reçus et les notifications.'),
  },
  {
    q: tr('How do I delete my account?', 'Comment supprimer mon compte ?'),
    a: tr('Go to Settings → Account → Delete account. We’ll confirm by code, then permanently remove your personal data within 30 days, keeping only what the law requires us to retain. You can also email support@tako.cm to start the process.', 'Allez dans Paramètres → Compte → Supprimer le compte. Nous confirmons par code, puis supprimons définitivement vos données personnelles sous 30 jours, en ne conservant que ce que la loi nous oblige à garder. Vous pouvez aussi écrire à support@tako.cm pour lancer la démarche.'),
  },
];

const PAGE = {
  icon: 'user-round',
  over: tr('Help Centre', 'Centre d’aide'),
  title: tr('Account', 'Compte'),
  intro: tr('Everything about your Tako account — signing up, your profile and login, switching language, and deleting your account.', 'Tout sur votre compte Tako — l’inscription, votre profil et la connexion, le changement de langue et la suppression du compte.'),
  self: 'help-account.html',
};

// Sibling Help category pages + the hub, for cross-linking.
const OTHER_TOPICS = [
  ['credit-card', tr('Payments', 'Paiements'), tr('Mobile Money, cash, receipts and refunds', 'Mobile Money, espèces, reçus et remboursements'), 'help-payments.html'],
  ['car', tr('Rides', 'Courses'), tr('Booking, ride options and your trips', 'Réservation, options de course et trajets'), 'help-rides.html'],
  ['shield-check', tr('Safety', 'Sécurité'), tr('Sharing trips and emergency tools', 'Partage de trajets et outils d’urgence'), 'help-safety.html'],
  ['navigation', tr('Driving', 'Conduite'), tr('Becoming a driver and getting paid', 'Devenir chauffeur et être payé'), 'help-driving.html'],
  ['briefcase', tr('Business', 'Entreprise'), tr('Company accounts and billing', 'Comptes entreprise et facturation'), 'help-business.html'],
  ['life-buoy', tr('All Help topics', 'Tous les thèmes d’aide'), tr('Browse the full Help Centre', 'Parcourir tout le centre d’aide'), 'help.html'],
];

function CategoryHero({ icon, over, title, intro }) {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <LaneMotif style={{ opacity: 0.35 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 72, paddingBottom: 72, maxWidth: 800 }} className="stack-pad">
        <a href="help.html" className="link-amber" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15, color: 'var(--tako-amber)', marginBottom: 24 }}>
          <SIcon name="arrow-left" size={17} /> {tr('Help Centre', 'Centre d’aide')}
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 8 }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={icon} size={30} /></div>
          <div className="tako-overline" style={{ color: 'var(--tako-amber)' }}>{over}</div>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,4.8vw,58px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: '12px 0 0' }}>{title}</h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '22px 0 0', maxWidth: 600 }}>{intro}</p>
      </div>
    </section>
  );
}

function QAItem({ item, open, onToggle }) {
  const bodyRef = React.useRef(null);
  return (
    <div className={`acc-item ${open ? 'open' : ''}`}>
      <button className="acc-head" onClick={onToggle}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--tako-black)' }}>{item.q}</span>
        <span className="acc-chevron"><SIcon name="chevron-down" size={22} color="var(--fg-2)" /></span>
      </button>
      <div className="acc-body" ref={bodyRef} style={{ maxHeight: open ? (bodyRef.current ? bodyRef.current.scrollHeight + 4 : 400) : 0 }}>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 760 }}>{item.a}</p>
      </div>
    </div>
  );
}

function Questions() {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ ...WRAP, paddingTop: 64, paddingBottom: 24 }} className="stack-pad">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', margin: 0 }}>{tr('Account questions', 'Questions sur le compte')}</h2>
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', fontWeight: 600 }}>{FAQS.length} {tr('articles', 'articles')}</span>
      </div>
      <div style={{ marginTop: 16, borderTop: '1px solid var(--border-1)' }}>
        {FAQS.map((f, i) => <QAItem key={f.q} item={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
      </div>
    </section>
  );
}

function OtherTopics({ self }) {
  const list = OTHER_TOPICS.filter(([, , , href]) => href !== self);
  return (
    <section style={{ ...WRAP, paddingTop: 40, paddingBottom: 24 }} className="stack-pad">
      <SectionHead over={tr('Keep exploring', 'Continuer à explorer')} title={tr('Browse other topics', 'Parcourir d’autres thèmes')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="grid-3">
        {list.map(([ic, t2, d, href], i) => (
          <Reveal key={href} delay={(i % 3) * 60}>
            <a href={href} className="lift" style={{ width: '100%', display: 'flex', gap: 16, alignItems: 'center', background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 24, textDecoration: 'none', color: 'var(--fg-1)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={24} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{t2}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)' }}>{d}</div>
              </div>
              <SIcon name="chevron-right" size={18} color="var(--gray-400)" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function StillNeedHelp() {
  return (
    <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 96 }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-2)', border: '1px solid var(--border-1)', borderRadius: 24, padding: 'clamp(32px,5vw,56px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, minWidth: 0 }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="headset" size={30} /></div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px,2.6vw,32px)', letterSpacing: '-0.02em', margin: 0 }}>{tr('Still need help?', 'Toujours besoin d’aide ?')}</h2>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', margin: '10px 0 0', maxWidth: 480, lineHeight: 1.5 }}>{tr('Our support team is based in Cameroon and ready to help with anything these articles didn’t cover.', 'Notre équipe d’assistance est basée au Cameroun et prête à vous aider sur tout ce que ces articles n’ont pas couvert.')}</p>
          </div>
        </div>
        <SBtn variant="primary" href="contact.html" icon="arrow-right" size="lg">{tr('Contact support', 'Contacter le support')}</SBtn>
      </div>
    </section>
  );
}

function HelpAccount() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="help.html" />
      <CategoryHero icon={PAGE.icon} over={PAGE.over} title={PAGE.title} intro={PAGE.intro} />
      <Questions />
      <OtherTopics self={PAGE.self} />
      <StillNeedHelp />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HelpAccount />);
