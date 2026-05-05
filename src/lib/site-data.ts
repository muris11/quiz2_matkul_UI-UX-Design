import {
  extractEssayQuestions,
  extractImportantTerms,
  extractMultipleChoiceQuestions,
  extractSections,
  readProjectMarkdown,
} from "@/lib/content";

const materiMarkdown = readProjectMarkdown("materi.md");
const latihanMarkdown = readProjectMarkdown("latihan.md");

export const materiSections = extractSections(materiMarkdown);
export const keyTerms = extractImportantTerms(materiMarkdown);
export const multipleChoiceQuestions = extractMultipleChoiceQuestions(latihanMarkdown);
export const essayQuestions = extractEssayQuestions(latihanMarkdown);

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

export type MateriTopic = {
  id: string;
  title: string;
  focus: string;
  summary: string;
  objective?: string;
  points: string[];
  details?: {
    title: string;
    items: string[];
  }[];
  tools?: string[];
  takeaway: string;
};

export const materiOverview = {
  title: "Ringkasan Super Lengkap Materi UI/UX Design Praktikum 8-12",
  description:
    "Materi ini membahas alur pembuatan desain antarmuka di Figma secara bertahap, mulai dari menyusun landing page sampai membangun sistem variable, tokens, dan light/dark mode. Fokus utamanya bukan hanya tampilan yang bagus, tetapi struktur yang jelas, pengalaman pengguna yang rapi, dan konsistensi desain yang siap dikembangkan.",
  outcomes: [
    "Memahami struktur landing page yang conversion-oriented dan mudah dipahami pengguna.",
    "Menyusun scrolling page yang nyaman dilihat dari atas ke bawah.",
    "Menerapkan animasi, interaksi, dan prototype flow yang lebih realistis.",
    "Membangun component reusable agar desain konsisten dan efisien.",
    "Menyusun design tokens dan modes untuk Light Mode dan Dark Mode.",
  ],
};

