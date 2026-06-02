/* Tako — Business page */
import { t as tr } from '../lib/i18n.js';

function BizHero() {
  return (
    <section style={{ background: 'var(--bg-2)', borderBottom: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 0.95fr', gap: 56, alignItems: 'center', paddingTop: 72, paddingBottom: 72 }} className="hero-grid stack-pad">
        <div>
          <div className="tako-overline" style={{ color: 'var(--tako-amber-deep)', marginBottom: 18 }}>Tako Business</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,62px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
            {tr('Move your team.', 'Déplacez vos équipes.')}<br />{tr('Skip the paperwork.', 'Oubliez la paperasse.')}
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', margin: '24px 0 32px', maxWidth: 480 }}>
            {tr('One account for all your company’s rides — centralized billing, simple controls, and rides your people can count on across Cameroon.', 'Un seul compte pour toutes les courses de votre entreprise — facturation centralisée, contrôles simples et des trajets fiables partout au Cameroun.')}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <SBtn variant="primary" icon="arrow-right" href="#quote">{tr('Get a quote', 'Demander un devis')}</SBtn>
            <SBtn variant="outline" href="how-it-works.html">{tr('How it works', 'Comment ça marche')}</SBtn>
          </div>
        </div>
        <DashboardPreview />
      </div>
    </section>
  );
}

function DashboardPreview() {
  const rows = [
    ['Aïcha B.', tr('Bonapriso → Office', 'Bonapriso → Bureau'), '2 400', tr('Today', 'Aujourd’hui')],
    ['David M.', tr('Airport → Bastos', 'Aéroport → Bastos'), '4 100', tr('Today', 'Aujourd’hui')],
    ['Ngo Laure', 'Akwa → Deido', '1 800', tr('Yesterday', 'Hier')],
    ['Samuel E.', tr('Office → Mvan', 'Bureau → Mvan'), '2 950', tr('Yesterday', 'Hier')],
  ];
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 24, boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '18px 22px', borderBottom: '1px solid var(--border-1)' }}>
        <img src="assets/tako-mark.png" alt="" style={{ width: 26, height: 26 }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>{tr('Tako Business · Dashboard', 'Tako Business · Tableau de bord')}</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 5 }}>{[0, 1, 2].map(i => <span key={i} style={{ width: 9, height: 9, borderRadius: 999, background: 'var(--gray-200)' }} />)}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: 22 }}>
        {[[tr('This month', 'Ce mois-ci'), tr('184 trips', '184 courses'), 'trending-up'], [tr('Spend', 'Dépenses'), '486 200 FCFA', 'wallet'], [tr('Active riders', 'Voyageurs actifs'), '23', 'users'], [tr('Avg fare', 'Prix moyen'), '2 640 FCFA', 'badge-cent']].map(([l, v, ic]) => (
          <div key={l} style={{ background: 'var(--bg-2)', borderRadius: 14, padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--fg-3)', marginBottom: 6 }}><SIcon name={ic} size={15} /><span style={{ fontFamily: 'var(--font-text)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{l}</span></div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em' }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '0 22px 22px' }}>
        <div style={{ fontFamily: 'var(--font-text)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--fg-3)', marginBottom: 10 }}>{tr('Recent rides', 'Courses récentes')}</div>
        <div style={{ display: 'grid', gap: 2 }}>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderTop: i ? '1px solid var(--border-1)' : 'none' }}>
              <div style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--tako-charcoal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{r[0][0]}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r[0]}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r[1]}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14 }}>{r[2]}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 11, color: 'var(--fg-3)' }}>{r[3]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BizValues() {
  const feats = [
    ['receipt', tr('Centralized billing', 'Facturation centralisée'), tr('One monthly invoice for every ride. No more chasing paper receipts or reimbursements.', 'Une seule facture mensuelle pour toutes les courses. Fini la chasse aux reçus papier et aux remboursements.')],
    ['sliders-horizontal', tr('Ride policies', 'Règles de course'), tr('Set budgets, allowed hours, ride tiers and zones per team or per person.', 'Définissez budgets, horaires autorisés, catégories et zones par équipe ou par personne.')],
    ['chart-column', tr('Spend insights', 'Analyse des dépenses'), tr('See who travelled where, when and for how much — exportable in a click.', 'Voyez qui s’est déplacé où, quand et pour combien — exportable en un clic.')],
    ['shield-check', tr('Team safety', 'Sécurité des équipes'), tr('Verified drivers, live trip sharing and 24/7 support on every company ride.', 'Chauffeurs vérifiés, partage de trajet en direct et assistance 24/7 sur chaque course pro.')],
    ['users-round', tr('Easy to manage', 'Facile à gérer'), tr('Add or remove riders in seconds. They ride with the app they already know.', 'Ajoutez ou retirez des voyageurs en quelques secondes. Ils utilisent l’app qu’ils connaissent déjà.')],
    ['credit-card', tr('Flexible payment', 'Paiement flexible'), tr('Pay by bank transfer or Mobile Money on terms that suit your finance team.', 'Payez par virement bancaire ou Mobile Money, selon les conditions qui conviennent à votre service financier.')],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <SectionHead over={tr('Why Tako Business', 'Pourquoi Tako Business')} title={tr('Company travel, finally simple', 'Les déplacements pro, enfin simples')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {feats.map(([ic, t, d], i) => (
          <Reveal key={t} delay={(i % 3) * 70} style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-black)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    ['briefcase', tr('Employee travel', 'Déplacements des employés'), tr('Commutes, meetings and late nights at the office, all on one account.', 'Trajets domicile-travail, réunions et soirées tardives au bureau, le tout sur un seul compte.')],
    ['plane', tr('Client & guest rides', 'Courses clients & invités'), tr('Send a ride to a client or visitor without sharing a single phone number.', 'Envoyez une course à un client ou un visiteur sans partager aucun numéro de téléphone.')],
    ['party-popper', tr('Events & conferences', 'Événements & conférences'), tr('Move delegates and staff with ride codes that just work.', 'Déplacez délégués et personnel avec des codes de course qui fonctionnent simplement.')],
    ['package', tr('After-hours & shifts', 'Horaires décalés & équipes'), tr('Get your team home safely when public transport has stopped.', 'Ramenez votre équipe en sécurité quand les transports en commun s’arrêtent.')],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Use cases', 'Cas d’usage')} title={tr('However your business moves', 'Quels que soient vos déplacements')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="grid-2">
          {cases.map(([ic, t, d], i) => (
            <Reveal key={t} delay={(i % 2) * 70} style={{ display: 'flex', gap: 20, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 28 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic} size={26} /></div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 6px' }}>{t}</h3>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [data, setData] = React.useState({ company: '', email: '', size: '', city: 'Douala', msg: '' });
  const [sent, setSent] = React.useState(false);
  const [errs, setErrs] = React.useState({});
  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!data.company.trim()) er.company = 1;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) er.email = 1;
    if (!data.size) er.size = 1;
    setErrs(er);
    if (Object.keys(er).length === 0) setSent(true);
  };
  const field = (k, label, props = {}) => (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, marginBottom: 7 }}>{label}</span>
      <input className="t-input" value={data[k]} onChange={e => set(k, e.target.value)} style={errs[k] ? { borderColor: 'var(--error)' } : {}} {...props} />
      {errs[k] && <span style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--error)', marginTop: 5, display: 'block' }}>{tr('Please check this field.', 'Veuillez vérifier ce champ.')}</span>}
    </label>
  );
  return (
    <section id="quote" style={{ ...WRAP, paddingTop: 96, paddingBottom: 96 }} className="stack-pad">
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }} className="hero-grid">
        <div>
          <SectionHead over={tr('Get started', 'Pour commencer')} title={tr('Let’s talk about your team', 'Parlons de votre équipe')} sub={tr('Tell us a little about your company and we’ll set up an account and a quote that fits.', 'Parlez-nous un peu de votre entreprise et nous créons un compte et un devis adaptés.')} style={{ marginBottom: 28 }} />
          <div style={{ display: 'grid', gap: 16 }}>
            {[['phone', tr('Talk to a person', 'Parler à une personne'), tr('Mon–Sat, 8am–8pm WAT', 'Lun–Sam, 8h–20h WAT')], ['mail', 'business@tako.cm', tr('We reply within one business day', 'Réponse sous un jour ouvré')]].map(([ic, a, b]) => (
              <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, border: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={ic} size={20} color="var(--tako-amber-deep)" /></div>
                <div><div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 16 }}>{a}</div><div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)' }}>{b}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 24, padding: 32, boxShadow: 'var(--shadow-md)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 12px' }}>
              <div style={{ width: 64, height: 64, borderRadius: 999, background: 'var(--success-bg)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><SIcon name="check" size={32} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, margin: '0 0 10px' }}>{tr('Thanks,', 'Merci,')} {data.company || tr('team', 'équipe')}!</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', margin: '0 0 24px' }}>{tr('Our business team will reach out to', 'Notre équipe entreprise vous contactera à')} {data.email} {tr('within one business day.', 'sous un jour ouvré.')}</p>
              <SBtn variant="outline" onClick={() => { setSent(false); setData({ company: '', email: '', size: '', city: 'Douala', msg: '' }); }}>{tr('Send another', 'Envoyer un autre')}</SBtn>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'grid', gap: 18 }}>
              {field('company', tr('Company name', 'Nom de l’entreprise'), { placeholder: 'Acme Cameroun SARL' })}
              {field('email', tr('Work email', 'E-mail professionnel'), { placeholder: tr('you@company.cm', 'vous@entreprise.cm'), type: 'email' })}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <label style={{ display: 'block' }}>
                  <span style={{ display: 'block', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, marginBottom: 7 }}>{tr('Team size', 'Taille de l’équipe')}</span>
                  <select className="t-input" value={data.size} onChange={e => set('size', e.target.value)} style={errs.size ? { borderColor: 'var(--error)' } : {}}>
                    <option value="">{tr('Select…', 'Choisir…')}</option>
                    <option>1–10</option><option>11–50</option><option>51–200</option><option>200+</option>
                  </select>
                  {errs.size && <span style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--error)', marginTop: 5, display: 'block' }}>{tr('Please choose one.', 'Veuillez en choisir une.')}</span>}
                </label>
                <label style={{ display: 'block' }}>
                  <span style={{ display: 'block', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, marginBottom: 7 }}>{tr('Main city', 'Ville principale')}</span>
                  <select className="t-input" value={data.city} onChange={e => set('city', e.target.value)}>
                    <option>Douala</option><option>Yaoundé</option><option>Bafoussam</option><option>Bamenda</option><option>Buea</option><option>{tr('Other', 'Autre')}</option>
                  </select>
                </label>
              </div>
              <label style={{ display: 'block' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, marginBottom: 7 }}>{tr('Anything else?', 'Autre chose ?')} <span style={{ color: 'var(--fg-3)', fontWeight: 500 }}>{tr('(optional)', '(facultatif)')}</span></span>
                <textarea className="t-input" value={data.msg} onChange={e => set('msg', e.target.value)} rows="3" placeholder={tr('How can Tako help your team move?', 'Comment Tako peut-il aider votre équipe à se déplacer ?')} style={{ resize: 'vertical' }} />
              </label>
              <SBtn variant="primary" icon="arrow-right" style={{ width: '100%' }}>{tr('Request a quote', 'Demander un devis')}</SBtn>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Business() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="business.html" />
      <BizHero />
      <BizValues />
      <UseCases />
      <QuoteForm />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Business />);
