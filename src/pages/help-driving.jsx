/* Tako — Help Centre · Driving category page */
import { t as tr } from '../lib/i18n.js';

// FAQ Q&As for this category. The first two reuse the Driving entries from help.jsx;
// the rest expand on requirements, the driver app and ratings — all hand-written EN/FR.
const FAQS = [
  {
    q: tr('How do I become a Tako driver?', 'Comment devenir chauffeur Tako ?'),
    a: tr('Visit the Drive page and sign up online with your licence, ID and vehicle documents. Most drivers are verified within a couple of days, and our team in Cameroon reviews every application.', 'Rendez-vous sur la page Conduire et inscrivez-vous en ligne avec votre permis, votre pièce d’identité et les documents du véhicule. La plupart des chauffeurs sont vérifiés en quelques jours, et notre équipe au Cameroun examine chaque demande.'),
  },
  {
    q: tr('What documents and requirements do I need?', 'Quels documents et conditions me faut-il ?'),
    a: tr('You’ll need a valid driver’s licence, a national ID, vehicle registration and proof of insurance. Your car must pass a quick inspection. See the Requirements page for the full checklist by vehicle type.', 'Il vous faut un permis de conduire valide, une carte d’identité nationale, la carte grise du véhicule et une preuve d’assurance. Votre voiture doit passer une inspection rapide. Consultez la page Conditions pour la liste complète par type de véhicule.'),
  },
  {
    q: tr('When and how do I get paid?', 'Quand et comment suis-je payé ?'),
    a: tr('Driver earnings are paid out every week via Mobile Money (MTN Mobile Money or Orange Money). You can track your balance and trip history any time in the driver app, and cash fares stay with you immediately.', 'Les revenus des chauffeurs sont versés chaque semaine par Mobile Money (MTN Mobile Money ou Orange Money). Vous pouvez suivre votre solde et votre historique à tout moment dans l’app chauffeur, et les courses payées en espèces vous restent immédiatement.'),
  },
  {
    q: tr('How does the driver app work?', 'Comment fonctionne l’app chauffeur ?'),
    a: tr('The driver app shows nearby ride requests, turn-by-turn navigation, your live earnings and weekly payout summary. Go online when you want to drive and offline whenever you need a break — you’re always in control of your hours.', 'L’app chauffeur affiche les demandes de course à proximité, la navigation pas à pas, vos revenus en direct et le récapitulatif de paiement hebdomadaire. Passez en ligne quand vous voulez conduire et hors ligne quand vous avez besoin d’une pause — vous gardez toujours le contrôle de vos horaires.'),
  },
  {
    q: tr('How do tips and ratings work?', 'Comment fonctionnent les pourboires et les notes ?'),
    a: tr('After each trip, riders can rate you and add a tip — tips are yours in full and paid out with your weekly earnings. Keeping a friendly, safe and reliable service is the best way to maintain a high rating and get more ride requests.', 'Après chaque trajet, les passagers peuvent vous noter et ajouter un pourboire — les pourboires vous reviennent intégralement et sont versés avec vos revenus hebdomadaires. Offrir un service aimable, sûr et fiable est le meilleur moyen de garder une bonne note et de recevoir plus de demandes de course.'),
  },
  {
    q: tr('Can I choose when and where I drive?', 'Puis-je choisir quand et où je conduis ?'),
    a: tr('Yes. There are no set shifts. Drive in the mornings, evenings or weekends — whatever fits your life. You decide which requests to accept and can stop earning whenever you like.', 'Oui. Il n’y a pas d’horaires imposés. Conduisez le matin, le soir ou le week-end — comme cela vous arrange. Vous décidez des demandes à accepter et pouvez arrêter de gagner quand vous voulez.'),
  },
];

const SIBLINGS = [
  ['credit-card', tr('Payments', 'Paiements'), 'help-payments.html'],
  ['car', tr('Rides', 'Courses'), 'help-rides.html'],
  ['user-round', tr('Account', 'Compte'), 'help-account.html'],
  ['shield-check', tr('Safety', 'Sécurité'), 'help-safety.html'],
  ['briefcase', tr('Business', 'Entreprise'), 'help-business.html'],
];

const RELATED = [
  ['car-front', tr('Become a driver', 'Devenir chauffeur'), tr('Sign up and start earning with Tako.', 'Inscrivez-vous et commencez à gagner avec Tako.'), 'drive.html'],
  ['wallet', tr('Earnings', 'Revenus'), tr('See how weekly Mobile Money payouts work.', 'Découvrez les paiements hebdomadaires par Mobile Money.'), 'earnings.html'],
  ['life-buoy', tr('Requirements', 'Conditions'), tr('Documents and vehicle checklist by type.', 'Documents et liste du véhicule par type.'), 'requirements.html'],
];

function CategoryHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <LaneMotif style={{ opacity: 0.35 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 72, paddingBottom: 72, maxWidth: 760 }} className="stack-pad">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: 600, color: 'var(--gray-400)' }}>
          <a href="help.html" className="link-amber" style={{ color: 'var(--gray-300)' }}>{tr('Help Centre', 'Centre d’aide')}</a>
          <SIcon name="chevron-right" size={16} color="var(--gray-500)" />
          <span style={{ color: 'var(--tako-amber)' }}>{tr('Driving', 'Conduite')}</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,4.6vw,56px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Driving with Tako', 'Conduire avec Tako')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '22px 0 0', maxWidth: 580 }}>
          {tr('Becoming a driver, requirements, weekly Mobile Money payouts, the driver app and how tips and ratings work.', 'Devenir chauffeur, les conditions, les paiements hebdomadaires par Mobile Money, l’app chauffeur et le fonctionnement des pourboires et des notes.')}
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
      <SectionHead over={tr('Driving', 'Conduite')} title={tr('Driver questions, answered', 'Vos questions de chauffeur, résolues')} />
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
        {RELATED.map(([ic, t2, d, href], i) => (
          <Reveal key={href} delay={(i % 3) * 60}>
            <a href={href} className="lift" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 24, textDecoration: 'none', height: '100%' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={22} /></div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--tako-black)' }}>{t2}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', marginTop: 4, lineHeight: 1.45 }}>{d}</div>
              </div>
            </a>
          </Reveal>
        ))}
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

function HelpDriving() {
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

ReactDOM.createRoot(document.getElementById('root')).render(<HelpDriving />);
