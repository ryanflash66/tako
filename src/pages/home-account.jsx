/* Tako — logged-in home: welcome bar, activity dashboard, app-download. */
import { t as tr } from '../lib/i18n.js';

const RECENT_TRIP = {
  dest: 'Bonapriso', from: 'Akwa', date: '21 Nov · 9:22 AM', fare: 2400, tier: 'Tako Go',
  driver: 'Jean M.', vehicle: 'White Toyota Corolla', plate: 'LT 4821', rating: 4.9, dur: '14 min', dist: 6.2, status: 'Completed',
};
const PAST_TRIPS = [
  RECENT_TRIP,
  { dest: 'Aéroport de Douala', from: 'Bonanjo', date: '18 Nov · 6:05 PM', fare: 3800, tier: 'Tako Comfort', driver: 'Pauline K.', vehicle: 'Grey Hyundai Accent', plate: 'CE 9043', rating: 5.0, dur: '22 min', dist: 11.4, status: 'Completed' },
  { dest: 'Marché Central', from: 'Deido', date: '14 Nov · 1:30 PM', fare: 0, tier: 'Tako Moto', driver: 'Brice N.', vehicle: 'Motorcycle', plate: 'DLA 221', rating: 0, dur: '—', dist: 0, status: 'Cancelled' },
  { dest: 'Bonamoussadi', from: 'Akwa', date: '9 Nov · 8:12 AM', fare: 2100, tier: 'Tako Go', driver: 'Eric T.', vehicle: 'White Suzuki Swift', plate: 'LT 7765', rating: 4.8, dur: '17 min', dist: 7.0, status: 'Completed' },
];

// ---- mini route map thumbnail ----------------------------------------------
function MiniMap({ height = 168, seed = 'akwa', radius = 14 }) {
  const h = Math.abs(hash(seed));
  const ax = 24 + (h % 30), ay = 30 + (h % 22);
  const bx = 250 - (h % 36), by = 150 - (h % 24);
  const cx = (ax + bx) / 2 + ((h % 40) - 20), cy = (ay + by) / 2 - 26;
  return (
    <svg viewBox="0 0 280 180" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height, display: 'block', borderRadius: radius, background: '#26271f' }}>
      <g stroke="#34352e" strokeWidth="9" strokeLinecap="round">
        <line x1="-10" y1="60" x2="290" y2="44" /><line x1="40" y1="-10" x2="90" y2="190" />
        <line x1="180" y1="-10" x2="230" y2="190" /><line x1="-10" y1="128" x2="290" y2="140" />
      </g>
      <g stroke="#2b3a26" strokeWidth="0"><rect x="120" y="92" width="46" height="40" fill="#2b3a26" rx="6" /></g>
      <path d={`M ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`} fill="none" stroke="var(--tako-amber)" strokeWidth="4" strokeLinecap="round" />
      <circle cx={ax} cy={ay} r="7" fill="#fff" /><circle cx={ax} cy={ay} r="3.4" fill="var(--tako-black)" />
      <rect x={bx - 6} y={by - 6} width="12" height="12" rx="3" fill="var(--tako-amber)" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

function tierIcon(t) { return t === 'Tako Moto' ? 'bike' : t === 'Tako XL' ? 'users' : t === 'Tako Comfort' ? 'car-front' : 'car'; }

// ---- generic modal ----------------------------------------------------------
function Modal({ title, onClose, children, maxWidth = 520 }) {
  React.useEffect(() => {
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, []);
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,10,10,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'float-up .2s cubic-bezier(.2,0,0,1)' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 22, width: '100%', maxWidth, maxHeight: '88vh', overflow: 'auto', boxShadow: 'var(--shadow-xl)' }}>
        <div style={{ position: 'sticky', top: 0, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 26px', borderBottom: '1px solid var(--border-1)', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', margin: 0 }}>{title}</h2>
          <button onClick={onClose} aria-label="Close" style={{ width: 38, height: 38, borderRadius: 999, border: 'none', background: 'var(--bg-3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name="x" size={20} /></button>
        </div>
        <div style={{ padding: 26 }}>{children}</div>
      </div>
    </div>
  );
}

