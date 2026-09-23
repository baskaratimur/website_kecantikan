import logoImg from '../assets/logo.png';
import productImg from '../assets/product.png';

export interface Ingredient {
  id: string;
  name: string;
  latinName?: string;
  role: string;
  description: string[];
  icon: string;
  badge: string;
  benefits: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar: string;
  beforeAfterTag?: string;
  image?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string;
  author: string;
  tags: string[];
  image: string;
}

export interface Voucher {
  code: string;
  title: string;
  discount: string;
  minPurchase: string;
  validUntil: string;
  description: string;
}

export const BRAND_INFO = {
  name: "MODIARICH",
  tagline: "Natural Beauty Born from Heart & Science",
  phone: "081285973475",
  waNumber: "628997775838",
  instagram: "@modiarich",
  tiktok: "@modiarich",
  bpomNumber: "NA18260500524",
  halalCertified: true,
  founderStory: {
    parents: "Moktar & Alm. Diah Rich",
    origin: "Universitas Negeri Jakarta (UNJ)",
    focus: "Solusi hiperpigmentasi & noda hitam kulit dengan pendekatan alami & berbasis data."
  }
};

export const PRODUCT_DATA = {
  id: "modiarich-beauty-soap",
  name: "MODIARICH Beauty Soap",
  subtitle: "Natural Brightening & Skin Barrier Care Soap",
  price: 49000,
  originalPrice: 65000,
  rating: 4.9,
  reviewCount: 384,
  bpom: "NA18260500524",
  halal: "Sertifikasi Halal Indonesia",
  netWeight: "80 gr",
  image: productImg,
  logo: logoImg,
  shortDescription: "Formulasi eksklusif Niacinamide 2%, Ekstrak Kunyit (Curcumin 3-8%), Kopi Robusta & Arabica, Aloe Vera, serta Super-Antioksidan Astaxanthin untuk mencerahkan noda hitam, meratakan warna kulit, dan memperkuat skin barrier.",
  fullIngredients: [
    "Glycerin", "Aqua", "Sucrose", "Stearic Acid", "Ethanol", "Lauryl Glucoside",
    "Myristic Acid", "Sodium Hydroxide", "Cocamidopropyl Betaine", "Niacinamide (2%)",
    "Propylene Glycol", "Cocos Nucifera Fruit Powder (VCO)", "Styrene/Acrylates Copolymer",
    "Coffea Robusta Extract", "Coffea Arabica Extract", "Curcuma Longa Root Extract (Kunyit)",
    "Aloe Barbadensis Leaf Extract (Lidah Buaya)", "Olea Europaea Fruit Oil (Minyak Zaitun)",
    "BHT", "Disodium EDTA", "Citric Acid", "Sodium Benzoate", "Potassium Sorbate",
    "Caprylic/Capric Triglyceride", "Haematococcus Pluvialis Extract (Astaxanthin)",
    "Rosmarinus Officinalis Leaf Extract"
  ],
  keyBenefits: [
    "Mencerahkan kulit kusam & menyamarkan area hiperpigmentasi/noda hitam.",
    "Memperkuat skin barrier serta menjaga kelembapan alami kulit tanpa rasa kering kaku.",
    "Mendorong pembentukan kolagen & regenerasi sel kulit secara gradual.",
    "Memberikan sensasi segar, dingin, dan halus setelah setiap kali mandi.",
    "Diformulasikan dengan bahan alami pilihan yang telah teruji BPOM & Halal."
  ],
  howToUse: [
    {
      step: 1,
      title: "Basahi & Busakan",
      desc: "Basahi MODIARICH Beauty Soap dengan sedikit air hingga menghasilkan busa yang lembut dan melimpah."
    },
    {
      step: 2,
      title: "Pijat Lembut",
      desc: "Usapkan busa secara merata ke seluruh wajah atau area tubuh. Pijat perlahan dengan gerakan melingkar."
    },
    {
      step: 3,
      title: "Diamkan 3 - 5 Menit",
      desc: "Diamkan busa selama 3 hingga 5 menit agar nutrisi Niacinamide, Kunyit, dan Astaxanthin meresap optimal ke dalam pori-pori."
    },
    {
      step: 4,
      title: "Bilas & Gunakan Rutin",
      desc: "Bilas hingga bersih dengan air sejuk. Gunakan 2 kali sehari sebelum mandi pagi dan sore untuk hasil maksimal."
    }
  ],
  storageGuide: "Simpan di tempat sejuk dan kering, terhindar dari sinar matahari langsung. Pastikan sabun diletakkan pada wadah yang berlubang agar tetap kering setelah digunakan."
};

