/* Tako — Reserve (scheduled rides) page */
import { t as tr } from '../lib/i18n.js';

function ReserveForm() {
  const [from, setFrom] = React.useState('Akwa, Douala');
  const [to, setTo] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [booked, setBooked] = React.useState(null);
  const reserve = (e) => {
    e.preventDefault();
    if (!to.trim() || !date || !time) { setBooked('hint'); return; }
    const base = 1800 + Math.floor((Math.abs(hash(from + to)) % 36) + 6) * 190;
    const low = Math.round(base / 100) * 100;
    setBooked({ low, high: low + 1000 });
  };
  const inputWrap = { flex: 1, minWidth: 160, display: 'flex', alignItems: 'center', gap: 10, padding: '6px 14px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 12 };
  const inputStyle = { border: 'none', outline: 'none', flex: 1, minWidth: 0, fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15, background: 'transparent', color: '#fff' };
  return (
    <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 20, padding: 18, maxWidth: 560, backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', boxShadow: 'var(--shadow-lg)' }}>
      <form onSubmit={reserve} style={{ display: 'grid', gap: 10 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <div style={inputWrap}><SIcon name="circle-dot" size={18} color="var(--tako-amber)" /><input value={from} onChange={e => setFrom(e.target.value)} placeholder={tr('Pick-up', 'Départ')} style={inputStyle} /></div>
          <div style={inputWrap}><SIcon name="square" size={16} color="rgba(255,255,255,0.7)" /><input value={to} onChange={e => setTo(e.target.value)} placeholder={tr('Where to?', 'Où aller ?')} style={inputStyle} /></div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <div style={inputWrap}><SIcon name="calendar" size={18} color="rgba(255,255,255,0.7)" /><input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ ...inputStyle, colorScheme: 'dark' }} /></div>
          <div style={inputWrap}><SIcon name="clock" size={18} color="rgba(255,255,255,0.7)" /><input type="time" value={time} onChange={e => setTime(e.target.value)} style={{ ...inputStyle, colorScheme: 'dark' }} /></div>
        </div>
        <SBtn variant="amber" icon="arrow-right" style={{ width: '100%', marginTop: 4 }}>{tr('Reserve', 'Réserver')}</SBtn>
      </form>
      {booked && (
        <div style={{ marginTop: 14, animation: 'float-up .3s cubic-bezier(.2,0,0,1)' }}>
          {booked === 'hint' ? (
            <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--gray-300)', fontWeight: 600 }}>{tr('Add a destination, date and time to reserve.', 'Ajoutez une destination, une date et une heure pour réserver.')}</span>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(247,149,29,0.14)', border: '1px solid rgba(247,149,29,0.4)', borderRadius: 12, padding: '12px 16px' }}>
              <SIcon name="check" size={20} color="var(--tako-amber)" />
              <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: '#fff', fontWeight: 600 }}>{tr('Reserved · est.', 'Réservé · est.')} <span style={{ fontFamily: 'var(--font-mono)' }}>{fmt(booked.low)}–{fmt(booked.high)} FCFA</span>{tr('. Price is locked — no surge.', '. Prix garanti — pas de majoration.')}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ReserveHero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', color: '#fff' }}>
      <AnimatedLanes style={{ opacity: 0.5 }} />
      <div style={{ ...WRAP, position: 'relative', paddingTop: 80, paddingBottom: 80 }} className="stack-pad">
        <div style={{ maxWidth: 620 }}>
          <div className="tako-overline" style={{ color: 'var(--tako-amber)', marginBottom: 18 }}>{tr('Tako Reserve', 'Tako Réserve')}</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px,5.4vw,68px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0 }}>
            {tr('Book your ride in advance.', 'Réservez votre course à l’avance.')}
          </h1>
          <p style={{ fontFamily: 'var(--font-text)', fontSize: 19, lineHeight: 1.5, color: 'var(--gray-300)', margin: '24px 0 28px', maxWidth: 480 }}>
            {tr('Lock your price, choose your time, and relax. A driver is matched ahead of your trip and arrives a few minutes early.', 'Garantissez votre prix, choisissez votre heure, et détendez-vous. Un chauffeur est trouvé avant votre course et arrive quelques minutes en avance.')}
          </p>
          <ReserveForm />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: 'calendar-clock', t: tr('Pick a time', 'Choisissez un horaire'), d: tr('Reserve from 30 minutes up to 90 days ahead, any day or night.', 'Réservez de 30 minutes à 90 jours à l’avance, jour et nuit.') },
    { icon: 'badge-cent', t: tr('Lock your price', 'Garantissez votre prix'), d: tr('See the fare up front. No surge, no surprises at pickup.', 'Voyez le prix à l’avance. Pas de majoration, aucune surprise au départ.') },
    { icon: 'car-front', t: tr('We’ll be there', 'Nous serons là'), d: tr('A driver arrives a few minutes early and waits for you.', 'Un chauffeur arrive quelques minutes en avance et vous attend.') },
  ];
  return (
    <section style={{ ...WRAP, paddingTop: 96, paddingBottom: 64 }} className="stack-pad">
      <SectionHead over={tr('How it works', 'Comment ça marche')} title={tr('Reserved in three taps', 'Réservé en trois tapes')} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }} className="grid-3">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: 'var(--tako-amber-deep)' }}>0{i + 1}</span>
              <span style={{ flex: 1, height: 1, background: 'var(--border-1)' }} />
              <div style={{ width: 44, height: 44, borderRadius: 12, border: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={s.icon} size={22} /></div>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, margin: '0 0 8px' }}>{s.t}</h3>
            <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{s.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ReserveFeatures() {
  const feats = [
    ['shield-check', tr('Price guarantee', 'Prix garanti'), tr('The fare you see is the fare you pay — no surge on reserved trips.', 'Le prix affiché est le prix payé — aucune majoration sur les courses réservées.')],
    ['clock', tr('Extra wait time', 'Temps d’attente offert'), tr('Your driver waits a few minutes past the pickup time, no charge.', 'Votre chauffeur attend quelques minutes après l’heure prévue, sans frais.')],
    ['bell', tr('Reminders', 'Rappels'), tr('We nudge you before pickup and tell you the moment your driver is on the way.', 'Nous vous prévenons avant le départ et dès que votre chauffeur arrive.')],
    ['map-pinned', tr('Add up to 5 stops', 'Jusqu’à 5 arrêts'), tr('Plan a multi-stop trip and see them all on your reserve screen.', 'Planifiez un trajet à arrêts multiples, tous visibles sur votre écran.')],
    ['rotate-ccw', tr('Free cancellation', 'Annulation gratuite'), tr('Change of plans? Cancel free up to an hour before pickup.', 'Changement de programme ? Annulez gratuitement jusqu’à une heure avant.')],
    ['plane', tr('Airport flight tracking', 'Suivi des vols'), tr('Add your flight and we adjust the pickup to when you actually land.', 'Ajoutez votre vol et nous ajustons la prise en charge à votre arrivée réelle.')],
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 64, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <SectionHead over={tr('Why Reserve', 'Pourquoi Réserve')} title={tr('Built for the trips that matter', 'Pensé pour les trajets qui comptent')} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
          {feats.map(([ic, t2, d], i) => (
            <Reveal key={t2} delay={(i % 3) * 70} style={{ background: '#fff', border: '1px solid var(--border-1)', borderRadius: 18, padding: 26 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--tako-amber-soft)', color: 'var(--tako-amber-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><SIcon name={ic} size={24} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, margin: '0 0 8px' }}>{t2}</h3>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{d}</p>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 28 }}><a href="airport.html" className="link-amber" style={{ fontSize: 16 }}>{tr('Reserving for the airport?', 'Vous réservez pour l’aéroport ?')} <SIcon name="arrow-right" size={18} /></a></div>
      </div>
    </section>
  );
}

function Reserve() {
  useIcons();
  return (
    <div style={{ background: '#fff' }}>
      <Nav active="ride.html" />
      <ReserveHero />
      <HowItWorks />
      <ReserveFeatures />
      <DownloadBand />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Reserve />);
