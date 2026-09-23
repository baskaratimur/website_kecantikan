import React, { useState } from 'react';
import { Sparkles, Sun, Coffee, Droplets, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';
import { INGREDIENTS_LIST, Ingredient } from '../data/productData';

export const IngredientsSection: React.FC = () => {
  const [activeIngredient, setActiveIngredient] = useState<Ingredient>(INGREDIENTS_LIST[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-800" />;
      case 'Sun': return <Sun className="w-6 h-6 text-yellow-700" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-stone-700" />;
      case 'Droplets': return <Droplets className="w-6 h-6 text-teal-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-rose-700" />;
      default: return <Heart className="w-6 h-6 text-slate-700" />;
    }
  };

  return (
    <section id="ingredients" className="py-20 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="bg-[#B9B9B7] text-[#1C1C1A] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            Bahan Utama (Key Ingredients)
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A]">
            Dua Alam & Sains dalam Satu Formulasi Presisi
          </h2>
          <p className="text-sm sm:text-base text-[#5C5B58]">
            Setiap racikan dalam MODIARICH Beauty Soap dipilih berdasar keunggulan klinis untuk bekerja sinergis memancarkan kecantikan alami kulit Anda.
          </p>
        </div>

        {/* Interactive Ingredients Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Ingredient Selectable Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INGREDIENTS_LIST.map((ing) => {
              const isSelected = activeIngredient.id === ing.id;
              return (
                <button
                  key={ing.id}
                  onClick={() => setActiveIngredient(ing)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-white border-[#1C1C1A] shadow-luxury ring-1 ring-[#1C1C1A]'
                      : 'bg-white/60 hover:bg-white border-[#B9B9B7]/30 hover:border-[#B9B9B7]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-stone-200 flex items-center justify-center">
                      {getIcon(ing.icon)}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#B9B9B7]/40 text-[#1C1C1A]">
                      {ing.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1C1C1A]">
                    {ing.name}
                  </h3>
                  <p className="text-[11px] text-[#7E7D7A] font-medium italic">
                    {ing.latinName}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Ingredient Detail Display Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 shadow-luxury border border-[#B9B9B7]/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#B9B9B7]/30 to-transparent rounded-bl-full pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-[#B9B9B7] text-[#1C1C1A] flex items-center justify-center shadow-sm">
                  {getIcon(activeIngredient.icon)}
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#7E7D7A] font-bold block">
                    {activeIngredient.role}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#1C1C1A]">
                    {activeIngredient.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#1C1C1A]">
                  Manfaat Klinis & Peran bagi Kulit:
                </h4>
                <ul className="space-y-2.5">
                  {activeIngredient.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-[#3D3C3A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1A] mt-2 shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs font-semibold text-[#1C1C1A] block mb-2">
                  Highlight Khasiat:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeIngredient.benefits.map((b, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FAF9F6] border border-[#B9B9B7]/50 text-[#1C1C1A] text-xs font-medium px-3 py-1 rounded-full shadow-xs"
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
