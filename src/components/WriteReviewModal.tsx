import React, { useState } from 'react';
import { X, Star, Upload, CheckCircle } from 'lucide-react';
import { Testimonial } from '../data/productData';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: Testimonial) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  onAddReview,
}) => {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');
  const [tag, setTag] = useState('Hiperpigmentasi Berkurang');
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
    if (!name || !comment) return;

    const newReview: Testimonial = {
      id: 't_' + Date.now(),
      name,
      role: 'Verified Buyer',
      location: location || 'Indonesia',
      rating,
      comment,
      date: 'Baru Saja',
      verified: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      beforeAfterTag: tag,
      image: imagePreview || undefined,
    };

    onAddReview(newReview);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#B9B9B7]/40">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 text-[#1C1C1A] hover:bg-stone-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="mb-6 pb-3 border-b border-stone-100">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7E7D7A] block">
            Ulasan Pelanggan
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#1C1C1A]">
            Tulis Ulasan & Bagikan Pengalaman
          </h2>
          <p className="text-xs text-[#5C5B58]">
            Ulasan Anda sangat berharga untuk calon pembeli MODIARICH Beauty Soap.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          
          {/* Rating Selection */}
          <div>
            <label className="block font-semibold text-[#1C1C1A] mb-1">Pilih Rating Bintang:</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-7 h-7 ${
                      star <= rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1C1A] mb-1">Nama Lengkap *</label>
            <input
              type="text"
              required
              placeholder="Masukkan nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none focus:border-[#1C1C1A]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#1C1C1A] mb-1">Kota / Domisili</label>
            <input
              type="text"
              placeholder="Contoh: Jakarta / Bandung"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none focus:border-[#1C1C1A]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#1C1C1A] mb-1">Highlight Perubahan Kulit:</label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none"
            >
              <option value="Hiperpigmentasi Berkurang">Hiperpigmentasi Berkurang</option>
              <option value="Skin Barrier Makin Kuat">Skin Barrier Makin Kuat</option>
              <option value="Warna Kulit Merata">Warna Kulit Merata</option>
              <option value="Kulit Makin Lembut & Halus">Kulit Makin Lembut & Halus</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1C1A] mb-1">Isi Ulasan / Pengalaman Pemakaian *</label>
            <textarea
              rows={3}
              required
              placeholder="Ceritakan bagaimana hasil pemakaian MODIARICH Beauty Soap pada kulit Anda..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none focus:border-[#1C1C1A]"
            ></textarea>
          </div>

          {/* Photo upload simulator */}
          <div>
            <label className="block font-semibold text-[#1C1C1A] mb-1">Lampirkan Foto / Video Hasil (Opsional):</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-xs text-[#5C5B58] file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#B9B9B7] file:text-[#1C1C1A] hover:file:bg-[#A3A2A0]"
            />
            {imagePreview && (
              <div className="mt-2 relative w-20 h-20 rounded-lg overflow-hidden border border-stone-300">
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-[#1C1C1A] hover:bg-[#2D2D2B] text-white font-semibold text-xs py-3.5 rounded-full transition-all shadow-md mt-4"
          >
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Kirim Ulasan Sekarang</span>
          </button>

        </form>

      </div>
    </div>
  );
};
