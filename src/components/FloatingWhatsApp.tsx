import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { BRAND_INFO } from '../data/productData';

interface FloatingWhatsAppProps {
  onOpenOrderModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      
      {/* Direct Buy Quick Button */}
      <button
        onClick={onOpenOrderModal}
        className="bg-[#1C1C1A] text-white hover:bg-[#2D2D2B] font-semibold text-xs px-4 py-2.5 rounded-full shadow-luxury flex items-center space-x-2 border border-[#B9B9B7]/40 hover:scale-105 transition-all"
      >
        <ShoppingBag className="w-4 h-4 text-[#B9B9B7]" />
        <span className="hidden sm:inline">Order Quick Drawer</span>
      </button>

      {/* Main WhatsApp Floating Pill */}
      <a
        href={`https://wa.me/${BRAND_INFO.waNumber}?text=Halo%20MODIARICH,%20saya%20tertarik%20membeli%20MODIARICH%20Beauty%20Soap`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-floating flex items-center space-x-3 transition-all hover:scale-105 animate-pulse-subtle"
        aria-label="Contact via WhatsApp 081285973475"
      >
        {/* Pulsing indicator ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 ring-1 ring-white"></span>
        </span>

        <MessageCircle className="w-6 h-6 text-white shrink-0" />
        <div className="hidden sm:flex flex-col text-left">
          <span className="font-bold text-xs leading-tight">Chat Admin WA</span>
          <span className="text-[10px] text-emerald-100">{BRAND_INFO.phone}</span>
        </div>
      </a>

    </div>
  );
};
