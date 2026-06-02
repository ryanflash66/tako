/* Tako — newsroom article template (article.html?slug=...) */
import { t as tr } from '../lib/i18n.js';

const ARTICLES = [
  {
    slug: 'ngaoundere-launch', date: tr('12 May 2026', '12 mai 2026'), tag: tr('Expansion', 'Expansion'),
    title: tr('Tako launches in Ngaoundéré, Bertoua next', 'Tako se lance à Ngaoundéré, Bertoua ensuite'),
    body: [
      tr('Tako today brought upfront-priced rides to Ngaoundéré, the gateway to the Adamaoua region — the eleventh Cameroonian city to go live on the platform.', 'Tako a lancé aujourd’hui ses courses à prix transparents à Ngaoundéré, porte d’entrée de la région de l’Adamaoua — la onzième ville camerounaise active sur la plateforme.'),
      tr('Riders in Ngaoundéré can now request a Moto, Go, Comfort or XL with the fare shown before they confirm, paying in cash or by Mobile Money. Drivers across the city have been onboarded over the past month, with weekly Mobile Money payouts from day one.', 'Les habitants de Ngaoundéré peuvent désormais demander un Moto, Go, Comfort ou XL avec le prix affiché avant confirmation, en payant en espèces ou par Mobile Money. Des chauffeurs de toute la ville ont été intégrés au cours du mois écoulé, avec des paiements hebdomadaires par Mobile Money dès le premier jour.'),
      tr('Bertoua, in the East region, is scheduled to follow in the third quarter of 2026 as Tako continues to expand its coverage across the country.', 'Bertoua, dans la région de l’Est, suivra au troisième trimestre 2026, alors que Tako poursuit l’extension de sa couverture dans tout le pays.'),
    ],
  },
  {
    slug: 'emergency-button', date: tr('3 Apr 2026', '3 avr. 2026'), tag: tr('Safety', 'Sécurité'),
    title: tr('New in-app emergency button rolls out nationwide', 'Le nouveau bouton d’urgence se déploie dans tout le pays'),
    body: [
      tr('Every Tako rider and driver now has a one-tap emergency button available during any trip. A single press connects you to local emergency response and shares your exact live location and trip details so help can reach you quickly.', 'Chaque passager et chauffeur Tako dispose désormais d’un bouton d’urgence accessible en une tape pendant toute course. Une seule pression vous met en relation avec les secours locaux et partage votre position en direct et les détails du trajet pour que l’aide arrive vite.'),
      tr('The feature is part of a wider safety system that includes verified drivers, live trip sharing and route monitoring that checks in when something looks off.', 'Cette fonctionnalité fait partie d’un système de sécurité plus large incluant des chauffeurs vérifiés, le partage de trajet en direct et une surveillance d’itinéraire qui vous contacte en cas d’anomalie.'),
    ],
  },
  {
    slug: 'weekly-payouts', date: tr('18 Feb 2026', '18 févr. 2026'), tag: tr('Drivers', 'Chauffeurs'),
    title: tr('Weekly Mobile Money payouts reach 8,000 drivers', 'Les paiements hebdomadaires par Mobile Money atteignent 8 000 chauffeurs'),
    body: [
      tr('More than 8,000 Tako drivers across eleven cities now receive reliable, on-time earnings every week via Mobile Money, with the option to cash out instantly whenever they need to.', 'Plus de 8 000 chauffeurs Tako dans onze villes reçoivent désormais des revenus fiables et ponctuels chaque semaine par Mobile Money, avec la possibilité de retirer instantanément à tout moment.'),
      tr('Drivers keep 100% of their tips, and a lower commission than the competition means more of every fare stays with the people behind the wheel.', 'Les chauffeurs conservent 100 % de leurs pourboires, et une commission plus basse que la concurrence signifie qu’une plus grande part de chaque course revient à ceux qui conduisent.'),
    ],
  },
  {
    slug: 'business-launch', date: tr('20 Jan 2026', '20 janv. 2026'), tag: tr('Company', 'Entreprise'),
    title: tr('Tako Business opens to companies across Cameroon', 'Tako Business s’ouvre aux entreprises de tout le Cameroun'),
    body: [
      tr('Tako Business is now available to companies nationwide, giving teams one account, one monthly invoice and full visibility of every trip — payable by bank transfer or Mobile Money.', 'Tako Business est désormais disponible pour les entreprises de tout le pays, offrant aux équipes un seul compte, une seule facture mensuelle et une visibilité complète de chaque trajet — payable par virement bancaire ou Mobile Money.'),
      tr('Administrators can set ride policies, manage riders in seconds and export spend reports, while employees ride with the same Tako app they already use.', 'Les administrateurs peuvent définir des règles de course, gérer les voyageurs en quelques secondes et exporter des rapports de dépenses, pendant que les employés utilisent l’app Tako qu’ils connaissent déjà.'),
    ],
  },
];