// ---- trip detail ------------------------------------------------------------
function TripDetail({ trip, onClose }) {
  const base = trip.status === 'Cancelled' ? 0 : Math.round(trip.fare * 0.32 / 50) * 50;
  const dist = trip.status === 'Cancelled' ? 0 : Math.round(trip.fare * 0.58 / 50) * 50;
  const booking = trip.status === 'Cancelled' ? 0 : trip.fare - base - dist;
  return (
    <Modal title={tr('Trip details', 'Détails du trajet')} onClose={onClose}>
      <MiniMap height={190} seed={trip.dest} radius={16} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '18px 0 6px' }}>
        <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '5px 10px', borderRadius: 999, background: trip.status === 'Cancelled' ? 'var(--error-bg)' : 'var(--success-bg)', color: trip.status === 'Cancelled' ? 'var(--error)' : 'var(--success)' }}>{tr(trip.status, trip.status === 'Cancelled' ? 'Annulée' : 'Terminée')}</span>
        <span style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', fontWeight: 600 }}>{trip.date}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', margin: '4px 0 18px' }}>{trip.dest}</h3>
      <div style={{ position: 'relative', paddingLeft: 26, marginBottom: 22 }}>
        <div style={{ position: 'absolute', left: 5, top: 8, bottom: 8, width: 2, background: 'var(--border-1)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, position: 'relative' }}>
          <SIcon name="circle-dot" size={18} color="var(--gray-500)" style={{ position: 'absolute', left: -26 }} />
          <span style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15 }}>{trip.from}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
          <SIcon name="square" size={15} color="var(--tako-amber-deep)" style={{ position: 'absolute', left: -25 }} />
          <span style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15 }}>{trip.dest}</span>
        </div>
      </div>
      {trip.status !== 'Cancelled' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 0', borderTop: '1px solid var(--border-1)', borderBottom: '1px solid var(--border-1)' }}>
          <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--tako-charcoal)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{trip.driver[0]}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15 }}>{trip.driver}</div>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)' }}>{trip.vehicle} · {trip.plate}</div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 4 }}><SIcon name="star" size={15} color="var(--tako-amber)" /> {trip.rating.toFixed(1)}</span>
        </div>
      )}
      <div style={{ padding: '18px 0' }}>
        {trip.status === 'Cancelled' ? (
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 16 }}><span>{tr('Total', 'Total')}</span><span>0 FCFA</span></div>
        ) : (
          <React.Fragment>
            {[[tr('Base fare', 'Prix de base'), base], [tr('Distance', 'Distance') + ' · ' + trip.dist + ' km', dist], [tr('Booking fee', 'Frais de réservation'), booking]].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-2)' }}><span>{l}</span><span style={{ fontFamily: 'var(--font-mono)' }}>{fmt(v)}</span></div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--border-1)', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 17 }}><span>{tr('Total', 'Total')}</span><span style={{ fontFamily: 'var(--font-mono)' }}>{fmt(trip.fare)} FCFA</span></div>
          </React.Fragment>
        )}
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <SBtn variant="primary" icon="rotate-ccw" href="ride.html" style={{ flex: 1 }}>{tr('Rebook', 'Reréserver')}</SBtn>
        <SBtn variant="outline" iconLeft="download" onClick={onClose} style={{ flex: 1 }}>{tr('Get receipt', 'Obtenir le reçu')}</SBtn>
      </div>
    </Modal>
  );
}

function AllTrips({ onClose, onPick }) {
  return (
    <Modal title={tr('Your trips', 'Vos trajets')} onClose={onClose}>
      <div style={{ display: 'grid', gap: 4 }}>
        {PAST_TRIPS.map((t, i) => (
          <button key={i} onClick={() => onPick(t)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 10px', border: 'none', borderRadius: 12, cursor: 'pointer', background: 'transparent', textAlign: 'left', borderBottom: i < PAST_TRIPS.length - 1 ? '1px solid var(--border-1)' : 'none' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={tierIcon(t.tier)} size={22} color="var(--tako-black)" /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.dest}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)' }}>{t.date}{t.status === 'Cancelled' ? ' · ' + tr('Cancelled', 'Annulée') : ''}</div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15 }}>{t.status === 'Cancelled' ? '—' : fmt(t.fare)}</div>
            <SIcon name="chevron-right" size={18} color="var(--gray-400)" />
          </button>
        ))}
      </div>
    </Modal>
  );
}

