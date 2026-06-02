/* Tako — Help Centre · Rides category page */
import { t as tr } from '../lib/i18n.js';

// Q&As for the Rides category. The first three reuse the exact EN/FR text from
// the Help hub (help.jsx); the rest cover the remaining Rides sub-topics.
const FAQS = [
  {
    q: tr('How do I request a ride?', 'Comment réserver une course ?'),
    a: tr('Open the Tako app, enter your destination, choose a ride option (Moto, Go, Comfort or XL) and tap Request. We’ll match you with the nearest driver and show your fare before you confirm.', 'Ouvrez l’app Tako, saisissez votre destination, choisissez une option (Moto, Go, Comfort ou XL) et appuyez sur Réserver. Nous vous associons au chauffeur le plus proche et affichons votre prix avant la confirmation.'),
  },
  {
    q: tr('Why is the final fare different from the estimate?', 'Pourquoi le prix final diffère-t-il de l’estimation ?'),
    a: tr('Fares are confirmed before you book and rarely change. If your route changes — extra stops, a longer path, heavy traffic — the fare adjusts and you’ll always see why in your receipt.', 'Les prix sont confirmés avant la réservation et changent rarement. Si votre itinéraire change — arrêts supplémentaires, trajet plus long, trafic dense — le prix s’ajuste et vous en voyez toujours la raison sur votre reçu.'),
  },
  {
    q: tr('Can I schedule a ride in advance?', 'Puis-je réserver une course à l’avance ?'),
    a: tr('Yes. When setting your destination, tap the clock icon to pick a date and time. We’ll have a driver ready for your scheduled pickup.', 'Oui. Au moment de définir votre destination, appuyez sur l’icône horloge pour choisir une date et une heure. Un chauffeur sera prêt pour votre prise en charge programmée.'),
  },
  {
    q: tr('How do I cancel a ride, and will I be charged?', 'Comment annuler une course, et serai-je facturé ?'),
    a: tr('Tap Cancel on the trip screen. Cancelling within a couple of minutes of booking is free. After your driver has been on the way for a while, a small fee may apply to cover their time — you’ll always see it before you confirm the cancellation.', 'Appuyez sur Annuler sur l’écran du trajet. Annuler dans les deux minutes suivant la réservation est gratuit. Si votre chauffeur est en route depuis un moment, des frais réduits peuvent s’appliquer pour son temps — ils s’affichent toujours avant que vous confirmiez l’annulation.'),
  },
  {
    q: tr('I left something in the car. How do I get it back?', 'J’ai oublié un objet dans la voiture. Comment le récupérer ?'),
    a: tr('Open Your Trips, select the ride and tap “I lost an item” to message or call your driver directly. If you can’t reach them, contact our support team and we’ll help reconnect you so you can arrange a return.', 'Ouvrez « Vos trajets », sélectionnez la course et appuyez sur « J’ai perdu un objet » pour écrire ou appeler directement votre chauffeur. Si vous ne le joignez pas, contactez notre équipe d’assistance qui vous aidera à reprendre contact pour organiser la restitution.'),
  },
  {
    q: tr('Does Tako pick up at the airport?', 'Tako prend-il en charge à l’aéroport ?'),
    a: tr('Yes. Add your flight number when you reserve and we track it, so your driver is timed to when you actually land. Clear directions guide you to the designated Tako pickup zone at airports across Cameroon.', 'Oui. Ajoutez votre numéro de vol à la réservation : nous le suivons pour caler votre chauffeur sur votre atterrissage réel. Des indications claires vous mènent à la zone de prise en charge Tako dédiée dans les aéroports du Cameroun.'),
  },
];

const SIBLINGS = [
  ['user-round', tr('Account', 'Compte'), 'help-account.html'],
  ['credit-card', tr('Payments', 'Paiements'), 'help-payments.html'],
  ['shield-check', tr('Safety', 'Sécurité'), 'help-safety.html'],
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
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 620 }}>{intro}</p>
      </div>
    </section>
  );
}

function FAQSection({ faqs }) {
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 24 }} className="stack-pad">
      <SectionHead over={tr('Common questions', 'Questions fréquentes')} title={tr('Rides, answered', 'Vos courses, expliquées')} />
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
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,34px)', letterSpacing: '-0.02em', margin: '0 0 12px' }}>{tr('Our team is here for you', 'Notre équipe est là pour vous')}</h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{tr('Can’t find your answer? Reach our Cameroon-based support team and we’ll help with anything to do with your ride.', 'Vous ne trouvez pas votre réponse ? Contactez notre équipe d’assistance basée au Cameroun, qui vous aidera pour tout ce qui concerne votre course.')}</p>
        </div>
        <SBtn variant="amber" icon="arrow-right" href="contact.html" size="lg">{tr('Contact support', 'Contacter le support')}</SBtn>
      </div>
    </section>
  );
}

function HelpRides() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="help.html" />
      <CategoryHero
        over={tr('Help Centre', 'Centre d’aide')}
        crumb={tr('Rides', 'Courses')}
        title={tr('Rides', 'Courses')}
        intro={tr('Everything about getting where you’re going — requesting a ride, fares and estimates, cancellations, lost & found, reserving in advance and airport pickups.', 'Tout pour vous rendre où vous allez — réserver une course, prix et estimations, annulations, objets trouvés, réservation à l’avance et prises en charge à l’aéroport.')}
      />
      <FAQSection faqs={FAQS} />
      <OtherTopics siblings={SIBLINGS} />
      <StillNeedHelp />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HelpRides />);