export const INGREDIENTS_LIST: Ingredient[] = [
  {
    id: "niacinamide",
    name: "Niacinamide 2%",
    latinName: "Vitamin B3",
    role: "Skin Barrier & Brightening Specialist",
    badge: "Formulasi Utama 2%",
    icon: "Sparkles",
    color: "from-amber-100 to-amber-50",
    description: [
      "Memperkuat lapisan pembatas kulit (skin barrier) sehingga kelembapan bertahan lebih lama.",
      "Membantu meratakan tampilan warna kulit kusam dan memudarkan flek atau hiperpigmentasi.",
      "Menghaluskan tekstur kulit kasar dan menjaga elastisitas alami kulit agar tetap kencang."
    ],
    benefits: ["Mencerahkan Kulit", "Proteksi Skin Barrier", "Ratakan Warna Kulit"]
  },
  {
    id: "kunyit",
    name: "Ekstrak Kunyit",
    latinName: "Curcuma Longa Root (Curcumin 3–8%)",
    role: "Natural Skin Regenerator",
    badge: "Active Curcumin",
    icon: "Sun",
    color: "from-yellow-100 to-amber-50",
    description: [
      "Kaya akan senyawa aktif Kurkumin (3-8%) dengan aktivitas antioksidan alami tinggi.",
      "Mendukung proses regenerasi sel kulit sehingga noda bekas luka tampak menyamar bertahap.",
      "Merangsang pembentukan kolagen alami untuk tekstur kulit yang kenyal dan sehat."
    ],
    benefits: ["Anti-hiperpigmentasi", "Regenerasi Kolagen", "Samarkan Bekas Luka"]
  },
  {
    id: "coffee",
    name: "Ekstrak Kopi Robusta & Arabica",
    latinName: "Coffea Extract",
    role: "Antioxidant & Energy Booster",
    badge: "Dual Coffee Extract",
    icon: "Coffee",
    color: "from-stone-200 to-stone-100",
    description: [
      "Mengandung Asam Klorogenat dan Polifenol sebagai perisai antioksidan dari radikal bebas.",
      "Kafein alami memberikan kesegaran instan pada kulit lelah dan melancarkan sirkulasi.",
      "Membantu merawat kenyalan dan kekencangan permukaan kulit secara alami."
    ],
    benefits: ["Perisai Antioksidan", "Segarkan Kulit Lelah", "Menjaga Kencang Kulit"]
  },
  {
    id: "aloe-vera",
    name: "Lidah Buaya",
    latinName: "Aloe Barbadensis Leaf Extract",
    role: "Deep Soothing & Hydration",
    badge: "Natural Hydrator",
    icon: "Droplets",
    color: "from-emerald-100 to-teal-50",
    description: [
      "Memberikan hidrasi instan tanpa memicu rasa lengket di permukaan kulit.",
      "Menenangkan kulit yang terpapar sinar matahari, kusam, atau mengalami iritasi ringan.",
      "Sensasi sejuk dan dingin yang memberikan kenyamanan ekstra setiap kali mandi."
    ],
    benefits: ["Hidrasi Intensif", "Sensasi Dingin Sejuk", "Menenangkan Iritasi"]
  },
  {
    id: "astaxanthin",
    name: "Astaxanthin",
    latinName: "Haematococcus Pluvialis Extract",
    role: "King of Antioxidants",
    badge: "Super Antioksidan",
    icon: "ShieldCheck",
    color: "from-rose-100 to-orange-50",
    description: [
      "Antioksidan 6000x lebih kuat dari Vitamin C untuk menetralkan stres oksidatif.",
      "Melindungi struktur lipid sel kulit dari kerusakan paparan polusi & sinar UV.",
      "Menjaga kadar air kulit agar senantiasa kenyal, sehat, dan awet muda."
    ],
    benefits: ["6000x Antioksidan", "Cegah Penuaan Dini", "Kelembapan Ekstra"]
  },
  {
    id: "vco-olive",
    name: "VCO & Minyak Zaitun",
    latinName: "Cocos Nucifera & Olea Europaea",
    role: "Velvet Moisture Lock",
    badge: "Nourishing Oils",
    icon: "Heart",
    color: "from-slate-100 to-stone-100",
    description: [
      "Minyak kelapa murni dan zaitun grade tinggi kaya akan asam lemak baik.",
      "Mengunci kelembapan alami setelah pembilasan sehingga kulit terasa beludru halus.",
      "Pembersih alami yang lembut tanpa merusak lapisan minyak alami kulit."
    ],
    benefits: ["Nutrisi Kulit Halus", "Kunci Kelembapan", "Busa Lembut Alami"]
  }
];

