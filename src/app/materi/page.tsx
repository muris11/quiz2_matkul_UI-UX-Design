import { SiteShell } from "@/components/site-shell";
import {
  detailedMateriSections,
  materiApplicationExample,
  materiConclusion,
  materiOverview,
  materiRelationship,
} from "@/lib/site-data";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function isListLike(line: string) {
  return line.startsWith("*") || /^\d+\./.test(line) || line.startsWith("|");
}

function normalizeParagraph(line: string) {
  return line.replace(/^\*\s*/, "• ").trim();
}

export default function MateriPage() {
  const practicalSections = detailedMateriSections.filter(
    (section) => !section.title.includes("Hubungan Antar Praktikum") && !section.title.includes("Contoh Penerapan") && !section.title.includes("Kesimpulan Materi"),
  );

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(16,28,49,0.95),rgba(8,17,31,0.92))] p-6 shadow-[0_30px_120px_rgba(2,8,23,0.42)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted)]">Halaman Materi</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Materi lengkap UI/UX Design Praktikum 8-12</h1>
              <p className="mt-5 text-base leading-8 text-[var(--color-soft-ink)] sm:text-lg">{materiOverview.description}</p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/[0.04] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">Daftar Materi</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {practicalSections.map((section) => (
                  <a
                    key={section.title}
                    href={`#${slugify(section.title)}`}
                    className="rounded-[1.1rem] border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm leading-7 text-[var(--color-soft-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 lg:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Hasil Belajar</p>
            <h2 className="mt-3 text-2xl font-semibold">Ringkasan pembelajaran utama</h2>
            <div className="mt-5 space-y-3">
              {materiOverview.outcomes.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-4 py-4">
                  <p className="text-sm leading-7 text-[var(--color-soft-ink)]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 lg:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Hubungan Antar Praktikum</p>
            <h2 className="mt-3 text-2xl font-semibold">Alur materi dari dasar sampai design system</h2>
            <div className="mt-5 space-y-3">
              {materiRelationship.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-4 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-sm font-semibold text-[var(--color-accent)]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-[var(--color-soft-ink)]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {practicalSections.map((section, index) => (
            <article key={section.title} id={slugify(section.title)} className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 lg:p-8">
              <div className="border-b border-[var(--color-line)] pb-5">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Topik {index + 1}</p>
                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{section.title}</h2>
              </div>

              {section.intro.length > 0 ? (
                <div className="mt-6 space-y-3">
                  {section.intro.map((paragraph) => (
                    <div key={paragraph} className="rounded-[1.25rem] border border-[var(--color-line)] bg-slate-950/20 px-5 py-4">
                      <p className="text-sm leading-8 text-[var(--color-soft-ink)] sm:text-base">{normalizeParagraph(paragraph)}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 grid gap-5">
                {section.subsections.map((subsection) => (
                  <section key={`${section.title}-${subsection.title}`} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] p-5">
                    <h3 className="text-lg font-semibold text-[var(--color-ink)]">{subsection.title}</h3>
                    <div className="mt-4 space-y-3">
                      {subsection.paragraphs.map((paragraph) =>
                        isListLike(paragraph) ? (
                          <div key={paragraph} className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-4">
                            <p className="text-sm leading-7 text-[var(--color-soft-ink)]">{normalizeParagraph(paragraph)}</p>
                          </div>
                        ) : (
                          <p key={paragraph} className="text-sm leading-8 text-[var(--color-soft-ink)] sm:text-base">
                            {paragraph}
                          </p>
                        ),
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 lg:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Contoh Penerapan</p>
            <h2 className="mt-3 text-2xl font-semibold">Implementasi materi dalam project UI/UX</h2>
            <div className="mt-5 space-y-3">
              {materiApplicationExample.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-4 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-sm font-semibold text-[var(--color-accent)]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-[var(--color-soft-ink)]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 lg:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Kesimpulan Materi</p>
            <h2 className="mt-3 text-2xl font-semibold">Inti besar yang perlu dibawa dari modul ini</h2>
            <div className="mt-5 space-y-3">
              {materiConclusion.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-4 py-4">
                  <p className="text-sm leading-7 text-[var(--color-soft-ink)]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
