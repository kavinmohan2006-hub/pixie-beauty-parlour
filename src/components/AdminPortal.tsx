// Updated AdminPortal component with offers management
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { X, Edit, Check, Phone, Plus, Layers } from 'lucide-react';
import { BUSINESS } from '../data/contact';

// Default service items to seed into Offers
const DEFAULT_SERVICE_OFFERS = [
  { title: 'Eyebrow / Threading', description: 'Expert eyebrow shaping and threading.', price: 40 },
  { title: 'Hair Cut & Styling', description: 'Precision haircuts tailored to your face shape.', price: 149 },
  { title: 'Hair Spa', description: 'Deep conditioning and rejuvenating hair spa treatments.', price: 499 },
  { title: 'Facial & Glow Care', description: 'Customized facials that cleanse, nourish and brighten your skin.', price: 499 },
  { title: 'Skin Care & D-Tan', description: 'Targeted skin care for instant tan removal and deep hydration.', price: 299 },
  { title: 'Manicure', description: 'Hand spa, scrub, massage and nail grooming.', price: 249 },
  { title: 'Pedicure', description: 'Foot spa, heel crack treatment, massage and nail grooming.', price: 299 },
  { title: 'Party Makeup', description: 'Glamorous, long-lasting makeup for parties and celebrations.', price: 999 },
  { title: 'Engagement Makeup', description: 'Flawless HD makeup, hairstyle & draping for your special milestone.', price: 2499 },
  { title: 'Bridal Makeup Package', description: 'Stunning bridal makeover with premium HD products, hairstyling and draping.', price: 4999 },
  { title: 'Mehendi', description: 'Intricate traditional and Arabic mehendi designs with 100% natural henna.', price: 199 },
  { title: 'Saree Draping & Pre-Pleating', description: 'Flawless saree pleating and draping in traditional & modern styles.', price: 149 },
  { title: 'Other / Multiple Services', description: 'Combination of multiple services or custom request.', price: 0 },
];

// Fetch admin password from environment
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

interface Booking {
  id: number; // assumes primary key
  customer_name: string;
  customer_phone: string;
  customer_whatsapp?: string;
  service: string;
  booking_date: string;
  booking_time: string;
  notes?: string;
  price?: number;
}

// Offer type
interface Offer {
  id: number;
  title: string;
  description: string;
  price: number;
}