// ---- account / wallet / receipts modal -------------------------------------
function AccountModal({ tab, setTab, onClose, user, onPickTrip }) {
  const tabs = [['wallet', tr('Wallet', 'Portefeuille'), 'wallet'], ['receipts', tr('Receipts', 'Reçus'), 'receipt'], ['account', tr('Account', 'Compte'), 'user']];
  const methods = [['MTN Mobile Money', '•••• 47', 'smartphone'], ['Orange Money', '•••• 12', 'smartphone'], [tr('Cash', 'Espèces'), tr('Default', 'Par défaut'), 'banknote']];
  return (
    <Modal title={tr('Your account', 'Votre compte')} onClose={onClose} maxWidth={560}>
      <div style={{ display: 'flex', gap: 6, background: 'var(--bg-3)', borderRadius: 999, padding: 5, marginBottom: 24 }}>
        {tabs.map(([k, label]) => (
          <button key={k} onClick={() => setTab(k)} style={{ flex: 1, border: 'none', cursor: 'pointer', borderRadius: 999, padding: '10px 14px', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, background: tab === k ? 'var(--tako-black)' : 'transparent', color: tab === k ? '#fff' : 'var(--fg-2)', transition: 'all .15s' }}>{label}</button>
        ))}
      </div>
      {tab === 'wallet' && (
        <div>
          <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--tako-black)', borderRadius: 18, padding: '24px 26px', color: '#fff', marginBottom: 20 }}>
            <LaneMotif style={{ opacity: 0.3 }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 700, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tr('Tako Cash balance', 'Solde Tako Cash')}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, marginTop: 6 }}>12 400 <span style={{ fontSize: 16, color: 'var(--tako-amber)' }}>FCFA</span></div>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--fg-3)', marginBottom: 12 }}>{tr('Payment methods', 'Moyens de paiement')}</div>
          <div style={{ display: 'grid', gap: 10 }}>
            {methods.map(([n, d, ic]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', border: '1px solid var(--border-1)', borderRadius: 12 }}>
                <SIcon name={ic} size={20} color="var(--tako-amber-deep)" />
                <span style={{ flex: 1, fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15 }}>{n}</span>
                <span style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)' }}>{d}</span>
              </div>
            ))}
          </div>
          <SBtn variant="outline" iconLeft="plus" style={{ width: '100%', marginTop: 14 }}>{tr('Add payment method', 'Ajouter un moyen de paiement')}</SBtn>
        </div>
      )}
      {tab === 'receipts' && (
        <div style={{ display: 'grid', gap: 4 }}>
          {PAST_TRIPS.filter(t => t.status !== 'Cancelled').map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 6px', borderBottom: '1px solid var(--border-1)' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 15 }}>{t.dest}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)' }}>{t.date}</div>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 15 }}>{fmt(t.fare)}</span>
              <button onClick={() => onPickTrip(t)} aria-label="View" style={{ width: 36, height: 36, borderRadius: 999, border: 'none', background: 'var(--bg-3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name="download" size={18} /></button>
            </div>
          ))}
        </div>
      )}
      {tab === 'account' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
            <div style={{ width: 58, height: 58, borderRadius: 999, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24 }}>{(user.first[0] || 'T').toUpperCase()}</div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20 }}>{user.first} {user.last}</div>
              <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--fg-3)', display: 'inline-flex', alignItems: 'center', gap: 6 }}><SIcon name="star" size={14} color="var(--tako-amber)" /> 4.9 · {tr('Member since 2026', 'Membre depuis 2026')}</div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 2 }}>
            {[['user', tr('Edit profile', 'Modifier le profil')], ['map-pin', tr('Saved places', 'Lieux enregistrés')], ['bell', tr('Notifications', 'Notifications')], ['shield', tr('Privacy & security', 'Confidentialité et sécurité')], ['settings', tr('Settings', 'Paramètres')]].map(([ic, l]) => (
              <button key={l} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 8px', border: 'none', borderBottom: '1px solid var(--border-1)', background: 'transparent', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15 }}>
                <SIcon name={ic} size={19} color="var(--fg-2)" /> <span style={{ flex: 1 }}>{l}</span> <SIcon name="chevron-right" size={17} color="var(--gray-400)" />
              </button>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
}

// ---- welcome bar ------------------------------------------------------------
function AccountBar({ user, onOpen }) {
  const item = (icon, key, label) => (
    <button onClick={() => onOpen(key)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 15, padding: '6px 4px', transition: 'color .15s' }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--tako-amber)'} onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
      <SIcon name={icon} size={18} /> <span className="hide-sm">{label}</span>
    </button>
  );
  return (
    <div style={{ background: 'var(--tako-black)', color: '#fff' }}>
      <div style={{ ...WRAP, display: 'flex', alignItems: 'center', gap: 20, minHeight: 60, paddingTop: 12, paddingBottom: 12, flexWrap: 'wrap' }} className="stack-pad">
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>{tr('Welcome back,', 'Bon retour,')} {user.first}</span>
        <span className="hide-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--gray-400)', fontFamily: 'var(--font-text)', fontSize: 15 }}>
          <SIcon name="calendar" size={17} /> {tr('No upcoming trips', 'Aucun trajet à venir')}
        </span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 18 }}>
          {item('wallet', 'wallet', tr('Wallet', 'Portefeuille'))}{item('receipt', 'receipts', tr('Receipts', 'Reçus'))}{item('user', 'account', tr('Account', 'Compte'))}
        </div>
      </div>
    </div>
  );
}

