import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Star, ShoppingBag, GraduationCap, Award } from 'lucide-react';
import { BRAND_INFO, PRODUCT_DATA } from '../data/productData';

interface HeroProps {
  onOpenOrderModal: () => void;
  onOpenDetailModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onOpenDetailModal }) => {
  return (
    <section id="beranda" className="relative overflow-hidden silk-hero-gradient pt-8 pb-16 lg:py-24">
      {/* Subtle Glowing Background Accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#B9B9B7]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center space-x-1.5 bg-[#B9B9B7] text-[#1C1C1A] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#1C1C1A]" />
                <span>Formulasi Natural Beauty</span>
              </span>
              {/* <span className="inline-flex items-center space-x-1.5 bg-white border border-[#B9B9B7]/60 text-[#1C1C1A] text-xs font-medium px-3 py-1.5 rounded-full shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>BPOM {BRAND_INFO.bpomNumber} & Halal Certified</span>
              </span> */}
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1C1A] leading-[1.15]">
              Kemewahan Alami untuk Kulit <span className="underline decoration-[#B9B9B7] decoration-2 underline-offset-8 italic font-normal">Tampak Cerah</span> & Healthy Glowing
            </h1>

            {/* Beauty Highlight Text */}
            <p className="text-base sm:text-lg text-[#5C5B58] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              MODIARICH menghadirkan karya perawatan kecantikan personal bernilai tinggi. Lahir dari riset berbasis data dan perpaduan harmonis <strong className="text-[#1C1C1A]">Niacinamide 2%, Ekstrak Kunyit (Curcumin 3-8%), Kopi, Lidah Buaya</strong> serta super antioksidan <strong className="text-[#1C1C1A]">Astaxanthin</strong>.
            </p>

            {/* Key Value Propositions List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start space-x-2 bg-white/70 p-3 rounded-xl border border-[#B9B9B7]/30">
                <CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-[#1C1C1A]">Samarkan Hiperpigmentasi</span>
              </div>
              <div className="flex items-start space-x-2 bg-white/70 p-3 rounded-xl border border-[#B9B9B7]/30">
                <CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-[#1C1C1A]">Skin Barrier Lebih Kuat</span>
              </div>
              <div className="flex items-start space-x-2 bg-white/70 p-3 rounded-xl border border-[#B9B9B7]/30">
                <CheckCircle2 className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                <span className="text-xs font-medium text-[#1C1C1A]">Sensasi Lembut & Dingin</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              {/* <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#1C1C1A] hover:bg-[#2D2D2B] text-white font-semibold text-sm px-7 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ShoppingBag className="w-4 h-4 text-[#B9B9B7]" />
                <span>Beli Produk via WA ({BRAND_INFO.phone})</span>
                <ArrowRight className="w-4 h-4" />
              </button> */}

              <button
                onClick={onOpenDetailModal}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white hover:bg-stone-50 text-[#1C1C1A] font-semibold text-sm px-6 py-4 rounded-full border border-[#B9B9B7] transition-all shadow-sm"
              >
                <span>Lihat Detail Formula & Khasiat</span>
              </button>
            </div>

            {/* Trust Rating Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-4 text-xs text-[#5C5B58]">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="User" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="User" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-bold text-[#1C1C1A] ml-1">{PRODUCT_DATA.rating} / 5.0</span>
                </div>
                <span className="text-[11px]">Dipercaya 500+ Wanita Indonesia</span>
              </div>
            </div>

          </div>

          {/* Right Product Card Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Soft Ambient Card Container */}
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-luxury border border-[#B9B9B7]/40 group hover:shadow-floating transition-all duration-500">
              
              {/* Product Badge Pill - Gorgeous Highlighting for "Best in University" */}
              <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-amber-500/30 border border-amber-300/60 flex items-center space-x-1.5 animate-pulse-subtle">
                <GraduationCap className="w-3.5 h-3.5 text-amber-100" />
                <span>Best in University</span>
              </div>

              {/* Main Product Showcase Image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FAF9F6] p-6 flex items-center justify-center border border-stone-100">
                <img
                  src={PRODUCT_DATA.image}
                  alt={PRODUCT_DATA.name}
                  className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating Ingredient Chips */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#B9B9B7]/30 text-[11px] font-semibold text-[#1C1C1A] shadow-sm">
                  ✨ Niacinamide 2%
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#B9B9B7]/30 text-[11px] font-semibold text-[#1C1C1A] shadow-sm">
                  🌿 Kunyit & Astaxanthin
                </div>
              </div>

              {/* Product Card Details */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#7E7D7A] uppercase tracking-wider">
                    MODIARICH Beauty Care
                  </span>
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium border border-emerald-200">
                    BPOM & Halal Ready
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1C1C1A]">
                  {PRODUCT_DATA.name}
                </h3>

                <p className="text-xs text-[#5C5B58] line-clamp-2 leading-relaxed">
                  {PRODUCT_DATA.shortDescription}
                </p>

                {/* Price & Buy Direct CTA */}
                <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                  <div>
                    <span className="text-xs text-[#7E7D7A] line-through block">
                      Rp {PRODUCT_DATA.originalPrice.toLocaleString('id-ID')}
                    </span>
                    <span className="text-2xl font-bold text-[#1C1C1A]">
                      Rp {PRODUCT_DATA.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <button
                    onClick={onOpenOrderModal}
                    className="inline-flex items-center space-x-2 bg-[#1C1C1A] hover:bg-emerald-700 text-white font-medium text-xs px-5 py-3 rounded-full transition-all shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Order Now</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