function getArticle() {
  try { const s = new URLSearchParams(window.location.search).get('slug'); const m = ARTICLES.find(a => a.slug === s); if (m) return m; } catch (e) {}
  return null;
}

function ArticlePage() {
  useIcons();
  const article = getArticle();
  const more = ARTICLES.filter(a => !article || a.slug !== article.slug).slice(0, 3);
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      {article ? (
        <article>
          <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
            <div style={{ ...WRAP, paddingTop: 64, paddingBottom: 48, maxWidth: 800 }} className="stack-pad">
              <a href="newsroom.html" className="link-amber" style={{ fontSize: 15, marginBottom: 24, display: 'inline-flex' }}><SIcon name="arrow-left" size={17} /> {tr('Newsroom', 'Actualités')}</a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--tako-amber-deep)', background: 'var(--tako-amber-soft)', padding: '4px 9px', borderRadius: 999 }}>{article.tag}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-3)' }}>{article.date}</span>
              </div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px,4.2vw,52px)', lineHeight: 1.05, letterSpacing: '-0.03em', margin: 0 }}>{article.title}</h1>
            </div>
          </section>
          <section style={{ ...WRAP, paddingTop: 48, paddingBottom: 80, maxWidth: 760 }} className="stack-pad">
            {article.body.map((p, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-text)', fontSize: 18, color: 'var(--fg-1)', lineHeight: 1.7, margin: '0 0 22px' }}>{p}</p>
            ))}
            <div style={{ marginTop: 16, paddingTop: 24, borderTop: '1px solid var(--border-1)', fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)' }}>
              {tr('Media enquiries:', 'Demandes presse :')} <a href="mailto:press@tako.cm" className="link-amber">press@tako.cm</a>
            </div>
          </section>
        </article>
      ) : (
        <section style={{ ...WRAP, paddingTop: 64, paddingBottom: 24, maxWidth: 800 }} className="stack-pad">
          <SectionHead over={tr('Newsroom', 'Actualités')} title={tr('Latest stories', 'Dernières actualités')} />
        </section>
      )}
      <section style={{ background: 'var(--bg-2)', paddingTop: 64, paddingBottom: 96, borderTop: '1px solid var(--border-1)' }}>
        <div style={WRAP} className="stack-pad">
          <SectionHead over={tr('More from Tako', 'Plus de Tako')} title={tr('Keep reading', 'À lire aussi')} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
            {more.map((a) => (
              <a key={a.slug} href={`article.html?slug=${a.slug}`} className="lift" style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 12, textDecoration: 'none', color: 'var(--fg-1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--tako-amber-deep)', background: 'var(--tako-amber-soft)', padding: '4px 9px', borderRadius: 999 }}>{a.tag}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)' }}>{a.date}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.01em', margin: 0, lineHeight: 1.2 }}>{a.title}</h3>
                <span className="link-amber" style={{ fontSize: 14, marginTop: 'auto' }}>{tr('Read more', 'Lire la suite')} <SIcon name="arrow-right" size={16} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ArticlePage />);
