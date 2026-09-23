import React from 'react';
import { Clock, Shield, Sparkles, Thermometer, CheckCircle2, ChevronRight } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

interface BenefitsUsageSectionProps {
  onOpenDetailModal: () => void;
}

export const BenefitsUsageSection: React.FC<BenefitsUsageSectionProps> = ({ onOpenDetailModal }) => {
  return (
    <section id="khasiat" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="bg-[#B9B9B7] text-[#1C1C1A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            Khasiat & Panduan Pemakaian
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A]">
            Hasil Optimal dalam 4 Langkah Sederhana
          </h2>
          <p className="text-sm sm:text-base text-[#5C5B58]">
            Ikuti tata cara penggunaan resmi MODIARICH Beauty Soap untuk memastikan nutrisi alami meresap sempurna hingga ke lapisan kulit terdalam.
          </p>
        </div>

        {/* 4 Steps Usage Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PRODUCT_DATA.howToUse.map((step) => (
            <div
              key={step.step}
              className="bg-[#FAF9F6] p-6 rounded-3xl border border-[#B9B9B7]/40 relative flex flex-col justify-between group hover:border-[#1C1C1A] transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#1C1C1A] text-[#B9B9B7] font-bold text-sm flex items-center justify-center mb-4">
                  0{step.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1C1A] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5B58] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {step.step === 3 && (
                <div className="mt-4 bg-amber-100 text-amber-900 text-[11px] font-semibold p-2 rounded-xl border border-amber-200 flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 shrink-0 text-amber-800" />
                  <span>Kunci Resapan Nutrisi: 3-5 Menit</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Khasiat Detail & Storage Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Khasiat List Card */}
          <div className="lg:col-span-7 bg-[#FAF9F6] rounded-3xl p-8 border border-[#B9B9B7]/40 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#7E7D7A] block mb-2">
                Rincian Khasiat & Kegunaan
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-4">
                Formulasi Multifungsi untuk Wajah & Tubuh
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#3D3C3A]">
                {PRODUCT_DATA.keyBenefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-3 bg-white p-3.5 rounded-xl border border-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-[#7E7D7A]">Gunakan setiap hari sebelum mandi pagi & sore</span>
              <button
                onClick={onOpenDetailModal}
                className="text-xs font-bold text-[#1C1C1A] underline hover:text-amber-800 flex items-center space-x-1"
              >
                <span>Komposisi Lengkap</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Storage & BPOM Safety Box */}
          <div className="lg:col-span-5 bg-[#1C1C1A] text-white rounded-3xl p-8 border border-[#1C1C1A] flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#B9B9B7] text-[#1C1C1A] flex items-center justify-center">
                <Thermometer className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Saran Penyimpanan Kuat & Terjaga
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B9B7] leading-relaxed">
                {PRODUCT_DATA.storageGuide}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-stone-800 relative z-10 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-emerald-400">
                <Shield className="w-4 h-4" />
                <span className="font-bold">Izin Resmi BPOM RI: {PRODUCT_DATA.bpom}</span>
              </div>
              <p className="text-stone-400 text-[11px]">
                Diproduksi di fasilitas terstandarisasi CPKB & tersertifikasi Halal Indonesia.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
