import React from 'react';
import { MessageCircle } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${HOTEL_INFO.whatsapp}?text=Hello%20The%20Middelland%20Hotel,%20Sonder%20team,%20I%20would%20like%20to%20inquire%20about%20availability%20and%20booking.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 group border-2 border-emerald-400/40"
      title="Chat with Concierge on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-sm pl-0 group-hover:pl-2">
        Chat with Concierge
      </span>
    </a>
  );
};
