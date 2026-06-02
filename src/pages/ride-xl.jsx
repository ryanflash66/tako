/* Tako — Tako XL product page (bigger vehicles for groups & luggage) */
import { t as tr } from '../lib/i18n.js';

// Fare model — matches ride.jsx / tier.jsx exactly: base 1500 + 430 FCFA/km, up to 6 seats.
const BASE = 1500;
const PERKM = 430;
const SEATS = 6;
function priceFor(km) { return Math.round((BASE + PERKM * km) / 100) * 100; }

const BENEFITS = [
  ['users', tr('Up to 6 seats', 'Jusqu’à 6 places'), tr('Keep the whole group together — family, friends or colleagues — in one roomy vehicle.', 'Gardez tout le groupe ensemble — famille, amis ou collègues — dans un seul véhicule spacieux.')],
  ['package', tr('Extra trunk space', 'Plus d’espace de coffre'), tr('Room for suitcases, market hauls and big shops that just won’t fit in a regular car.', 'De la place pour les valises, les courses du marché et les gros achats qui ne tiennent pas dans une voiture classique.')],
  ['plane', tr('Built for airport runs', 'Idéal pour l’aéroport'), tr('Heading to Douala or Nsimalen with bags for everyone? XL handles the whole crew and the luggage.', 'En route vers Douala ou Nsimalen avec les bagages de tous ? Le XL gère le groupe entier et les valises.')],
  ['party-popper', tr('Great for nights out', 'Parfait pour les sorties'), tr('One vehicle for the whole evening crew — no splitting up across two cars across town.', 'Un seul véhicule pour toute la bande du soir — fini de se séparer dans deux voitures en ville.')],
  ['wallet', tr('One fare, split easily', 'Un prix, partagé facilement'), tr('Travel together and share the cost in the app — often cheaper per person than several smaller rides.', 'Voyagez ensemble et partagez le coût dans l’app — souvent moins cher par personne que plusieurs petites courses.')],
  ['badge-cent', tr('Fare shown up front', 'Prix affiché à l’avance'), tr('See the exact price before you confirm, every trip. No meter, no surprises at the end.', 'Voyez le prix exact avant de confirmer, à chaque course. Pas de compteur, pas de surprise à la fin.')],
];

const OTHER_TIERS = [
  ['ride-moto.html', 'Tako Moto', 'bike', tr('Beat the traffic on two wheels', 'Échappez aux embouteillages à deux roues')],
  ['ride-go.html', 'Tako Go', 'car', tr('Affordable everyday rides', 'Des courses abordables au quotidien')],
  ['ride-comfort.html', 'Tako Comfort', 'car-front', tr('Newer cars, top-rated drivers', 'Voitures récentes, chauffeurs les mieux notés')],
  ['ride-green.html', 'Tako Green', 'route', tr('Lower-emission rides', 'Des courses à faibles émissions')],
];

function XLHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80 }} className="stack-pad">
        <a href="ride.html" className="link-amber" style={{ fontSize: 15, marginBottom: 22, display: 'inline-flex', color: 'var(--tako-amber)' }}><SIcon name="arrow-left" size={17} /> {tr('All ride options', 'Toutes les options')}</a>
        <div style={{ maxWidth: 720 }}>
          <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Tako XL', 'Tako XL')}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
            {tr('Room for the whole crew.', 'De la place pour tout le groupe.')}
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 32px', maxWidth: 560 }}>
            {tr('Bigger vehicles with up to six seats and real luggage space — for groups, airport runs and nights out across Cameroon. The fare is always shown before you book.', 'Des véhicules plus grands avec jusqu’à six places et un vrai espace bagages — pour les groupes, les trajets aéroport et les sorties partout au Cameroun. Le prix est toujours affiché avant de réserver.')}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 30, flexWrap: 'wrap' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 22 }}>{tr('from', 'dès')} {fmt(BASE + PERKM * 4)} <span style={{ fontSize: 13, color: 'var(--gray-400)' }}>FCFA</span></div>
            <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: 'var(--gray-300)', display: 'inline-flex', alignItems: 'center', gap: 6 }}><SIcon name="users" size={15} /> {tr('up to', 'jusqu’à')} {SEATS} {tr('seats', 'places')}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Request Tako XL', 'Réserver Tako XL')}</SBtn>
            <SBtn variant="outlineLight" href="reserve.html">{tr('Reserve for later', 'Réserver pour plus tard')}</SBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function XLBenefits() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Why choose XL', 'Pourquoi choisir XL')} title={tr('When you need the extra room', 'Quand il vous faut plus de place')} sub={tr('Tako XL is the pick for groups and luggage — everything a bigger trip needs, with fares shown up front.', 'Tako XL est le choix pour les groupes et les bagages — tout ce qu’il faut pour un trajet plus grand, avec des prix affichés à l’avance.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {BENEFITS.map(([ic, title, desc], i) => (
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

function XLFare() {
  const sampleKm = 5;
  const rows = [
    [tr('Base fare', 'Prix de base'), `${fmt(BASE)} FCFA`],
    [tr('Distance', 'Distance'), `${sampleKm} km × ${fmt(PERKM)} = ${fmt(PERKM * sampleKm)} FCFA`],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }} className="hero-grid">
          <div>
            <SectionHead over={tr('How the fare works', 'Comment le prix est calculé')} title={tr('Simple, upfront pricing', 'Un prix simple et transparent')} sub={tr('Every Tako XL fare is a flat base plus a per-kilometre rate — shown in full before you confirm, so the whole group knows the cost before you set off.', 'Chaque course Tako XL, c’est un prix de base fixe plus un tarif au kilomètre — affiché en entier avant de confirmer, pour que tout le groupe connaisse le coût avant de partir.')} style={{ marginBottom: 0 }} />
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-3)', lineHeight: 1.5, margin: '20px 0 0' }}>
              {tr('Final fare is confirmed in the app before you ride. Pay by cash or Mobile Money (MTN & Orange).', 'Le prix final est confirmé dans l’app avant de partir. Payez en espèces ou par Mobile Money (MTN & Orange).')}
            </p>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 24, padding: 32, boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <SIcon name="calculator" size={18} color="var(--tako-amber-deep)" />
              <span className="tako-overline" style={{ color: 'var(--fg-2)' }}>{tr('Fare example · 5 km', 'Exemple de prix · 5 km')}</span>
            </div>
            <div style={{ display: 'grid', gap: 14 }}>
              {rows.map(([label, val]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, paddingBottom: 14, borderBottom: '1px solid var(--border-1)' }}>
                  <span style={{ fontFamily: 'var(--font-text)', fontSize: 15, fontWeight: 600, color: 'var(--fg-2)' }}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--fg-1)', textAlign: 'right' }}>{val}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, marginTop: 4 }}>
                <span style={{ fontFamily: 'var(--font-text)', fontSize: 15, fontWeight: 700 }}>{tr('Total for a 5 km trip', 'Total pour 5 km')}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 26 }}>{fmt(priceFor(sampleKm))} <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>FCFA</span></span>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)', margin: '18px 0 0', textAlign: 'center' }}>
              {fmt(BASE)} + 5 × {fmt(PERKM)} = {fmt(BASE + PERKM * sampleKm)} FCFA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function XLCompare() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Compare tiers', 'Comparer les options')} title={tr('Not the whole crew this time?', 'Pas tout le groupe cette fois ?')} sub={tr('Tako has a ride for every trip. Smaller group or just you? One of these will fit better.', 'Tako a une course pour chaque trajet. Plus petit groupe ou juste vous ? L’une de ces options conviendra mieux.')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }} className="grid-2">
        {OTHER_TIERS.map(([href, name, icon, desc]) => (
          <a key={href} href={href} className="lift" style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 22px', textDecoration: 'none', color: 'var(--fg-1)' }}>
            <div style={{ width: 50, height: 50, borderRadius: 13, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={icon} size={24} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{name}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)' }}>{desc}</div>
            </div>
            <SIcon name="arrow-right" size={18} color="var(--gray-400)" />
          </a>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28, alignItems: 'center' }}>
        <a href="ride.html" className="link-amber" style={{ fontSize: 15, display: 'inline-flex' }}>{tr('See all ride options', 'Voir toutes les options')} <SIcon name="arrow-right" size={16} /></a>
        <span style={{ color: 'var(--border-1)' }}>·</span>
        <a href="airport.html" className="link-amber" style={{ fontSize: 15, display: 'inline-flex' }}>{tr('Airport runs with XL', 'Trajets aéroport en XL')} <SIcon name="plane" size={16} /></a>
      </div>
    </section>
  );
}

function XLCta() {
  return (
    <section style={{ ...WRAP, padding: '0 32px 96px' }} className="stack-pad">
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-charcoal)', borderRadius: 28, padding: '64px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <LaneMotif style={{ opacity: 0.5 }} />
        <div style={{ position: 'relative', maxWidth: 560 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3vw,40px)', letterSpacing: '-0.02em', color: '#fff', margin: '0 0 12px' }}>
            {tr('Get the whole group moving', 'Faites avancer tout le groupe')}
          </h2>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--gray-300)', margin: 0 }}>
            {tr('Request a Tako XL now, or reserve one ahead for an airport run or a night out.', 'Réservez un Tako XL maintenant, ou planifiez-le à l’avance pour un trajet aéroport ou une sortie.')}
          </p>
        </div>
        <div style={{ position: 'relative', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <SBtn variant="amber" icon="arrow-right" href="auth.html">{tr('Request Tako XL', 'Réserver Tako XL')}</SBtn>
          <SBtn variant="outlineLight" href="reserve.html">{tr('Reserve for later', 'Réserver pour plus tard')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function RideXL() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="ride.html" />
      <XLHero />
      <XLBenefits />
      <XLFare />
      <XLCompare />
      <XLCta />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<RideXL />);
