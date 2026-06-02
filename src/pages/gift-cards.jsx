/* Tako — Gift cards page */
import { t as tr } from '../lib/i18n.js';

const AMOUNTS = [5000, 10000, 25000, 50000];

// Amber "gift card" visual: rounded card with lane motif + Tako mark.
function GiftCardVisual({ amount }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', maxWidth: 400, aspectRatio: '1.6 / 1', borderRadius: 22, background: 'linear-gradient(135deg, var(--tako-amber) 0%, var(--tako-amber-deep) 100%)', boxShadow: 'var(--shadow-lg)', color: 'var(--tako-black)' }}>
      <LaneMotif style={{ opacity: 0.35 }} />
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px 26px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <img src="assets/tako-mark.png" alt="" style={{ height: 30, width: 30, objectFit: 'contain' }} />
            <span className="notranslate" translate="no" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, letterSpacing: '-0.02em' }}>Tako</span>
          </div>
          <SIcon name="gift" size={26} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>{tr('Gift card', 'Carte cadeau')}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,4vw,40px)', letterSpacing: '-0.02em', lineHeight: 1, marginTop: 6 }}>
            <span style={{ fontFamily: 'var(--font-mono)' }}>{fmt(amount)}</span> FCFA
          </div>
        </div>
      </div>
    </div>
  );
}

function GiftHero({ amount }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', color: '#fff' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }} className="grid-2 stack-pad">
        <div style={{ maxWidth: 560 }}>
          <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Gift cards', 'Cartes cadeaux')}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
            {tr('Give the gift of getting around.', 'Offrez la liberté de se déplacer.')}
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 480 }}>
            {tr('A Tako gift card covers rides anywhere we operate — from Douala to Yaoundé and beyond. Send one to family or friends in seconds.', 'Une carte cadeau Tako paie des courses partout où nous opérons — de Douala à Yaoundé et au-delà. Offrez-en une à vos proches en quelques secondes.')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Buy a gift card', 'Acheter une carte')}</SBtn>
            <SBtn variant="outlineLight" href="#how">{tr('How it works', 'Comment ça marche')}</SBtn>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GiftCardVisual amount={amount} />
        </div>
      </div>
    </section>
  );
}