export const curatedMateriTopics: MateriTopic[] = [
  {
    id: "praktikum-8",
    title: "Praktikum 8 — Desain Landing Page",
    focus: "Menyusun halaman promosi yang fokus pada satu tujuan utama.",
    summary:
      "Landing page adalah halaman yang dirancang untuk mendorong satu aksi spesifik seperti daftar, beli, atau coba gratis. Karena tujuannya tunggal, isi, visual, dan CTA harus mendukung konversi secara langsung tanpa distraksi yang tidak perlu.",
    objective:
      "Mahasiswa diharapkan memahami workflow desain landing page, menyusun user flow dan struktur halaman, menerapkan user-centered design, grid system, style, component, dan auto layout untuk menghasilkan halaman yang rapi dan punya hierarki visual jelas.",
    points: [
      "Struktur inti biasanya terdiri dari hero section, call to action, social proof, benefits, features, dan repeated CTA.",
      "Visual hierarchy harus jelas: judul utama paling menonjol, lalu deskripsi, visual pendukung, dan tombol aksi.",
      "Navigasi sebaiknya sederhana dan tidak mengalihkan fokus pengguna dari tujuan utama halaman.",
      "Desain harus tetap konsisten dalam warna, tipografi, icon, dan pola layout agar terasa profesional.",
    ],
    details: [
      {
        title: "Struktur landing page",
        items: [
          "Hero atau summary section menjadi kesan pertama dan harus langsung menjelaskan nilai utama produk.",
          "CTA perlu ditempatkan di beberapa titik agar pengguna mudah mengambil aksi saat sudah yakin.",
          "Social proof seperti testimoni, rating, review, atau logo partner meningkatkan kepercayaan pengguna.",
          "Benefits lebih menekankan keuntungan untuk pengguna, sedangkan features menjelaskan kemampuan produk atau layanan.",
        ],
      },
      {
        title: "Tools Figma yang dipakai",
        items: [
          "Frame dipakai sebagai area kerja utama untuk halaman, section, atau komponen.",
          "Grid 12 kolom membantu layout web tetap seimbang dan fleksibel.",
          "Text style dan color style menjaga konsistensi tipografi serta warna di seluruh desain.",
          "Auto layout membantu elemen menyesuaikan isi, padding, dan ukuran dengan lebih responsif.",
        ],
      },
    ],
    tools: ["Frame", "Grid system 12 kolom", "Text style", "Color style", "Component", "Auto layout"],
    takeaway: "Landing page yang baik itu terarah, persuasif, dan membuat pengguna cepat paham harus melakukan apa.",
  },
  {
    id: "praktikum-9",
    title: "Praktikum 9 — Scrolling",
    focus: "Mengatur konten panjang agar nyaman dibaca dan diikuti secara bertahap.",
    summary:
      "Scrolling UI menyusun informasi secara vertikal sehingga pengguna cukup menggulir layar untuk mengikuti alur konten. Pola ini cocok untuk landing page panjang, katalog, feed, dan mobile interface yang mengutamakan alur top-to-bottom.",
    objective:
      "Tujuan praktikum ini adalah memahami workflow desain landing page berbasis scrolling, menyusun user flow vertikal, membuat section yang runtut, serta menerapkan grid, style, component, dan auto layout pada halaman panjang.",
    points: [
      "Informasi paling penting ditempatkan di atas, lalu bagian pendukung menyusul ke bawah secara bertahap.",
      "Horizontal scrolling cocok untuk carousel dan kategori, sedangkan vertical scrolling cocok untuk halaman panjang.",
      "Overflow scrolling hanya bekerja dengan benar pada frame, bukan group.",
      "Clip content, fixed position, dan preserve scroll position membantu pengalaman scroll terasa lebih realistis saat prototype diuji.",
    ],
    details: [
      {
        title: "Konsep utama scrolling",
        items: [
          "Scrolling UI menyampaikan informasi secara bertahap dari atas ke bawah sehingga pengguna tidak harus pindah halaman terus-menerus.",
          "Contoh urutan yang baik adalah search bar, kategori, carousel, lalu filter tanggal karena mengikuti prioritas interaksi pengguna.",
          "Prinsip top-to-bottom hierarchy membuat konten utama muncul lebih dulu sebelum detail pendukung.",
        ],
      },
      {
        title: "Hal penting saat membuat scrolling",
        items: [
          "Konten harus benar-benar overflow agar efek scrolling terasa relevan.",
          "Gunakan frame, bukan group, karena overflow behavior hanya bekerja pada frame.",
          "Jika halaman terlalu panjang, perlu penanda visual, jarak yang nyaman, dan grouping yang rapi agar pengguna tidak lelah membaca.",
        ],
      },
    ],
    tools: ["Overflow scrolling", "Clip content", "Fixed position", "Preserve scroll position"],
    takeaway: "Scrolling yang rapi membuat pengguna tidak capek dan tetap paham urutan informasi dari awal sampai akhir.",
  },
  {
    id: "praktikum-10",
    title: "Praktikum 10 — Animasi dan Interaksi",
    focus: "Membuat prototype terasa hidup dan mudah diuji alurnya.",
    summary:
      "Animasi dan interaksi digunakan untuk memperjelas perpindahan, status, dan arah flow pengguna. Tujuannya bukan sekadar dekorasi, tetapi membantu prototype terasa natural saat tombol ditekan, halaman dibuka, atau elemen berubah state.",
    objective:
      "Tujuan Praktikum 10 adalah agar mahasiswa mampu menerapkan hover, scroll effect, transition, dan microinteraction dalam prototype yang tetap berpijak pada user flow dan user-centered design.",
    points: [
      "Interaction details terdiri dari trigger, action, destination, dan animation.",
      "Transisi seperti Instant, Dissolve, Smart Animate, Push, dan Slide In dipilih sesuai konteks perpindahan.",
      "Direction, easing, dan duration memengaruhi kenyamanan interaksi. Durasi sekitar 300ms sering dipakai agar tetap cepat tapi halus.",
      "Section membantu tombol back bekerja lebih akurat karena flow dapat mengenali asal frame pengguna.",
    ],
    details: [
      {
        title: "Perencanaan prototype",
        items: [
          "Sebelum membuat prototype, desainer harus memahami target audiens, tujuan flow, dan fitur utama yang ingin diuji.",
          "Prototype perlu diuji dan diperbaiki berdasarkan feedback agar benar-benar membantu validasi alur produk.",
        ],
      },
      {
        title: "Contoh interaksi yang dipelajari",
        items: [
          "Dari landing page, pengguna bisa masuk ke search, city details, atau booking page melalui tombol dan elemen visual tertentu.",
          "Di search page, hasil pencarian dapat membawa pengguna ke city details dan tombol kembali perlu mengembalikan ke halaman sebelumnya.",
          "Animasi dipakai untuk memperhalus perpindahan, bukan sekadar membuat tampilan ramai.",
        ],
      },
    ],
    tools: ["Flow starting point", "Navigate to", "Open overlay", "Smart animate", "Sections"],
    takeaway: "Prototype yang efektif membuat orang paham alur produk bahkan sebelum aplikasi benar-benar dibangun.",
  },
  {
    id: "praktikum-11",
    title: "Praktikum 11 — Component pada Figma",
    focus: "Membuat elemen reusable agar desain lebih cepat, konsisten, dan mudah diubah.",
    summary:
      "Component adalah fondasi reusable design. Button, card, form, navbar, dan input sebaiknya tidak dibuat berulang secara manual karena perubahan kecil akan memakan waktu jika semuanya berdiri sendiri.",
    objective:
      "Tujuan praktikum ini adalah memahami reusable design, membuat dan mengelola component seperti button, card, dan form, memahami variants, dan menerapkannya secara terstruktur dalam interface.",
    points: [
      "Main component menjadi sumber perubahan, sedangkan instance tetap terhubung dan ikut ter-update otomatis.",
      "Variants dipakai untuk mengelompokkan state seperti default, hover, pressed, disabled, atau size yang berbeda.",
      "Interactive component membantu interaksi prototype dipasang satu kali di component set, bukan berulang di setiap screen.",
      "Dengan component, design system menjadi lebih konsisten dan scalable untuk project besar.",
    ],
    details: [
      {
        title: "Kenapa component penting",
        items: [
          "Kalau tombol atau card dibuat satu per satu sebagai group biasa, semua perubahan harus diedit manual dan rawan tidak konsisten.",
          "Dengan component, perubahan cukup dilakukan pada main component lalu seluruh instance ikut menyesuaikan.",
        ],
      },
      {
        title: "Cara membuat component",
        items: [
          "Mulai dari membuat elemen seperti tombol, gabungkan shape dan text, lalu ubah menjadi component utama.",
          "Beri nama yang jelas seperti Primary Button lalu gunakan lewat Assets atau instance di halaman lain.",
          "Variants mengelompokkan variasi seperti default, hover, pressed, disabled, atau dark mode dalam satu component set.",
        ],
      },
    ],
    tools: ["Create component", "Instance", "Variants", "Interactive components"],
    takeaway: "Semakin besar project, semakin penting component untuk menjaga kecepatan kerja dan konsistensi visual.",
  },
  {
    id: "praktikum-12",
    title: "Praktikum 12 — Variable pada Figma",
    focus: "Menyimpan nilai desain secara terpusat agar perubahan lebih efisien dan sistematis.",
    summary:
      "Variable memungkinkan warna, spacing, sizing, dan nilai lain dipakai dari satu sumber pusat. Dengan pendekatan ini, desain jadi lebih mudah dikembangkan, dipelihara, dan dipakai lintas mode atau tema.",
    objective:
      "Tujuan Praktikum 12 adalah memahami konsep variable, membuat color, typography, spacing, dan sizing variable, lalu menerapkannya ke component dan layout agar desain lebih scalable.",
    points: [
      "Colors atau primitives menyimpan nilai dasar seperti HEX, misalnya Grey/50 atau Grey/900.",
      "Tokens memberi nama semantik sesuai fungsi UI, misalnya Text/Primary, Background/Primary, atau Border/Primary.",
      "Modes seperti Light dan Dark memungkinkan satu token memiliki nilai berbeda sesuai konteks tampilan.",
      "Urutan kerjanya adalah HEX → Colors/Primitives → Tokens → UI Component.",
    ],
    details: [
      {
        title: "Manfaat variable",
        items: [
          "Konsistensi desain meningkat karena seluruh elemen memakai sumber nilai yang sama.",
          "Perubahan jadi efisien karena cukup mengubah variable, bukan layer satu per satu.",
          "Variable mendukung light mode dan dark mode tanpa perlu menduplikasi semua screen dari awal.",
        ],
      },
      {
        title: "Workflow variable",
        items: [
          "Mulai dari membuat koleksi warna dasar seperti Grey/50, Grey/100, Grey/900, Brand/Primary, dan Brand/Secondary.",
          "Lanjutkan dengan membuat tokens fungsional seperti Text/Primary, Background/Primary, Border/Primary, dan Button/Text.",
          "Tambahkan mode Light dan Dark agar token punya nilai berbeda sesuai konteks tampilan.",
          "Hubungkan variable ke fill, stroke, border, dan component agar desain mengikuti sistem dengan konsisten.",
        ],
      },
    ],
    tools: ["Variables", "Collections", "Tokens", "Modes", "Libraries"],
    takeaway: "Variable membuat desain lebih rapi, hemat waktu, dan siap berkembang menjadi design system yang matang.",
  },
  {
    id: "pertemuan-12",
    title: "Pertemuan 12 — Sistem Variable, Colors, Tokens, dan Workflow",
    focus: "Memahami arsitektur design system berbasis variable secara menyeluruh.",
    summary:
      "Pada tahap ini, materi menekankan alasan kenapa desainer perlu beralih dari palet statis ke sistem variable yang lebih logis, akomodatif, dan efisien untuk skala project yang lebih besar.",
    objective:
      "Pertemuan 12 merangkum alasan, arsitektur, dan workflow penggunaan variable agar desainer tidak hanya tahu caranya, tetapi juga paham logika sistem di baliknya.",
    points: [
      "Lapis pertama berisi nilai absolut seperti HEX, lalu dinaikkan ke colors/primitives, lalu tokens semantic, dan akhirnya diterapkan ke UI component.",
      "Token tidak sebaiknya langsung diisi HEX, melainkan ditautkan ke primitives agar sistem mudah diubah dari pusatnya.",
      "Workflow yang dipakai adalah define warna, assign token, expand mode, lalu apply ke desain.",
      "Pendekatan ini mendukung dark mode tanpa harus menduplikasi screen satu per satu.",
    ],
    details: [
      {
        title: "Mengapa beralih ke sistem variable",
        items: [
          "Desain menjadi lebih akomodatif terhadap preferensi visual seperti mode terang dan gelap.",
          "Logika desain lebih terintegrasi karena perubahan warna dan gaya dapat dipusatkan dalam satu sistem.",
          "Efisiensi skala meningkat karena desainer tidak perlu membuat banyak versi screen secara manual.",
        ],
      },
      {
        title: "Workflow recap",
        items: [
          "Define: simpan nilai HEX murni sebagai color primitives.",
          "Assign: tautkan warna dasar ke token semantic seperti Text/Primary atau Background/Primary.",
          "Expand: buat mode Light dan Dark dengan nilai token berbeda.",
          "Apply: semua UI component memakai tokens, bukan HEX langsung.",
        ],
      },
    ],
    takeaway: "Design system yang baik bukan cuma soal warna, tapi soal logika yang membuat seluruh UI lebih mudah dirawat dan diskalakan.",
  },
];

