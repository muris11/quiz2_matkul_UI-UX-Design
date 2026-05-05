import {
  extractEssayAnswers,
  extractEssayQuestions,
  extractImportantTerms,
  extractMultipleChoiceQuestions,
  readProjectMarkdown,
} from "@/lib/content";

const materiMarkdown = readProjectMarkdown("materi.md");
const latihanMarkdown = readProjectMarkdown("latihan.md");

export const keyTerms = extractImportantTerms(materiMarkdown);
export const multipleChoiceQuestions = extractMultipleChoiceQuestions(latihanMarkdown);
export const essayQuestions = extractEssayQuestions(latihanMarkdown);
export const essayAnswers = extractEssayAnswers(latihanMarkdown);

export const highlights = [
  {
    label: "Fokus Materi",
    value: "Praktikum 8-12",
    description: "Landing page, scrolling, animasi, component, variable, dan design system.",
  },
  {
    label: "Latihan",
    value: "45 Soal",
    description: "40 pilihan ganda dan 5 essay lengkap dengan kunci dan contoh jawaban.",
  },
  {
    label: "Siap Deploy",
    value: "Vercel Ready",
    description: "Dibangun dengan Next.js terbaru dan Tailwind CSS 4 agar mudah di-hosting.",
  },
];

export type MateriBlock = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type MateriTopic = {
  id: string;
  title: string;
  intro: string[];
  blocks: MateriBlock[];
  takeaway: string;
};

export const materiOverview = {
  title: "Ringkasan Super Lengkap Materi UI/UX Design Praktikum 8-12",
  description:
    "Materi UI/UX Design dari Praktikum 8 sampai Praktikum 12 membahas proses pembuatan desain antarmuka menggunakan Figma secara bertahap. Alurnya dimulai dari membuat landing page, mengatur scrolling, menambahkan animasi dan interaksi, membuat component reusable, sampai menggunakan variable, colors, tokens, dan mode Light/Dark agar desain lebih konsisten dan mudah dikembangkan.",
  outcomes: [
    "Memahami alur pembuatan landing page yang conversion-oriented dan terstruktur.",
    "Menyusun halaman panjang berbasis scrolling yang nyaman dibaca dari atas ke bawah.",
    "Membangun prototype interaktif dengan trigger, action, destination, dan transition.",
    "Menerapkan component reusable, variants, dan interactive component pada desain Figma.",
    "Menyusun variable, colors, tokens, dan modes untuk Light Mode dan Dark Mode.",
  ],
};

