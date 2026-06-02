/* Tako — ride-tier product template (tier.html?key=moto|go|comfort|xl) */
import { t as tr } from '../lib/i18n.js';

const TIERS = {
  moto: {
    name: 'Tako Moto', icon: 'bike', seats: '1', base: 400, perkm: 110,
    tagline: tr('Beat the traffic', 'Échappez aux embouteillages'),
    desc: tr('The fastest, most affordable way across town — a quick ride on two wheels, weaving past the jams.', 'Le moyen le plus rapide et le plus abordable en ville — une course agile à deux roues, loin des bouchons.'),
    feats: [
      ['zap', tr('Fastest in traffic', 'Le plus rapide dans le trafic'), tr('Slip past gridlock and arrive in a fraction of the time.', 'Dépassez les embouteillages et arrivez en une fraction du temps.')],
      ['badge-cent', tr('Lowest fare', 'Le prix le plus bas'), tr('The cheapest way to get a Tako, perfect for short hops.', 'La façon la moins chère de prendre un Tako, idéal pour les petits trajets.')],
      ['shield-check', tr('Helmet included', 'Casque inclus'), tr('Every Moto driver carries a passenger helmet for your safety.', 'Chaque chauffeur Moto fournit un casque passager pour votre sécurité.')],
    ],
  },
  go: {
    name: 'Tako Go', icon: 'car', seats: '4', base: 700, perkm: 230,
    tagline: tr('Everyday rides', 'Le quotidien'),
    desc: tr('Affordable, reliable cars for getting around the city — your go-to for the daily commute and everything in between.', 'Des voitures fiables et abordables pour circuler en ville — votre option par défaut, du trajet quotidien à tout le reste.'),
    feats: [
      ['car', tr('Comfortable cars', 'Voitures confortables'), tr('Clean, well-kept 4-seaters for any everyday trip.', 'Des 4 places propres et bien entretenues pour tous vos trajets.')],
      ['badge-cent', tr('Great value', 'Excellent rapport'), tr('Upfront pricing that makes the daily ride easy on the wallet.', 'Un prix transparent qui ménage votre porte-monnaie au quotidien.')],
      ['clock', tr('Quick pickups', 'Prises en charge rapides'), tr('The most drivers on the road means shorter waits.', 'Le plus grand nombre de chauffeurs, donc des attentes plus courtes.')],
    ],
  },
  comfort: {
    name: 'Tako Comfort', icon: 'car-front', seats: '4', base: 1100, perkm: 340,
    tagline: tr('A little extra', 'Un peu plus'),
    desc: tr('Newer cars with more legroom and top-rated drivers — for when you want the ride to feel a step up.', 'Des voitures récentes avec plus d’espace et des chauffeurs les mieux notés — quand vous voulez monter d’un cran.'),
    feats: [
      ['star', tr('Top-rated drivers', 'Chauffeurs les mieux notés'), tr('Only our highest-rated drivers qualify for Comfort.', 'Seuls nos chauffeurs les mieux notés sont éligibles à Comfort.')],
      ['car-front', tr('Newer, roomier cars', 'Voitures récentes et spacieuses'), tr('Extra legroom and recent models, every trip.', 'Plus d’espace pour les jambes et des modèles récents, à chaque course.')],
      ['sliders-horizontal', tr('Set your preferences', 'Vos préférences'), tr('Quieter ride or a cooler temperature? Just ask.', 'Trajet plus calme ou température plus fraîche ? Il suffit de demander.')],
    ],
  },
  xl: {
    name: 'Tako XL', icon: 'users', seats: '6', base: 1500, perkm: 430,
    tagline: tr('Room for everyone', 'De la place pour tous'),
    desc: tr('Spacious rides for groups and luggage — up to six seats so the whole family or crew travels together.', 'Des courses spacieuses pour les groupes et les bagages — jusqu’à six places pour voyager tous ensemble.'),
    feats: [
      ['users', tr('Up to 6 seats', 'Jusqu’à 6 places'), tr('Keep the group together in one roomy vehicle.', 'Gardez le groupe ensemble dans un véhicule spacieux.')],
      ['package', tr('Space for luggage', 'De la place pour les bagages'), tr('Airport runs and big shops are no problem.', 'Trajets aéroport et grosses courses ne posent aucun problème.')],
      ['handshake', tr('One ride, split easily', 'Une course, partagée facilement'), tr('Travel together and share the fare in the app.', 'Voyagez ensemble et partagez le prix dans l’app.')],
    ],
  },
};

function getTier() {
  let key = 'go';
  try { const k = new URLSearchParams(window.location.search).get('key'); if (k && TIERS[k]) key = k; } catch (e) {}
  return { key, tier: TIERS[key] };
}

function TierPage() {
  useIcons();
  const { key, tier } = getTier();
  const from = fmt(tier.base + tier.perkm * 4);
  const others = Object.keys(TIERS).filter(k => k !== key);
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="ride.html" />
      <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
        <div style={{ ...WRAP, paddingTop: 72, paddingBottom: 72 }} className="stack-pad">
          <a href="ride.html" className="link-amber" style={{ fontSize: 15, marginBottom: 20, display: 'inline-flex' }}><SIcon name="arrow-left" size={17} /> {tr('All ride options', 'Toutes les options')}</a>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.7fr', gap: 48, alignItems: 'center', marginTop: 12 }} className="hero-grid">
            <div>
              <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 16 }}>{tier.tagline}</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>{tier.name}</h1>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '20px 0 28px', maxWidth: 460 }}>{tier.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28, flexWrap: 'wrap' }}>
                <div><div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 22 }}>{tr('from', 'dès')} {from} <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>FCFA</span></div></div>
                <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: 'var(--fg-3)', display: 'inline-flex', alignItems: 'center', gap: 6 }}><SIcon name="user" size={15} /> {tier.seats} {tr('seat', 'place')}{tier.seats !== '1' ? 's' : ''}</span>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <SBtn variant="primary" icon="arrow-right" href="auth.html">{tr('Request', 'Réserver')} {tier.name}</SBtn>
                <SBtn variant="outline" href="reserve.html">{tr('Reserve for later', 'Réserver pour plus tard')}</SBtn>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 180, height: 180, borderRadius: 36, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-xl)' }}><SIcon name={tier.icon} size={88} color="var(--tako-amber)" /></div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
        <SectionHead over={tr('Why choose it', 'Pourquoi la choisir')} title={`${tr('What makes', 'Ce qui distingue')} ${tier.name} ${tr('different', '')}`.trim()} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
          {tier.feats.map(([ic, t2, d], i) => (
            <Reveal key={t2} delay={(i % 3) * 70} style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t2}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section style={{ background: 'var(--bg-2)', paddingTop: 64, paddingBottom: 96 }}>
        <div style={WRAP} className="stack-pad">
          <SectionHead over={tr('Compare', 'Comparer')} title={tr('Other ways to ride', 'Autres façons de rouler')} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="grid-3">
            {others.map(k => (
              <a key={k} href={`tier.html?key=${k}`} className="lift" style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 22px', textDecoration: 'none', color: 'var(--fg-1)' }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={TIERS[k].icon} size={22} /></div>
                <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>{TIERS[k].name}</span>
                <SIcon name="arrow-right" size={18} color="var(--gray-400)" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TierPage />);
