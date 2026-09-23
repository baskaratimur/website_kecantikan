# 🌿 MODIARICH • Natural Beauty Care Website

Website resmi dan katalog produk interaktif untuk **MODIARICH Beauty Soap**, diformulasikan dengan *Niacinamide 2%, Ekstrak Kunyit (Curcumin 3–8%), Kopi Robusta & Arabica, Aloe Vera, serta Astaxanthin*.

👉 **Live Website**: [https://baskaratimur.github.io/website_kecantikan/](https://baskaratimur.github.io/website_kecantikan/)

---

## 🛠️ Teknologi yang Digunakan
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Silk Gray & Luxury Champagne Palette (`#B9B9B7`)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (`gh-pages`)

---

## 🖼️ Panduan Mengganti Foto (Logo & Produk)

Jika Anda ingin mengganti foto **Logo** atau **Foto Produk** di masa mendatang, ikuti langkah mudah berikut:

### 1. Ganti File Gambar
- File foto tersimpan di folder `src/assets/`:
  - **Logo Brand**: Ganti file `src/assets/logo.png` (dan `public/logo.png`)
  - **Foto Produk**: Ganti file `src/assets/product.png` (dan `public/product.png`)
- *Tips:* Gunakan nama file yang sama (`logo.png` dan `product.png`) agar kode otomatis membaca gambar baru tanpa perlu mengubah kodingan.

---

## 🚀 Panduan Update & Deploy Ulang ke GitHub Pages

Setiap kali Anda selesai mengubah gambar, teks, harga, atau konten apapun di website, lakukan 2 langkah berikut di Terminal:

### Langkah 1: Simpan & Push Kode ke Branch Main
```bash
# 1. Tambahkan semua perubahan file
git add .

# 2. Buat pesan commit (contoh: update foto produk)
git commit -m "Update foto produk terbaru"

# 3. Push kode sumber ke GitHub
git push origin main
```

### Langkah 2: Build & Deploy Ulang ke Live Link (Otomatis)
Jalankan perintah ini di Terminal:
```bash
npm run deploy
```

> Perintah `npm run deploy` akan secara otomatis melakukan kompilasi (`npm run build`) dan mengunggah hasil build terbaru ke branch `gh-pages` di GitHub.

### Langkah 3: Akses Link Website
Tunggu 30–60 detik, lalu buka link website live Anda:
👉 **[https://baskaratimur.github.io/website_kecantikan/](https://baskaratimur.github.io/website_kecantikan/)**

*(💡 **Catatan:** Jika gambar atau tampilan belum berubah di browser Anda, tekan **`Ctrl + F5`** atau **`Ctrl + Shift + R`** di keyboard untuk membersihkan cache browser lama).*

---

## 💻 Panduan Menjalankan Project di Komputer Lokal

Jika ingin melihat dan menguji tampilan di komputer lokal sebelum di-deploy:

```bash
# 1. Install dependensi (hanya perlu sekali)
npm install

# 2. Jalankan server lokal
npm run dev
```
Buka **`http://localhost:3000/`** atau **`http://localhost:3001/`** di browser Anda.

---

## 📁 Struktur Folder Utama Project

```text
mdiar/
├── public/                 # Asset statis publik (logo.png, product.png)
├── src/
│   ├── assets/             # Asset gambar utama yang di-bundle (logo.png, product.png)
│   ├── components/         # Komponen UI (Navbar, Hero, ProductSection, Testimonials, dll.)
│   ├── data/               # Data produk, bahan aktif, voucher, ulasan (productData.ts)
│   ├── App.tsx             # Halaman utama aplikasi
│   ├── index.css           # Styling Tailwind & variabel warna custom
│   └── main.tsx            # Entry point React
├── index.html              # HTML template
├── package.json            # Daftar paket dependensi & script deploy
└── vite.config.ts          # Konfigurasi Vite & base URL GitHub Pages
```

---

© 2026 **MODIARICH**. Formulasi Natural Beauty terdaftar BPOM NA18260500524 & Sertifikasi Halal Indonesia.
