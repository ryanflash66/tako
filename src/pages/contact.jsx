/* Tako — Contact / support page */
import { t as tr } from '../lib/i18n.js';

function ContactHero() {
  return (
    <section style={{ background: 'var(--tako-black)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <LaneMotif style={{ opacity: 0.35 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 72, maxWidth: 760 }} className="stack-pad">
        <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Contact', 'Contact')}</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5vw,64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
          {tr('We’re here to help.', 'Nous sommes là pour aider.')}
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.55, color: 'var(--gray-300)', margin: '24px 0 0', maxWidth: 560 }}>
          {tr('A real team, based in Cameroon. Reach us the way that suits you — chat, email or phone.', 'Une vraie équipe, basée au Cameroun. Joignez-nous comme vous voulez — chat, e-mail ou téléphone.')}
        </p>
      </div>
    </section>
  );
}

function Channels() {
  const opts = [
    ['message-circle', tr('Chat in the app', 'Discuter dans l’app'), tr('Fastest way to reach us — open the app and tap Help.', 'Le plus rapide — ouvrez l’app et appuyez sur Aide.'), tr('Open chat', 'Ouvrir le chat'), 'auth.html'],
    ['mail', tr('Email us', 'Nous écrire'), tr('support@tako.cm · we reply within one business day.', 'support@tako.cm · réponse sous un jour ouvré.'), tr('Send email', 'Envoyer un e-mail'), 'mailto:support@tako.cm'],
    ['phone', tr('Call us', 'Nous appeler'), tr('+237 233 00 00 00 · Mon–Sat, 8am–8pm WAT.', '+237 233 00 00 00 · Lun–Sam, 8h–20h WAT.'), tr('Call now', 'Appeler'), 'tel:+237233000000'],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 72, paddingBottom: 24 }} className="stack-pad">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
        {opts.map(([ic, t2, d, cta, href], i) => (
          <Reveal key={t2} delay={i * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 30, display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={26} /></div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, margin: '0 0 8px' }}>{t2}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: '0 0 20px', flex: 1 }}>{d}</p>
            <a href={href} className="link-amber" style={{ fontSize: 15 }}>{cta} <SIcon name="arrow-right" size={17} /></a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Audiences() {
  const aud = [
    ['user', tr('Riders', 'Passagers'), tr('Trip issues, fares, lost items and account help.', 'Problèmes de course, prix, objets perdus et aide au compte.'), 'help.html'],
    ['steering-wheel', tr('Drivers', 'Chauffeurs'), tr('Sign-up, documents, payouts and the driver app.', 'Inscription, documents, paiements et app chauffeur.'), 'drive.html'],
    ['briefcase', tr('Business', 'Entreprise'), tr('Company accounts, billing and team travel.', 'Comptes entreprise, facturation et déplacements d’équipe.'), 'business.html'],
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 40, paddingBottom: 56 }} className="stack-pad">
      <SectionHead over={tr('By who you are', 'Selon votre profil')} title={tr('Find the right help, faster', 'Trouvez la bonne aide, plus vite')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="grid-3">
        {aud.map(([ic, t2, d, href], i) => (
          <Reveal key={t2} delay={(i % 3) * 60}>
            <a href={href} className="lift" style={{ width: '100%', display: 'flex', gap: 16, alignItems: 'center', background: 'var(--bg-2)', border: '1px solid var(--border-1)', borderRadius: 18, padding: 24, textDecoration: 'none', color: 'var(--fg-1)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#fff', border: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={ic === 'steering-wheel' ? 'navigation' : ic} size={24} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{t2}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)' }}>{d}</div>
              </div>
              <SIcon name="arrow-right" size={18} color="var(--gray-400)" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [data, setData] = React.useState({ name: '', email: '', topic: '', msg: '' });
  const [sent, setSent] = React.useState(false);
  const [errs, setErrs] = React.useState({});
  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!data.name.trim()) er.name = 1;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) er.email = 1;
    if (!data.msg.trim()) er.msg = 1;
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
    <section style={{ background: 'var(--bg-2)', paddingTop: 80, paddingBottom: 96, borderTop: '1px solid var(--border-1)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }} className="hero-grid stack-pad">
        <div>
          <SectionHead over={tr('Send a message', 'Envoyer un message')} title={tr('Tell us what’s going on', 'Dites-nous ce qui se passe')} sub={tr('Fill this in and our support team will get back to you within one business day.', 'Remplissez ceci et notre équipe d’assistance vous répondra sous un jour ouvré.')} style={{ marginBottom: 0 }} />
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 24, padding: 32, boxShadow: 'var(--shadow-md)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 12px' }}>
              <div style={{ width: 64, height: 64, borderRadius: 999, background: 'var(--success-bg)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><SIcon name="check" size={32} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, margin: '0 0 10px' }}>{tr('Thanks,', 'Merci,')} {data.name.trim() || tr('there', 'à vous')} !</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 16, color: 'var(--fg-2)', margin: '0 0 24px' }}>{tr('We’ll reply to', 'Nous répondrons à')} {data.email} {tr('within one business day.', 'sous un jour ouvré.')}</p>
              <SBtn variant="outline" onClick={() => { setSent(false); setData({ name: '', email: '', topic: '', msg: '' }); }}>{tr('Send another', 'Envoyer un autre')}</SBtn>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'grid', gap: 18 }}>
              {field('name', tr('Your name', 'Votre nom'), { placeholder: tr('Aminata Diallo', 'Aminata Diallo') })}
              {field('email', tr('Email', 'E-mail'), { placeholder: tr('you@email.cm', 'vous@email.cm'), type: 'email' })}
              <label style={{ display: 'block' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, marginBottom: 7 }}>{tr('Topic', 'Sujet')}</span>
                <select className="t-input" value={data.topic} onChange={e => set('topic', e.target.value)}>
                  <option value="">{tr('Select…', 'Choisir…')}</option>
                  <option>{tr('Rides', 'Courses')}</option><option>{tr('Driving', 'Conduite')}</option><option>{tr('Business', 'Entreprise')}</option><option>{tr('Other', 'Autre')}</option>
                </select>
              </label>
              <label style={{ display: 'block' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, marginBottom: 7 }}>{tr('Message', 'Message')}</span>
                <textarea className="t-input" value={data.msg} onChange={e => set('msg', e.target.value)} rows="4" placeholder={tr('How can we help?', 'Comment pouvons-nous aider ?')} style={{ resize: 'vertical', borderColor: errs.msg ? 'var(--error)' : undefined }} />
                {errs.msg && <span style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--error)', marginTop: 5, display: 'block' }}>{tr('Please add a message.', 'Veuillez ajouter un message.')}</span>}
              </label>
              <SBtn variant="primary" icon="arrow-right" style={{ width: '100%' }}>{tr('Send message', 'Envoyer le message')}</SBtn>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav />
      <ContactHero />
      <Channels />
      <Audiences />
      <ContactForm />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Contact />);
