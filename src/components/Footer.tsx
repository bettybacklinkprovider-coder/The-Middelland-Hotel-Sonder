import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Page } from '../types';
import { MapPin, Phone, Mail, Sparkles, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  onOpenReviewModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onOpenReviewModal }) => {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub) {
      setSubscribed(true);
      setEmailSub('');
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 font-serif font-bold text-base">
                M
              </div>
              <span className="font-serif text-lg tracking-wider text-amber-200 font-semibold">
                {HOTEL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              An exquisite boutique hotel blending historic Dutch architecture on Mathenesserlaan with modern luxury comfort and world-class hospitality in Rotterdam.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenReviewModal}
                className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4 font-medium flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" /> Review Us & QR Code
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif uppercase tracking-widest text-amber-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">
                  Home / Landing Page
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('rooms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">
                  Rooms & Suites
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-300 transition-colors">
                  Contact & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif uppercase tracking-widest text-amber-300 font-semibold">
              Location & Contact
            </h4>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-amber-300">{HOTEL_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-amber-300">{HOTEL_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif uppercase tracking-widest text-amber-300 font-semibold">
              Exclusive Offers
            </h4>
            <p className="text-xs text-stone-400">
              Subscribe to receive private member rates, seasonal packages, and Rotterdam cultural event invitations.
            </p>
            {subscribed ? (
              <div className="bg-emerald-950/50 border border-emerald-800 p-3 rounded-lg flex items-center gap-2 text-emerald-300 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing to our private list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-amber-500 text-stone-950 rounded-md hover:bg-amber-400 transition-colors flex items-center justify-center text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Stay</a>
            <a href="#" className="hover:text-stone-300">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
