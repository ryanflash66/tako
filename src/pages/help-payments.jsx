/* Tako — Help Centre · Payments category page */
import { t as tr } from '../lib/i18n.js';

// Payments Q&As — the three from help.jsx plus the topics this category covers
// (Mobile Money MTN/Orange, cards, cash, receipts, refunds, fare disputes).
const FAQS = [
  {
    q: tr('What payment methods can I use?', 'Quels moyens de paiement puis-je utiliser ?'),
    a: tr('You can pay with cash or Mobile Money (MTN Mobile Money and Orange Money). Choose your default in Payment settings, and switch per trip whenever you like.', 'Vous pouvez payer en espèces ou par Mobile Money (MTN Mobile Money et Orange Money). Choisissez votre moyen par défaut dans les paramètres de paiement et changez à chaque trajet si vous le souhaitez.'),
  },
  {
    q: tr('How do I link MTN or Orange Mobile Money?', 'Comment associer MTN ou Orange Money ?'),
    a: tr('In Payment settings, tap Add Mobile Money, choose MTN Mobile Money or Orange Money, and enter the number tied to your wallet. We confirm it with a quick prompt on your phone — after that, each ride is charged automatically when your trip ends.', 'Dans les paramètres de paiement, appuyez sur Ajouter Mobile Money, choisissez MTN Mobile Money ou Orange Money, puis saisissez le numéro lié à votre portefeuille. Nous le confirmons par une demande rapide sur votre téléphone — ensuite, chaque course est débitée automatiquement à la fin du trajet.'),
  },
  {
    q: tr('Can I pay by card?', 'Puis-je payer par carte ?'),
    a: tr('Yes. Add a Visa or Mastercard in Payment settings and it becomes available alongside cash and Mobile Money. Your card details are encrypted and never shared with your driver.', 'Oui. Ajoutez une carte Visa ou Mastercard dans les paramètres de paiement et elle devient disponible aux côtés des espèces et du Mobile Money. Vos données de carte sont chiffrées et ne sont jamais partagées avec votre chauffeur.'),
  },
  {
    q: tr('How does paying with cash work?', 'Comment fonctionne le paiement en espèces ?'),
    a: tr('Pick Cash before you book and pay your driver directly at the end of the trip. The exact fare is shown in the app, so you always know what to hand over — a receipt is still saved to your account.', 'Choisissez Espèces avant de réserver et payez votre chauffeur directement à la fin du trajet. Le prix exact est affiché dans l’app, vous savez donc toujours quoi remettre — un reçu reste enregistré sur votre compte.'),
  },
  {
    q: tr('How do I get a receipt?', 'Comment obtenir un reçu ?'),
    a: tr('Every trip receipt is saved under Your Trips in the app and emailed to you automatically. Tap any past trip to view or re-send it.', 'Chaque reçu de trajet est enregistré dans « Vos trajets » dans l’app et vous est envoyé par e-mail automatiquement. Appuyez sur un trajet passé pour le consulter ou le renvoyer.'),
  },
  {
    q: tr('Why is the final fare different from the estimate?', 'Pourquoi le prix final diffère-t-il de l’estimation ?'),
    a: tr('Fares are confirmed before you book and rarely change. If your route changes — extra stops, a longer path, heavy traffic — the fare adjusts and you’ll always see why in your receipt.', 'Les prix sont confirmés avant la réservation et changent rarement. Si votre itinéraire change — arrêts supplémentaires, trajet plus long, trafic dense — le prix s’ajuste et vous en voyez toujours la raison sur votre reçu.'),
  },
  {
    q: tr('How do refunds work?', 'Comment fonctionnent les remboursements ?'),
    a: tr('If you were charged for a trip you didn’t take or were overcharged, open the trip in Your Trips and tap Get help. Approved refunds go back to your Mobile Money wallet or card, usually within a few business days.', 'Si vous avez été débité pour un trajet que vous n’avez pas effectué ou en cas de trop-perçu, ouvrez le trajet dans « Vos trajets » et appuyez sur Obtenir de l’aide. Les remboursements approuvés sont reversés sur votre portefeuille Mobile Money ou votre carte, généralement sous quelques jours ouvrés.'),
  },
  {
    q: tr('I think a fare is wrong. How do I dispute it?', 'Je pense qu’un prix est incorrect. Comment le contester ?'),
    a: tr('Open the trip, tap Get help, then “Review my fare”. Tell us what looks off and our team checks the route, time and any stops against the price. If something’s wrong, we’ll put it right.', 'Ouvrez le trajet, appuyez sur Obtenir de l’aide, puis « Vérifier mon prix ». Dites-nous ce qui ne va pas et notre équipe compare l’itinéraire, la durée et les arrêts éventuels au prix. Si une erreur s’est glissée, nous la corrigeons.'),
  },
];

const PAGE = {
  icon: 'credit-card',
  over: tr('Help Centre', 'Centre d’aide'),
  title: tr('Payments', 'Paiements'),
  intro: tr('Everything about paying for your rides — Mobile Money with MTN and Orange, cards, cash, receipts, refunds and fare disputes.', 'Tout sur le paiement de vos courses — Mobile Money avec MTN et Orange, cartes, espèces, reçus, remboursements et contestations de prix.'),
  self: 'help-payments.html',
};

// Sibling Help category pages + the hub, for cross-linking.
const OTHER_TOPICS = [
  ['user-round', tr('Account', 'Compte'), tr('Sign-up, profile, login and language', 'Inscription, profil, connexion et langue'), 'help-account.html'],
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
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.02em', margin: 0 }}>{tr('Payment questions', 'Questions sur le paiement')}</h2>
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

function HelpPayments() {
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

ReactDOM.createRoot(document.getElementById('root')).render(<HelpPayments />);
