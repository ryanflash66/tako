/* Tako — Help page */
import { t as tr } from '../lib/i18n.js';

const FAQS = [
  { c: tr('Rides', 'Courses'), q: tr('How do I request a ride?', 'Comment réserver une course ?'), a: tr('Open the Tako app, enter your destination, choose a ride option (Moto, Go, Comfort or XL) and tap Request. We’ll match you with the nearest driver and show your fare before you confirm.', 'Ouvrez l’app Tako, saisissez votre destination, choisissez une option (Moto, Go, Comfort ou XL) et appuyez sur Réserver. Nous vous associons au chauffeur le plus proche et affichons votre prix avant la confirmation.') },
  { c: tr('Rides', 'Courses'), q: tr('Can I schedule a ride in advance?', 'Puis-je réserver une course à l’avance ?'), a: tr('Yes. When setting your destination, tap the clock icon to pick a date and time. We’ll have a driver ready for your scheduled pickup.', 'Oui. Au moment de définir votre destination, appuyez sur l’icône horloge pour choisir une date et une heure. Un chauffeur sera prêt pour votre prise en charge programmée.') },
  { c: tr('Rides', 'Courses'), q: tr('How do I add a stop to my trip?', 'Comment ajouter un arrêt à mon trajet ?'), a: tr('Before or during your ride, tap “Add stop” and enter the address. Your fare updates automatically to include the extra stop.', 'Avant ou pendant votre course, appuyez sur « Ajouter un arrêt » et saisissez l’adresse. Votre prix est mis à jour automatiquement pour inclure l’arrêt supplémentaire.') },
  { c: tr('Payments', 'Paiements'), q: tr('What payment methods can I use?', 'Quels moyens de paiement puis-je utiliser ?'), a: tr('You can pay with cash or Mobile Money (MTN Mobile Money and Orange Money). Choose your default in Payment settings, and switch per trip whenever you like.', 'Vous pouvez payer en espèces ou par Mobile Money (MTN Mobile Money et Orange Money). Choisissez votre moyen par défaut dans les paramètres de paiement et changez à chaque trajet si vous le souhaitez.') },
  { c: tr('Payments', 'Paiements'), q: tr('Why is the final fare different from the estimate?', 'Pourquoi le prix final diffère-t-il de l’estimation ?'), a: tr('Fares are confirmed before you book and rarely change. If your route changes — extra stops, a longer path, heavy traffic — the fare adjusts and you’ll always see why in your receipt.', 'Les prix sont confirmés avant la réservation et changent rarement. Si votre itinéraire change — arrêts supplémentaires, trajet plus long, trafic dense — le prix s’ajuste et vous en voyez toujours la raison sur votre reçu.') },
  { c: tr('Payments', 'Paiements'), q: tr('How do I get a receipt?', 'Comment obtenir un reçu ?'), a: tr('Every trip receipt is saved under Your Trips in the app and emailed to you automatically. Tap any past trip to view or re-send it.', 'Chaque reçu de trajet est enregistré dans « Vos trajets » dans l’app et vous est envoyé par e-mail automatiquement. Appuyez sur un trajet passé pour le consulter ou le renvoyer.') },
  { c: tr('Account', 'Compte'), q: tr('How do I create a Tako account?', 'Comment créer un compte Tako ?'), a: tr('Download the Tako app, enter your phone number, and verify it with the code we text you. Add your name and you’re ready to ride.', 'Téléchargez l’app Tako, saisissez votre numéro de téléphone et validez-le avec le code que nous vous envoyons par SMS. Ajoutez votre nom et vous êtes prêt à rouler.') },
  { c: tr('Account', 'Compte'), q: tr('I changed my phone number. What now?', 'J’ai changé de numéro. Que faire ?'), a: tr('Go to Settings → Account → Phone number to update it. We’ll verify the new number with a code to keep your account secure.', 'Allez dans Paramètres → Compte → Numéro de téléphone pour le mettre à jour. Nous vérifierons le nouveau numéro avec un code pour sécuriser votre compte.') },
  { c: tr('Safety', 'Sécurité'), q: tr('How do I share my trip with someone?', 'Comment partager mon trajet avec quelqu’un ?'), a: tr('During any ride, tap “Share trip”. Your contact gets a live link with your route, driver details and ETA until you arrive.', 'Pendant une course, appuyez sur « Partager le trajet ». Votre contact reçoit un lien en direct avec votre itinéraire, les détails du chauffeur et l’heure d’arrivée jusqu’à destination.') },
  { c: tr('Safety', 'Sécurité'), q: tr('What is the emergency button?', 'Qu’est-ce que le bouton d’urgence ?'), a: tr('Tap the shield icon during a ride to reach local emergency response. Tako shares your live location and trip details so help can find you fast.', 'Appuyez sur l’icône bouclier pendant une course pour joindre les secours locaux. Tako partage votre position en direct et les détails du trajet pour que l’aide vous trouve vite.') },
  { c: tr('Driving', 'Conduite'), q: tr('How do I become a Tako driver?', 'Comment devenir chauffeur Tako ?'), a: tr('Visit the Drive page and sign up online with your licence, ID and vehicle documents. Most drivers are verified within a couple of days.', 'Rendez-vous sur la page Conduire et inscrivez-vous en ligne avec votre permis, votre pièce d’identité et les documents du véhicule. La plupart des chauffeurs sont vérifiés en quelques jours.') },
  { c: tr('Driving', 'Conduite'), q: tr('When and how do I get paid?', 'Quand et comment suis-je payé ?'), a: tr('Driver earnings are paid out every week via Mobile Money. You can track your balance and trip history any time in the driver app.', 'Les revenus des chauffeurs sont versés chaque semaine par Mobile Money. Vous pouvez suivre votre solde et votre historique à tout moment dans l’app chauffeur.') },
  { c: tr('Business', 'Entreprise'), q: tr('How does Tako Business billing work?', 'Comment fonctionne la facturation Tako Business ?'), a: tr('Your company gets one monthly invoice for all rides, payable by bank transfer or Mobile Money. Admins can see every trip and export reports from the dashboard.', 'Votre entreprise reçoit une seule facture mensuelle pour toutes les courses, payable par virement bancaire ou Mobile Money. Les administrateurs voient chaque trajet et exportent des rapports depuis le tableau de bord.') },
];

