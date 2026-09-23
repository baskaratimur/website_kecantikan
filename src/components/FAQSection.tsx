import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, BRAND_INFO } from '../data/productData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF9F6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="bg-[#B9B9B7] text-[#1C1C1A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            Tanya Jawab (FAQ)
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1C1A]">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm text-[#5C5B58]">
            Temukan jawaban lengkap mengenai penggunaan, legalitas BPOM, hingga kanal resmi pembelian.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#B9B9B7]/40 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-medium text-sm sm:text-base text-[#1C1C1A] hover:bg-stone-50 transition-colors focus:outline-none"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#7E7D7A] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#5C5B58] leading-relaxed border-t border-stone-100 pt-4 bg-[#FAF9F6]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Assistance Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-[#B9B9B7]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#1C1C1A] text-[#B9B9B7] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#1C1C1A]">Punya Pertanyaan Lain?</h4>
              <p className="text-xs text-[#7E7D7A]">Tim Customer Care MODIARICH siap membantu Anda.</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${BRAND_INFO.waNumber}?text=Halo%20Admin%20MODIARICH,%20saya%20ingin%20bertanya%20seputar%20produk`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#1C1C1A] hover:bg-[#2D2D2B] text-white font-medium text-xs px-5 py-2.5 rounded-full transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
