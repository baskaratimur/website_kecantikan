import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/productData';

interface NavbarProps {
  onOpenOrderModal: (voucherCode?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Produk', href: '#produk' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-[#1C1C1A] text-[#B9B9B7] text-xs py-2.5 px-4 text-center font-medium tracking-wide flex items-center justify-center space-x-2">
        <span className="bg-[#B9B9B7] text-[#1C1C1A] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Official Launch
        </span>
        <span className="hidden sm:inline">Dapatkan Voucher Diskon Pelanggan Baru & Gratis Ongkir!</span>
        <span className="sm:hidden">Special Launching Voucher Promo!</span>
        <a href="#voucher" className="underline text-amber-300 font-semibold hover:text-white transition-colors ml-1">
          Klaim Voucher
        </a>
      </div>

      {/* Main Spacious Glassmorphic Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-luxury py-3.5' : 'bg-[#FAF9F6]/90 backdrop-blur-md py-5 border-b border-[#B9B9B7]/25'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">

            {/* Brand Logo & Title */}
            <a href="#beranda" className="flex items-center space-x-3.5 group">
              <div className="w-11 h-11 rounded-full border border-[#B9B9B7] p-1 bg-white shadow-sm flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img src="/logo.png" alt="MODIARICH Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#1C1C1A] group-hover:text-amber-800 transition-colors">
                  MODIARICH
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#7E7D7A] font-semibold">
                  Natural Beauty Care
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Spacious & Elegant Layout */}
            <nav className="hidden lg:flex items-center space-x-10 sm:space-x-12 text-sm font-semibold tracking-wide text-[#3D3C3A]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#1C1C1A] transition-colors relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[#1C1C1A] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={() => onOpenOrderModal()}
                className="bg-[#1C1C1A] text-white p-2.5 rounded-full text-xs font-semibold shadow-sm"
                aria-label="Order"
              >
                <ShoppingBag className="w-4 h-4 text-[#B9B9B7]" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1C1C1A] focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F6] border-b border-[#B9B9B7]/40 px-6 pt-4 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-2 gap-3 text-sm font-semibold pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-white border border-[#B9B9B7]/30 text-[#1C1C1A] hover:bg-[#B9B9B7]/20 transition-colors text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-[#1C1C1A] text-white font-bold text-sm py-3.5 rounded-xl shadow-sm"
              >
                <ShoppingBag className="w-4 h-4 text-[#B9B9B7]" />
                <span>Beli MODIARICH Beauty Soap</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
