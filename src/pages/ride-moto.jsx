/* Tako — Tako Moto product page (ride-moto.html) */
import { t as tr } from '../lib/i18n.js';

// Fare model — matches ride.jsx / tier.jsx exactly.
const MOTO = { name: 'Tako Moto', icon: 'bike', base: 400, perkm: 110, etaMin: 2, seats: '1' };

// Sibling ride tiers for the comparison / cross-link section.
const SIBLINGS = [
  { name: 'Tako Go', icon: 'car', href: 'ride-go.html', when: tr('Everyday city rides when you’d rather sit in a car.', 'Les trajets quotidiens en ville quand vous préférez une voiture.') },
  { name: 'Tako Comfort', icon: 'car-front', href: 'ride-comfort.html', when: tr('Newer cars and extra legroom for a step up.', 'Voitures récentes et plus d’espace pour monter d’un cran.') },
  { name: 'Tako XL', icon: 'users', href: 'ride-xl.html', when: tr('Groups and luggage — up to six seats together.', 'Groupes et bagages — jusqu’à six places ensemble.') },
  { name: 'Tako Green', icon: 'leaf', href: 'ride-green.html', when: tr('A lower-emission ride for the eco-minded.', 'Une course plus propre pour les soucieux de l’environnement.') },
];

function MotoHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', color: '#fff' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
        <a href="ride.html" className="link-amber" style={{ fontSize: 15, marginBottom: 22, display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--tako-amber)' }}><SIcon name="arrow-left" size={17} /> {tr('All ride options', 'Toutes les options')}</a>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.7fr', gap: 48, alignItems: 'center' }} className="hero-grid">
          <div>
            <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{MOTO.name}</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
              {tr('Beat the traffic', 'Échappez aux embouteillages,')}<br />{tr('on two wheels.', 'à deux roues.')}
            </h1>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 480 }}>
              {tr('When Douala is gridlocked, a Tako Moto slips past the jams. The fastest, most affordable way across town — helmet provided, fare shown before you book.', 'Quand Douala est bloquée, un Tako Moto se faufile entre les bouchons. Le moyen le plus rapide et le plus abordable en ville — casque fourni, prix affiché avant de réserver.')}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28, flexWrap: 'wrap' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 22 }}>{tr('from', 'dès')} {fmt(MOTO.base + MOTO.perkm * 4)} <span style={{ fontSize: 13, color: 'var(--gray-400)' }}>FCFA</span></div>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: 'var(--gray-400)', display: 'inline-flex', alignItems: 'center', gap: 6 }}><SIcon name="clock" size={15} /> ~{MOTO.etaMin} {tr('min away', 'min')}</span>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: 'var(--gray-400)', display: 'inline-flex', alignItems: 'center', gap: 6 }}><SIcon name="user" size={15} /> {MOTO.seats} {tr('seat', 'place')}</span>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Request Tako Moto', 'Réserver Tako Moto')}</SBtn>
              <SBtn variant="outlineLight" href="reserve.html">{tr('Reserve for later', 'Réserver pour plus tard')}</SBtn>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 200, height: 200, borderRadius: 40, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}><SIcon name={MOTO.icon} size={96} color="var(--tako-amber)" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyMoto() {
  const feats = [
    ['zap', tr('Fastest through traffic', 'Le plus rapide dans le trafic'), tr('A Moto weaves past the gridlock on Boulevard de la Liberté and arrives in a fraction of the time.', 'Un Moto se faufile dans les bouchons du Boulevard de la Liberté et arrive en une fraction du temps.')],
    ['wallet', tr('Lowest fares', 'Les prix les plus bas'), tr('The cheapest way to take a Tako — just 400 FCFA to start, perfect for short hops.', 'La façon la moins chère de prendre un Tako — dès 400 FCFA, idéal pour les petits trajets.')],
    ['shield', tr('Helmet provided', 'Casque fourni'), tr('Every Moto driver carries a clean passenger helmet, so you’re covered on every ride.', 'Chaque chauffeur Moto fournit un casque passager propre, vous êtes protégé à chaque course.')],
    ['clock', tr('Great for short hops', 'Idéal pour les courts trajets'), tr('Nipping to Marché Central or across Akwa? A Moto is in and out before a car even moves.', 'Un saut au Marché Central ou à travers Akwa ? Un Moto arrive et repart avant qu’une voiture ne bouge.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Why Moto', 'Pourquoi Moto')} title={tr('Built for the way Cameroon moves', 'Conçu pour la façon dont le Cameroun se déplace')} sub={tr('Two wheels, one seat, and the shortest line between you and where you’re going.', 'Deux roues, une place, et le chemin le plus court entre vous et votre destination.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {feats.map(([ic, title, d], i) => (
          <Reveal key={title} delay={(i % 2) * 80} className="lift" style={{ display: 'flex', gap: 20, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 28 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={26} /></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FareExample() {
  const km = 5;
  const total = MOTO.base + MOTO.perkm * km; // 400 + 5×110 = 950
  const rows = [
    [tr('Base fare', 'Prix de base'), fmt(MOTO.base)],
    [`${km} km × ${fmt(MOTO.perkm)} FCFA`, fmt(MOTO.perkm * km)],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 0.85fr', gap: 56, alignItems: 'center' }} className="hero-grid stack-pad">
        <div>
          <SectionHead over={tr('Simple fares', 'Prix simples')} title={tr('See it before you ride', 'Voyez-le avant de partir')} sub={tr('Every Tako Moto fare starts at a flat base, plus a fixed rate per kilometre. No meter, no surprises — the exact price is shown before you confirm.', 'Chaque course Tako Moto commence à un prix de base fixe, plus un tarif fixe au kilomètre. Pas de compteur, pas de surprise — le prix exact s’affiche avant de confirmer.')} style={{ marginBottom: 28 }} />
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14 }}><SIcon name="badge-cent" size={18} color="var(--tako-amber-deep)" /> {tr('Base', 'Base')} {fmt(MOTO.base)} FCFA</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14 }}><SIcon name="route" size={18} color="var(--tako-amber-deep)" /> {fmt(MOTO.perkm)} FCFA / km</div>
          </div>
        </div>
        <Reveal style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 24, padding: 28, boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <SIcon name="calculator" size={18} color="var(--tako-amber-deep)" />
            <span className="tako-overline" style={{ color: 'var(--fg-2)' }}>{tr('Example · 5 km across Akwa', 'Exemple · 5 km à travers Akwa')}</span>
          </div>
          <div style={{ display: 'grid', gap: 12, marginBottom: 18 }}>
            {rows.map(([label, val]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)' }}>{label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 15 }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid var(--border-1)', paddingTop: 18 }}>
            <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 16 }}>{tr('Estimated total', 'Total estimé')}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 30, color: 'var(--tako-black)' }}>{fmt(total)} <span style={{ fontSize: 14, color: 'var(--fg-3)' }}>FCFA</span></span>
          </div>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-3)', margin: '14px 0 0' }}>{tr('Estimate in FCFA. Final fare confirmed in the app before you ride.', 'Estimation en FCFA. Prix final confirmé dans l’app avant de partir.')}</p>
        </Reveal>
      </div>
    </section>
  );
}

