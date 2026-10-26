import logoImg from '../assets/logo.png';
import productImg from '../assets/product.png';

export interface Ingredient {
  id: string;
  name: string;
  latinName?: string;
  role: string;
  description: string[];
  icon: string;
  badge?: string;
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
  readTime?: string;
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
  phone: "6285218880476",
  waNumber: "6285218880476",
  instagram: "@modiarich",
  instagramUrl: "https://www.instagram.com/modiarich/",
  tiktok: "@modiarich",
  shopeeUrl: "https://shopee.co.id/product/1867712611/55312671635/",
  tiktokShopUrl: "https://shop-id.tokopedia.com/view/product/1737925921066615993?encode_params=MIIBpgQMc6HPJXmaws_orH5mBIIBgkMtkDO6RyRN2q2KLoQixZ8BCoW96WINd8RiM-Slyx1-NqiBnghIyblm9G4lDfd37wYpWNPjAfhTe5u5wu2CeZkx7e9TcFPFCiFHRkOm8OAkuSiNhtj0m5v57Wk4x93SvsDfJEHb9FbYJcMZeOySZsfo4xizsKeNMfYHBb8oYV-Sf_b7PiAqir1mTYwP6UNljxrUzvgHqh8_1dbrgof6w0hAWzHjcDOGGm0JcT_0k34-5TZPwhpM1qL9Eq6YtnItN6D4TE-OsLD-nkaVDBlqMYDkO4C0u55V4T9Oqn5FjvSVBGR-Fby0TJVtuL0p_1OHmy1SnvavSPrGt1JTRMPuHAXQsX6khok88upTAzgnT-Q1b-p_JKbpOxiZbo2D4xHUwQYMYmuzS3Q-7R8kS5YRcSpS28na4Vps5_6-ZenAaVxAGLs2pj1Z2euHsXZYsYWwFS8yK_1jU0h4JkmpvR6KzTQFiOVKYNbKpFLVOWtxlJb_hmVmhl9gLRqAQZck2MVZJi_GBBBVQErGZxSbJVE4uYTmO794&force_h5=1",
  bpomNumber: "NA18260500524",
  halalCertified: true,
  founderStory: {
    parents: "Moktar & Alm. Diah Pitaloka",
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
  netWeight: "50 gram",
  image: productImg,
  logo: logoImg,
  shortDescription: "Formulasi eksklusif Niacinamide 2%, Kunyit (Curcumin 3-8%), Kopi, Aloe Vera serta Astaxanthin.",
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
    benefits: ["Regenerasi Kolagen", "Samarkan Bekas Luka"]
  },
  {
    id: "coffee",
    name: "Ekstrak Kopi",
    latinName: "Coffea Extract",
    role: "Deep Cleansing",
    badge: "Extraction",
    icon: "Coffee",
    color: "from-stone-200 to-stone-100",
    description: [
      "Mengandung Asam Klorogenat dan Polifenol sebagai antioksidan dari radikal bebas.",
      "Kafein alami membantu mengangkat sel kulit mati dan menghaluskan kulit."
    ],
    benefits: ["Membersihkan Kulit", "Eksfoliasi"]
  },
  {
    id: "aloe-vera",
    name: "Lidah Buaya",
    latinName: "Aloe Barbadensis Leaf Extract",
    role: "Hydration",
    badge: "Natural Hydrator",
    icon: "Droplets",
    color: "from-emerald-100 to-teal-50",
    description: [
      "Memberikan hidrasi instan tanpa memicu rasa lengket di permukaan kulit.",
      "Menenangkan kulit yang terpapar sinar matahari, kusam, atau mengalami iritasi ringan.",
      "Sensasi sejuk dan dingin yang memberikan kenyamanan ekstra setiap kali mandi."
    ],
    benefits: ["Melembabkan Kulit", "Sensasi Dingin Sejuk"]
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
      "Antioksidan yang mampu memudarkan garis halus dan menjaga elastisitas kulit.",
      "Menjaga kulit agar senantiasa kenyal, sehat, dan terawat."
    ],
    benefits: ["Antioksidan", "Kulit Sehat dan Terawat"]
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
      "Minyak kelapa dan zaitun kaya akan asam lemak baik.",
      "Menjaga kelembapan alami setelah pembilasan sehingga kulit terasa halus dan lembab.",
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
    validUntil: "",
    description: "Khusus untuk pembelian pertama produk MODIARICH Beauty Soap."
  },
  {
    code: "LAUNCHING2026",
    title: "Special Launching Promo",
    discount: "Diskon 50% OFF",
    minPurchase: "Min. Beli 2 Pcs",
    validUntil: "Promo Terbatas",
    description: "Nikmati harga spesial peluncuran perdana MODIARICH."
  },
  {
    code: "BEAUTYFREE",
    title: "Voucher Gratis Ongkir",
    discount: "Subsidi Ongkir Rp 10.000",
    minPurchase: "S&K Berlaku",
    validUntil: "",
    description: "Hemat biaya pengiriman ke seluruh jabodetabek."
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
    title: "Sinergi Niacinamide 2% & Curcumin Kunyit dalam Memudarkan Hiperpigmentasi & Noda Hitam",
    category: "Clinical Research",
    date: "20 September 2026",
    summary: "Studi ilmiah mengenai penggabungan senyawa aktif kurkuminoid dengan Niacinamide 2% untuk memblokade transfer melanosom pada lapisan basal epidermis tanpa merusak kelembapan alami kulit.",
    content: `Hiperpigmentasi dan noda hitam merupakan salah satu permasalahan kulit yang paling umum dialami masyarakat di wilayah beriklim tropis seperti Indonesia. Paparan sinar ultraviolet yang tinggi secara terus-menerus memicu melanosit di lapisan epidermis untuk memproduksi pigmen melanin secara berlebih sebagai mekanisme perlindungan seluler alami.

### Cara Kerja Niacinamide 2% pada Lapisan Epidermis
Niacinamide (Vitamin B3) dengan konsentrasi 2% bertindak secara spesifik menghambat proses transfer melanosom dari sel melanosit ke sel keratinosit di sekitarnya. Melalui pencegahan transfer pigmen ini, sel-sel kulit baru yang naik ke permukaan akan tampak lebih bersih, jernih, dan warna kulit menjadi cerah merata secara bertahap.

### Kekuatan Anti-inflamasi Curcuminoid (3–8%)
Riset berbasis formulasi di Universitas Negeri Jakarta (UNJ) membuktikan bahwa ekstrak Curcuma Longa (Kunyit) dengan kandungan kurkumin terstandarisasi 3–8% memberikan efek sinergis yang sangat kuat bila dipadukan dengan Niacinamide. Kurkuminoid bekerja meredakan inflamasi mikro (micro-inflammation) yang kerap menjadi pemicu timbulnya post-inflammatory hyperpigmentation (PIH) atau bekas jerawat menggelap.

### Menjaga Skin Barrier Tetap Kuat & Lembap
Berbeda dengan bahan pencerah sintetis agresif yang sering menyebabkan sensasi kulit perih atau pengelupasan ekstrim, formula sabun MODIARICH dilengkapi Gliserin murni dan Virgin Coconut Oil (VCO). Hasilnya, proses pencerahan berjalan bertahap, aman digunakan setiap hari, dan ramah untuk semua jenis kulit termasuk kulit rentan sensitif.`,
    author: "Tim Riset MODIARICH & Formulator UNJ",
    tags: ["Niacinamide", "Kunyit", "Hiperpigmentasi", "Riset UNJ", "Skin Barrier"],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "j2",
    title: "Mengapa Astaxanthin Disebut 'The King of Antioxidants' dalam Perawatan Kulit Modern?",
    category: "Ingredient Spotlight",
    date: "15 September 2026",
    summary: "Astaxanthin alami memiliki kemampuan menangkal radikal bebas 6.000 kali lebih poten dari Vitamin C dan 550 kali lipat dibanding Vitamin E untuk menjaga integritas serat kolagen.",
    content: `Di antara sekian banyak antioksidan yang dikenal dalam dunia dermatologi, Astaxanthin yang diekstrak dari mikroalga Haematococcus Pluvialis menempati urutan teratas dalam hal kapasitas menangkal radikal bebas (singlet oxygen quenching capacity).

### Struktur Molekuler Unik yang Menembus Membran Sel
Kebanyakan antioksidan populer hanya mampu bekerja pada salah satu sisi membran sel (larut air di luar sel atau larut lemak di dalam sel). Astaxanthin memiliki struktur molekul polar ganda unik dengan rantai hidrokarbon panjang yang memungkinkannya membentang melintasi seluruh lapisan lipid ganda membran sel. Hal ini memberikan perlindungan komprehensif dari stres oksidatif luar maupun dalam.

### Perlindungan Menyeluruh terhadap Photo-Aging
Paparan sinar UV matahari dan polusi udara perkotaan memecah ikatan kolagen dan elastin kulit, yang mengakibatkan hilangnya elastisitas, kendur, dan timbulnya garis halus. Astaxanthin secara aktif melindungi fibroblas dari kerusakan radikal bebas sehingga regenerasi kolagen alami kulit dapat berlangsung maksimal.

### Manfaat Langsung pada MODIARICH Beauty Soap
Dengan mengintegrasikan ekstrak Astaxanthin murni ke dalam sabun pembersih harian, MODIARICH memberikan lapisan proteksi antioksidan sejak langkah pertama rutinitas mandi pagi dan sore hari Anda. Kulit terasa lebih kencang, segar, dan terlindung dari penuaan dini.`,
    author: "Divisi R&D Sains MODIARICH",
    tags: ["Astaxanthin", "Antioksidan", "Anti-Aging", "Haematococcus Pluvialis"],
    image: "https://images.unsplash.com/photo-1608248597260-6578616770d2?auto=format&fit=crop&w=800&q=80"
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
    a: "Sensasi kulit lebih bersih, halus, dan lembap langsung terasa sejak pemakaian pertama. Untuk perubahan tingkat kecerahan dan pemudaran noda hitam, rata-rata konsumen merasakan perubahan bertahap secara signifikan dalam 1-2 bulan dengan pemakaian rutin."
  },
  {
    q: "Apakah cocok untuk semua jenis kulit?",
    a: "Produk dapat digunakan oleh berbagai jenis kulit (normal, kering, berminyak, maupun kombinasi). Namun, bagi Anda yang memiliki kulit sangat sensitif, disarankan melakukan tes tempel (patch test) terlebih dahulu pada area lengan bawah."
  },
  {
    q: "Bagaimana cara memesan produk via WhatsApp atau Marketplace?",
    a: "Anda dapat mengeklik tombol 'Beli Produk via WA' untuk terhubung langsung dengan admin resmi MODIARICH (6285218880476), atau memilih toko resmi kami di Shopee, Tokopedia, dan TikTok Shop yang tertera pada bagian How to Buy."
  }
];