export const materiTopics: MateriTopic[] = [
  {
    id: "praktikum-8",
    title: "Praktikum 8 — Desain Landing Page",
    intro: [
      "Landing page adalah halaman web yang dibuat untuk tujuan tertentu seperti promosi produk, memperkenalkan layanan, mengumpulkan data pengguna, mendorong pendaftaran, atau meningkatkan penjualan.",
      "Berbeda dengan halaman website biasa, landing page biasanya fokus pada satu tujuan utama sehingga isi, desain, dan tombol aksi dibuat lebih terarah.",
    ],
    blocks: [
      {
        title: "Pengertian Landing Page",
        paragraphs: [
          "Dalam Praktikum 8, landing page dijelaskan sebagai halaman yang sederhana, persuasif, dan memiliki fokus pada satu aksi utama atau call to action.",
          "Kalau landing page dibuat untuk aplikasi, fokusnya bisa mengajak pengguna untuk daftar. Kalau dibuat untuk produk, fokusnya bisa mengajak pengguna membeli. Kalau dibuat untuk layanan, fokusnya bisa mengajak pengguna mencoba layanan tersebut.",
        ],
      },
      {
        title: "Tujuan Praktikum 8",
        paragraphs: [
          "Setelah mempelajari praktikum ini, mahasiswa diharapkan mampu memahami workflow desain landing page, menyusun user flow dan struktur halaman, menerapkan user-centered design, menggunakan grid system, menggunakan style, component, auto layout, serta menghasilkan landing page yang rapi, menarik, dan punya hierarki visual yang jelas.",
          "Inti tujuannya bukan hanya bisa membuat desain halaman, tetapi juga bisa membuat halaman yang terstruktur dan mudah dipahami pengguna.",
        ],
      },
      {
        title: "Struktur Landing Page",
        bullets: [
          "Summary / Hero Section: bagian paling atas halaman yang berisi judul utama, deskripsi singkat, visual pendukung, dan tombol CTA.",
          "Call to Action / CTA: tombol atau ajakan seperti Daftar Sekarang, Coba Gratis, Mulai Sekarang, atau Beli Sekarang.",
          "Social Proof: bukti kepercayaan seperti testimoni, rating, jumlah pengguna, logo partner, review, atau pencapaian.",
          "Benefits: menjelaskan manfaat yang akan diterima pengguna, bukan sekadar fitur teknis.",
          "Features: menjelaskan fitur utama produk atau layanan dalam bentuk card, icon, atau poin ringkas.",
          "Repeated CTA: CTA yang diulang di beberapa bagian agar pengguna tetap diarahkan melakukan aksi utama.",
        ],
      },
      {
        title: "Prinsip Desain Landing Page",
        bullets: [
          "Conversion-Oriented: semua elemen harus mendukung tujuan utama halaman dan tidak mengganggu fokus pengguna.",
          "Hierarki Visual yang Jelas: informasi disusun berdasarkan prioritas dari judul utama, subjudul, isi, gambar, hingga tombol aksi.",
          "Konsistensi Desain: warna, font, ukuran teks, tombol, icon, dan layout harus konsisten.",
          "Navigasi Sederhana: pengguna harus langsung memahami arah halaman tanpa navigasi yang terlalu rumit.",
          "Responsive Design: desain harus nyaman dipakai di desktop, tablet, dan mobile.",
        ],
      },
      {
        title: "Tools dan Fitur Figma yang Dipakai",
        bullets: [
          "Frame: area kerja utama untuk membuat halaman, layar aplikasi, section, atau komponen.",
          "Grid System: membantu menyusun layout agar rapi dan seimbang; untuk web biasanya memakai 12 kolom.",
          "Text Style: menjaga konsistensi heading, subheading, body text, label, dan button text.",
          "Color Style: menyimpan warna utama, sekunder, background, text, dan status agar mudah dipakai ulang.",
          "Component: dipakai untuk elemen yang berulang seperti button, card, navbar, footer, form, dan icon.",
          "Icon: membantu memperjelas fungsi dan memudahkan pemahaman tampilan.",
          "Auto Layout: membuat desain lebih fleksibel dengan perilaku seperti hug contents, fill container, dan fixed width/height.",
          "Group dan Alignment: membantu pengelompokan elemen dan perapihan posisi.",
          "Image dan Effects: gambar, shadow, blur, overlay, dan gradient dipakai untuk memperkuat visual tanpa mengorbankan keterbacaan.",
        ],
      },
    ],
    takeaway:
      "Praktikum 8 mengajarkan bahwa landing page yang baik bukan hanya terlihat bagus, tetapi juga harus punya tujuan jelas, alur informasi yang rapi, CTA yang kuat, visual hierarchy yang mudah dipahami, dan desain yang konsisten.",
  },
  {
    id: "praktikum-9",
    title: "Praktikum 9 — Scrolling",
    intro: [
      "Scrolling UI adalah pendekatan desain antarmuka yang menyusun konten secara vertikal sehingga pengguna dapat mengakses informasi dengan menggulir layar dari atas ke bawah.",
      "Pendekatan ini banyak digunakan pada aplikasi mobile, landing page panjang, katalog produk, feed berita, halaman profil, dan halaman detail produk.",
    ],
    blocks: [
      {
        title: "Tujuan Praktikum 9",
        paragraphs: [
          "Tujuan praktikum ini adalah agar mahasiswa mampu memahami workflow desain landing page berbasis scrolling, menyusun user flow vertikal, membuat struktur section seperti hero, fitur, testimoni, dan CTA, menerapkan grid system, menggunakan style, component, auto layout, serta menghasilkan landing page scrolling yang rapi dan punya alur visual dari atas ke bawah.",
        ],
      },
      {
        title: "Konsep Utama Scrolling UI",
        paragraphs: [
          "Scrolling UI digunakan untuk menyampaikan informasi secara bertahap. Bagian paling atas biasanya berisi informasi paling penting, lalu semakin ke bawah berisi detail pendukung.",
          "Contohnya, tampilan aplikasi hotel memiliki urutan search bar, browse by category, horizontal scrolling atau carousel, lalu filter by dates. Ini menunjukkan prinsip top-to-bottom hierarchy.",
        ],
      },
      {
        title: "Jenis Scrolling di Figma",
        bullets: [
          "Horizontal Scrolling: untuk carousel, card kategori, galeri gambar, slider produk, atau konten yang digeser ke samping.",
          "Vertical Scrolling: untuk halaman panjang seperti landing page, feed, detail produk, atau mobile screen.",
          "Horizontal dan Vertical Scrolling: untuk konten yang perlu digeser ke berbagai arah seperti peta, diagram besar, atau visualisasi data.",
        ],
      },
      {
        title: "Hal Penting Saat Membuat Scrolling",
        bullets: [
          "Konten harus overflow agar scrolling benar-benar terasa dan aktif.",
          "Gunakan frame, bukan group, karena overflow hanya didukung oleh frame.",
          "Clip Content dipakai untuk menyembunyikan konten yang keluar dari batas frame.",
          "Fixed Position Saat Scrolling berguna untuk header, navbar, atau sidebar yang tetap diam.",
          "Preserve Scroll Position menjaga posisi gulir tetap sama saat pindah antar frame.",
        ],
      },
      {
        title: "Tantangan Scrolling UI",
        paragraphs: [
          "Jika halaman terlalu panjang, pengguna bisa merasa lelah atau melewatkan informasi penting. Karena itu, section harus disusun rapi, jarak antar elemen harus nyaman, dan setiap bagian perlu punya penanda visual yang jelas.",
        ],
      },
    ],
    takeaway:
      "Praktikum 9 mengajarkan cara membuat desain halaman panjang yang tetap nyaman digunakan, sehingga pengguna bisa memahami alur dari atas ke bawah tanpa bingung.",
  },
  {
    id: "praktikum-10",
    title: "Praktikum 10 — Animasi dan Interaksi",
    intro: [
      "Animasi dan interaksi digunakan untuk membuat prototype terasa lebih nyata. Dengan animasi, perpindahan antar halaman tidak terasa kaku, dan dengan interaksi pengguna bisa mencoba alur aplikasi secara langsung.",
      "Dalam UI/UX, animasi tidak boleh hanya menjadi hiasan. Animasi harus membantu pengguna memahami perubahan, arah perpindahan, dan status elemen.",
    ],
    blocks: [
      {
        title: "Tujuan Praktikum 10",
        paragraphs: [
          "Tujuan Praktikum 10 adalah agar mahasiswa mampu memahami workflow landing page scrolling dengan animasi dan interaksi, menyusun user flow vertikal, menerapkan user-centered design, menggunakan grid, style, component, auto layout, serta menerapkan hover, scroll effect, transition, dan microinteraction.",
        ],
      },
      {
        title: "Merencanakan Prototype yang Efektif",
        bullets: [
          "Kenali Target Audiens: desain harus sesuai kebutuhan, kebiasaan, dan karakter pengguna.",
          "Tentukan Tujuan Prototype: desainer perlu tahu fitur utama apa yang ingin diuji dan alur apa yang ingin ditampilkan.",
          "Buat User Flow: menggambarkan langkah pengguna dari awal sampai mencapai tujuan.",
          "Uji dan Kumpulkan Feedback: membantu menemukan kelemahan desain.",
          "Perbaiki Prototype: feedback dipakai untuk menyempurnakan desain agar lebih sesuai kebutuhan pengguna.",
        ],
      },
      {
        title: "Flow Starting Point",
        paragraphs: [
          "Flow starting point adalah titik awal dari prototype. Dalam Figma, desainer dapat memilih frame pertama sebagai awal alur, misalnya Book Trip Flow.",
        ],
      },
      {
        title: "Interaction Details",
        bullets: [
          "Trigger: pemicu interaksi seperti On Click, On Drag, Hover, atau Mouse Enter.",
          "Action: aksi yang terjadi setelah interaksi, misalnya Navigate To, Scroll To, Open Overlay, atau Change To.",
          "Destination: tujuan akhir interaksi, biasanya berupa frame lain.",
          "Animation: mengatur efek perpindahan, arah, easing, dan durasi.",
        ],
      },
      {
        title: "Jenis Transisi",
        bullets: [
          "Instant: perpindahan langsung tanpa animasi.",
          "Dissolve: frame tujuan muncul perlahan di atas frame sebelumnya.",
          "Smart Animate: Figma mencocokkan layer yang sama lalu menganimasikannya.",
          "Move In / Move Out: frame masuk atau keluar dari arah tertentu.",
          "Push: frame baru mendorong frame lama.",
          "Slide In / Slide Out: frame bergerak masuk atau keluar secara halus.",
        ],
      },
      {
        title: "Pengaturan Animasi",
        bullets: [
          "Direction: menentukan arah animasi seperti kiri, kanan, atas, atau bawah.",
          "Easing: mengatur percepatan dan perlambatan animasi seperti Ease In, Ease Out, atau Ease In and Out.",
          "Duration: mengatur durasi animasi, dan 300ms sering dipakai agar cepat tapi tetap halus.",
        ],
      },
      {
        title: "Contoh Interaksi pada Aplikasi Perjalanan",
        bullets: [
          "Dari Landing Page: klik search bar ke Search, klik gambar wisata ke City Details, klik Book Now ke Booking.",
          "Dari Search Page: klik tombol kembali ke Landing Page dan klik hasil pencarian ke City Details.",
          "Dari City Details: klik tombol kembali ke halaman sebelumnya dan klik Book ke Booking.",
          "Dari Booking Page: klik tombol kembali ke halaman sebelumnya dan klik View Details ke City Details.",
        ],
      },
      {
        title: "Penggunaan Sections",
        paragraphs: [
          "Sections digunakan untuk mengelompokkan beberapa frame agar prototype lebih intuitif. Dengan Section, Figma bisa memahami pengguna datang dari halaman mana lalu mengembalikannya ke halaman yang tepat.",
        ],
      },
    ],
    takeaway:
      "Praktikum 10 mengajarkan bahwa prototype yang baik harus interaktif, realistis, mudah diuji, dan bisa menjelaskan alur aplikasi dengan jelas.",
  },
  {
    id: "praktikum-11",
    title: "Praktikum 11 — Desain Component pada Figma",
    intro: [
      "Component adalah elemen desain yang bisa digunakan berulang kali seperti tombol, card, form, input, navbar, header, footer, icon, dan elemen UI lainnya.",
      "Dengan component, desain menjadi lebih konsisten karena elemen yang sama tidak perlu dibuat ulang dari awal.",
    ],
    blocks: [
      {
        title: "Tujuan Praktikum 11",
        paragraphs: [
          "Tujuan praktikum ini adalah agar mahasiswa memahami konsep component dan reusable design, mampu membuat dan mengelola component seperti button, card, dan form, memahami penggunaan variants, menerapkan prinsip desain UI yang konsisten, serta mengimplementasikan component dalam desain interface secara terstruktur.",
        ],
      },
      {
        title: "Prototyping",
        paragraphs: [
          "Materi Praktikum 11 juga menjelaskan kembali tentang prototyping, yaitu proses membuat simulasi alur aplikasi sebelum aplikasi dikembangkan oleh developer.",
          "Ada dua metode prototyping: Paper Prototyping dan Digital Prototyping menggunakan tools seperti Figma, Adobe XD, Invision, dan Zeplin.",
        ],
      },
      {
        title: "Interaksi pada Tombol",
        bullets: [
          "Tombol Login diarahkan ke Login Page.",
          "Tombol Daftar diarahkan ke Sign Up Page.",
          "Tombol Back perlu ditambahkan agar pengguna bisa kembali ke halaman sebelumnya.",
          "Jika ada frame yang tidak bisa ditampilkan karena belum ada alurnya, flow harus diperbaiki terlebih dahulu.",
        ],
      },
      {
        title: "Kenapa Harus Menggunakan Component",
        paragraphs: [
          "Kalau tombol dibuat satu per satu sebagai group biasa, maka ketika ingin mengganti warna, bentuk, atau ukuran tombol, semua tombol harus diedit manual.",
          "Dengan component, cukup ubah main component, maka semua instance yang menggunakan component tersebut akan ikut berubah.",
        ],
      },
      {
        title: "Cara Membuat Component",
        bullets: [
          "Buat elemen desain, misalnya tombol.",
          "Gabungkan bentuk tombol dan teks.",
          "Klik Create Component.",
          "Beri nama component, misalnya Primary Button.",
          "Gunakan component dari panel Assets atau dengan copy-paste instance.",
          "Jika perlu perubahan, ubah pada component utama agar semua instance ikut menyesuaikan.",
        ],
      },
      {
        title: "Variants dan Interactive Component",
        paragraphs: [
          "Variants digunakan untuk mengelompokkan beberapa variasi component dalam satu component set, misalnya default, hover, pressed, disabled, small, medium, large, light mode, dan dark mode.",
          "Interactive components memungkinkan interaksi prototype dibuat langsung di dalam component set sehingga tidak perlu membuat koneksi berulang di setiap screen.",
        ],
      },
    ],
    takeaway:
      "Praktikum 11 mengajarkan bahwa component sangat penting karena membuat desain lebih cepat, konsisten, reusable, dan mudah diperbarui.",
  },
  {
    id: "praktikum-12",
    title: "Praktikum 12 — Variable pada Figma",
    intro: [
      "Variable pada Figma adalah sistem untuk menyimpan nilai desain secara terpusat, seperti warna, angka, ukuran, spacing, sizing, typography, dan nilai lain yang sering digunakan berulang.",
      "Dengan variable, desainer tidak perlu mengubah nilai satu per satu secara manual di banyak elemen.",
    ],
    blocks: [
      {
        title: "Tujuan Praktikum 12",
        paragraphs: [
          "Tujuan Praktikum 12 adalah agar mahasiswa memahami konsep variable, mampu membuat dan mengelola variable seperti color, typography, spacing, dan sizing, menerapkan variable dalam component dan layout, serta mengimplementasikan variable agar desain mudah dikembangkan, dipelihara, dan diskalakan.",
        ],
      },
      {
        title: "Manfaat Variable",
        bullets: [
          "Konsistensi Desain: semua elemen menggunakan nilai yang sama dari satu sumber.",
          "Efisiensi Perubahan: perubahan cukup dilakukan pada variable.",
          "Mudah Dikembangkan: project besar lebih mudah dikelola.",
          "Mendukung Light Mode dan Dark Mode.",
          "Mendukung Design System yang lebih profesional.",
        ],
      },
      {
        title: "Variable untuk Light Mode dan Dark Mode",
        paragraphs: [
          "Dalam Praktikum 12, variable digunakan untuk membuat mode terang dan gelap agar desain lebih akomodatif terhadap kenyamanan visual pengguna.",
        ],
        bullets: [
          "Light Mode memakai background terang dan teks gelap.",
          "Dark Mode memakai background gelap dan teks terang.",
        ],
      },
      {
        title: "Langkah 1 — Membuat Variable Warna / Colors",
        bullets: [
          "Grey/50",
          "Grey/100",
          "Grey/200",
          "Grey/900",
          "Brand/Primary",
          "Brand/Secondary",
        ],
      },
      {
        title: "Langkah 2 — Membuat Tokens",
        bullets: [
          "Text/Primary",
          "Text/Secondary",
          "Background/Primary",
          "Background/Secondary",
          "Border/Primary",
          "Button/Primary",
          "Button/Text",
        ],
      },
      {
        title: "Perbedaan Colors dan Tokens",
        paragraphs: [
          "Colors atau Primitives adalah warna dasar yang menyimpan nilai asli, misalnya Grey/900 = #111111.",
          "Tokens adalah nama semantik berdasarkan fungsi, misalnya Text/Primary menggunakan Grey/900 pada Light Mode.",
          "Alurnya adalah HEX → Colors/Primitives → Tokens → UI Component.",
        ],
      },
      {
        title: "Langkah 3 — Membuat Mode Light dan Dark",
        bullets: [
          "Text/Primary: Grey/900 pada Light Mode dan Grey/50 pada Dark Mode.",
          "Background/Primary: Grey/50 pada Light Mode dan Grey/900 pada Dark Mode.",
          "Border/Primary: Grey/200 pada Light Mode dan Grey/700 pada Dark Mode.",
        ],
      },
      {
        title: "Langkah 4 — Menghubungkan Variable ke Desain",
        bullets: [
          "Pilih layer atau component.",
          "Buka panel warna seperti Fill atau Stroke.",
          "Masuk ke Libraries.",
          "Pilih token yang sesuai.",
          "Terapkan token ke elemen desain.",
          "Judul memakai Text/Primary, deskripsi memakai Text/Secondary, card memakai Background/Primary, border card memakai Border/Primary, dan tombol memakai Button/Primary.",
        ],
      },
      {
        title: "Langkah 5 — Mengganti Mode",
        bullets: [
          "Light",
          "Dark",
          "Auto",
        ],
      },
    ],
    takeaway:
      "Praktikum 12 mengajarkan bahwa variable membuat desain lebih rapi, fleksibel, dan mudah dikembangkan serta sangat penting untuk project besar.",
  },
  {
    id: "pertemuan-12",
    title: "Pertemuan 12 — Sistem Variable, Colors, Tokens, dan Workflow",
    intro: [
      "Pertemuan 12 menjelaskan bahwa variable membuat desain web lebih maju karena tidak lagi hanya menggunakan palet warna statis.",
      "Variable membuat desain memiliki sistem logika yang terintegrasi dan lebih efisien untuk skala project yang besar.",
    ],
    blocks: [
      {
        title: "Mengapa Beralih ke Sistem Variable",
        bullets: [
          "Akomodatif: desain dapat menyesuaikan preferensi visual pengguna seperti mode terang atau gelap.",
          "Logika Terintegrasi: seluruh gaya desain dapat dipusatkan dalam satu sistem.",
          "Efisiensi Skala: desainer tidak perlu menduplikasi banyak screen hanya untuk versi dark mode.",
        ],
      },
      {
        title: "Arsitektur Sistem Variable",
        bullets: [
          "Lapis 1 — Nilai Absolut: kode HEX seperti #F8F8F8 atau #111111.",
          "Lapis 2 — Colors / Primitives: warna dasar seperti Grey/100, Grey/200, Grey/900.",
          "Lapis 3 — Tokens / Semantic: fungsi warna seperti Text/Primary, Background/Primary, Border/Primary.",
          "Lapis 4 — UI Component: component menggunakan token, bukan langsung memakai HEX.",
        ],
      },
      {
        title: "Workflow Recap",
        bullets: [
          "Define / Warna: simpan HEX murni sebagai Color Primitives.",
          "Assign / Token: tautkan warna dasar ke fungsi UI spesifik seperti Text/Primary.",
          "Expand / Mode: buat mode Light dan Dark dengan nilai token yang berbeda.",
          "Apply / Desain: warnai UI component hanya menggunakan Tokens, bukan HEX langsung.",
        ],
      },
    ],
    takeaway:
      "Pertemuan 12 menegaskan bahwa design system yang baik bukan cuma soal warna, tetapi juga soal logika yang membuat seluruh UI lebih mudah dirawat dan diskalakan.",
  },
];

