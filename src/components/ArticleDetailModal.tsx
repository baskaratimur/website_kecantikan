import React, { useState } from 'react';
import { X, Calendar, Tag, Share2, Check, BookOpen } from 'lucide-react';
import { JournalArticle } from '../data/productData';

interface ArticleDetailModalProps {
  article: JournalArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const paragraphs = article.content.split('\n\n').filter((p) => p.trim() !== '');

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      
      {/* Background click listener */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog */}
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-[#B9B9B7]/40 z-10">
        
        {/* Sticky Close Button Header */}
        <div className="sticky top-0 z-20 flex justify-between items-center px-6 py-4 bg-white/95 backdrop-blur-md border-b border-stone-100">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#7E7D7A]">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>MODIARICH Beauty Journal</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-100 text-[#1C1C1A] hover:bg-stone-200 transition-colors"
            aria-label="Tutup Artikel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Banner Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-900">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Badges on top of banner */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2 text-white">
            <span className="bg-amber-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {article.category}
            </span>

            <div className="flex items-center space-x-1 text-xs text-stone-200">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>{article.date}</span>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Title */}
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1C1A] leading-tight">
            {article.title}
          </h1>

          {/* Author Meta & Share */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-200 text-xs text-[#5C5B58]">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold font-serif text-xs">
                M
              </div>
              <div>
                <p className="font-semibold text-[#1C1C1A]">{article.author}</p>
                <p className="text-[11px] text-[#7E7D7A]">Riset Ilmiah Berbasis Formulasi Universitas Negeri Jakarta</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-stone-300 hover:bg-stone-50 transition-colors text-xs font-medium self-start sm:self-auto"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Tautan Disalin!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#7E7D7A]" />
                  <span>Bagikan Artikel</span>
                </>
              )}
            </button>
          </div>

          {/* Summary Callout */}
          <div className="bg-[#FAF9F6] border-l-4 border-amber-700 p-4 sm:p-5 rounded-r-2xl space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block">
              Ringkasan Intisari:
            </span>
            <p className="text-sm font-medium text-[#1C1C1A] leading-relaxed italic">
              "{article.summary}"
            </p>
          </div>

          {/* Article Text Content */}
          <div className="space-y-4 text-sm sm:text-base text-[#3D3C3A] leading-relaxed">
            {paragraphs.map((paragraph, idx) => {
              if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                const items = paragraph.split('\n').filter(Boolean);
                return (
                  <ul key={idx} className="space-y-2 pl-4 list-disc text-sm text-[#4A4947]">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^[-*]\s*/, '')}</li>
                    ))}
                  </ul>
                );
              }

              if (paragraph.startsWith('### ') || paragraph.startsWith('## ')) {
                return (
                  <h3 key={idx} className="font-serif text-xl font-bold text-[#1C1C1A] pt-3">
                    {paragraph.replace(/^#+\s*/, '')}
                  </h3>
                );
              }

              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Key Tags */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#7E7D7A] flex items-center space-x-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Topik Terkait:</span>
            </span>
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-stone-100 text-[#1C1C1A] text-xs px-3 py-1 rounded-full font-medium border border-stone-200"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
