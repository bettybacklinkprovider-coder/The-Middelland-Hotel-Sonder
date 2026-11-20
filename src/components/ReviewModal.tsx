import React from 'react';
import { X, Star, ShieldCheck, QrCode, ExternalLink } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-stone-900 text-stone-100 rounded-2xl shadow-2xl border border-amber-500/30 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-stone-900 via-emerald-950 to-stone-900 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <h3 className="text-lg font-serif font-semibold tracking-wide text-amber-200">
              Leave a Review
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
        <div className="p-6 text-center space-y-6">
          <p className="text-sm text-stone-300">
            Thank you for staying at <strong className="text-amber-300">{HOTEL_INFO.name}</strong>. Your feedback helps us maintain our standard of excellence.
          </p>

          <div className="bg-stone-800/80 p-6 rounded-2xl border border-stone-700 inline-block mx-auto">
            {/* Simulated QR Code placeholder with scannable style */}
            <div className="w-48 h-48 bg-white p-3 rounded-xl mx-auto flex flex-col items-center justify-center border-4 border-stone-900 shadow-inner">
              <div className="w-full h-full grid grid-cols-6 gap-1.5 p-1 bg-stone-900 rounded">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      (i % 2 === 0 && i % 3 === 0) || i === 0 || i === 5 || i === 30 || i === 35
                        ? 'bg-stone-900'
                        : 'bg-white'
                    } rounded-xs`}
                  ></div>
                ))}
              </div>
            </div>
            <p className="text-xs text-stone-400 mt-3 font-mono">Scan with your smartphone camera</p>
          </div>

          <div className="space-y-3">
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-xl flex items-center justify-between text-stone-200 text-sm font-medium transition-colors"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Leave Google Review
              </span>
              <ExternalLink className="w-4 h-4 text-stone-400" />
            </a>

            <a
              href="https://trustpilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-xl flex items-center justify-between text-stone-200 text-sm font-medium transition-colors"
            >
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Review on Trustpilot
              </span>
              <ExternalLink className="w-4 h-4 text-stone-400" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2.5 bg-amber-500 text-stone-950 font-semibold rounded-xl hover:bg-amber-400 transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
