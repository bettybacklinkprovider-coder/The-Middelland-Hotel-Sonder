import React, { useState } from 'react';
import { Page } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Menu, X, Sparkles, Calendar } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'rooms', label: 'Rooms & Suites' },
    { page: 'gallery', label: 'Gallery' },
    { page: 'contact', label: 'Contact & Booking' },
  ];

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-serif font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <span className="font-serif text-lg tracking-wider text-amber-200 block font-semibold">
                The Middelland Hotel
              </span>
              <span className="text-[10px] tracking-widest uppercase text-amber-400/80 font-sans block">
                Sonder • Rotterdam
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`text-sm tracking-wider uppercase transition-colors font-medium pb-1 border-b-2 ${
                  currentPage === item.page
                    ? 'text-amber-300 border-amber-400'
                    : 'text-stone-300 border-transparent hover:text-amber-200 hover:border-amber-500/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center gap-2 text-xs text-stone-300 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-semibold rounded-xl hover:from-amber-500 hover:to-amber-400 shadow-md shadow-amber-900/20 transition-all text-xs tracking-wider uppercase"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 bg-amber-500 text-stone-950 font-semibold rounded-lg text-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNav(item.page)}
              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm uppercase tracking-wider font-medium ${
                currentPage === item.page
                  ? 'bg-amber-500/20 text-amber-300 border-l-4 border-amber-400'
                  : 'text-stone-300 hover:bg-stone-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-stone-800 flex flex-col gap-3 px-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center gap-2 text-xs text-stone-300"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-amber-500 text-stone-950 font-semibold rounded-xl text-center text-xs tracking-wider uppercase"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
