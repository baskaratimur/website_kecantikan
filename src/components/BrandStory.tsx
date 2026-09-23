import React from 'react';
import { Heart, GraduationCap, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { BRAND_INFO } from '../data/productData';

export const BrandStory: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="bg-[#B9B9B7] text-[#1C1C1A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            Profile & About MODIARICH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A]">
            Kisah dibalik Nama: Perpaduan Doa, Riset & Dedikasi Alami
          </h2>
          <p className="text-sm sm:text-base text-[#5C5B58]">
            MODIARICH lahir dari rasa hormat mendalam, karya akademis di Universitas Negeri Jakarta, dan dedikasi untuk menghadirkan perawatan kulit yang transparan dan berbasis data.
          </p>
        </div>

        {/* 3 Core Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Story Card 1 */}
          <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-[#B9B9B7]/40 relative group hover:border-[#1C1C1A] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#B9B9B7] text-[#1C1C1A] flex items-center justify-center mb-6 shadow-sm">
              <Heart className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#7E7D7A] font-bold block mb-1">
              Doa & Harapan
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-3">
              Moktar & Alm. Diah Rich
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5B58] leading-relaxed">
              Nama <strong>"MODIARICH"</strong> merupakan bentuk doa dan penghormatan tulus yang terinspirasi dari penggabungan nama kedua orang tua founder: Moktar dan Alm. Diah Rich. Sebuah nama yang membawa keberkahan dan pengingat ke mana arah tujuan brand ini melangkah.
            </p>
          </div>

          {/* Story Card 2 */}
          <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-[#B9B9B7]/40 relative group hover:border-[#1C1C1A] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#1C1C1A] text-[#B9B9B7] flex items-center justify-center mb-6 shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#7E7D7A] font-bold block mb-1">
              Riset Akademis UNJ
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-3">
              From Campus Idea to Beauty Soap
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5B58] leading-relaxed">
              Berawal dari karya pengembangan produk di Universitas Negeri Jakarta (UNJ) yang mengangkat concern noda hitam dan hiperpigmentasi. Dikembangkan secara ilmiah menggabungkan keunggulan Kunyit, Kopi, Aloe Vera dengan Niacinamide 2% dan Astaxanthin.
            </p>
          </div>

          {/* Story Card 3 */}
          <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-[#B9B9B7]/40 relative group hover:border-[#1C1C1A] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-6 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-amber-800" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#7E7D7A] font-bold block mb-1">
              Legalitas & Tanggung Jawab
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1C1A] mb-3">
              BPOM & Sertifikasi Halal
            </h3>
            <p className="text-xs sm:text-sm text-[#5C5B58] leading-relaxed">
              Telah memiliki izin edar resmi BPOM (<strong>{BRAND_INFO.bpomNumber}</strong>) dan sertifikasi Halal Indonesia. Kami berkomitmen untuk selalu menghadirkan produk perawatan pribadi yang aman, transparan, dan dapat digunakan dengan rasa percaya diri.
            </p>
          </div>

        </div>

        {/* Vision & Mission Banner */}
        <div className="mt-16 bg-[#1C1C1A] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B9B9B7]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="text-[#B9B9B7] text-xs uppercase tracking-widest font-semibold block mb-2">
                Visi Kami
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF9F6] mb-4">
                "Menghadirkan Pengalaman Natural Beauty Berbasis Data dan Informasi yang Dapat Dipertanggungjawabkan"
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B9B7] leading-relaxed">
                Bagi MODIARICH, kecantikan bukan sekadar estetika luar, melainkan tentang bagaimana produk dikembangkan, bagaimana manfaat disampaikan secara jujur, serta seberapa besar kepedulian terhadap kebutuhan nyata konsumen.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4 text-xs sm:text-sm">
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#B9B9B7]" />
                <span>Komitmen Misi MODIARICH</span>
              </h4>
              <ul className="space-y-2 text-[#E6E4DE]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#B9B9B7] font-bold">•</span>
                  <span>Menghadirkan produk personal care yang relevan dengan kebutuhan nyata kulit Indonesia.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#B9B9B7] font-bold">•</span>
                  <span>Menyampaikan komposisi dan informasi produk secara transparan tanpa klaim berlebihan.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#B9B9B7] font-bold">•</span>
                  <span>Mengedepankan pengembangan produk yang bertanggung jawab dan berkelanjutan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
