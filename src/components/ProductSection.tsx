import React, { useState } from 'react';
import { ShoppingBag, Star, ShieldCheck, Check, Info, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { PRODUCT_DATA, BRAND_INFO } from '../data/productData';

interface ProductSectionProps {
  onOpenOrderModal: (voucherCode?: string) => void;
  onOpenDetailModal: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ onOpenOrderModal, onOpenDetailModal }) => {
  const [selectedQty, setSelectedQty] = useState(1);

  const totalPrice = PRODUCT_DATA.price * selectedQty;
  const originalTotalPrice = PRODUCT_DATA.originalPrice * selectedQty;

  return (
    <section id="produk" className="py-20 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="bg-[#B9B9B7] text-[#1C1C1A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            Katalog Produk Utama
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A]">
            MODIARICH Beauty Soap
          </h2>
          <p className="text-sm sm:text-base text-[#5C5B58]">
            Formulasi pembersih wajah dan tubuh dengan kandungan bahan alami pilihan untuk perawatan hiperpigmentasi & kesehatan skin barrier.
          </p>
        </div>

        {/* Featured Card Grid Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-luxury border border-[#B9B9B7]/40 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image & Badges Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative bg-[#FAF9F6] rounded-2xl p-8 border border-stone-200 flex items-center justify-center group overflow-hidden">
                <span className="absolute top-3 left-3 bg-[#B9B9B7] text-[#1C1C1A] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  Best Seller #1
                </span>
                <img
                  src={PRODUCT_DATA.image}
                  alt={PRODUCT_DATA.name}
                  className="w-full max-h-80 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Trust Features */}
              <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                <div className="bg-[#FAF9F6] p-2.5 rounded-xl border border-stone-200 font-medium text-[#1C1C1A]">
                  🛡️ BPOM {BRAND_INFO.bpomNumber}
                </div>
                <div className="bg-[#FAF9F6] p-2.5 rounded-xl border border-stone-200 font-medium text-[#1C1C1A]">
                  ✅ Sertifikat Halal
                </div>
              </div>
            </div>

            {/* Right Information & Ordering Options */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex items-center space-x-2 text-amber-500 mb-1">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#1C1C1A]">{PRODUCT_DATA.rating} / 5.0</span>
                  <span className="text-xs text-[#7E7D7A]">({PRODUCT_DATA.reviewCount} Ulasan Pembeli)</span>
                </div>

                <h3 className="font-serif text-3xl font-bold text-[#1C1C1A]">
                  {PRODUCT_DATA.name}
                </h3>
                <p className="text-xs text-amber-800 font-medium mt-1">
                  {PRODUCT_DATA.subtitle} • Netto: {PRODUCT_DATA.netWeight}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C5B58] leading-relaxed">
                {PRODUCT_DATA.shortDescription}
              </p>

              {/* Key Benefits Bullet Highlights */}
              <div className="space-y-2 bg-[#FAF9F6] p-4 rounded-2xl border border-[#B9B9B7]/30 text-xs">
                <span className="font-semibold text-[#1C1C1A] block mb-1">Manfaat Utama Pemakaian:</span>
                {PRODUCT_DATA.keyBenefits.slice(0, 3).map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-[#3D3C3A]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Quantity Selector & Price Summary */}
              <div className="space-y-3 pt-2 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1C1C1A]">Pilih Jumlah Pesanan:</span>
                  <div className="flex items-center space-x-3 bg-[#FAF9F6] px-3 py-1.5 rounded-full border border-[#B9B9B7]">
                    <button
                      onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                      className="w-6 h-6 font-bold text-[#1C1C1A] hover:bg-stone-200 rounded-full flex items-center justify-center text-sm"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm text-[#1C1C1A] px-2">{selectedQty}</span>
                    <button
                      onClick={() => setSelectedQty(selectedQty + 1)}
                      className="w-6 h-6 font-bold text-[#1C1C1A] hover:bg-stone-200 rounded-full flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#7E7D7A] line-through block">
                      Rp {originalTotalPrice.toLocaleString('id-ID')}
                    </span>
                    <span className="text-3xl font-bold text-[#1C1C1A]">
                      Rp {totalPrice.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <span className="text-xs text-emerald-700 bg-emerald-50 font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                    Hemat Rp {(originalTotalPrice - totalPrice).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              {/* CTA Order Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => onOpenOrderModal()}
                  className="w-full flex items-center justify-center space-x-2 bg-[#1C1C1A] hover:bg-[#2D2D2B] text-white font-semibold text-sm py-3.5 px-6 rounded-full transition-all shadow-md hover:scale-[1.02]"
                >
                  <ShoppingBag className="w-4 h-4 text-[#B9B9B7]" />
                  <span>Beli via WhatsApp</span>
                </button>

                <button
                  onClick={onOpenDetailModal}
                  className="w-full flex items-center justify-center space-x-2 bg-white hover:bg-stone-50 text-[#1C1C1A] font-semibold text-sm py-3.5 px-6 rounded-full border border-[#B9B9B7] transition-all"
                >
                  <Info className="w-4 h-4 text-[#7E7D7A]" />
                  <span>Bahan Lengkap & Cara Pakai</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
