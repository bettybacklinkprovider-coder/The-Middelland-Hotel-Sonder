import React, { useState } from 'react';
import { Room } from '../types';
import { ROOMS } from '../data/hotelData';
import { Star, Calendar, Check, Sparkles, Users, Maximize2, Bed } from 'lucide-react';

interface RoomsProps {
  onOpenBooking: (room?: Room) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredRooms = filter === 'all'
    ? ROOMS
    : ROOMS.filter(r => r.category === filter);

  return (
    <div className="space-y-16 pb-20 bg-stone-950 text-stone-100 min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-950 border-b border-stone-800 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Accommodations
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-100">
            Rooms & Suites Collection
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Each room and suite at The Middelland Hotel, Sonder is a masterpiece of design, blending historic Rotterdam architectural character with ultra-modern luxury amenities.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {[
              { id: 'all', label: 'All Rooms' },
              { id: 'standard', label: 'Superior Heritage' },
              { id: 'deluxe', label: 'Canal View' },
              { id: 'suite', label: 'Executive Suites' },
              { id: 'penthouse', label: 'Royal Penthouse' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  filter === cat.id
                    ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-900/30'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-amber-500/40 transition-all group"
            >
              <div>
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {room.popular && (
                    <span className="absolute top-4 left-4 bg-amber-500 text-stone-950 font-bold text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg">
                      Most Popular Choice
                    </span>
                  )}
                  <div className="absolute bottom-4 right-4 bg-stone-950/90 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-700 text-amber-300 font-serif font-bold text-lg shadow">
                    €{room.price} <span className="text-xs text-stone-400 font-sans font-normal">/ night</span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span className="flex items-center gap-1.5"><Maximize2 className="w-3.5 h-3.5 text-amber-400" /> {room.size}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-amber-400" /> {room.capacity}</span>
                    <span className="flex items-center gap-1.5"><Bed className="w-3.5 h-3.5 text-amber-400" /> {room.bed}</span>
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {room.rating} ({room.reviewsCount})
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-stone-100 mb-1">{room.name}</h3>
                    <p className="text-xs text-amber-300/90 font-medium">{room.tagline}</p>
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {room.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-800">
                    {room.amenities.map((am, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{am}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between gap-4 border-t border-stone-800/60 mt-4">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Taxes & Breakfast</span>
                  <span className="text-xs text-emerald-400 font-medium">Included in Rate</span>
                </div>
                <button
                  onClick={() => onOpenBooking(room)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-bold rounded-xl hover:from-amber-500 hover:to-amber-400 shadow-lg shadow-amber-900/30 transition-all text-xs tracking-wider uppercase flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
