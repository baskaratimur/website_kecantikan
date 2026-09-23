import React from 'react';
import { Star, CheckCircle, PlusCircle, MessageSquareQuote } from 'lucide-react';
import { Testimonial } from '../data/productData';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  onOpenWriteReviewModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  onOpenWriteReviewModal
}) => {
  return (
    <section id="testimoni" className="py-20 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title & Write Review Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-stone-200">
          <div>
            <span className="bg-[#B9B9B7] text-[#1C1C1A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
              Ulasan & Pengalaman Pelanggan
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A] mt-2">
              Cerita Pengalaman Nyata Pemakaian
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center space-x-3">
            <button
              onClick={onOpenWriteReviewModal}
              className="inline-flex items-center space-x-2 bg-[#1C1C1A] hover:bg-[#2D2D2B] text-white font-semibold text-xs py-3 px-5 rounded-full transition-all shadow-sm hover:scale-105"
            >
              <PlusCircle className="w-4 h-4 text-[#B9B9B7]" />
              <span>Tulis Ulasan / Review Saya</span>
            </button>
          </div>
        </div>

        {/* Rating Breakdown Bar */}
        <div className="bg-white p-6 rounded-2xl border border-[#B9B9B7]/40 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="text-center sm:text-left">
              <span className="font-serif text-4xl font-bold text-[#1C1C1A]">4.9</span>
              <span className="text-xs text-[#7E7D7A] block">dari 5.0 bintang</span>
            </div>
            <div className="h-10 w-px bg-stone-200"></div>
            <div>
              <div className="flex space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-[#5C5B58] mt-1 block">98% Pelanggan Merasa Puas & Repeat Order</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-medium text-[#1C1C1A]">
            <span className="bg-[#FAF9F6] border border-[#B9B9B7]/40 px-3 py-1.5 rounded-full">
              ✨ Noda Hitam Memudar
            </span>
            <span className="bg-[#FAF9F6] border border-[#B9B9B7]/40 px-3 py-1.5 rounded-full">
              🌿 Kulit Makin Halus & Lembut
            </span>
            <span className="bg-[#FAF9F6] border border-[#B9B9B7]/40 px-3 py-1.5 rounded-full">
              💧 Lembap Tanpa Ketarik
            </span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-3xl border border-[#B9B9B7]/40 shadow-sm flex flex-col justify-between hover:shadow-luxury transition-all relative group"
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {t.beforeAfterTag && (
                    <span className="bg-[#B9B9B7]/40 text-[#1C1C1A] text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {t.beforeAfterTag}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#3D3C3A] leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>

                {t.image && (
                  <div className="mb-4 rounded-xl overflow-hidden max-h-40 bg-stone-100 border border-stone-200">
                    <img src={t.image} alt="User Review Attachment" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#B9B9B7]"
                  />
                  <div>
                    <h4 className="font-semibold text-xs text-[#1C1C1A] flex items-center space-x-1">
                      <span>{t.name}</span>
                      {t.verified && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
                    </h4>
                    <span className="text-[10px] text-[#7E7D7A]">{t.location} • {t.date}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
