import React from 'react';
import { X, Check, ShieldCheck, ShoppingBag, Sparkles, AlertCircle } from 'lucide-react';
import { PRODUCT_DATA, BRAND_INFO } from '../data/productData';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderModal: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  isOpen,
  onClose,
  onOpenOrderModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-[#B9B9B7]/40">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 text-[#1C1C1A] hover:bg-stone-200 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-stone-100">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF9F6] p-2 border border-stone-200 flex items-center justify-center shrink-0">
            <img src={PRODUCT_DATA.image} alt={PRODUCT_DATA.name} className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#7E7D7A] block">
              Detail Produk & Spesifikasi Lengkap
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#1C1C1A]">
              {PRODUCT_DATA.name}
            </h2>
            <div className="flex items-center space-x-2 text-xs text-emerald-700 font-medium mt-1">
              <span>BPOM: {PRODUCT_DATA.bpom}</span>
              <span>•</span>
              <span>Sertifikasi Halal</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-xs sm:text-sm text-[#3D3C3A]">
          
          {/* Deskripsi */}
          <div>
            <h3 className="font-bold text-[#1C1C1A] uppercase tracking-wider text-xs mb-2">Deskripsi Produk:</h3>
            <p className="leading-relaxed text-[#5C5B58] bg-[#FAF9F6] p-4 rounded-2xl border border-stone-200">
              {PRODUCT_DATA.shortDescription}
            </p>
          </div>

          {/* Full Ingredients List */}
          <div>
            <h3 className="font-bold text-[#1C1C1A] uppercase tracking-wider text-xs mb-2 flex items-center justify-between">
              <span>Komposisi Bahan Lengkap (Full INCI Ingredients):</span>
              <span className="text-[10px] text-amber-800 font-normal">Sesuai Kemasan BPOM</span>
            </h3>
            <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-stone-200 flex flex-wrap gap-1.5 max-h-48 overflow-y-auto">
              {PRODUCT_DATA.fullIngredients.map((ing, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-[#B9B9B7]/40 px-2.5 py-1 rounded-md text-[11px] font-medium text-[#1C1C1A]"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* How to use */}
          <div>
            <h3 className="font-bold text-[#1C1C1A] uppercase tracking-wider text-xs mb-2">Petunjuk Cara Pakai:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PRODUCT_DATA.howToUse.map((step) => (
                <div key={step.step} className="bg-white p-3.5 rounded-xl border border-stone-200 space-y-1">
                  <span className="font-bold text-amber-800 text-xs block">Langkah {step.step}: {step.title}</span>
                  <p className="text-[11px] text-[#5C5B58]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Storage & Notes */}
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-900 space-y-1">
            <h4 className="font-bold text-xs flex items-center space-x-1.5">
              <AlertCircle className="w-4 h-4 text-amber-800" />
              <span>Saran Penyimpanan & Keamanan:</span>
            </h4>
            <p className="text-xs">{PRODUCT_DATA.storageGuide}</p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-xs text-[#7E7D7A] block">Harga Resmi:</span>
            <span className="text-2xl font-bold text-[#1C1C1A]">
              Rp {PRODUCT_DATA.price.toLocaleString('id-ID')}
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenOrderModal();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#1C1C1A] hover:bg-[#2D2D2B] text-white font-semibold text-xs py-3.5 px-6 rounded-full transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-[#B9B9B7]" />
            <span>Beli Sekarang via WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
