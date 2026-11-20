import React, { useState } from 'react';
import { X, Calendar, Users, Bed, CheckCircle2, Sparkles, Phone, Mail } from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { Room } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom?: Room | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedRoom }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [roomId, setRoomId] = useState<string>(selectedRoom ? selectedRoom.id : ROOMS[0].id);
  const [checkIn, setCheckIn] = useState<string>('2026-12-01');
  const [checkOut, setCheckOut] = useState<string>('2026-12-04');
  const [guests, setGuests] = useState<string>('2 Guests');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  if (!isOpen) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const currentRoom = ROOMS.find(r => r.id === roomId) || ROOMS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-stone-900 text-stone-100 rounded-2xl shadow-2xl border border-amber-500/30 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-stone-900 via-emerald-950 to-stone-900 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-serif font-semibold tracking-wide text-amber-200">
              {step === 'form' ? 'Reserve Your Luxury Stay' : 'Reservation Confirmed'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white transition-colors rounded-full hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {step === 'form' ? (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Select Room / Suite</label>
                  <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                  >
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} (€{r.price}/night)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Guests</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests (Penthouse)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Check-In Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-amber-400" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-stone-800 border border-stone-700 rounded-lg pl-10 pr-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Check-Out Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-amber-400" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-stone-800 border border-stone-700 rounded-lg pl-10 pr-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-800 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Charlotte de Witt"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="charlotte@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+31 6 1234 5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Special Requests or Dietary Requirements</label>
                <textarea
                  rows={2}
                  placeholder="e.g. High floor, anniversary setup, airport transfer..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-stone-100 focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              {/* Price Estimation */}
              <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-stone-300 font-medium">{currentRoom.name}</p>
                  <p className="text-xs text-amber-400">Includes Breakfast & Tax • Free Cancellation</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-serif font-bold text-amber-300">€{currentRoom.price}</span>
                  <span className="text-xs text-stone-400 block">/ night</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border border-stone-700 text-stone-300 rounded-xl hover:bg-stone-800 transition-colors font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-semibold rounded-xl hover:from-amber-500 hover:to-amber-400 shadow-lg shadow-amber-900/30 transition-all text-sm"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif text-amber-200">We Look Forward to Welcoming You!</h4>
              <p className="text-stone-300 max-w-md mx-auto text-sm leading-relaxed">
                Dear <span className="text-amber-300 font-semibold">{name || 'Guest'}</span>, your reservation at <strong className="text-white">{HOTEL_INFO.name}</strong> ({currentRoom.name}) has been successfully received. A confirmation email and itinerary have been dispatched to <span className="text-amber-300">{email}</span>.
              </p>
              <div className="bg-stone-800/80 p-4 rounded-xl text-left max-w-md mx-auto space-y-2 text-xs text-stone-300 border border-stone-700">
                <div className="flex justify-between"><span>Check-in:</span> <strong className="text-white">{checkIn} (from 15:00)</strong></div>
                <div className="flex justify-between"><span>Check-out:</span> <strong className="text-white">{checkOut} (until 11:00)</strong></div>
                <div className="flex justify-between"><span>Address:</span> <strong className="text-white">Mathenesserlaan 314, Rotterdam</strong></div>
                <div className="flex justify-between"><span>Concierge Desk:</span> <strong className="text-amber-400">{HOTEL_INFO.phone}</strong></div>
              </div>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setStep('form');
                    onClose();
                  }}
                  className="px-6 py-2.5 bg-amber-500 text-stone-950 font-semibold rounded-xl hover:bg-amber-400 transition-colors text-sm"
                >
                  Done / Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
