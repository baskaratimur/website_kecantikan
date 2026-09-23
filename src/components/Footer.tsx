import React from 'react';
import { Heart, ShieldCheck, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { BRAND_INFO, PRODUCT_DATA } from '../data/productData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1C1A] text-[#B9B9B7] pt-16 pb-12 border-t border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info & Story */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#B9B9B7] p-1 bg-white flex items-center justify-center">
                <img src={PRODUCT_DATA.logo} alt="MODIARICH Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-widest text-white">
                MODIARICH
              </span>
            </div>

            <p className="text-xs text-[#A3A2A0] leading-relaxed max-w-sm">
              Personal care brand yang terinspirasi dari keindahan alami dan doa berharga Moktar & Alm. Diah Rich. Dikembangkan melalui riset berbasis data di Universitas Negeri Jakarta untuk menghadirkan kulit sehat bercahaya.
            </p>

            <div className="flex items-center space-x-3 text-xs pt-2">
              <span className="bg-stone-800 text-emerald-400 px-3 py-1 rounded-full font-medium border border-stone-700">
                🛡️ BPOM {BRAND_INFO.bpomNumber}
              </span>
              <span className="bg-stone-800 text-amber-300 px-3 py-1 rounded-full font-medium border border-stone-700">
                ✅ Sertifikat Halal
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white mb-2">Navigasi Utama</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#produk" className="hover:text-white transition-colors">Katalog Produk</a></li>
              <li><a href="#testimoni" className="hover:text-white transition-colors">Testimoni Pelanggan</a></li>
              <li><a href="#kontak" className="hover:text-white transition-colors">Kontak & Lokasi</a></li>
            </ul>
          </div>

          {/* Socials & Help */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white mb-2">Layanan & Pesanan</h4>
            <p className="text-xs text-[#A3A2A0]">
              Untuk pemesanan langsung via WhatsApp atau pertanyaan khusus seputar produk:
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs">
              <a
                href={`https://wa.me/${BRAND_INFO.waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-emerald-400 font-semibold hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {BRAND_INFO.phone}</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#A3A2A0] hover:text-white"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram: {BRAND_INFO.instagram}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7E7D7A] gap-4">
          <p>© 2026 MODIARICH. Hak Cipta Dilindungi Undang-Undang. Terdaftar resmi DJKI.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 bg-stone-800 hover:bg-stone-700 text-white px-3.5 py-2 rounded-full transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