export const materiRelationship = [
  "Praktikum 8 membangun fondasi struktur landing page dan CTA.",
  "Praktikum 9 mengatur bagaimana konten panjang disusun dan discroll dengan nyaman.",
  "Praktikum 10 membuat flow prototype terasa interaktif dan realistis.",
  "Praktikum 11 menyusun elemen reusable dengan component dan variants.",
  "Praktikum 12 dan Pertemuan 12 mengubah desain menjadi sistem berbasis variable dan tokens.",
];

export const materiApplicationExample = [
  "Pada Praktikum 8, landing page e-commerce bisa berisi hero section, kategori produk, produk unggulan, testimoni, manfaat, fitur, dan CTA.",
  "Pada Praktikum 9, halaman dibuat scrollable dari atas ke bawah, sementara kategori produk dapat ditampilkan sebagai horizontal carousel.",
  "Pada Praktikum 10, tombol seperti 'Lihat Produk' bisa diarahkan ke halaman detail dengan animasi halus dan tombol back yang jelas.",
  "Pada Praktikum 11, tombol, card produk, navbar, form login, dan form register dibuat sebagai component reusable.",
  "Pada Praktikum 12, warna brand, background, teks, border, dan tombol dibuat sebagai variable dan token agar aplikasi mendukung Light Mode dan Dark Mode tanpa desain ulang dari nol.",
];

export const materiConclusion = [
  "Materi Praktikum 8 sampai 12 memberikan pemahaman lengkap tentang proses desain UI/UX menggunakan Figma dari tahap dasar sampai sistem desain yang lebih matang.",
  "Tahap awal mengajarkan cara membuat landing page yang fokus pada tujuan dan konversi, lalu berkembang ke halaman panjang berbasis scrolling agar informasi bisa disampaikan bertahap.",
  "Setelah itu, prototype dibuat lebih interaktif menggunakan animasi, trigger, action, destination, dan transition untuk menguji alur pengalaman pengguna.",
  "Materi berikutnya memperkenalkan component agar elemen desain reusable, lebih konsisten, dan lebih mudah diperbarui di project besar.",
  "Terakhir, variable, colors, tokens, dan modes membuat desain menjadi lebih sistematis, fleksibel, dan mendukung Light Mode serta Dark Mode secara efisien.",
];