export const VOUCHERS: Voucher[] = [
  {
    code: "NEWCUSTOMER10",
    title: "Voucher Pelanggan Baru",
    discount: "Potongan Rp 10.000",
    minPurchase: "Min. Beli 1 Pcs",
    validUntil: "31 Des 2026",
    description: "Khusus untuk pembelian pertama produk MODIARICH Beauty Soap."
  },
  {
    code: "LAUNCHING2026",
    title: "Special Launching Promo",
    discount: "Diskon 25% OFF",
    minPurchase: "Min. Beli 2 Pcs",
    validUntil: "Promo Terbatas",
    description: "Nikmati harga spesial peluncuran perdana MODIARICH."
  },
  {
    code: "BEAUTYFREE",
    title: "Voucher Gratis Ongkir",
    discount: "Subsidi Ongkir Rp 15.000",
    minPurchase: "Min. Beli 2 Pcs",
    validUntil: "Selalu Aktif",
    description: "Hemat biaya pengiriman ke seluruh Indonesia."
  },
  {
    code: "BUNDLE3SAVER",
    title: "Paket Glowing 3 Pcs",
    discount: "Hemat Rp 35.000",
    minPurchase: "Beli Paket 3 Pcs",
    validUntil: "Stok Terbatas",
    description: "Gunakan rutin bersama keluarga untuk hasil maksimal."
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Nanda Saraswati",
    role: "Verified Buyer",
    location: "Jakarta Selatan",
    rating: 5,
    comment: "Gila sih sabun ini! Bekas jerawat dan belang di leher perlahan memudar dalam 2 minggu pemakaian. Busanya melimpah dan wangi alami kopi kunyitnya rileks banget!",
    date: "18 September 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    beforeAfterTag: "Hiperpigmentasi Berkurang 80%"
  },
  {
    id: "t2",
    name: "Aisyah Putri",
    role: "Verified Buyer",
    location: "Bandung",
    rating: 5,
    comment: "Awalnya skeptis, tapi pas coba diamkan 3 menit sesuai cara pakai, kulit langsung terasa makin halus dan nggak ketarik sama sekali. Niacinamide 2% nya kerasa banget!",
    date: "14 September 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    beforeAfterTag: "Skin Barrier Makin Kuat"
  },
  {
    id: "t3",
    name: "Dini Anggraini",
    role: "Beauty Enthusiast",
    location: "Surabaya",
    rating: 5,
    comment: "Kemasan & aroma sangat elegan. Nggak menyangka kandungan kunyit & astaxanthin bisa diracik seefektif ini tanpa meninggalkan noda kuning di kulit.",
    date: "10 September 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    beforeAfterTag: "Warna Kulit Merata"
  }
];

