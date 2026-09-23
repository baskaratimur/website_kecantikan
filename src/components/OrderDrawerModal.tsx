import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, MessageCircle, Tag, Check, Sparkles, Truck } from 'lucide-react';
import { PRODUCT_DATA, BRAND_INFO, VOUCHERS } from '../data/productData';

interface OrderDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVoucherCode?: string;
}

export const OrderDrawerModal: React.FC<OrderDrawerModalProps> = ({
  isOpen,
  onClose,
  initialVoucherCode = '',
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVoucherCode, setSelectedVoucherCode] = useState(initialVoucherCode);
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerAddress, setBuyerAddress] = useState('');
  const [buyerNote, setBuyerNote] = useState('');

  useEffect(() => {
    if (initialVoucherCode) {
      setSelectedVoucherCode(initialVoucherCode);
    }
  }, [initialVoucherCode]);

  if (!isOpen) return null;

  // Calculate pricing
  const subtotal = PRODUCT_DATA.price * quantity;
  let discount = 0;
  let freeShip = false;

  if (selectedVoucherCode === 'NEWCUSTOMER10') {
    discount = 10000;
  } else if (selectedVoucherCode === 'LAUNCHING2026') {
    discount = Math.round(subtotal * 0.25);
  } else if (selectedVoucherCode === 'BEAUTYFREE') {
    freeShip = true;
    discount = 15000;
  } else if (selectedVoucherCode === 'BUNDLE3SAVER') {
    discount = 35000;
  }

  const grandTotal = Math.max(0, subtotal - discount);

  const handleCheckoutWA = (e: React.FormEvent) => {
    e.preventDefault();
    
    let text = `*PESANAN MODIARICH BEAUTY SOAP*\n`;
    text += `------------------------------------\n`;
    text += `*Produk*: ${PRODUCT_DATA.name} (${PRODUCT_DATA.netWeight})\n`;
    text += `*Jumlah*: ${quantity} Pcs\n`;
    text += `*Subtotal*: Rp ${subtotal.toLocaleString('id-ID')}\n`;
    
    if (selectedVoucherCode) {
      text += `*Kode Voucher*: ${selectedVoucherCode}\n`;
      text += `*Potongan Diskon*: -Rp ${discount.toLocaleString('id-ID')}\n`;
    }
    
    text += `*TOTAL PEMBAYARAN*: Rp ${grandTotal.toLocaleString('id-ID')}\n`;
    text += `------------------------------------\n`;
    text += `*Nama Pembeli*: ${buyerName || '-'}\n`;
    text += `*No HP/WA*: ${buyerPhone || '-'}\n`;
    text += `*Alamat Pengiriman*: ${buyerAddress || '-'}\n`;
    if (buyerNote) text += `*Catatan*: ${buyerNote}\n`;
    text += `------------------------------------\n`;
    text += `Mohon bantu konfirmasi total biaya pengiriman dan nomor rekening pembayaran. Terima kasih!`;

    const url = `https://wa.me/${BRAND_INFO.waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-[#B9B9B7]/40">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 text-[#1C1C1A] hover:bg-stone-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-stone-100">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#7E7D7A] block">
            Formulir Pemesanan Langsung
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] flex items-center space-x-2">
            <span>Beli MODIARICH via WhatsApp</span>
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </h2>
          <p className="text-xs text-[#5C5B58] mt-0.5">
            Pesanan Anda akan langsung terhubung dengan Admin Resmi MODIARICH (08997775838).
          </p>
        </div>

        <form onSubmit={handleCheckoutWA} className="space-y-5 text-xs sm:text-sm">
          
          {/* Product summary & quantity selector */}
          <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-stone-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={PRODUCT_DATA.image} alt={PRODUCT_DATA.name} className="w-12 h-12 object-contain" />
              <div>
                <h4 className="font-bold text-[#1C1C1A] text-xs sm:text-sm">{PRODUCT_DATA.name}</h4>
                <span className="text-[11px] text-[#7E7D7A]">Rp {PRODUCT_DATA.price.toLocaleString('id-ID')} / Pcs</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white px-2 py-1 rounded-lg border border-stone-300">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-6 h-6 font-bold text-[#1C1C1A] hover:bg-stone-100 rounded flex items-center justify-center text-sm"
              >
                -
              </button>
              <span className="font-bold text-[#1C1C1A] px-2">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-6 h-6 font-bold text-[#1C1C1A] hover:bg-stone-100 rounded flex items-center justify-center text-sm"
              >
                +
              </button>
            </div>
          </div>

          {/* Select Voucher */}
          <div>
            <label className="block font-semibold text-[#1C1C1A] text-xs mb-1.5 flex items-center space-x-1">
              <Tag className="w-3.5 h-3.5 text-amber-700" />
              <span>Gunakan Voucher Promo (Opsional):</span>
            </label>
            <select
              value={selectedVoucherCode}
              onChange={(e) => setSelectedVoucherCode(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#B9B9B7]/40 text-xs text-[#1C1C1A] focus:outline-none"
            >
              <option value="">-- Tanpa Voucher --</option>
              {VOUCHERS.map((v) => (
                <option key={v.code} value={v.code}>
                  {v.code} - {v.title} ({v.discount})
                </option>
              ))}
            </select>
          </div>

          {/* Customer Shipping Form */}
          <div className="space-y-3 pt-2 border-t border-stone-100">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#1C1C1A]">Data Pengiriman:</h4>
            
            <div>
              <label className="block text-[11px] font-medium text-[#5C5B58] mb-1">Nama Penerima *</label>
              <input
                type="text"
                required
                placeholder="Contoh: Nanda Saraswati"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none focus:border-[#1C1C1A]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#5C5B58] mb-1">Nomor WhatsApp Aktif *</label>
              <input
                type="text"
                required
                placeholder="Contoh: 08997775838"
                value={buyerPhone}
                onChange={(e) => setBuyerPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none focus:border-[#1C1C1A]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#5C5B58] mb-1">Alamat Lengkap Pengiriman *</label>
              <textarea
                rows={2}
                required
                placeholder="Jalan, No. Rumah, RT/RW, Kecamatan, Kota/Kabupaten, Kode Pos"
                value={buyerAddress}
                onChange={(e) => setBuyerAddress(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none focus:border-[#1C1C1A]"
              ></textarea>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#5C5B58] mb-1">Catatan Khusus (Opsional)</label>
              <input
                type="text"
                placeholder="Misal: Titip di satpam / packing ekstra bublewrap"
                value={buyerNote}
                onChange={(e) => setBuyerNote(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#FAF9F6] border border-stone-200 text-xs focus:outline-none focus:border-[#1C1C1A]"
              />
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 space-y-2 text-xs">
            <div className="flex justify-between text-[#5C5B58]">
              <span>Subtotal Produk ({quantity} Pcs)</span>
              <span>Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-emerald-700 font-semibold">
                <span>Diskon Voucher ({selectedVoucherCode})</span>
                <span>-Rp {discount.toLocaleString('id-ID')}</span>
              </div>
            )}
            <div className="pt-2 border-t border-stone-200 flex justify-between font-bold text-sm text-[#1C1C1A]">
              <span>Total Estimasi Bayar</span>
              <span className="text-lg">Rp {grandTotal.toLocaleString('id-ID')}</span>
            </div>
          </div>

          {/* Submit CTA */}
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-[#1C1C1A] hover:bg-emerald-700 text-white font-semibold text-sm py-4 rounded-full transition-all shadow-md"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Kirim Pesanan ke WA Admin (08997775838)</span>
          </button>

        </form>

      </div>
    </div>
  );
};