const HELP_CATS = [
  ['user-round', tr('Account', 'Compte'), tr('Sign up, profile and settings', 'Inscription, profil et paramètres')],
  ['credit-card', tr('Payments', 'Paiements'), tr('Fares, receipts and Mobile Money', 'Prix, reçus et Mobile Money')],
  ['car', tr('Rides', 'Courses'), tr('Booking, options and trips', 'Réservation, options et trajets')],
  ['shield-check', tr('Safety', 'Sécurité'), tr('Sharing trips and emergencies', 'Partage de trajets et urgences')],
  ['steering-wheel', tr('Driving', 'Conduite'), tr('Becoming a driver and payouts', 'Devenir chauffeur et paiements')],
  ['briefcase', tr('Business', 'Entreprise'), tr('Company accounts and billing', 'Comptes entreprise et facturation')],
];

// Dedicated Help category pages (Uber/Lyft Help Centre style) — [icon, label, description, href]
const TOPIC_PAGES = [
  ['user-round', tr('Account', 'Compte'), tr('Manage your profile, phone number and login.', 'Gérez votre profil, votre numéro de téléphone et votre connexion.'), 'help-account.html'],
  ['wallet', tr('Payments', 'Paiements'), tr('Fares, receipts, refunds and Mobile Money.', 'Prix, reçus, remboursements et Mobile Money.'), 'help-payments.html'],
  ['car-front', tr('Rides', 'Courses'), tr('Booking, ride options, stops and trip history.', 'Réservation, options de course, arrêts et historique des trajets.'), 'help-rides.html'],
  ['shield', tr('Safety', 'Sécurité'), tr('Trip sharing, the emergency button and reporting.', 'Partage de trajet, bouton d’urgence et signalements.'), 'help-safety.html'],
  ['navigation', tr('Driving', 'Conduite'), tr('Sign up to drive, requirements and weekly payouts.', 'Devenez chauffeur : conditions et paiements hebdomadaires.'), 'help-driving.html'],
  ['briefcase', tr('Business', 'Entreprise'), tr('Company accounts, invoicing and travel reports.', 'Comptes entreprise, facturation et rapports de déplacements.'), 'help-business.html'],
];

function HelpHero({ query, setQuery }) {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <LaneMotif style={{ opacity: 0.35 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80, maxWidth: 800, textAlign: 'center', marginInline: 'auto' }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Help Centre', 'Centre d’aide')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px,4.6vw,56px)', lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('How can we help?', 'Comment pouvons-nous aider ?')}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderRadius: 16, padding: '6px 6px 6px 18px', maxWidth: 560, margin: '32px auto 0', boxShadow: 'var(--shadow-lg)' }}>
          <SIcon name="search" size={22} color="var(--gray-500)" />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder={tr('Search help articles…', 'Rechercher dans l’aide…')} style={{ border: 'none', outline: 'none', flex: 1, minWidth: 0, fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 16, padding: '12px 0', color: 'var(--fg-1)' }} />
          {query && <button onClick={() => setQuery('')} style={{ background: 'var(--bg-3)', border: 'none', borderRadius: 999, width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name="x" size={18} color="var(--fg-2)" /></button>}
        </div>
      </div>
    </section>
  );
}