export const materiRelationship = [
  "Praktikum 8 membangun fondasi landing page yang terarah, punya CTA, social proof, benefits, features, grid, style, dan auto layout.",
  "Praktikum 9 melatih pembuatan halaman panjang yang nyaman digulir dengan vertical scroll, horizontal scroll, clip content, fixed position, dan preserve scroll.",
  "Praktikum 10 menambahkan animasi dan interaksi agar prototype interaktif dan realistis dengan trigger, action, destination, transition, easing, duration, dan sections.",
  "Praktikum 11 memfokuskan reusable design melalui component, variants, dan alur prototype yang lebih mudah diuji.",
  "Praktikum 12 dan Pertemuan 12 menyatukan semuanya ke dalam sistem variable, colors, tokens, modes, serta dukungan Light/Dark Mode.",
];

export const materiApplicationExample = [
  "Pada Praktikum 8, aplikasi e-commerce bisa punya hero section, kategori produk, produk unggulan, testimoni, manfaat, fitur, dan CTA.",
  "Pada Praktikum 9, halaman dibuat bisa discroll dari atas ke bawah dan kategori produk bisa dibuat horizontal scroll seperti carousel.",
  "Pada Praktikum 10, tombol 'Lihat Produk' diarahkan ke halaman detail produk dengan animasi yang halus dan tombol back yang jelas.",
  "Pada Praktikum 11, tombol, card produk, navbar, form login, dan form register dibuat sebagai component agar mudah digunakan ulang.",
  "Pada Praktikum 12, warna brand, background, teks, border, dan tombol dibuat sebagai variable dan token agar aplikasi mendukung Light Mode dan Dark Mode tanpa desain ulang.",
];

export const materiConclusion = [
  "Materi Praktikum 8 sampai 12 memberikan pemahaman lengkap tentang proses desain UI/UX menggunakan Figma, dari tahap dasar sampai sistem desain yang lebih matang.",
  "Tahap awal mengajarkan cara membuat landing page yang fokus pada tujuan dan konversi, lalu berkembang ke halaman panjang berbasis scrolling.",
  "Setelah itu, desain dikembangkan menjadi prototype interaktif dengan animasi, trigger, action, destination, dan transition.",
  "Materi berikutnya memperkenalkan component agar elemen desain reusable, konsisten, dan lebih mudah diperbarui.",
  "Terakhir, variable, colors, tokens, dan modes membuat desain lebih sistematis, konsisten, fleksibel, dan mendukung Light Mode serta Dark Mode.",
];
