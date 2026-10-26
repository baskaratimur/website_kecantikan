import React, { useState } from 'react';
import { BookOpen, Calendar, Tag, Microscope, Sparkles, GraduationCap, ArrowRight, Eye } from 'lucide-react';
import { JournalArticle } from '../data/productData';

interface BeautyJournalSectionProps {
  journals: JournalArticle[];
  onOpenUploadJournalModal?: () => void;
  onSelectArticle: (article: JournalArticle) => void;
}

export const BeautyJournalSection: React.FC<BeautyJournalSectionProps> = ({
  journals,
  onSelectArticle
}) => {
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="journal" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 pb-4 border-b border-stone-200">
          <div>
            <span className="bg-[#B9B9B7] text-[#1C1C1A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
              Beauty Journal & Data Dukung Ilmiah
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A] mt-2">
              Artikel & Riset Akademis MODIARICH
            </h2>
            <p className="text-sm text-[#5C5B58] mt-2 max-w-2xl">
              Klik pada gambar atau judul artikel untuk membaca hasil riset formulasi, studi klinis Niacinamide, Kurkumin, Astaxanthin, dan tips perawatan kulit berbasis sains.
            </p>
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {journals.map((article) => {
            const isImgBroken = imgErrorMap[article.id] || !article.image;

            return (
              <article
                key={article.id}
                className="bg-[#FAF9F6] rounded-3xl overflow-hidden border border-[#B9B9B7]/40 shadow-sm flex flex-col justify-between hover:shadow-luxury transition-all group hover:-translate-y-1"
              >
                <div>
                  {/* Article Banner Header - Clickable with Overlay */}
                  <div
                    onClick={() => onSelectArticle(article)}
                    className="relative h-60 overflow-hidden bg-stone-900 flex items-center justify-center cursor-pointer group/img"
                    title={`Klik untuk membaca artikel: ${article.title}`}
                  >
                    {!isImgBroken ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        onError={() => handleImageError(article.id)}
                        className="w-full h-full object-cover group-hover/img:scale-108 group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      /* Custom High-End Styled Scientific Banner Fallback */
                      <div className="w-full h-full bg-gradient-to-br from-[#1C1C1A] via-[#2D2D2B] to-[#3D3C3A] p-6 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
                        
                        <div className="flex items-center justify-between z-10">
                          <span className="text-[10px] font-bold text-[#B9B9B7] uppercase tracking-widest flex items-center space-x-1.5 bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
                            <Microscope className="w-3.5 h-3.5 text-amber-300" />
                            <span>Riset Akademis UNJ</span>
                          </span>
                          <span className="text-[10px] text-amber-200 font-semibold bg-amber-900/40 px-2.5 py-1 rounded-full border border-amber-500/30">
                            Peer Reviewed
                          </span>
                        </div>

                        <div className="z-10 my-auto">
                          <h4 className="font-serif text-lg font-bold text-white leading-snug line-clamp-2">
                            {article.title}
                          </h4>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-[#B9B9B7] z-10 pt-2 border-t border-white/10">
                          <span className="font-medium">Formulasi BPOM NA18260500524</span>
                          <Sparkles className="w-4 h-4 text-amber-300" />
                        </div>
                      </div>
                    )}

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover/img:opacity-70 transition-opacity" />

                    {/* Hover Prompt to Read Full Article */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity z-10">
                      <span className="bg-white/95 backdrop-blur-md text-[#1C1C1A] text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 transform scale-95 group-hover/img:scale-100 transition-all">
                        <Eye className="w-4 h-4 text-amber-700" />
                        <span>Baca Artikel Lengkap</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Category Badge overlay */}
                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1C1C1A] shadow-sm">
                      {article.category}
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-4 text-[11px] text-[#7E7D7A]">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-700" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span>{article.author}</span>
                    </div>

                    <h3
                      onClick={() => onSelectArticle(article)}
                      className="font-serif text-2xl font-bold text-[#1C1C1A] group-hover:text-amber-800 transition-colors cursor-pointer leading-snug"
                    >
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5C5B58] line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Read More CTA */}
                <div className="p-6 pt-3 border-t border-stone-200/60 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 3).map((t, idxTag) => (
                      <span key={idxTag} className="text-[10px] bg-white px-2.5 py-1 rounded-full border border-stone-200 text-[#5C5B58] font-medium">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectArticle(article)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 group-hover:translate-x-1 transition-all self-start sm:self-auto"
                  >
                    <span>Baca Artikel</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
