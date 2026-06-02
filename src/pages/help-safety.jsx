/* Tako — Help Centre · Safety category page */
import { t as tr } from '../lib/i18n.js';

// Q&As for the Safety category. The Share-trip and Emergency-button answers reuse
// the exact EN/FR text from the Help hub (help.jsx); the rest cover the remaining
// Safety sub-topics (verified drivers, reporting an issue).
const FAQS = [
  {
    q: tr('How do I know my driver is verified?', 'Comment savoir que mon chauffeur est vérifié ?'),
    a: tr('Every Tako driver passes identity checks, document review and a vehicle inspection before they can accept a single ride. Before you get in, the app shows the driver’s name, photo, rating and plate number — match them every time.', 'Chaque chauffeur Tako passe un contrôle d’identité, une vérification des documents et une inspection du véhicule avant d’accepter la moindre course. Avant de monter, l’app affiche le nom, la photo, la note et la plaque du chauffeur — vérifiez à chaque fois.'),
  },
  {
    q: tr('What is the emergency button?', 'Qu’est-ce que le bouton d’urgence ?'),
    a: tr('Tap the shield icon during a ride to reach local emergency response. Tako shares your live location and trip details so help can find you fast.', 'Appuyez sur l’icône bouclier pendant une course pour joindre les secours locaux. Tako partage votre position en direct et les détails du trajet pour que l’aide vous trouve vite.'),
  },
  {
    q: tr('How do I share my trip with someone?', 'Comment partager mon trajet avec quelqu’un ?'),
    a: tr('During any ride, tap “Share trip”. Your contact gets a live link with your route, driver details and ETA until you arrive.', 'Pendant une course, appuyez sur « Partager le trajet ». Votre contact reçoit un lien en direct avec votre itinéraire, les détails du chauffeur et l’heure d’arrivée jusqu’à destination.'),
  },
  {
    q: tr('How do I report a safety issue?', 'Comment signaler un problème de sécurité ?'),
    a: tr('Open Your Trips, choose the ride and tap “Report an issue” to tell our safety team what happened. You can report at any time, even days later. Every report is reviewed, and we follow up — repeat problems can mean a driver is removed.', 'Ouvrez « Vos trajets », choisissez la course et appuyez sur « Signaler un problème » pour expliquer à notre équipe sécurité ce qui s’est passé. Vous pouvez signaler à tout moment, même plusieurs jours après. Chaque signalement est examiné et suivi — les problèmes récurrents peuvent entraîner l’exclusion d’un chauffeur.'),
  },
];

const SIBLINGS = [
  ['user-round', tr('Account', 'Compte'), 'help-account.html'],
  ['credit-card', tr('Payments', 'Paiements'), 'help-payments.html'],
  ['car', tr('Rides', 'Courses'), 'help-rides.html'],
  ['navigation', tr('Driving', 'Conduite'), 'help-driving.html'],
  ['briefcase', tr('Business', 'Entreprise'), 'help-business.html'],
];

function CategoryHero({ over, crumb, title, intro }) {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <LaneMotif style={{ opacity: 0.35 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80, maxWidth: 820 }} className="stack-pad">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 14 }}>
          <a href="help.html" className="link-amber" style={{ color: 'var(--tako-amber)', textDecoration: 'none' }}>{tr('Help Centre', 'Centre d’aide')}</a>
          <SIcon name="chevron-right" size={15} color="var(--gray-500)" />
          <span style={{ color: 'var(--gray-400)' }}>{crumb}</span>
        </div>
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 16 }}>{over}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,5vw,60px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0 }}>{title}</h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 28px', maxWidth: 620 }}>{intro}</p>
        <SBtn variant="outlineLight" icon="arrow-right" href="safety.html">{tr('How Tako keeps you safe', 'Comment Tako veille sur vous')}</SBtn>
      </div>
    </section>
  );
}

function FAQSection({ faqs }) {
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 24 }} className="stack-pad">
      <SectionHead over={tr('Common questions', 'Questions fréquentes')} title={tr('Safety, answered', 'La sécurité, expliquée')} />
      <div style={{ display: 'grid', gap: 18 }}>
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={(i % 3) * 60} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: '28px 30px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 10px', color: 'var(--tako-black)' }}>{f.q}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0, maxWidth: 760 }}>{f.a}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function OtherTopics({ siblings }) {
  return (
    <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 24 }} className="stack-pad">
      <SectionHead over={tr('Keep exploring', 'Continuer')} title={tr('Browse other topics', 'Parcourir d’autres thèmes')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }} className="grid-3">
        {siblings.map(([ic, label, href], i) => (
          <Reveal key={href} delay={(i % 3) * 50}>
            <a href={href} className="lift" style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '18px 20px', textDecoration: 'none' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={22} /></div>
              <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--tako-black)' }}>{label}</span>
              <SIcon name="chevron-right" size={20} color="var(--fg-3)" />
            </a>
          </Reveal>
        ))}
        <Reveal delay={150}>
          <a href="help.html" className="lift" style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--tako-amber-soft)', border: '1px solid var(--tako-amber)', borderRadius: 16, padding: '18px 20px', textDecoration: 'none' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="life-buoy" size={22} /></div>
            <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--tako-black)' }}>{tr('All Help topics', 'Tous les thèmes d’aide')}</span>
            <SIcon name="chevron-right" size={20} color="var(--tako-amber-deep)" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function StillNeedHelp() {
  return (
    <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 96 }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-2)', border: '1px solid var(--border-1)', borderRadius: 24, padding: '48px 44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 560 }}>
          <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 12 }}>{tr('Still need help?', 'Toujours besoin d’aide ?')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-0.02em', margin: '0 0 12px' }}>{tr('Our safety team is here for you', 'Notre équipe sécurité est là pour vous')}</h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{tr('If you ever feel unsafe, use the emergency button in the app. For anything else, reach our Cameroon-based support team and we’ll look into it.', 'Si vous vous sentez en danger, utilisez le bouton d’urgence dans l’app. Pour tout le reste, contactez notre équipe d’assistance basée au Cameroun, qui examinera votre demande.')}</p>
        </div>
        <SBtn variant="amber" icon="arrow-right" href="contact.html" size="lg">{tr('Contact support', 'Contacter le support')}</SBtn>
      </div>
    </section>
  );
}

function HelpSafety() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="help.html" />
      <CategoryHero
        over={tr('Help Centre', 'Centre d’aide')}
        crumb={tr('Safety', 'Sécurité')}
        title={tr('Safety', 'Sécurité')}
        intro={tr('How we look out for you on every trip — verified drivers, the in-app emergency button, sharing your trip with people you trust, and reporting an issue.', 'Comment nous veillons sur vous à chaque trajet — chauffeurs vérifiés, bouton d’urgence dans l’app, partage de votre trajet avec vos proches et signalement d’un problème.')}
      />
      <FAQSection faqs={FAQS} />
      <OtherTopics siblings={SIBLINGS} />
      <StillNeedHelp />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HelpSafety />);
