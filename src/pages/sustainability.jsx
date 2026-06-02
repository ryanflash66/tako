/* Tako — Sustainability page */
import { t as tr } from '../lib/i18n.js';

function SustainHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 88, paddingBottom: 88, maxWidth: 860 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Sustainability', 'Durabilité')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.2vw,66px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Moving Cameroon, cleaner.', 'Faire bouger le Cameroun, plus proprement.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 640 }}>
          {tr('Every trip on Tako is a chance to move someone with less waste — fewer empty kilometres, less time idling in Douala traffic and a fleet that gets cleaner each year. Here is how we are getting there.', 'Chaque course sur Tako est l’occasion de déplacer quelqu’un avec moins de gaspillage — moins de kilomètres à vide, moins de temps au ralenti dans les embouteillages de Douala et une flotte qui devient plus propre chaque année. Voici comment nous y parvenons.')}
        </p>
        <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <SBtn variant="amber" href="ride-green.html" icon="arrow-right">{tr('Explore Ride Green', 'Découvrir Ride Green')}</SBtn>
          <SBtn variant="outlineLight" href="about.html">{tr('About Tako', 'À propos de Tako')}</SBtn>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 56, maxWidth: 820 }} className="stack-pad">
      <SectionHead over={tr('Our approach', 'Notre approche')} title={tr('Lower-impact rides, built for here', 'Des trajets à moindre impact, conçus pour ici')} />
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.7, margin: '0 0 18px' }}>
        {tr('Cleaner mobility in Cameroon is not only about the cars — it is about how well each trip is matched, how little time is spent crawling in traffic and whether drivers can afford to keep newer, more efficient vehicles on the road.', 'Une mobilité plus propre au Cameroun ne dépend pas seulement des voitures — elle dépend de la qualité de chaque mise en relation, du temps passé à avancer au pas dans le trafic et de la capacité des chauffeurs à garder sur la route des véhicules plus récents et plus efficaces.')}
      </p>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.7, margin: 0 }}>
        {tr('We work on all four at once. The figures below are targets and estimates, not certified results — we would rather share where we are heading than wait for a perfect number.', 'Nous travaillons sur les quatre à la fois. Les chiffres ci-dessous sont des objectifs et des estimations, pas des résultats certifiés — nous préférons partager notre cap plutôt que d’attendre un chiffre parfait.')}
      </p>
    </section>
  );
}

function Pillars() {
  const pillars = [
    ['car-front', tr('A greener fleet', 'Une flotte plus verte'), tr('We are growing the share of hybrid and electric cars on Tako, starting in Douala and Yaoundé. Riders can already choose lower-emission trips through Ride Green.', 'Nous augmentons la part de voitures hybrides et électriques sur Tako, à commencer par Douala et Yaoundé. Les passagers peuvent déjà choisir des trajets à plus faibles émissions via Ride Green.'), 'ride-green.html'],
    ['route', tr('Fewer empty miles', 'Moins de kilomètres à vide'), tr('Smart matching pairs each rider with the nearest available driver, so cars spend less time driving empty between trips — fuel saved is emissions avoided.', 'La mise en relation intelligente associe chaque passager au chauffeur disponible le plus proche, afin que les voitures roulent moins à vide entre les trajets — le carburant économisé, ce sont des émissions évitées.'), null],
    ['navigation', tr('Less idling in traffic', 'Moins de ralenti dans le trafic'), tr('Live routing steers drivers around the worst of Douala’s gridlock, cutting the stop-start idling that burns the most fuel and fouls the air.', 'Le guidage en temps réel oriente les chauffeurs hors des pires embouteillages de Douala, réduisant les arrêts-redémarrages au ralenti qui consomment le plus de carburant et polluent l’air.'), null],
    ['handshake', tr('Backing local drivers', 'Soutenir les chauffeurs locaux'), tr('Lower commission and weekly Mobile Money payouts help drivers maintain and upgrade their cars — a healthier livelihood and a cleaner, better-kept fleet.', 'Une commission plus basse et des paiements hebdomadaires par Mobile Money aident les chauffeurs à entretenir et améliorer leur voiture — un revenu plus sain et une flotte plus propre et mieux entretenue.'), null],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 24, paddingBottom: 80 }} className="stack-pad">
      <SectionHead over={tr('Four commitments', 'Quatre engagements')} title={tr('Where we focus our effort', 'Là où nous concentrons nos efforts')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {pillars.map(([ic, title, desc, href], i) => (
          <Reveal key={title} delay={(i % 2) * 70} style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: 0 }}>{title}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{desc}</p>
            {href && <a href={href} className="link-amber" style={{ fontSize: 14, marginTop: 'auto' }}>{tr('See Ride Green', 'Voir Ride Green')} <SIcon name="arrow-right" size={16} /></a>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Targets() {
  const stats = [
    ['30%', tr('hybrid or electric trips targeted by 2028', 'de trajets hybrides ou électriques visés d’ici 2028')],
    ['15%', tr('estimated fuel saved through smarter matching', 'de carburant économisé estimé grâce à une mise en relation plus fine')],
    ['11', tr('cities where we are optimising routing', 'villes où nous optimisons le guidage')],
    ['100%', tr('drivers paid weekly to keep cars road-ready', 'des chauffeurs payés chaque semaine pour garder leur voiture en état')],
  ];
  return (
    <div style={{ borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)', background: 'var(--bg-2)' }}>
      <div style={{ ...WRAP, paddingTop: 56, paddingBottom: 56 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 28, textAlign: 'center' }}>{tr('Targets & estimates', 'Objectifs & estimations')}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="grid-4">
          {stats.map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, letterSpacing: '-0.02em', color: 'var(--tako-amber-deep)' }}>{n}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)', fontWeight: 600, marginTop: 6, lineHeight: 1.4 }}>{l}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)', textAlign: 'center', margin: '32px auto 0', maxWidth: 620, lineHeight: 1.5 }}>
          {tr('These are internal goals and good-faith estimates for our Cameroon operations, not independently audited figures. We will update them as our fleet and tools improve.', 'Ce sont des objectifs internes et des estimations de bonne foi pour nos activités au Cameroun, et non des chiffres audités de façon indépendante. Nous les mettrons à jour à mesure que notre flotte et nos outils s’améliorent.')}
        </p>
      </div>
    </div>
  );
}

function SustainCTA() {
  return (
    <section style={{ ...WRAP, paddingTop: 80, paddingBottom: 24, maxWidth: 760, textAlign: 'center' }} className="stack-pad">
      <SectionHead center over={tr('Ride Green', 'Ride Green')} title={tr('Choose a cleaner trip today', 'Choisissez un trajet plus propre dès aujourd’hui')} sub={tr('Pick a lower-emission ride from the Tako app and see the difference one trip at a time.', 'Choisissez un trajet à plus faibles émissions depuis l’app Tako et faites la différence, une course à la fois.')} />
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <SBtn variant="amber" href="ride-green.html" icon="arrow-right">{tr('Explore Ride Green', 'Découvrir Ride Green')}</SBtn>
        <SBtn variant="outline" href="newsroom.html">{tr('Read the latest news', 'Lire les dernières actualités')}</SBtn>
      </div>
    </section>
  );
}

function Sustainability() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="about.html" />
      <SustainHero />
      <Intro />
      <Pillars />
      <Targets />
      <SustainCTA />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Sustainability />);
