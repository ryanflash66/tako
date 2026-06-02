/* Tako — Get the app page */
import { t as tr } from '../lib/i18n.js';

const SITE_URL = 'https://tako-steel.vercel.app/app.html';

// Reusable App Store / Google Play button pair (matches shared.jsx markup).
function StoreButtons({ style = {} }) {
  return (
    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', ...style }}>
      <a className="store-btn" href="https://apps.apple.com/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
        <AppleLogo size={24} />
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: 11, color: 'var(--gray-400)' }}>{tr('Download on the', 'Télécharger sur l’')}</div>
          <div style={{ fontSize: 17, fontWeight: 700, fontFamily: 'var(--font-display)' }}>App Store</div>
        </div>
      </a>
      <a className="store-btn" href="https://play.google.com/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
        <SIcon name="play" size={24} />
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: 11, color: 'var(--gray-400)' }}>{tr('Get it on', 'Disponible sur')}</div>
          <div style={{ fontSize: 17, fontWeight: 700, fontFamily: 'var(--font-display)' }}>Google Play</div>
        </div>
      </a>
    </div>
  );
}

function AppHero() {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: 56, alignItems: 'center', paddingTop: 80, paddingBottom: 80 }} className="hero-grid stack-pad">
        <div>
          <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>{tr('Get the app', 'Téléchargez l’app')}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
            {tr('The whole of Tako,', 'Tout Tako,')}<br />{tr('in your pocket.', 'dans votre poche.')}
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '24px 0 32px', maxWidth: 480 }}>
            {tr('Request a ride in seconds, see the fare before you book and pay how you like — from Douala’s busiest streets to a quiet road in Buea. Free to download for iPhone and Android.', 'Réservez une course en quelques secondes, voyez le prix avant de confirmer et payez comme vous voulez — des rues animées de Douala à une route tranquille de Buéa. Gratuit pour iPhone et Android.')}
          </p>
          <StoreButtons />
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 28 }}>
            {[['shield-check', tr('Verified drivers', 'Chauffeurs vérifiés')], ['banknote', tr('Mobile Money & cash', 'Mobile Money & espèces')], ['globe', tr('English & Français', 'English & Français')]].map(([ic, label]) => (
              <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14 }}>
                <SIcon name={ic} size={18} color="var(--tako-amber-deep)" /> {label}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: 300, borderRadius: 36, background: 'var(--tako-black)', padding: 14, boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ background: '#fff', borderRadius: 26, padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>{tr('Scan to download', 'Scannez pour télécharger')}</div>
              <div style={{ padding: 12, border: '1px solid var(--border-1)', borderRadius: 16, background: '#fff' }}>
                <QRCode value={SITE_URL} size={196} />
              </div>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5, margin: '18px 0 0' }}>
                {tr('Point your camera at the code to open Tako on your phone.', 'Pointez l’appareil photo vers le code pour ouvrir Tako sur votre téléphone.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppFeatures() {
  const feats = [
    ['zap', tr('Request in seconds', 'Réservez en quelques secondes'), tr('Set your destination and we match you with the nearest verified driver almost instantly.', 'Indiquez votre destination et nous vous associons au chauffeur vérifié le plus proche presque instantanément.')],
    ['badge-cent', tr('Upfront fares', 'Prix à l’avance'), tr('See the exact price in FCFA before you confirm. No meter, no surprises at the end of the trip.', 'Voyez le prix exact en FCFA avant de confirmer. Pas de compteur, pas de surprise en fin de course.')],
    ['route', tr('Live tracking & trip sharing', 'Suivi en direct & partage'), tr('Follow your driver on the map and share your live trip with family in one tap.', 'Suivez votre chauffeur sur la carte et partagez votre trajet en direct avec vos proches en un geste.')],
    ['banknote', tr('Mobile Money & cash', 'Mobile Money & espèces'), tr('Pay with MTN MoMo, Orange Money or cash — whatever is easiest for you that day.', 'Payez avec MTN MoMo, Orange Money ou en espèces — comme cela vous arrange ce jour-là.')],
    ['receipt', tr('Ride history & receipts', 'Historique & reçus'), tr('Every trip is saved with a clear receipt you can revisit or send for expenses.', 'Chaque course est enregistrée avec un reçu clair, à consulter ou à envoyer pour vos notes de frais.')],
    ['headset', tr('Help, 24/7', 'Assistance 24/7'), tr('A real team based in Cameroon is one tap away whenever you need a hand.', 'Une vraie équipe basée au Cameroun est à un geste dès que vous avez besoin d’aide.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Why download Tako', 'Pourquoi télécharger Tako')} title={tr('Everything you need to move, in one app', 'Tout ce qu’il faut pour vous déplacer, en une app')} sub={tr('From the first tap to the final receipt, the Tako app is built for getting around Cameroon every day.', 'Du premier geste au reçu final, l’app Tako est pensée pour circuler au Cameroun chaque jour.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {feats.map(([ic, title, desc], i) => (
          <Reveal key={title} delay={(i % 3) * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{title}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function DriversBand() {
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', paddingTop: 64, paddingBottom: 64 }} className="stack-pad">
        <div style={{ maxWidth: 560 }}>
          <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 14 }}>{tr('Also for drivers', 'Aussi pour les chauffeurs')}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)', letterSpacing: '-0.02em', lineHeight: 1.08, margin: '0 0 14px' }}>
            {tr('Want to earn behind the wheel?', 'Envie de gagner au volant ?')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>
            {tr('The Tako Driver app has built-in navigation, live earnings and a demand map — your full toolkit for every trip across Cameroon.', 'L’app chauffeur Tako offre une navigation intégrée, des revenus en direct et une carte de la demande — votre boîte à outils complète pour chaque course au Cameroun.')}
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <SBtn variant="primary" icon="arrow-right" href="driver-app.html">{tr('Get the driver app', 'Obtenir l’app chauffeur')}</SBtn>
          <SBtn variant="outline" href="drive.html">{tr('Become a driver', 'Devenir chauffeur')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function AppCTA() {
  return (
    <section style={{ ...WRAP, padding: '96px 32px' }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-charcoal)', borderRadius: 28, padding: '72px 56px', textAlign: 'center' }}>
        <LaneMotif style={{ opacity: 0.5 }} />
        <div style={{ position: 'relative', maxWidth: 620, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.4vw,46px)', letterSpacing: '-0.025em', lineHeight: 1.05, color: '#fff', margin: '0 0 14px' }}>
            {tr('Your next ride is one download away', 'Votre prochaine course est à un téléchargement')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: '0 0 32px', lineHeight: 1.5 }}>
            {tr('Free to download. Ready when you are.', 'Gratuit à télécharger. Prêt quand vous l’êtes.')}
          </p>
          <StoreButtons style={{ justifyContent: 'center' }} />
        </div>
      </div>
    </section>
  );
}

function App() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="app.html" />
      <AppHero />
      <AppFeatures />
      <DriversBand />
      <AppCTA />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
