import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/hotelData';
import { Sparkles, Maximize2, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Rooms', 'Interior', 'Dining', 'Exterior', 'Facilities'];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="space-y-16 pb-20 bg-stone-950 text-stone-100 min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-950 border-b border-stone-800 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Visual Tour
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-100">
            Photo Gallery
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Explore the sophisticated aesthetic of The Middelland Hotel, Sonder. From our grand heritage facade on Mathenesserlaan to plush suites and Brasserie 314.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
                  filter === cat
                    ? 'bg-amber-500 text-stone-950 shadow-lg shadow-amber-900/30'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="relative group rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-xl cursor-pointer h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">{item.category}</span>
                <h3 className="text-lg font-serif font-bold text-white mt-1">{item.title}</h3>
                <div className="absolute top-4 right-4 bg-stone-950/80 backdrop-blur-md p-2 rounded-full text-amber-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-stone-950 border-b border-stone-800">
              <div>
                <span className="text-[10px] text-amber-400 uppercase tracking-widest font-mono">{activeImage.category}</span>
                <h3 className="text-lg font-serif font-semibold text-white">{activeImage.title}</h3>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-stone-950 flex items-center justify-center">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