function Categories({ setQuery }) {
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 24 }} className="stack-pad">
      <SectionHead over={tr('Browse topics', 'Parcourir les thèmes')} title={tr('Find answers by category', 'Trouvez des réponses par catégorie')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="grid-3">
        {HELP_CATS.map(([ic, t, d], i) => (
          <Reveal key={t} delay={(i % 3) * 60}>
            <button onClick={() => setQuery(t)} className="lift" style={{ width: '100%', textAlign: 'left', display: 'flex', gap: 16, alignItems: 'center', background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 24, cursor: 'pointer' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic === 'steering-wheel' ? 'navigation' : ic} size={24} /></div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{t}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)' }}>{d}</div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function BrowseTopics() {
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 24 }} className="stack-pad">
      <SectionHead over={tr('Browse by topic', 'Parcourir par thème')} title={tr('Explore our Help topics', 'Explorez nos thèmes d’aide')} sub={tr('Open a dedicated guide for step-by-step help on the topic you need.', 'Ouvrez un guide dédié pour une aide pas à pas sur le thème dont vous avez besoin.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="grid-3">
        {TOPIC_PAGES.map(([ic, label, desc, href], i) => (
          <Reveal key={href} delay={(i % 3) * 60}>
            <a href={href} className="lift" style={{ display: 'flex', flexDirection: 'column', gap: 14, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 24, textDecoration: 'none', height: '100%' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={24} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--tako-black)' }}>{label}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', lineHeight: 1.5, marginTop: 4 }}>{desc}</div>
              </div>
              <span className="link-amber" style={{ fontSize: 15 }}>{tr('View topic', 'Voir le thème')} <SIcon name="arrow-right" size={17} /></span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AccordionItem({ item, open, onToggle }) {
  const bodyRef = React.useRef(null);
  return (
    <div className={`acc-item ${open ? 'open' : ''}`}>
      <button className="acc-head" onClick={onToggle}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--tako-amber-deep)', background: 'var(--tako-amber-soft)', padding: '4px 9px', borderRadius: 999 }}>{item.c}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--tako-black)' }}>{item.q}</span>
        </span>
        <span className="acc-chevron"><SIcon name="chevron-down" size={22} color="var(--fg-2)" /></span>
      </button>
      <div className="acc-body" ref={bodyRef} style={{ maxHeight: open ? (bodyRef.current ? bodyRef.current.scrollHeight + 4 : 400) : 0 }}>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 24px', maxWidth: 760 }}>{item.a}</p>
      </div>
    </div>
  );
}

function FAQList({ query }) {
  const [open, setOpen] = React.useState(0);
  const q = query.trim().toLowerCase();
  const list = q ? FAQS.filter(f => (f.q + ' ' + f.a + ' ' + f.c).toLowerCase().includes(q)) : FAQS;
  return (
    <section style={{ ...WRAP, paddingTop: 56, paddingBottom: 96 }} className="stack-pad">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', margin: 0 }}>{q ? tr('Search results', 'Résultats de recherche') : tr('Frequently asked', 'Questions fréquentes')}</h2>
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', fontWeight: 600 }}>{list.length} article{list.length !== 1 ? 's' : ''}</span>
      </div>
      {list.length ? (
        <div style={{ marginTop: 16, borderTop: '1px solid var(--border-1)' }}>
          {list.map((f, i) => <AccordionItem key={f.q} item={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--fg-3)' }}>
          <SIcon name="search-x" size={40} color="var(--gray-400)" />
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, fontWeight: 600, margin: '16px 0 0' }}>{tr('No articles match', 'Aucun article ne correspond à')} “{query}”. {tr('Try a different word, or contact us below.', 'Essayez un autre mot ou contactez-nous ci-dessous.')}</p>
        </div>
      )}
    </section>
  );
}

function ContactBand() {
  const opts = [
    ['message-circle', tr('Chat in the app', 'Discuter dans l’app'), tr('Fastest way to reach us — open the app and tap Help.', 'Le plus rapide — ouvrez l’app et appuyez sur Aide.'), tr('Open chat', 'Ouvrir le chat'), 'auth.html'],
    ['mail', tr('Email support', 'Écrire au support'), tr('support@tako.cm · we reply within one business day.', 'support@tako.cm · réponse sous un jour ouvré.'), tr('Send email', 'Envoyer un e-mail'), 'mailto:support@tako.cm'],
    ['phone', tr('Call us', 'Nous appeler'), tr('+237 233 00 00 00 · Mon–Sat, 8am–8pm WAT for urgent ride issues.', '+237 233 00 00 00 · Lun–Sam, 8h–20h WAT pour les problèmes urgents.'), tr('Call now', 'Appeler'), 'tel:+237233000000'],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 88, paddingBottom: 96, borderTop: '1px solid var(--border-1)' }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Still stuck?', 'Toujours bloqué ?')} title={tr('Talk to a human', 'Parler à un humain')} sub={tr('Our support team is based in Cameroon and ready to help with anything the articles didn’t cover.', 'Notre équipe d’assistance est basée au Cameroun et prête à vous aider sur tout ce que les articles n’ont pas couvert.')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
          {opts.map(([ic, t, d, cta, href], i) => (
            <Reveal key={t} delay={i * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 30, display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={26} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 8px' }}>{t}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 20px', flex: 1 }}>{d}</p>
              <a href={href} className="link-amber" style={{ fontSize: 15 }}>{cta} <SIcon name="arrow-right" size={17} /></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Help() {
  useIcons();
  const [query, setQuery] = React.useState('');
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="help.html" />
      <HelpHero query={query} setQuery={setQuery} />
      <BrowseTopics />
      <Categories setQuery={setQuery} />
      <FAQList query={query} />
      <ContactBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Help />);
