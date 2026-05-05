import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { highlights, keyTerms, materiTopics, multipleChoiceQuestions } from "@/lib/site-data";

const featuredSections = materiTopics.filter(
  (section) =>
    section.title.includes("Praktikum 8") ||
    section.title.includes("Praktikum 9") ||
    section.title.includes("Praktikum 10") ||
    section.title.includes("Praktikum 11") ||
    section.title.includes("Praktikum 12"),
);

export default function HomePage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(16,28,49,0.96),rgba(9,18,33,0.92))] p-6 shadow-[0_30px_120px_rgba(2,8,23,0.45)] sm:p-8 lg:p-10">
            <span className="inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-glow)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-soft-ink)]">
              Website Materi dan Latihan
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              UI/UX Design Praktikum 8-12 dalam satu website yang rapi, jelas, dan responsif.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-soft-ink)] sm:text-lg">
              Isi website ini disusun dari file <code>materi.md</code> dan <code>latihan.md</code> menjadi pengalaman belajar modern.
              Kamu bisa baca ringkasan materi, pahami istilah penting, dan langsung latihan soal dalam struktur yang nyaman di desktop maupun mobile.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/materi"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--color-accent-strong)]"
              >
                Buka Materi
              </Link>
              <Link
                href="/latihan"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:bg-white/10"
              >
                Kerjakan Latihan
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 shadow-[0_18px_55px_rgba(3,7,18,0.25)]"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted)]">{item.label}</p>
                <h2 className="mt-3 text-3xl font-semibold text-[var(--color-ink)]">{item.value}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-soft-ink)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted)]">Cakupan Materi</p>
            <h2 className="mt-3 text-3xl font-semibold">Urutan belajar dari landing page sampai design system</h2>
          </div>
          <Link href="/ringkasan" className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-strong)]">
            Lihat ringkasan istilah
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {featuredSections.map((section) => (
            <article key={section.title} className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6">
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-soft-ink)]">
                {section.intro.join(" ").slice(0, 240)}
                ...
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted)]">Preview Latihan</p>
            <h2 className="mt-3 text-3xl font-semibold">45 soal untuk cek pemahaman</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-soft-ink)]">
              Halaman latihan menampilkan soal pilihan ganda lengkap dengan opsi jawaban serta bagian essay untuk latihan penjelasan konsep.
            </p>
            <div className="mt-6 rounded-[1.5rem] border border-[var(--color-line)] bg-slate-950/30 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Contoh soal</p>
              <p className="mt-3 text-base font-medium leading-7">{multipleChoiceQuestions[0]?.prompt}</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-soft-ink)]">
                {multipleChoiceQuestions[0]?.options.map((option) => (
                  <li key={option} className="rounded-2xl border border-[var(--color-line)] px-4 py-3">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted)]">Istilah Penting</p>
            <h2 className="mt-3 text-3xl font-semibold">Kosakata inti yang sering muncul dalam modul</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {keyTerms.slice(0, 8).map((term) => (
                <div key={term.term} className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/[0.03] p-4">
                  <h3 className="text-base font-semibold">{term.term}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-soft-ink)]">{term.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