function Denominations({ amount, setAmount }) {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64 }} className="stack-pad">
      <SectionHead over={tr('Choose an amount', 'Choisissez un montant')} title={tr('Pick the perfect value', 'Choisissez la valeur idéale')} sub={tr('Select an amount to preview the card above. The recipient can use it across every Tako ride.', 'Sélectionnez un montant pour aperçu de la carte ci-dessus. Le destinataire peut l’utiliser sur toutes les courses Tako.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="grid-4">
        {AMOUNTS.map((amt, i) => {
          const selected = amt === amount;
          return (
            <Reveal key={amt} delay={(i % 4) * 60}>
              <button onClick={() => setAmount(amt)} aria-pressed={selected}
                style={{ width: '100%', cursor: 'pointer', textAlign: 'left', background: selected ? 'var(--tako-amber-soft)' : '#fff', border: selected ? '2px solid var(--tako-amber)' : '1px solid var(--border-1)', borderRadius: 18, padding: '26px 22px', transition: 'border-color .15s, background .15s', boxShadow: selected ? 'var(--shadow-md)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <SIcon name="gift" size={22} color={selected ? 'var(--tako-amber-deep)' : 'var(--fg-3)'} />
                  <span style={{ width: 22, height: 22, borderRadius: 999, border: selected ? 'none' : '2px solid var(--border-1)', background: selected ? 'var(--tako-amber)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {selected && <SIcon name="check" size={14} color="var(--tako-black)" />}
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', color: 'var(--tako-black)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)' }}>{fmt(amt)}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 13, color: 'var(--fg-3)', marginTop: 2 }}>FCFA</div>
              </button>
            </Reveal>
          );
        })}
      </div>
      <div style={{ marginTop: 28 }}>
        <SBtn variant="primary" icon="arrow-right" href="auth.html">{tr('Send', 'Envoyer')} <span style={{ fontFamily: 'var(--font-mono)' }}>{fmt(amount)}</span> FCFA</SBtn>
      </div>
    </section>
  );
}

function GiftHow() {
  const steps = [
    { icon: 'gift', t: tr('Choose an amount', 'Choisissez un montant'), d: tr('Pick a value from 5 000 to 50 000 FCFA and add a personal message.', 'Sélectionnez une valeur de 5 000 à 50 000 FCFA et ajoutez un mot personnel.') },
    { icon: 'mail', t: tr('Send by email or SMS', 'Envoyez par e-mail ou SMS'), d: tr('Deliver it instantly to a phone number or inbox — even to someone without the app yet.', 'Livrez-la instantanément à un numéro ou une boîte mail — même à quelqu’un sans l’app.') },
    { icon: 'smartphone', t: tr('They redeem in the app', 'Ils l’utilisent dans l’app'), d: tr('The recipient adds the code to their Tako wallet and rides on you.', 'Le destinataire ajoute le code à son portefeuille Tako et roule grâce à vous.') },
  ];
  return (
    <section id="how" style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96, scrollMarginTop: 80 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('How it works', 'Comment ça marche')} title={tr('Gifted in three steps', 'Offerte en trois étapes')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }} className="grid-3">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
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

function GiftWhy() {
  const feats = [
    ['wallet', tr('Works on every ride', 'Valable sur chaque course'), tr('Go, Comfort, XL or a scheduled airport trip — the balance covers them all.', 'Go, Comfort, XL ou un trajet aéroport réservé — le solde paie tout.')],
    ['heart', tr('Never expires', 'N’expire jamais'), tr('No deadline, no fine print. The balance stays ready until it’s used.', 'Aucune date limite, aucune mention en petits caractères. Le solde reste disponible.')],
    ['smartphone', tr('Perfect without a card', 'Idéale sans carte bancaire'), tr('Give a parent or student a way to ride even if they have no bank card.', 'Offrez à un parent ou un étudiant le moyen de rouler, même sans carte bancaire.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64 }} className="stack-pad">
      <SectionHead over={tr('Why Tako gift cards', 'Pourquoi les cartes Tako')} title={tr('Thoughtful, and actually useful', 'Attentionnée, et vraiment utile')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {feats.map(([ic, t2, d], i) => (
          <Reveal key={t2} delay={(i % 3) * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t2}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function RedeemNote() {
  return (
    <section style={{ ...WRAP, paddingBottom: 96 }} className="stack-pad">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: 'var(--bg-2)', border: '1px solid var(--border-1)', borderRadius: 18, padding: '24px 26px', flexWrap: 'wrap' }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', border: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="wallet" size={22} color="var(--tako-amber-deep)" /></div>
        <div style={{ flex: 1, minWidth: 240 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, margin: '0 0 6px' }}>{tr('Redeeming a gift card', 'Utiliser une carte cadeau')}</h3>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>
            {tr('Open the Tako app, go to your wallet and enter the code to add the balance.', 'Ouvrez l’app Tako, allez dans votre portefeuille et saisissez le code pour ajouter le solde.')}{' '}
            <a href="payment.html" className="link-amber">{tr('See payment options', 'Voir les moyens de paiement')}</a>{' '}
            {tr('or visit the', 'ou consultez le')}{' '}
            <a href="help.html" className="link-amber">{tr('Help Centre', 'Centre d’aide')}</a>{tr('.', '.')}
          </p>
        </div>
      </div>
    </section>
  );
}

function GiftCTA() {
  return (
    <section style={{ ...WRAP, padding: '0 32px 96px' }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-charcoal)', borderRadius: 28, padding: '64px 56px', textAlign: 'center' }}>
        <LaneMotif style={{ opacity: 0.5 }} />
        <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 14px' }}>
            {tr('Ready to make someone’s week?', 'Prêt à faire plaisir à un proche ?')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: '0 0 28px' }}>
            {tr('Buy a Tako gift card in under a minute and send it on its way.', 'Achetez une carte cadeau Tako en moins d’une minute et envoyez-la.')}
          </p>
          <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Buy a gift card', 'Acheter une carte')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function GiftCards() {
  useIcons();
  const [amount, setAmount] = React.useState(10000);
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="gift-cards.html" />
      <GiftHero amount={amount} />
      <Denominations amount={amount} setAmount={setAmount} />
      <GiftHow />
      <GiftWhy />
      <RedeemNote />
      <GiftCTA />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<GiftCards />);