export const INITIAL_JOURNALS: JournalArticle[] = [
  {
    id: "j1",
    title: "Sinergi Niacinamide 2% & Curcumin Kunyit dalam Memudarkan Hiperpigmentasi",
    category: "Clinical Research",
    readTime: "4 Menit Baca",
    date: "20 September 2026",
    summary: "Studi ilmiah mengenai penggabungan senyawa aktif kurkumin dengan Niacinamide untuk penghambatan transfer melanosit pada lapisan epidermis.",
    content: `Hiperpigmentasi dan noda hitam merupakan salah satu concern perawatan kulit yang paling sering ditemui. MODIARICH Beauty Soap hadir dengan riset mendalam menggabungkan Niacinamide 2% dan Ekstrak Kunyit (Curcumin 3–8%).

Niacinamide bekerja menghambat transfer melanosit ke sel epidermis, sementara antioksidan dalam kurkumin menetralkan radikal bebas yang merangsang pigmentasi berlebih. Penggunaan rutin terbukti meningkatkan kecerahan kulit secara signifikan tanpa mengiritasi skin barrier.`,
    author: "Tim Riset MODIARICH & Formulator",
    tags: ["Niacinamide", "Kunyit", "Hiperpigmentasi", "Riset UNJ"],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "j2",
    title: "Mengapa Astaxanthin Disebut 'King of Antioxidants' untuk Kulit?",
    category: "Ingredient Spotlight",
    readTime: "3 Menit Baca",
    date: "15 September 2026",
    summary: "Astaxanthin memiliki daya tangkal radikal bebas 6.000 kali lebih kuat dari Vitamin C dan 550 kali lebih kuat dari Vitamin E.",
    content: `Astaxanthin berasal dari mikroalga Haematococcus Pluvialis. Struktur molekulnya yang unik mampu menembus membran sel lipid ganda kulit.

Dalam MODIARICH Beauty Soap, Astaxanthin berperan menjaga fleksibilitas serat kolagen dan elastin, mencegah penuaan dini akibat sinar UV dan polusi udara perkotaan.`,
    author: "R&D MODIARICH",
    tags: ["Astaxanthin", "Antioksidan", "Anti-Aging"],
    image: "https://images.unsplash.com/photo-1608248597260-6578616770d2?auto=format&fit=crop&w=600&q=80"
  }
];

export const FAQS = [
  {
    q: "Bagaimana cara menggunakan MODIARICH Beauty Soap yang benar?",
    a: "Basahi kulit, usapkan MODIARICH Beauty Soap hingga berbusa melimpah, kemudian pijat secara perlahan pada kulit wajah atau tubuh. Untuk hasil mencerahkan yang optimal, diamkan busa selama 3–5 menit sebelum dibilas dengan air bersih."
  },
  {
    q: "Apakah MODIARICH Beauty Soap sudah terdaftar BPOM dan Halal?",
    a: "Ya, MODIARICH Beauty Soap sudah memiliki izin edar resmi dari BPOM RI dengan nomor registrasi NA18260500524 serta tersertifikasi Halal Indonesia. Produk diproduksi sesuai standar CPKB (Cara Pembuatan Kosmetika yang Baik)."
  },
  {
    q: "Apakah produk ini aman digunakan setiap hari?",
    a: "Sangat aman! Formulasi MODIARICH Beauty Soap dirancang dengan pH seimbang dan bahan pelembap alami seperti VCO, Aloe Vera, dan Glycerin sehingga cocok untuk pemakaian harian pagi dan sore hari tanpa membuat kulit terasa kering atau tertarik."
  },
  {
    q: "Berapa lama hasil pemakaian mulai terlihat?",
    a: "Sensasi kulit lebih bersih, halus, dan lembap langsung terasa sejak pemakaian pertama. Untuk perubahan tingkat kecerahan dan pemaudaran noda hitam, rata-rata konsumen merasakan perubahan bertahap secara signifikan dalam 14–28 hari pemakaian rutin."
  },
  {
    q: "Apakah cocok untuk semua jenis kulit?",
    a: "Produk dapat digunakan oleh berbagai jenis kulit (normal, kering, berminyak, maupun kombinasi). Namun, bagi Anda yang memiliki kulit sangat sensitif, disarankan melakukan tes tempel (patch test) terlebih dahulu pada area lengan bawah."
  },
  {
    q: "Bagaimana cara memesan produk via WhatsApp atau Marketplace?",
    a: "Anda dapat mengeklik tombol 'Beli Produk via WA' untuk terhubung langsung dengan admin resmi MODIARICH (081285973475), atau memilih toko resmi kami di Shopee, Tokopedia, dan TikTok Shop yang tertera pada bagian How to Buy."
  }
];