// ---- activity dashboard -----------------------------------------------------
function AccountActivity({ user, onOpenTrip, onAllTrips }) {
  const recent = RECENT_TRIP;
  const sectionLabel = { fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: 'var(--fg-1)', marginBottom: 16, letterSpacing: '0.01em' };
  return (
    <section style={{ ...WRAP, paddingTop: 64, paddingBottom: 40 }} className="stack-pad">
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px,3.2vw,40px)', letterSpacing: '-0.025em', margin: '0 0 32px' }}>{tr('Your account and activity', 'Votre compte et votre activité')}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 0.8fr', gap: 28 }} className="grid-3">
        {/* Most recent */}
        <div>
          <div style={sectionLabel}>{tr('Most recent', 'Plus récent')}</div>
          <button onClick={() => onOpenTrip(recent)} className="lift" style={{ display: 'block', width: '100%', textAlign: 'left', padding: 0, border: '1px solid var(--border-1)', borderRadius: 18, overflow: 'hidden', cursor: 'pointer', background: '#fff' }}>
            <MiniMap height={172} seed={recent.dest} radius={0} />
            <div style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{recent.dest}</div>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)' }}>{recent.date} · {fmt(recent.fare)} FCFA</div>
              </div>
              <span style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, background: 'var(--bg-3)', borderRadius: 999, padding: '8px 14px', whiteSpace: 'nowrap' }}>{tr('See details', 'Voir les détails')}</span>
            </div>
          </button>
        </div>
        {/* Past + Promotions */}
        <div>
          <div style={sectionLabel}>{tr('Past', 'Passés')}</div>
          <div style={{ border: '1px solid var(--border-1)', borderRadius: 18, padding: 8, marginBottom: 20 }}>
            {PAST_TRIPS.slice(1, 3).map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 10px', borderBottom: i === 0 ? '1px solid var(--border-1)' : 'none' }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name={tierIcon(t.tier)} size={20} color="var(--tako-black)" /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.dest}</div>
                  <div style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-3)' }}>{t.date}{t.status === 'Cancelled' ? ' · ' + tr('Cancelled', 'Annulée') : ' · ' + fmt(t.fare) + ' FCFA'}</div>
                </div>
                <button onClick={() => onOpenTrip(t)} style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 13, background: 'var(--bg-3)', border: 'none', borderRadius: 999, padding: '7px 12px', cursor: 'pointer', whiteSpace: 'nowrap' }}>{tr('See details', 'Voir les détails')}</button>
              </div>
            ))}
            <button onClick={onAllTrips} style={{ width: '100%', marginTop: 4, background: 'var(--bg-2)', border: 'none', borderRadius: 12, padding: '13px', fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, cursor: 'pointer', transition: 'background .15s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gray-200)'} onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-2)'}>{tr('View all trips', 'Voir tous les trajets')}</button>
          </div>
          <Promotion />
        </div>
        {/* Suggestions */}
        <div>
          <div style={sectionLabel}>{tr('Suggestions', 'Suggestions')}</div>
          <div style={{ display: 'grid', gap: 12 }}>
            {[['car', tr('Ride', 'Course'), 'ride.html'], ['calendar-clock', tr('Reserve', 'Réserver'), 'ride.html'], ['steering-wheel', tr('Drive', 'Conduire'), 'drive.html']].map(([ic, l, href]) => (
              <a key={l} href={href} className="lift" style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--bg-2)', border: '1px solid var(--border-1)', borderRadius: 16, padding: '18px 20px', textDecoration: 'none', color: 'var(--fg-1)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', border: '1px solid var(--border-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><SIcon name={ic === 'steering-wheel' ? 'navigation' : ic} size={22} /></div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17 }}>{l}</span>
                <SIcon name="arrow-right" size={18} style={{ marginLeft: 'auto' }} color="var(--gray-400)" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Promotion() {
  const [copied, setCopied] = React.useState(false);
  const copy = () => { try { navigator.clipboard.writeText('TAKO20'); } catch (e) {} setCopied(true); setTimeout(() => setCopied(false), 1800); };
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-text)', fontWeight: 700, fontSize: 14, color: 'var(--fg-1)', marginBottom: 16 }}>{tr('Promotions', 'Promotions')}</div>
      <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--border-1)', borderRadius: 18, padding: '22px 22px', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, letterSpacing: '-0.01em', lineHeight: 1.2 }}>{tr('20% off your next 5 rides', '20 % de réduction sur vos 5 prochaines courses')}</div>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)', marginTop: 6 }}>{tr('Douala · ends 30 June', 'Douala · jusqu’au 30 juin')}</div>
          </div>
          <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--tako-amber)', color: 'var(--tako-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><SIcon name="tag" size={22} /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18 }}>
          <button onClick={copy} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--tako-black)', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 16px', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            <SIcon name={copied ? 'check' : 'copy'} size={16} /> {copied ? tr('Copied!', 'Copié !') : 'TAKO20'}
          </button>
          <span style={{ fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-3)' }}>{copied ? tr('Code copied', 'Code copié') : tr('Tap to copy code', 'Appuyez pour copier')}</span>
        </div>
      </div>
    </div>
  );
}

