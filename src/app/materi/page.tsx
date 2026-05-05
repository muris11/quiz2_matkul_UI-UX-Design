import { SiteShell } from "@/components/site-shell";
import {
  materiApplicationExample,
  materiConclusion,
  materiOverview,
  materiRelationship,
  materiTopics,
} from "@/lib/site-data";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function MateriPage() {
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
                {materiTopics.map((topic) => (
                  <a
                    key={topic.id}
                    href={`#${slugify(topic.title)}`}
                    className="rounded-[1.1rem] border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm leading-7 text-[var(--color-soft-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                  >
                    {topic.title}
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
              {materiOverview.outcomes.map((item, index) => (
                <div key={`outcome-${index}`} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-4 py-4">
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
                <div key={`relationship-${index}`} className="flex gap-4 rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-4 py-4">
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
          {materiTopics.map((topic, index) => (
            <article key={topic.id} id={slugify(topic.title)} className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 lg:p-8">
              <div className="border-b border-[var(--color-line)] pb-5">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Topik {index + 1}</p>
                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{topic.title}</h2>
              </div>

              <div className="mt-6 space-y-3">
                {topic.intro.map((paragraph, paragraphIndex) => (
                  <div key={`${topic.id}-intro-${paragraphIndex}`} className="rounded-[1.25rem] border border-[var(--color-line)] bg-slate-950/20 px-5 py-4">
                    <p className="text-sm leading-8 text-[var(--color-soft-ink)] sm:text-base">{paragraph}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-5">
                {topic.blocks.map((block, blockIndex) => (
                  <section key={`${topic.id}-block-${blockIndex}`} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] p-5">
                    <h3 className="text-lg font-semibold text-[var(--color-ink)]">{block.title}</h3>

                    {block.paragraphs ? (
                      <div className="mt-4 space-y-3">
                        {block.paragraphs.map((paragraph, paragraphIndex) => (
                          <p key={`${topic.id}-block-${blockIndex}-paragraph-${paragraphIndex}`} className="text-sm leading-8 text-[var(--color-soft-ink)] sm:text-base">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : null}

                    {block.bullets ? (
                      <div className="mt-4 space-y-3">
                        {block.bullets.map((bullet, bulletIndex) => (
                          <div key={`${topic.id}-block-${blockIndex}-bullet-${bulletIndex}`} className="flex gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-4">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                            <p className="flex-1 text-sm leading-7 text-[var(--color-soft-ink)]">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="mt-6 rounded-[1.25rem] border border-[var(--color-line)] bg-slate-950/20 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">Inti Praktikum</p>
                <p className="mt-3 text-sm leading-8 text-[var(--color-ink)] sm:text-base">{topic.takeaway}</p>
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
                <div key={`application-${index}`} className="flex gap-4 rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-4 py-4">
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
              {materiConclusion.map((item, index) => (
                <div key={`conclusion-${index}`} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-4 py-4">
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