function WhenToUse() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('When to use it', 'Quand l’utiliser')} title={tr('Moto when it’s quick, a car when it’s not', 'Moto pour la vitesse, une voiture sinon')} sub={tr('A Moto is unbeatable solo and in traffic. Travelling with others, in the rain, or carrying loads? One of these fits better.', 'Un Moto est imbattable en solo et dans le trafic. Vous voyagez à plusieurs, sous la pluie, ou avec des bagages ? L’une de ces options convient mieux.')} />
      <div style={{ background: 'var(--tako-black)', color: '#fff', borderRadius: 22, padding: '28px 32px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={MOTO.icon} size={28} /></div>
        <div style={{ flex: 1, minWidth: 240 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, margin: '0 0 6px' }}>{tr('Pick Tako Moto when…', 'Choisissez Tako Moto quand…')}</h3>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--gray-300)', lineHeight: 1.5, margin: 0 }}>{tr('You’re riding solo, the traffic is heavy, or you just need the cheapest, fastest hop across town.', 'Vous voyagez seul, le trafic est dense, ou il vous faut simplement le trajet le plus rapide et le moins cher en ville.')}</p>
        </div>
        <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Request Tako Moto', 'Réserver Tako Moto')}</SBtn>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }} className="grid-2">
        {SIBLINGS.map((s, i) => (
          <Reveal key={s.name} delay={(i % 2) * 70}>
            <a href={s.href} className="lift" style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: '20px 24px', textDecoration: 'none', color: 'var(--fg-1)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--gray-100)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={s.icon} size={24} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{s.name}</div>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.45, margin: 0 }}>{s.when}</p>
              </div>
              <SIcon name="arrow-right" size={18} color="var(--gray-400)" />
            </a>
          </Reveal>
        ))}
      </div>
      <div style={{ marginTop: 28, textAlign: 'center' }}>
        <a href="ride.html" className="link-amber" style={{ fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 6 }}>{tr('Compare every ride option', 'Comparer toutes les options')} <SIcon name="arrow-right" size={16} /></a>
      </div>
    </section>
  );
}

function MotoCTA() {
  return (
    <section style={{ ...WRAP, padding: '0 32px 96px' }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-charcoal)', borderRadius: 28, padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <LaneMotif style={{ opacity: 0.5 }} />
        <div style={{ position: 'relative', maxWidth: 520 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 12px' }}>
            {tr('Ready to skip the jam?', 'Prêt à éviter les bouchons ?')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: 0 }}>
            {tr('Request a Tako Moto now, or reserve one for a trip later today.', 'Réservez un Tako Moto maintenant, ou planifiez-en un pour plus tard aujourd’hui.')}
          </p>
        </div>
        <div style={{ position: 'relative', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Request Tako Moto', 'Réserver Tako Moto')}</SBtn>
          <SBtn variant="outlineLight" href="reserve.html">{tr('Reserve for later', 'Réserver pour plus tard')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function RideMoto() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="ride.html" />
      <MotoHero />
      <WhyMoto />
      <FareExample />
      <WhenToUse />
      <MotoCTA />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RideMoto />);