// ---- "It's easier in the apps" ---------------------------------------------
function AppsSection() {
  const card = (qrSeed, title, sub) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 20, padding: 24 }}>
      <div style={{ padding: 10, background: '#fff', border: '1px solid var(--border-1)', borderRadius: 14, flexShrink: 0 }}><QRCode value={qrSeed} size={116} /></div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(20px,2vw,26px)', letterSpacing: '-0.01em', lineHeight: 1.15 }}>{title}</div>
        <div style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--fg-2)', marginTop: 6 }}>{sub}</div>
      </div>
      <SIcon name="arrow-right" size={24} color="var(--tako-black)" />
    </div>
  );
  return (
    <section style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border-1)', paddingTop: 88, paddingBottom: 96 }}>
      <div style={WRAP} className="stack-pad">
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.6vw,46px)', letterSpacing: '-0.025em', margin: '0 0 36px' }}>{tr('It’s easier in the apps', 'C’est plus simple dans les apps')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="grid-2">
          {card('tako-rider-app-cm', tr('Download the Tako app', 'Téléchargez l’app Tako'), tr('Scan to download', 'Scannez pour télécharger'))}
          {card('tako-driver-app-cm', tr('Download the Driver app', 'Téléchargez l’app chauffeur'), tr('Scan to download', 'Scannez pour télécharger'))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { RECENT_TRIP, PAST_TRIPS, MiniMap, Modal, TripDetail, AllTrips, AccountModal, AccountBar, AccountActivity, AppsSection });
