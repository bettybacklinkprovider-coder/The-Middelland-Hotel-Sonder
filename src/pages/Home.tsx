import React, { useState } from 'react';
import { Page, Room } from '../types';
import { HOTEL_INFO, ROOMS, FACILITIES, REVIEWS, OFFERS } from '../data/hotelData';
import { Star, ShieldCheck, MapPin, Phone, Wifi, Utensils, Car, Sparkles, KeyRound, Dumbbell, Calendar, ArrowRight, Check, Quote, ExternalLink } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
  onOpenBooking: (room?: Room) => void;
  onOpenReviewModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage, onOpenBooking, onOpenReviewModal }) => {
  const [selectedOffer, setSelectedOffer] = useState(OFFERS[0]);

  return (
    <div className="space-y-24 pb-20 bg-stone-950 text-stone-100">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image with luxury overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
            alt="The Middelland Hotel, Sonder Luxury Exterior"
            className="w-full h-full object-cover object-center filter brightness-60 scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8 pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs tracking-widest uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" /> 5-Star Boutique Experience in Rotterdam
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-stone-100 leading-tight">
            {HOTEL_INFO.name}
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-stone-300 font-light leading-relaxed">
            Located at Mathenesserlaan 314. Where historic Dutch architectural heritage seamlessly merges with contemporary bespoke luxury.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold rounded-xl hover:from-amber-500 hover:to-amber-400 shadow-xl shadow-amber-900/30 transition-all text-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Your Stay Now
            </button>
            <button
              onClick={() => {
                setCurrentPage('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700 rounded-xl transition-all text-sm tracking-wider uppercase font-medium flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Explore Rooms & Suites <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-3xl mx-auto border-t border-stone-800/80">
            <div className="bg-stone-900/40 backdrop-blur-md p-4 rounded-xl border border-stone-800">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="font-bold text-lg text-white">4.9 / 5.0</span>
              </div>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider">Guest Rating</p>
            </div>
            <div className="bg-stone-900/40 backdrop-blur-md p-4 rounded-xl border border-stone-800">
              <span className="font-bold text-lg text-amber-300 block mb-1">Mathenesserlaan</span>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider">Prime Rotterdam Address</p>
            </div>
            <div className="bg-stone-900/40 backdrop-blur-md p-4 rounded-xl border border-stone-800">
              <span className="font-bold text-lg text-amber-300 block mb-1">Brasserie 314</span>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider">On-Site Fine Dining</p>
            </div>
            <div className="bg-stone-900/40 backdrop-blur-md p-4 rounded-xl border border-stone-800">
              <span className="font-bold text-lg text-amber-300 block mb-1">24/7 Concierge</span>
              <p className="text-[11px] text-stone-400 uppercase tracking-wider">White-Glove Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> About The Middelland Hotel, Sonder
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 leading-tight">
              A Harmonious Blend of Rotterdam Heritage & Modern Luxury
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              Situated in the prestigious West district at Mathenesserlaan 314, our boutique hotel offers an intimate sanctuary away from the city bustle while remaining moments away from Rotterdam’s cultural epicenters, museums, and architectural landmarks.
            </p>
            <p className="text-stone-400 text-sm leading-relaxed">
              Every detail at The Middelland Hotel, Sonder has been meticulously curated—from custom handcrafted European furnishings and ambient mood lighting to bespoke Byredo toiletries and personalized concierge services designed to make your stay unforgettable.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-800">
              <div>
                <h4 className="text-amber-300 font-serif text-2xl font-bold">100+</h4>
                <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Years of Architectural Charm</p>
              </div>
              <div>
                <h4 className="text-amber-300 font-serif text-2xl font-bold">32</h4>
                <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider">Luxurious Rooms & Suites</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"
              alt="Hotel Lobby"
              className="rounded-2xl object-cover h-72 w-full shadow-2xl border border-stone-800"
            />
            <img
              src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
              alt="Suite Interior"
              className="rounded-2xl object-cover h-72 w-full shadow-2xl border border-stone-800 translate-y-6"
            />
          </div>
        </div>
      </section>

      {/* 3. Rooms & Suites Section (Preview) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">Accommodations</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100">Rooms & Suites Showcase</h2>
          </div>
          <button
            onClick={() => {
              setCurrentPage('rooms');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold tracking-wider uppercase transition-colors"
          >
            View All Rooms & Availability <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.slice(0, 3).map((room) => (
            <div
              key={room.id}
              className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {room.popular && (
                    <span className="absolute top-4 left-4 bg-amber-500 text-stone-950 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}
                  <div className="absolute bottom-4 right-4 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700 text-xs text-amber-300 font-semibold">
                    €{room.price} <span className="text-[10px] text-stone-400">/ night</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span>{room.size}</span>
                    <span>{room.capacity}</span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {room.rating}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-stone-100">{room.name}</h3>
                  <p className="text-xs text-stone-400 line-clamp-2">{room.tagline}</p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(room)}
                  className="w-full py-3 bg-stone-800 hover:bg-amber-500 hover:text-stone-950 text-stone-200 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-stone-700 hover:border-amber-500"
                >
                  <Calendar className="w-3.5 h-3.5" /> Reserve This Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers & Packages Section */}
      <section className="bg-stone-900/60 border-y border-stone-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Exclusive Packages</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100">Special Offers & Stays</h2>
            <p className="text-stone-400 text-sm">
              Discover curated experiences and seasonal packages designed to make your Rotterdam journey unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {OFFERS.map((offer) => (
              <div
                key={offer.id}
                className="bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-emerald-700 text-white font-semibold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow">
                      {offer.badge}
                    </span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-xs text-amber-400 font-semibold block mb-1">{offer.subtitle}</span>
                      <h3 className="text-xl font-serif font-bold text-stone-100">{offer.title}</h3>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">{offer.description}</p>
                    <div className="space-y-1.5 pt-2 border-t border-stone-900">
                      {offer.amenities.map((am, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{am}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-900 mt-4">
                  <span className="text-amber-300 font-serif font-bold text-sm">{offer.price}</span>
                  <button
                    onClick={() => onOpenBooking()}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg text-xs tracking-wider uppercase transition-colors"
                  >
                    Book Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Hotel Facilities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest">World-Class Amenities</div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100">Hotel Facilities & Services</h2>
          <p className="text-stone-400 text-sm">
            Everything you need for an effortless, indulgent stay in the heart of Rotterdam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES.map((fac, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl h-80 flex flex-col justify-end p-6 group hover:border-amber-500/50 transition-all"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
              </div>

              <div className="relative z-10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 backdrop-blur-md border border-amber-500/40 flex items-center justify-center text-amber-300">
                  {fac.icon === 'Utensils' && <Utensils className="w-5 h-5" />}
                  {fac.icon === 'Wifi' && <Wifi className="w-5 h-5" />}
                  {fac.icon === 'Car' && <Car className="w-5 h-5" />}
                  {fac.icon === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                  {fac.icon === 'KeyRound' && <KeyRound className="w-5 h-5" />}
                  {fac.icon === 'Dumbbell' && <Dumbbell className="w-5 h-5" />}
                </div>
                <h3 className="text-xl font-serif font-bold text-white">{fac.title}</h3>
                <p className="text-xs text-stone-300 leading-relaxed line-clamp-2">{fac.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Guest Reviews & Ratings Section */}
      <section className="bg-stone-900/40 border-y border-stone-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Guest Testimonials</div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100">What Our Guests Say</h2>
              <p className="text-stone-400 text-sm max-w-lg">
                Verified reviews from discerning travelers on Google, Trustpilot, and Booking.com.
              </p>
            </div>

            {/* Overall Rating Card */}
            <div className="bg-stone-950 border border-stone-800 p-6 rounded-2xl flex items-center gap-6 shadow-xl">
              <div className="text-center border-r border-stone-800 pr-6">
                <span className="text-4xl font-serif font-bold text-amber-300">4.9</span>
                <div className="flex items-center gap-1 text-amber-400 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-stone-400 mt-1 block">1,248+ Reviews</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Verified Guests</span>
                </div>
                <button
                  onClick={onOpenReviewModal}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Review Us & QR Code
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-stone-950 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between shadow-xl relative group hover:border-amber-500/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-stone-900 text-amber-300 border border-stone-800">
                      {rev.source}
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-900 flex items-center gap-3 mt-6">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-stone-100">{rev.author}</h4>
                    <p className="text-[10px] text-stone-400">{rev.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact & Location Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Get In Touch</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-100">Visit Us in Rotterdam</h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              We are situated on the grand Mathenesserlaan boulevard, easily accessible by international high-speed train (Eurostar from London/Paris/Brussels to Rotterdam Central), private car, or metro.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-stone-900 border border-stone-800 p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-amber-300 font-semibold">Address</h4>
                  <p className="text-sm text-stone-200">{HOTEL_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-900 border border-stone-800 p-4 rounded-xl">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-amber-300 font-semibold">Direct Telephone & WhatsApp</h4>
                  <p className="text-sm text-stone-200">{HOTEL_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-xs tracking-wider uppercase transition-colors"
              >
                Open Full Contact & Booking Page
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl h-[420px] bg-stone-900 flex flex-col items-center justify-center p-6 text-center">
              {/* Simulated interactive Google Maps view */}
              <div className="absolute inset-0 opacity-40">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                  alt="Rotterdam Map"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 bg-stone-950/90 backdrop-blur-md p-6 rounded-2xl border border-amber-500/40 max-w-sm space-y-3">
                <div className="w-12 h-12 bg-amber-500 text-stone-950 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-amber-200 text-lg">{HOTEL_INFO.name}</h3>
                <p className="text-xs text-stone-300">Mathenesserlaan 314, 3021 HX Rotterdam, Netherlands</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold pt-1"
                >
                  Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
