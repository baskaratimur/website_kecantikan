import React, { useState } from 'react';
import { BookOpen, Upload, Calendar, Clock, Tag, Microscope, Sparkles, GraduationCap } from 'lucide-react';
import { JournalArticle } from '../data/productData';

interface BeautyJournalSectionProps {
  journals: JournalArticle[];
  onOpenUploadJournalModal: () => void;
}

export const BeautyJournalSection: React.FC<BeautyJournalSectionProps> = ({
  journals,
  onOpenUploadJournalModal
}) => {
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="journal" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-4 border-b border-stone-200">
          <div>
            <span className="bg-[#B9B9B7] text-[#1C1C1A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
              Beauty Journal & Data Dukung Ilmiah
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A] mt-2">
              Artikel & Riset Akademis MODIARICH
            </h2>
          </div>

          <div className="mt-4 sm:mt-0">
            <button
              onClick={onOpenUploadJournalModal}
              className="inline-flex items-center space-x-2 bg-[#1C1C1A] hover:bg-[#2D2D2B] text-white font-semibold text-xs py-3 px-5 rounded-full transition-all shadow-sm"
            >
              <Upload className="w-4 h-4 text-[#B9B9B7]" />
              <span>Upload Artikel / Data (Admin)</span>
            </button>
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {journals.map((article, idx) => {
            const isImgBroken = imgErrorMap[article.id] || !article.image;

            return (
              <article
                key={article.id}
                className="bg-[#FAF9F6] rounded-3xl overflow-hidden border border-[#B9B9B7]/40 shadow-sm flex flex-col justify-between hover:shadow-luxury transition-all group"
              >
                <div>
                  {/* Article Banner Header - Custom Styled & Fallback Guaranteed */}
                  <div className="relative h-56 overflow-hidden bg-stone-900 flex items-center justify-center">
                    {!isImgBroken ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        onError={() => handleImageError(article.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

                    {/* Category Badge overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1C1C1A] shadow-sm">
                      {article.category}
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-4 text-[11px] text-[#7E7D7A]">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#1C1C1A] group-hover:text-amber-800 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5C5B58] line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-200/60 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#7E7D7A]">
                    Penulis: {article.author}
                  </span>

                  <div className="flex flex-wrap gap-1">
                    {article.tags.slice(0, 2).map((t, idxTag) => (
                      <span key={idxTag} className="text-[10px] bg-white px-2 py-0.5 rounded border border-stone-300 text-[#1C1C1A]">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
