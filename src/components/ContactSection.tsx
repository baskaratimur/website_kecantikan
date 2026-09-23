import React, { useState } from 'react';
import { MessageCircle, Mail, Instagram, ShoppingCart, Send, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/productData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Send direct formatted inquiry to WhatsApp
    const waText = encodeURIComponent(
      `Halo MODIARICH,\nSaya: ${formData.name}\nNo HP: ${formData.phone || '-'}\nPesan: ${formData.message}`
    );
    window.open(`https://wa.me/${BRAND_INFO.waNumber}?text=${waText}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="bg-[#B9B9B7] text-[#1C1C1A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            Contact & Purchase Channels
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A]">
            Kanal Pembelian Resmi & Hubungi Kami
          </h2>
          <p className="text-sm sm:text-base text-[#5C5B58]">
            Pesan MODIARICH Beauty Soap melalui platform favorit Anda atau hubungi layanan pelanggan resmi kami.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Purchase Platforms Box */}
          <div className="lg:col-span-6 bg-[#FAF9F6] p-8 rounded-3xl border border-[#B9B9B7]/40 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E7D7A] block">
              Official Marketplace & Order Channels
            </span>

            <div className="grid grid-cols-2 gap-4">
              
              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/${BRAND_INFO.waNumber}?text=Halo%20MODIARICH,%20saya%20tertarik%20membeli%20MODIARICH%20Beauty%20Soap`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-2xl flex flex-col justify-between space-y-3 transition-all hover:scale-105 shadow-sm"
              >
                <MessageCircle className="w-6 h-6 text-white" />
                <div>
                  <span className="font-bold text-sm block">WhatsApp Order</span>
                  <span className="text-[11px] opacity-90">{BRAND_INFO.phone}</span>
                </div>
              </a>

              {/* Shopee */}
              <a
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-2xl flex flex-col justify-between space-y-3 transition-all hover:scale-105 shadow-sm"
              >
                <ShoppingCart className="w-6 h-6 text-white" />
                <div>
                  <span className="font-bold text-sm block">Shopee Official</span>
                  <span className="text-[11px] opacity-90">Gratis Ongkir Extra</span>
                </div>
              </a>

              {/* Tokopedia */}
              <a
                href="https://tokopedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-800 hover:bg-emerald-900 text-white p-4 rounded-2xl flex flex-col justify-between space-y-3 transition-all hover:scale-105 shadow-sm"
              >
                <ShoppingCart className="w-6 h-6 text-white" />
                <div>
                  <span className="font-bold text-sm block">Tokopedia</span>
                  <span className="text-[11px] opacity-90">Official Store</span>
                </div>
              </a>

              {/* TikTok Shop */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1C1C1A] hover:bg-black text-white p-4 rounded-2xl flex flex-col justify-between space-y-3 transition-all hover:scale-105 shadow-sm"
              >
                <Instagram className="w-6 h-6 text-white" />
                <div>
                  <span className="font-bold text-sm block">TikTok Shop</span>
                  <span className="text-[11px] opacity-90">@modiarich</span>
                </div>
              </a>

            </div>

            <div className="pt-4 border-t border-stone-200/60 text-xs text-[#5C5B58] space-y-2">
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Instagram: <strong>{BRAND_INFO.instagram}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-700" />
                <span>Lokasi: <strong>Jakarta, Indonesia (Formulasi UNJ)</strong></span>
              </div>
            </div>

          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#B9B9B7]/40 shadow-luxury space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E7D7A] block">
              Kirim Pesan / Pertanyaan Langsung
            </span>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-lg">Pesan Terkirim!</h4>
                <p className="text-xs text-emerald-800">
                  Terima kasih sudah menghubungi MODIARICH. Anda telah diarahkan ke WhatsApp admin resmi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1A] mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#B9B9B7]/40 text-xs focus:outline-none focus:border-[#1C1C1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1A] mb-1">Nomor WhatsApp / HP</label>
                  <input
                    type="text"
                    placeholder="Contoh: 08123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#B9B9B7]/40 text-xs focus:outline-none focus:border-[#1C1C1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1C1A] mb-1">Pesan Anda</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan pertanyaan atau kebutuhan perawatan kulit Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#B9B9B7]/40 text-xs focus:outline-none focus:border-[#1C1C1A]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-[#1C1C1A] hover:bg-[#2D2D2B] text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-md"
                >
                  <Send className="w-4 h-4 text-[#B9B9B7]" />
                  <span>Kirim Pesan via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