export const AdminPortal: React.FC = () => {
  // Authentication state
  const [authorized, setAuthorized] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Booking data state
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editPrice, setEditPrice] = useState<string>('');

  // Offers data state
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loadingOffers, setLoadingOffers] = useState(true);
  const [editingOfferId, setEditingOfferId] = useState<number | null>(null);
  const [offerForm, setOfferForm] = useState({ title: '', description: '', price: '' });
  const [seedingOffers, setSeedingOffers] = useState(false);

  // UI tab state
  const [activeTab, setActiveTab] = useState<'appointments' | 'store' | 'maintenance' | 'offers'>('appointments');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthorized(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password');
    }
  };

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('booking_date', { ascending: true });
    if (error) {
      console.error('Error fetching bookings:', error);
    } else {
      setBookings((data as unknown as Booking[]) || []);
    }
    setLoading(false);
  };

  const fetchOffers = async () => {
    setLoadingOffers(true);
    const { data, error } = await supabase
      .from('offers')
      .select('*')
      .order('id', { ascending: true });
    if (error) {
      console.error('Error fetching offers:', error);
    } else {
      setOffers((data as unknown as Offer[]) || []);
    }
    setLoadingOffers(false);
  };

  useEffect(() => {
    if (authorized) {
      fetchBookings();
      fetchOffers();

      const refreshBookings = () => fetchBookings();
      window.addEventListener('bookingAdded', refreshBookings);
      return () => window.removeEventListener('bookingAdded', refreshBookings);
    }
  }, [authorized]);

  const cancelBooking = async (id: number) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return;
    setDeletingId(id);
    const { error } = await supabase.from('bookings').delete().eq('id', id);
    if (error) {
      console.error('Error deleting booking:', error);
    } else {
      setBookings(prev => prev.filter(b => b.id !== id));
    }
    setDeletingId(null);
  };

  const startEditPrice = (id: number, currentPrice?: number) => {
    setEditingId(id);
    setEditPrice(currentPrice ? String(currentPrice) : '');
  };

  const savePrice = async (id: number) => {
    const priceNum = parseFloat(editPrice);
    if (isNaN(priceNum)) {
      alert('Please enter a valid number');
      return;
    }
    const { error } = await supabase.from('bookings').update({ price: priceNum }).eq('id', id);
    if (error) {
      console.error('Error updating price:', error);
    } else {
      setBookings(prev =>
        prev.map(b => (b.id === id ? { ...b, price: priceNum } : b))
      );
    }
    setEditingId(null);
  };

  // ----- Offers CRUD -----
  const startEditOffer = (offer: Offer) => {
    setEditingOfferId(offer.id);
    setOfferForm({
      title: offer.title,
      description: offer.description,
      price: String(offer.price)
    });
  };

  const saveOffer = async () => {
    const priceVal = parseFloat(offerForm.price);
    if (!offerForm.title.trim()) {
      alert('Title is required');
      return;
    }
    if (isNaN(priceVal) || priceVal < 0) {
      alert('Price must be a valid positive number');
      return;
    }
    if (editingOfferId) {
      const { error } = await supabase
        .from('offers')
        .update({
          title: offerForm.title,
          description: offerForm.description,
          price: priceVal
        })
        .eq('id', editingOfferId);
      if (error) {
        console.error('Error updating offer:', error);
      } else {
        setOffers(prev =>
          prev.map(o =>
            o.id === editingOfferId ? { ...o, title: offerForm.title, description: offerForm.description, price: priceVal } : o
          )
        );
      }
    } else {
      const { data, error } = await supabase
        .from('offers')
        .insert([{ title: offerForm.title, description: offerForm.description, price: priceVal }])
        .select();
      if (error) {
        console.error('Error creating offer:', error);
      } else {
        setOffers(prev => [...prev, ...(data as unknown as Offer[])]);
      }
    }
    setEditingOfferId(null);
    setOfferForm({ title: '', description: '', price: '' });
  };

  const deleteOffer = async (id: number) => {
    if (!window.confirm('Delete this offer?')) return;
    const { error } = await supabase.from('offers').delete().eq('id', id);
    if (error) {
      console.error('Error deleting offer:', error);
    } else {
      setOffers(prev => prev.filter(o => o.id !== id));
    }
  };

  // Seed all default services into offers table
  const seedDefaultOffers = async () => {
    if (!window.confirm('This will add all 13 default service items to the Offers table. Continue?')) return;
    setSeedingOffers(true);
    const { data, error } = await supabase
      .from('offers')
      .insert(DEFAULT_SERVICE_OFFERS)
      .select();
    if (error) {
      console.error('Error seeding offers:', error);
      alert('Error seeding offers. Check console for details.');
    } else {
      setOffers(prev => [...prev, ...(data as unknown as Offer[])]);
    }
    setSeedingOffers(false);
  };


  // ---------- Render helpers ----------
  const renderTabBar = () => (
    <div className="flex space-x-2 mb-6 justify-center">
      {(['appointments', 'store', 'maintenance', 'offers'] as const).map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );

  const renderAppointments = () => {
    const totalRevenue = bookings.reduce((sum, b) => sum + (parseFloat(b.price as any) || 0), 0);
    return (
      <>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4" style={{ color: '#0f0f2d' }}>
          Admin Portal – Appointments
        </h2>
        <div className="text-right mb-4">
          <span className="font-semibold">Total Revenue: </span>
          <span className="text-pink-600">₹{totalRevenue.toFixed(2)}</span>
        </div>
        {loading ? (
          <p className="text-center text-gray-500">Loading appointments…</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-500">No appointments found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Phone</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">WhatsApp</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Service</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Date</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Time</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Message</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Price (₹)</th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b.id} className="border-t border-gray-200">
                    <td className="px-4 py-2 text-sm text-gray-700">{b.customer_name}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <a href={`tel:${b.customer_phone}`} className="text-pink-600 hover:underline">{b.customer_phone}</a>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {b.customer_whatsapp ? (
                        <a
                          href={`https://wa.me/${b.customer_whatsapp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:underline"
                        >{b.customer_whatsapp}</a>
                      ) : '—'}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">{b.service}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{b.booking_date}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{b.booking_time}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{b.notes || '—'}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {editingId === b.id ? (
                        <div className="flex items-center space-x-2">
                          <input
                            type="number"
                            value={editPrice}
                            onChange={e => setEditPrice(e.target.value)}
                            className="w-20 px-2 py-1 border rounded"
                          />
                          <button onClick={() => savePrice(b.id)} className="text-green-600 hover:underline">
                            <Check size={16} />
                          </button>
                          <button onClick={() => setEditingId(null)} className="text-red-600 hover:underline">
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>{b.price !== undefined && b.price !== null ? parseFloat(b.price as any).toFixed(2) : '—'}</span>
                          <button
                            onClick={() => startEditPrice(b.id, b.price)}
                            className="text-blue-600 hover:underline"
                            title="Edit price"
                          >
                            <Edit size={16} />
                          </button>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-2 text-center space-x-2">
                      <a
                        href={`tel:${BUSINESS.phones[0].number}`}
                        className="inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-pink-600 rounded hover:bg-pink-700"
                        title="Call Store"
                      >
                        <Phone size={14} />
                      </a>
                      <button
                        onClick={() => cancelBooking(b.id)}
                        disabled={deletingId === b.id}
                        className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {deletingId === b.id ? (
                          <span className="flex items-center gap-1">
                            <X size={12} className="animate-pulse" /> Canceling…
                          </span>
                        ) : (
                          <span>Cancel</span>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  };

  const renderStoreInfo = () => (
    <>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4" style={{ color: '#0f0f2d' }}>
        Store Information
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-gray-700"><strong>Address:</strong> {`${BUSINESS.address.line1} ${BUSINESS.address.line2} ${BUSINESS.address.line3} ${BUSINESS.address.line4}`}</p>
        <p className="text-gray-700"><strong>Phones:</strong> {BUSINESS.phones.map(p => (
          <a key={p.number} href={`tel:${p.number}`} className="text-pink-600 hover:underline mr-2">{p.number}</a>
        ))}</p>
        <p className="text-gray-700"><strong>WhatsApp:</strong> <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">{BUSINESS.whatsapp}</a></p>
        <p className="text-gray-700"><strong>Email:</strong> <a href={`mailto:${BUSINESS.email}`} className="text-blue-600 hover:underline">{BUSINESS.email}</a></p>
        <div className="text-gray-700">
          <strong>Hours:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>{BUSINESS.hours.weekdays}</li>
            <li>{BUSINESS.hours.sunday}</li>
            {BUSINESS.hours.note && <li className="italic text-sm">{BUSINESS.hours.note}</li>}
          </ul>
        </div>
      </div>
    </>
  );

  const renderMaintenance = () => {
    const mockTasks = [
      { id: 1, task: 'Clean salon floors', status: 'Pending', assigned: 'John' },
      { id: 2, task: 'Restock towels', status: 'Completed', assigned: 'Emma' },
    ];
    return (
      <>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4" style={{ color: '#0f0f2d' }}>
          Maintenance Tasks
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Task</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Assigned To</th>
              </tr>
            </thead>
            <tbody>
              {mockTasks.map(t => (
                <tr key={t.id} className="border-t border-gray-200">
                  <td className="px-4 py-2 text-sm text-gray-700">{t.task}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{t.status}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{t.assigned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const renderOffers = () => (
    <>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4" style={{ color: '#0f0f2d' }}>
        Promotional Offers
      </h2>
      <div className="max-w-2xl mx-auto mb-6">
        {/* Seed default services button */}
        <div className="flex justify-end mb-3">
          <button
            onClick={seedDefaultOffers}
            disabled={seedingOffers}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-semibold"
          >
            <Layers size={15} />
            {seedingOffers ? 'Adding…' : 'Seed Default Services (13 items)'}
          </button>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <input
            type="text"
            placeholder="Title"
            value={offerForm.title}
            onChange={e => setOfferForm({ ...offerForm, title: e.target.value })}
            className="flex-1 px-3 py-1 border rounded"
          />
          <input
            type="number"
            placeholder="Price (₹)"
            value={offerForm.price}
            onChange={e => setOfferForm({ ...offerForm, price: e.target.value })}
            className="w-28 px-3 py-1 border rounded"
          />
          <button onClick={saveOffer} className="px-3 py-1 bg-pink-600 text-white rounded flex items-center">
            <Plus size={16} className="mr-1" /> {editingOfferId ? 'Update' : 'Add'}
          </button>
        </div>
        <textarea
          placeholder="Description"
          value={offerForm.description}
          onChange={e => setOfferForm({ ...offerForm, description: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          rows={3}
        />
      </div>
      {loadingOffers ? (
        <p className="text-center text-gray-500">Loading offers…</p>
      ) : offers.length === 0 ? (
        <p className="text-center text-gray-500">No offers created yet. Use "Seed Default Services" to add all 13 items!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Title</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Description</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Price (₹)</th>
                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {offers.map(o => (
                <tr key={o.id} className="border-t border-gray-200">
                  <td className="px-4 py-2 text-sm text-gray-700 font-medium">{o.title}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{o.description}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 font-semibold text-pink-600">
                    {o.price > 0 ? `₹${o.price}` : 'Custom'}
                  </td>
                  <td className="px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => startEditOffer(o)}
                      className="text-blue-600 hover:underline"
                      title="Edit"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => deleteOffer(o.id)}
                      className="text-red-600 hover:underline"
                      title="Delete"
                    >
                      <X size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );


  // ---------- Main render ----------
  if (!authorized) {
    return (
      <section id="admin" className="py-20 bg-gray-50">
        <div className="max-w-md mx-auto px-4">
          <h2 className="font-display text-2xl text-center mb-6" style={{ color: '#0f0f2d' }}>Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
            {authError && <p className="text-red-600 text-sm text-center">{authError}</p>}
            <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">Login</button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section id="admin" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderTabBar()}
        {activeTab === 'appointments' && renderAppointments()}
        {activeTab === 'store' && renderStoreInfo()}
        {activeTab === 'maintenance' && renderMaintenance()}
        {activeTab === 'offers' && renderOffers()}
      </div>
    </section>
  );
};
