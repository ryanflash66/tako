/* Tako — Newsroom page */
import { t as tr } from '../lib/i18n.js';

const POSTS = [
  { date: tr('12 May 2026', '12 mai 2026'), tag: tr('Expansion', 'Expansion'), title: tr('Tako launches in Ngaoundéré, Bertoua next', 'Tako se lance à Ngaoundéré, Bertoua ensuite'), excerpt: tr('Tako brings upfront-priced rides to the Adamaoua region, with Bertoua scheduled for Q3 2026.', 'Tako apporte des courses à prix transparents dans la région de l’Adamaoua, Bertoua étant prévue pour le 3e trimestre 2026.') },
  { date: tr('3 Apr 2026', '3 avr. 2026'), tag: tr('Safety', 'Sécurité'), title: tr('New in-app emergency button rolls out nationwide', 'Le nouveau bouton d’urgence se déploie dans tout le pays'), excerpt: tr('A single tap now connects riders to local response and shares live location and trip details.', 'Une seule tape met désormais les passagers en relation avec les secours locaux et partage la position en direct et les détails du trajet.') },
  { date: tr('18 Feb 2026', '18 févr. 2026'), tag: tr('Drivers', 'Chauffeurs'), title: tr('Weekly Mobile Money payouts reach 8,000 drivers', 'Les paiements hebdomadaires par Mobile Money atteignent 8 000 chauffeurs'), excerpt: tr('Tako drivers across eleven cities now receive reliable, on-time earnings every week.', 'Les chauffeurs Tako de onze villes reçoivent désormais des revenus fiables et ponctuels chaque semaine.') },
  { date: tr('20 Jan 2026', '20 janv. 2026'), tag: tr('Company', 'Entreprise'), title: tr('Tako Business opens to companies across Cameroon', 'Tako Business s’ouvre aux entreprises de tout le Cameroun'), excerpt: tr('One account, one invoice and full trip visibility for teams that move every day.', 'Un seul compte, une seule facture et une visibilité complète des trajets pour les équipes qui se déplacent chaque jour.') },
];

function NewsHero() {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, paddingTop: 72, paddingBottom: 56, maxWidth: 760 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>{tr('Newsroom', 'Actualités')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(38px,4.8vw,60px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('What’s new at Tako.', 'Quoi de neuf chez Tako.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '20px 0 0' }}>
          {tr('Announcements, milestones and stories from the road. For media enquiries, email', 'Annonces, étapes clés et histoires de la route. Pour les demandes presse, écrivez à')} <a href="mailto:press@tako.cm" className="link-amber">press@tako.cm</a>.
        </p>
      </div>
    </section>
  );
}

function Posts() {
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 96 }} className="stack-pad">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
        {POSTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 70} className="lift" style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--tako-amber-deep)', background: 'var(--tako-amber-soft)', padding: '4px 9px', borderRadius: 999 }}>{p.tag}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)' }}>{p.date}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', margin: 0, lineHeight: 1.2 }}>{p.title}</h2>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.55, margin: 0 }}>{p.excerpt}</p>
            <a href="#" className="link-amber" style={{ fontSize: 14, marginTop: 'auto' }}>{tr('Read more', 'Lire la suite')} <SIcon name="arrow-right" size={16} /></a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Newsroom() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <NewsHero />
      <Posts />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Newsroom />);
