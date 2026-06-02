/* Tako — Payment methods page */
import { t as tr } from '../lib/i18n.js';

function PayHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80, maxWidth: 760 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Payments', 'Paiements')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Pay your way.', 'Payez comme vous voulez.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 580 }}>
          {tr('Mobile Money, card, cash or a Tako gift card — choose how you pay and the fare is settled the moment your trip ends. No haggling, no surprises.', 'Mobile Money, carte, espèces ou carte cadeau Tako — choisissez votre mode de paiement et la course est réglée dès la fin du trajet. Sans marchandage, sans surprise.')}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Set up your wallet', 'Configurer votre portefeuille')}</SBtn>
          <SBtn variant="outlineLight" href="help-payments.html">{tr('Payment help', 'Aide paiements')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function PayMethods() {
  const methods = [
    {
      icon: 'smartphone',
      tag: tr('Most popular', 'Le plus utilisé'),
      title: tr('Mobile Money', 'Mobile Money'),
      desc: tr('MTN MoMo and Orange Money are the easiest way to pay in Cameroon. Link your number once and Tako debits your wallet automatically at the end of each trip.', 'MTN MoMo et Orange Money sont le moyen le plus simple de payer au Cameroun. Liez votre numéro une fois et Tako débite votre compte automatiquement à la fin de chaque course.'),
      steps: [
        tr('Tap Add payment method, then Mobile Money', 'Touchez Ajouter un moyen de paiement, puis Mobile Money'),
        tr('Pick MTN MoMo or Orange Money and enter your number', 'Choisissez MTN MoMo ou Orange Money et saisissez votre numéro'),
        tr('Confirm with the USSD prompt sent to your phone', 'Confirmez avec le code USSD envoyé sur votre téléphone'),
      ],
    },
    {
      icon: 'credit-card',
      tag: null,
      title: tr('Debit & credit cards', 'Cartes bancaires'),
      desc: tr('Add a Visa or Mastercard for one-tap payments. Your card is charged securely after each ride — handy for Tako Business and airport runs.', 'Ajoutez une carte Visa ou Mastercard pour payer en un geste. Votre carte est débitée en toute sécurité après chaque course — pratique pour Tako Entreprise et les trajets aéroport.'),
      steps: [
        tr('Choose Card under Add payment method', 'Choisissez Carte sous Ajouter un moyen de paiement'),
        tr('Enter the card number, expiry and CVV', 'Saisissez le numéro de carte, l’expiration et le CVV'),
        tr('Verify with your bank if 3-D Secure is requested', 'Validez avec votre banque si la 3-D Secure est demandée'),
      ],
    },
    {
      icon: 'banknote',
      tag: null,
      title: tr('Cash', 'Espèces'),
      desc: tr('Prefer to pay in person? Select Cash before you confirm and hand the driver the exact fare shown in the app at the end of the trip.', 'Vous préférez payer en personne ? Sélectionnez Espèces avant de confirmer et remettez au chauffeur le montant exact affiché dans l’app à la fin du trajet.'),
      steps: [
        tr('Set Cash as your method on the confirmation screen', 'Définissez Espèces comme moyen sur l’écran de confirmation'),
        tr('Pay the upfront fare in FCFA at drop-off', 'Réglez le tarif annoncé en FCFA à l’arrivée'),
        tr('Drivers keep small change for the busiest routes', 'Les chauffeurs gardent de la monnaie sur les trajets fréquents'),
      ],
    },
    {
      icon: 'gift',
      tag: tr('Give the gift of a ride', 'Offrez une course'),
      title: tr('Tako gift cards', 'Cartes cadeaux Tako'),
      desc: tr('Top up your balance with a Tako gift card — perfect to send a loved one or to keep rides covered. Redeemed credit is used before any other method.', 'Rechargez votre solde avec une carte cadeau Tako — idéale à offrir ou pour garder vos courses couvertes. Le crédit ajouté est utilisé avant tout autre moyen.'),
      steps: [
        tr('Open Wallet and tap Redeem gift card', 'Ouvrez Portefeuille et touchez Utiliser une carte cadeau'),
        tr('Enter the code from the email or printed card', 'Saisissez le code reçu par e-mail ou sur la carte'),
        tr('The amount lands in your Tako balance instantly', 'Le montant arrive sur votre solde Tako instantanément'),
      ],
      link: { href: 'gift-cards.html', label: tr('Buy a gift card', 'Acheter une carte cadeau') },
    },
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64 }} className="stack-pad">
      <SectionHead over={tr('Payment options', 'Modes de paiement')} title={tr('Four ways to pay for a Tako', 'Quatre façons de payer un Tako')} sub={tr('Add as many as you like and switch between them before any trip.', 'Ajoutez-en autant que vous voulez et changez avant chaque course.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {methods.map((m, i) => (
          <Reveal key={m.title} delay={(i % 2) * 80} style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 30 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{ width: 50, height: 50, borderRadius: 13, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={m.icon} size={25} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, margin: 0 }}>{m.title}</h3>
              {m.tag && <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--tako-amber-deep)', background: 'var(--tako-amber-soft)', border: '1px solid var(--tako-amber)', borderRadius: 999, padding: '5px 10px', whiteSpace: 'nowrap' }}>{m.tag}</span>}
            </div>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, margin: '0 0 20px' }}>{m.desc}</p>
            <ul style={{ listStyle: 'none', margin: '0 0 20px', padding: 0, display: 'grid', gap: 11 }}>
              {m.steps.map(s => (
                <li key={s} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                  <SIcon name="check" size={18} color="var(--success)" style={{ marginTop: 2 }} />
                  <span style={{ fontFamily: 'var(--font-text)', fontSize: 14.5, color: 'var(--fg-1)', fontWeight: 500, lineHeight: 1.45 }}>{s}</span>
                </li>
              ))}
            </ul>
            {m.link && (
              <div style={{ marginTop: 'auto', paddingTop: 4 }}>
                <SBtn variant="outline" icon="arrow-right" href={m.link.href} size="sm">{m.link.label}</SBtn>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AddMethod() {
  const steps = [
    { icon: 'user', t: tr('Open your Account', 'Ouvrez votre Compte'), d: tr('Tap your profile in the top corner of the Tako app to reach your account.', 'Touchez votre profil dans le coin supérieur de l’app Tako pour accéder à votre compte.') },
    { icon: 'wallet', t: tr('Go to Wallet', 'Allez dans Portefeuille'), d: tr('Open the Wallet section to see your balance and saved payment methods.', 'Ouvrez la section Portefeuille pour voir votre solde et vos moyens enregistrés.') },
    { icon: 'plus', t: tr('Add payment method', 'Ajouter un moyen de paiement'), d: tr('Tap Add payment method, choose Mobile Money, card or a gift card, and confirm.', 'Touchez Ajouter un moyen de paiement, choisissez Mobile Money, carte ou carte cadeau, et confirmez.') },
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 64, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Adding a payment method', 'Ajouter un moyen de paiement')} title={tr('Set up in three taps', 'Configuré en trois gestes')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }} className="grid-3">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: 'var(--tako-amber-deep)' }}>0{i + 1}</span>
                <span style={{ flex: 1, height: 1, background: 'var(--border-1)' }} />
                <div style={{ width: 44, height: 44, borderRadius: 12, border: '1px solid var(--border-1)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={s.icon} size={22} /></div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, margin: '0 0 8px' }}>{s.t}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Receipts() {
  const points = [
    ['receipt', tr('Emailed receipts', 'Reçus par e-mail'), tr('A clear receipt lands in your inbox after every trip — fare, route, distance and the payment method used.', 'Un reçu clair arrive dans votre boîte mail après chaque course — tarif, itinéraire, distance et moyen de paiement utilisé.')],
    ['rotate-ccw', tr('Refunds, handled fast', 'Remboursements rapides'), tr('Charged for a trip that went wrong? Report it from the receipt and approved refunds return to your Mobile Money, card or Tako balance.', 'Débité pour une course qui s’est mal passée ? Signalez-le depuis le reçu et les remboursements approuvés reviennent sur votre Mobile Money, carte ou solde Tako.')],
    ['file-text', tr('Trip history anytime', 'Historique à tout moment'), tr('Every ride is saved under Receipts in the app, so you can re-send or download a copy whenever you need one.', 'Chaque course est enregistrée sous Reçus dans l’app, pour renvoyer ou télécharger une copie quand vous en avez besoin.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64 }} className="stack-pad">
      <SectionHead over={tr('Receipts & refunds', 'Reçus et remboursements')} title={tr('Every franc accounted for', 'Chaque franc justifié')} sub={tr('Keep track of what you spend and get help the moment something looks off.', 'Suivez vos dépenses et obtenez de l’aide dès qu’un détail vous semble incorrect.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {points.map(([ic, title, d], i) => (
          <Reveal key={title} delay={(i % 3) * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{title}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
      <div style={{ marginTop: 28 }}>
        <SBtn variant="outline" icon="arrow-right" href="help-payments.html">{tr('Read the payments help centre', 'Consulter l’aide paiements')}</SBtn>
      </div>
    </section>
  );
}

function TrustNote() {
  return (
    <section style={{ ...WRAP, paddingTop: 0, paddingBottom: 96 }} className="stack-pad">
      <div style={{ background: 'var(--tako-amber-soft)', border: '1px solid var(--tako-amber)', borderRadius: 24, padding: '36px 40px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="shield" size={28} /></div>
        <div style={{ flex: 1, minWidth: 260 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', margin: '0 0 6px' }}>{tr('Your money, kept safe', 'Votre argent, protégé')}</h3>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--gray-700)', margin: 0 }}>{tr('Card and Mobile Money details are encrypted and stored securely — never shared with your driver. And because every fare is shown upfront before you confirm, you always know the price before the trip begins.', 'Les informations de carte et de Mobile Money sont chiffrées et stockées en toute sécurité — jamais partagées avec votre chauffeur. Et comme chaque tarif est affiché à l’avance avant de confirmer, vous connaissez toujours le prix avant le départ.')}</p>
        </div>
        <SBtn variant="primary" href="safety.html">{tr('How we protect you', 'Comment nous vous protégeons')}</SBtn>
      </div>
    </section>
  );
}

function PayCTA() {
  return (
    <section style={{ ...WRAP, padding: '0 32px 96px' }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-charcoal)', borderRadius: 28, padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <LaneMotif style={{ opacity: 0.5 }} />
        <div style={{ position: 'relative', maxWidth: 540 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 12px' }}>
            {tr('Ready to add a payment method?', 'Prêt à ajouter un moyen de paiement ?')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: 0 }}>
            {tr('Sign in to set up your wallet, or browse the help centre if you have a question first.', 'Connectez-vous pour configurer votre portefeuille, ou parcourez le centre d’aide si vous avez une question.')}
          </p>
        </div>
        <div style={{ position: 'relative', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Sign in to Tako', 'Se connecter à Tako')}</SBtn>
          <SBtn variant="outlineLight" href="help.html">{tr('Visit Help Centre', 'Centre d’aide')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function Payment() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="payment.html" />
      <PayHero />
      <PayMethods />
      <AddMethod />
      <Receipts />
      <TrustNote />
      <PayCTA />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Payment />);
