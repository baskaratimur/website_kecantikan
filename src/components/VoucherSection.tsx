import React, { useState } from 'react';
import { Tag, Copy, Check, Ticket, Sparkles } from 'lucide-react';
import { VOUCHERS } from '../data/productData';

interface VoucherSectionProps {
  onOpenOrderModal: (code: string) => void;
}

export const VoucherSection: React.FC<VoucherSectionProps> = ({ onOpenOrderModal }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="voucher" className="py-16 bg-white border-y border-[#B9B9B7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 pb-4 border-b border-stone-100">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#7E7D7A] block mb-1">
              Voucher & Promo Eksklusif
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1C1C1A]">
              Klaim Voucher Diskon & Hemat Pembelian Anda
            </h2>
          </div>
          <div className="mt-3 sm:mt-0 text-xs text-[#5C5B58] bg-[#FAF9F6] px-4 py-2 rounded-full border border-[#B9B9B7]">
            💡 Klik "Gunakan Kode" untuk otomatis menempelkan ke format order WA
          </div>
        </div>

        {/* Voucher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VOUCHERS.map((v) => (
            <div
              key={v.code}
              className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#B9B9B7]/40 relative flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-[#B9B9B7] text-[#1C1C1A] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {v.code}
                  </span>
                  <span className="text-[11px] text-[#7E7D7A] font-medium">{v.validUntil}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1C1C1A]">
                  {v.title}
                </h3>
                <p className="text-lg font-bold text-emerald-700">
                  {v.discount}
                </p>
                <p className="text-xs text-[#5C5B58]">
                  {v.description}
                </p>
                <span className="text-[11px] text-[#7E7D7A] block">
                  Syarat: {v.minPurchase}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-stone-200 flex items-center space-x-2">
                <button
                  onClick={() => handleCopy(v.code)}
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-white hover:bg-stone-100 text-[#1C1C1A] font-semibold text-xs py-2 px-3 rounded-lg border border-[#B9B9B7] transition-colors"
                >
                  {copiedCode === v.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#7E7D7A]" />
                      <span>Salin Kode</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onOpenOrderModal(v.code)}
                  className="inline-flex items-center justify-center bg-[#1C1C1A] hover:bg-[#2D2D2B] text-white font-medium text-xs py-2 px-3 rounded-lg transition-colors"
                >
                  <span>Gunakan</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
