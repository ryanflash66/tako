/* Tako — Help Centre · Business category page */
import { t as tr } from '../lib/i18n.js';

// FAQ Q&As for this category. The billing entry reuses the Business question from
// help.jsx; the rest expand on accounts, policies and employees — hand-written EN/FR.
const FAQS = [
  {
    q: tr('What is a Tako Business account?', 'Qu’est-ce qu’un compte Tako Business ?'),
    a: tr('Tako Business lets your company manage employee travel in one place. You add your team, set ride policies and get a single monthly invoice instead of chasing individual expense receipts.', 'Tako Business permet à votre entreprise de gérer les déplacements des employés au même endroit. Vous ajoutez votre équipe, définissez des règles de course et recevez une seule facture mensuelle au lieu de courir après chaque reçu de frais.'),
  },
  {
    q: tr('How does Tako Business billing work?', 'Comment fonctionne la facturation Tako Business ?'),
    a: tr('Your company gets one monthly invoice for all rides, payable by bank transfer or Mobile Money. Admins can see every trip and export reports from the dashboard, so finance has full visibility without manual reconciliation.', 'Votre entreprise reçoit une seule facture mensuelle pour toutes les courses, payable par virement bancaire ou Mobile Money. Les administrateurs voient chaque trajet et exportent des rapports depuis le tableau de bord, pour une visibilité complète des finances sans rapprochement manuel.'),
  },
  {
    q: tr('How do I set ride policies for my team?', 'Comment définir des règles de course pour mon équipe ?'),
    a: tr('From the dashboard you can set who can ride, allowed days and hours, spending limits and ride options. Trips outside a policy are flagged automatically, so spending stays predictable.', 'Depuis le tableau de bord, vous pouvez définir qui peut commander une course, les jours et heures autorisés, les plafonds de dépenses et les options de course. Les trajets hors politique sont signalés automatiquement, pour des dépenses prévisibles.'),
  },
  {
    q: tr('How do I add or remove employees?', 'Comment ajouter ou retirer des employés ?'),
    a: tr('Invite team members by email or phone number from the dashboard — they accept and ride straight away, no separate billing setup. Remove anyone with one click when they leave, and their access ends immediately.', 'Invitez les membres de l’équipe par e-mail ou par numéro de téléphone depuis le tableau de bord — ils acceptent et commandent des courses aussitôt, sans configuration de facturation séparée. Retirez un membre en un clic à son départ, et son accès prend fin immédiatement.'),
  },
  {
    q: tr('Can employees still pay for personal rides?', 'Les employés peuvent-ils payer leurs courses personnelles ?'),
    a: tr('Yes. Each employee keeps their own personal Tako profile and simply chooses the business or personal payment profile before booking. Only business trips appear on the company invoice.', 'Oui. Chaque employé conserve son profil Tako personnel et choisit simplement le profil de paiement professionnel ou personnel avant de réserver. Seuls les trajets professionnels apparaissent sur la facture de l’entreprise.'),
  },
  {
    q: tr('How do I get started with Tako Business?', 'Comment démarrer avec Tako Business ?'),
    a: tr('Visit the Business page and create an account for your company. Once your team is added and your billing details are set, your employees can start riding the same day.', 'Rendez-vous sur la page Entreprise et créez un compte pour votre société. Une fois votre équipe ajoutée et vos informations de facturation définies, vos employés peuvent commencer à rouler le jour même.'),
  },
];

const SIBLINGS = [
  ['user-round', tr('Account', 'Compte'), 'help-account.html'],
  ['credit-card', tr('Payments', 'Paiements'), 'help-payments.html'],
  ['car', tr('Rides', 'Courses'), 'help-rides.html'],
  ['shield-check', tr('Safety', 'Sécurité'), 'help-safety.html'],
  ['car-front', tr('Driving', 'Conduite'), 'help-driving.html'],
];

function CategoryHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <LaneMotif style={{ opacity: 0.35 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 72, paddingBottom: 72, maxWidth: 760 }} className="stack-pad">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: 600, color: 'var(--gray-400)' }}>
          <a href="help.html" className="link-amber" style={{ color: 'var(--gray-300)' }}>{tr('Help Centre', 'Centre d’aide')}</a>
          <SIcon name="chevron-right" size={16} color="var(--gray-500)" />
          <span style={{ color: 'var(--tako-amber)' }}>{tr('Business', 'Entreprise')}</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,4.6vw,56px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Tako Business', 'Tako Entreprise')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '22px 0 0', maxWidth: 580 }}>
          {tr('Company accounts, centralized monthly billing, ride policies and adding employees — everything you need to manage team travel.', 'Comptes entreprise, facturation mensuelle centralisée, règles de course et ajout d’employés — tout pour gérer les déplacements de votre équipe.')}
        </p>
      </div>
    </section>
  );
}

function QA({ item }) {
  return (
    <Reveal style={{ borderBottom: '1px solid var(--border-1)', padding: '28px 0' }}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--tako-black)', margin: '0 0 10px' }}>{item.q}</h3>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0, maxWidth: 760 }}>{item.a}</p>
    </Reveal>
  );
}

function Answers() {
  return (
    <section style={{ ...WRAP, paddingTop: 64, paddingBottom: 40 }} className="stack-pad">
      <SectionHead over={tr('Business', 'Entreprise')} title={tr('Business questions, answered', 'Vos questions entreprise, résolues')} />
      <div style={{ borderTop: '1px solid var(--border-1)' }}>
        {FAQS.map((f) => <QA key={f.q} item={f} />)}
      </div>
    </section>
  );
}

function RelatedLinks() {
  return (
    <section style={{ ...WRAP, paddingTop: 24, paddingBottom: 40 }} className="stack-pad">
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px,2.4vw,28px)', letterSpacing: '-0.02em', margin: '0 0 20px' }}>{tr('Helpful pages', 'Pages utiles')}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="grid-3">
        <Reveal>
          <a href="business.html" className="lift" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 24, textDecoration: 'none', height: '100%' }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="briefcase" size={22} /></div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--tako-black)' }}>{tr('Tako Business', 'Tako Entreprise')}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', marginTop: 4, lineHeight: 1.45 }}>{tr('Create an account and manage team travel.', 'Créez un compte et gérez les déplacements de l’équipe.')}</div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function BrowseOther() {
  return (
    <section style={{ ...WRAP, paddingTop: 24, paddingBottom: 48 }} className="stack-pad">
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px,2.4vw,28px)', letterSpacing: '-0.02em', margin: '0 0 20px' }}>{tr('Browse other topics', 'Parcourir les autres thèmes')}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {SIBLINGS.map(([ic, t2, href]) => (
          <a key={href} href={href} className="lift" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 999, padding: '12px 20px', textDecoration: 'none', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: 'var(--tako-black)' }}>
            <SIcon name={ic} size={18} color="var(--tako-amber-deep)" /> {t2}
          </a>
        ))}
        <a href="help.html" className="lift" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--tako-black)', border: '1px solid var(--tako-black)', borderRadius: 999, padding: '12px 20px', textDecoration: 'none', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, color: '#fff' }}>
          <SIcon name="life-buoy" size={18} color="var(--tako-amber)" /> {tr('All help topics', 'Tous les thèmes d’aide')}
        </a>
      </div>
    </section>
  );
}

function StillNeedHelp() {
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 80, paddingBottom: 88, borderTop: '1px solid var(--border-1)' }}>
      <div style={WRAP} className="stack-pad">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 560 }}>
            <SectionHead over={tr('Still need help?', 'Encore besoin d’aide ?')} title={tr('Talk to our team', 'Parlez à notre équipe')} sub={tr('Our support team is based in Cameroon and ready to help with anything these articles didn’t cover.', 'Notre équipe d’assistance est basée au Cameroun et prête à vous aider sur tout ce que ces articles n’ont pas couvert.')} style={{ marginBottom: 0 }} />
          </div>
          <SBtn variant="primary" href="contact.html" icon="arrow-right" size="lg">{tr('Contact support', 'Contacter le support')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function HelpBusiness() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="help.html" />
      <CategoryHero />
      <Answers />
      <RelatedLinks />
      <BrowseOther />
      <StillNeedHelp />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HelpBusiness />);
