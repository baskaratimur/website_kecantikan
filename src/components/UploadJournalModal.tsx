import React, { useState } from 'react';
import { X, Upload, CheckCircle } from 'lucide-react';
import { JournalArticle } from '../data/productData';

interface UploadJournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddJournal: (journal: JournalArticle) => void;
}

export const UploadJournalModal: React.FC<UploadJournalModalProps> = ({
  isOpen,
  onClose,
  onAddJournal,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Clinical Research');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('R&D MODIARICH');
  const [tags, setTags] = useState('Riset UNJ, Niacinamide');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !summary) return;

    const newJournal: JournalArticle = {
      id: 'j_' + Date.now(),
      title,
      category,
      readTime: '4 Menit Baca',
      date: 'Baru Dipublikasikan',
      summary,
      content: content || summary,
      author: author || 'Admin MODIARICH',
      tags: tags.split(',').map((t) => t.trim()),
      image: imagePreview || 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    };

    onAddJournal(newJournal);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#B9B9B7]/40">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 text-[#1C1C1A] hover:bg-stone-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6 pb-3 border-b border-stone-100">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7E7D7A] block">
            Admin Panel
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#1C1C1A]">
            Upload Beauty Journal / Data Dukung
          </h2>
          <p className="text-xs text-[#5C5B58]">
            Publikasikan riset ilmiah, artikel bahan aktif, atau data pendukung produk MODIARICH.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          
          <div>
            <label className="block font-semibold text-[#1C1C1A] mb-1">Judul Artikel / Riset *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Manfaat Sinergis Niacinamide & Kunyit"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none focus:border-[#1C1C1A]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1C1A] mb-1">Kategori:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none"
              >
                <option value="Clinical Research">Clinical Research</option>
                <option value="Ingredient Spotlight">Ingredient Spotlight</option>
                <option value="Skin Care Guide">Skin Care Guide</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-[#1C1C1A] mb-1">Penulis / Tim</label>
              <input
                type="text"
                placeholder="R&D MODIARICH"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none focus:border-[#1C1C1A]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1C1A] mb-1">Ringkasan Artikel (Summary) *</label>
            <textarea
              rows={2}
              required
              placeholder="Ringkasan singkat yang menarik minat pembaca..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none focus:border-[#1C1C1A]"
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1C1A] mb-1">Upload Banner Gambar / Visual:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-xs text-[#5C5B58] file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#B9B9B7] file:text-[#1C1C1A]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#1C1C1A] mb-1">Tag (Pisahkan dengan Koma):</label>
            <input
              type="text"
              placeholder="Riset UNJ, Niacinamide, Astaxanthin"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-[#1C1C1A] hover:bg-[#2D2D2B] text-white font-semibold text-xs py-3.5 rounded-full transition-all shadow-md mt-4"
          >
            <Upload className="w-4 h-4 text-[#B9B9B7]" />
            <span>Publikasikan ke Beauty Journal</span>
          </button>

        </form>

      </div>
    </div>
  );
};
