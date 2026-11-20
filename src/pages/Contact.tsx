import React, { useState } from 'react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Sparkles, Calendar, Users, Clock } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('Room Booking Inquiry');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%20The%20Middelland%20Hotel,%20Sonder%20team,%20I%20would%20like%20to%20inquire%20about%20a%20reservation.`;

  return (
    <div className="space-y-16 pb-20 bg-stone-950 text-stone-100 min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-950 border-b border-stone-800 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Reach Out
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-100">
            Contact & Booking
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Our concierge and reservation team is available 24/7 to assist you with bespoke bookings, private events, and arrival arrangements in Rotterdam.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 space-y-6 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-amber-200">The Middelland Hotel, Sonder</h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">Address</span>
                    <span className="text-stone-300">{HOTEL_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">Phone</span>
                    <a href={`tel:${HOTEL_INFO.phone}`} className="text-stone-300 hover:text-amber-300">{HOTEL_INFO.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">Email Concierge</span>
                    <a href={`mailto:${HOTEL_INFO.email}`} className="text-stone-300 hover:text-amber-300">{HOTEL_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold block">Reception & Check-in</span>
                    <span className="text-stone-300">Open 24 Hours • Check-in 15:00 • Check-out 11:00</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <div className="pt-4 border-t border-stone-800">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
                >
                  <MessageCircle className="w-4 h-4" /> Instant WhatsApp Booking & Chat
                </a>
              </div>
            </div>

            {/* Quick Booking Prompt */}
            <div className="bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-900 border border-amber-500/30 rounded-2xl p-8 space-y-4 shadow-xl">
              <h4 className="text-xl font-serif font-bold text-amber-200">Ready to Secure Your Stay?</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Book directly through our website to enjoy best rate guarantee, complimentary champagne, and priority room upgrades.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 bg-amber-500 text-stone-950 font-bold rounded-xl hover:bg-amber-400 transition-colors text-xs tracking-wider uppercase"
              >
                Open Reservation System
              </button>
            </div>
          </div>

          {/* Inquiry Form & Google Map */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-stone-100 mb-2">Send a Direct Inquiry</h3>
              <p className="text-xs text-stone-400 mb-6">
                Fill out the form below and our concierge team will respond within 2 hours.
              </p>

              {submitted ? (
                <div className="bg-emerald-950/50 border border-emerald-800 p-6 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500 text-stone-950 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif text-amber-200">Message Received Successfully!</h4>
                  <p className="text-xs text-stone-300 max-w-md mx-auto">
                    Thank you <strong className="text-white">{name}</strong>. Our front office manager has received your inquiry regarding <strong className="text-amber-300">{inquiryType}</strong> and will contact you via email ({email}) shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-amber-500 text-stone-950 font-semibold rounded-xl text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Julian van Dijk"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="julian@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+31 10 555 1234"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Inquiry Type</label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                      >
                        <option>Room Booking Inquiry</option>
                        <option>Brasserie 314 Reservation</option>
                        <option>Private Event / Wedding</option>
                        <option>Corporate Stay</option>
                        <option>General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-amber-300/80 mb-1">Message & Details</label>
                    <textarea
                      rows={4}
                      placeholder="Please let us know your preferred dates, number of guests, or special requests..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold rounded-xl hover:from-amber-500 hover:to-amber-400 transition-all text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-amber-900/30"
                  >
                    <Send className="w-4 h-4" /> Send Inquiry to Concierge
                  </button>
                </form>
              )}
            </div>

            {/* Google Map Card */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl h-[300px] bg-stone-900 flex items-center justify-center p-6 text-center">
              <div className="absolute inset-0 opacity-40">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                  alt="Rotterdam Map"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 bg-stone-950/90 backdrop-blur-md p-6 rounded-2xl border border-amber-500/40 max-w-sm space-y-2">
                <MapPin className="w-6 h-6 text-amber-400 mx-auto" />
                <h4 className="font-serif font-bold text-amber-200">The Middelland Hotel, Sonder</h4>
                <p className="text-xs text-stone-300">Mathenesserlaan 314, 3021 HX Rotterdam</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 underline font-medium block pt-1"
                >
                  View on Google Maps & Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
