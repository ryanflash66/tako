/* Tako — Careers page */
import { t as tr } from '../lib/i18n.js';

const ROLES = [
  { title: tr('Senior Backend Engineer', 'Ingénieur·e backend senior'), team: tr('Engineering', 'Ingénierie'), city: 'Douala', type: tr('Full-time', 'Temps plein') },
  { title: tr('City Operations Manager', 'Responsable des opérations ville'), team: tr('Operations', 'Opérations'), city: 'Yaoundé', type: tr('Full-time', 'Temps plein') },
  { title: tr('Driver Support Specialist', 'Spécialiste support chauffeurs'), team: 'Support', city: 'Douala', type: tr('Full-time', 'Temps plein') },
  { title: tr('Product Designer', 'Designer produit'), team: 'Design', city: tr('Remote · Cameroon', 'À distance · Cameroun'), type: tr('Full-time', 'Temps plein') },
];

function CareersHero() {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 72, paddingBottom: 56, maxWidth: 760 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>{tr('Careers', 'Carrières')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,4.8vw,60px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('Help build the way Cameroon moves.', 'Construisez la façon dont le Cameroun se déplace.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '20px 0 0' }}>
          {tr('We’re a small, fast team solving real problems on real roads. If that sounds like you, we’d love to talk.', 'Nous sommes une petite équipe rapide qui résout de vrais problèmes sur de vraies routes. Si cela vous ressemble, parlons-en.')}
        </p>
      </div>
    </section>
  );
}

function Perks() {
  const perks = [
    ['trending-up', tr('Real ownership', 'Une vraie autonomie'), tr('Small team, big scope — your work ships and matters from day one.', 'Petite équipe, grand périmètre — votre travail est livré et compte dès le premier jour.')],
    ['handshake', tr('Local impact', 'Un impact local'), tr('Build something that improves daily life for thousands across Cameroon.', 'Construisez quelque chose qui améliore le quotidien de milliers de personnes au Cameroun.')],
    ['life-buoy', tr('Look after you', 'On prend soin de vous'), tr('Competitive pay, health cover and Tako ride credit every month.', 'Rémunération compétitive, couverture santé et crédit de courses Tako chaque mois.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 80, paddingBottom: 56 }} className="stack-pad">
      <SectionHead over={tr('Why Tako', 'Pourquoi Tako')} title={tr('A place to do your best work', 'Un endroit pour donner le meilleur de vous-même')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {perks.map(([ic, t2, d], i) => (
          <Reveal key={t2} delay={i * 70} style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t2}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function OpenRoles() {
  return (
    <section style={{ ...WRAP, paddingTop: 40, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Open roles', 'Postes ouverts')} title={tr('Find your seat', 'Trouvez votre place')} />
      <div style={{ display: 'grid', gap: 12 }}>
        {ROLES.map((r) => (
          <a key={r.title} href="mailto:careers@tako.cm" className="lift" style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 16, padding: '20px 24px', textDecoration: 'none', color: 'var(--fg-1)' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19 }}>{r.title}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', marginTop: 2 }}>{r.team} · {r.city} · {r.type}</div>
            </div>
            <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--tako-amber-deep)' }}>{tr('Apply', 'Postuler')} <SIcon name="arrow-right" size={17} /></span>
          </a>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', margin: '28px 0 0' }}>
        {tr('No role that fits? We’re always glad to meet good people — email', 'Aucun poste ne correspond ? Nous sommes toujours ravis de rencontrer de bonnes personnes — écrivez à')} <a href="mailto:careers@tako.cm" className="link-amber">careers@tako.cm</a>.
      </p>
    </section>
  );
}

function Careers() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <CareersHero />
      <Perks />
      <OpenRoles />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Careers />);
