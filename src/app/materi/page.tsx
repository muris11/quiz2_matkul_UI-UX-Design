import { SiteShell } from "@/components/site-shell";
import {
  curatedMateriTopics,
  detailedMateriSections,
  materiApplicationExample,
  materiConclusion,
  materiOverview,
  materiRelationship,
} from "@/lib/site-data";

export default function MateriPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(16,28,49,0.95),rgba(8,17,31,0.92))] p-6 shadow-[0_30px_120px_rgba(2,8,23,0.42)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted)]">Halaman Materi</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Materi lengkap UI/UX Design Praktikum 8-12</h1>
              <p className="mt-5 text-base leading-8 text-[var(--color-soft-ink)] sm:text-lg">{materiOverview.description}</p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/[0.04] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">Hasil Belajar</p>
              <div className="mt-4 space-y-3">
                {materiOverview.outcomes.map((item) => (
                  <div key={item} className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm leading-7 text-[var(--color-soft-ink)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 lg:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Urutan Fokus</p>
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

          <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 lg:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Daftar Topik</p>
            <h2 className="mt-3 text-2xl font-semibold">Materi yang dibahas</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {curatedMateriTopics.map((topic) => (
                <a
                  key={topic.id}
                  href={`#${topic.id}`}
                  className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-4 py-4 text-sm font-medium leading-7 text-[var(--color-soft-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                >
                  {topic.title}
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {curatedMateriTopics.map((topic, index) => (
            <article key={topic.id} id={topic.id} className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 lg:p-8">
              <div className="flex flex-col gap-4 border-b border-[var(--color-line)] pb-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Topik {index + 1}</p>
                  <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{topic.title}</h2>
                  <p className="mt-3 text-base leading-8 text-[var(--color-accent)]">{topic.focus}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4">
                  <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-slate-950/20 px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">Ringkasan</p>
                    <p className="mt-3 text-sm leading-8 text-[var(--color-soft-ink)] sm:text-base">{topic.summary}</p>
                  </div>

                  {topic.objective ? (
                    <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-5 py-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">Tujuan Pembelajaran</p>
                      <p className="mt-3 text-sm leading-8 text-[var(--color-soft-ink)] sm:text-base">{topic.objective}</p>
                    </div>
                  ) : null}

                  <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">Takeaway</p>
                    <p className="mt-3 text-sm leading-8 text-[var(--color-ink)] sm:text-base">{topic.takeaway}</p>
                  </div>

                  {detailedMateriSections
                    .filter((section) => section.title === topic.title)
                    .map((section) => (
                      <div key={section.title} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-5 py-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">Uraian Lengkap</p>
                        <div className="mt-4 space-y-3">
                          {section.intro.map((paragraph) => (
                            <p key={paragraph} className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-4 text-sm leading-7 text-[var(--color-soft-ink)]">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-5 py-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">Poin Inti</p>
                    <div className="mt-4 space-y-3">
                      {topic.points.map((point) => (
                        <div key={point} className="flex gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-4">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                          <p className="flex-1 text-sm leading-7 text-[var(--color-soft-ink)]">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {topic.tools ? (
                    <div className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-5 py-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">Tools / Konsep</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {topic.tools.map((tool) => (
                          <span key={tool} className="rounded-full border border-[var(--color-line)] bg-slate-950/25 px-3 py-2 text-xs font-medium tracking-[0.08em] text-[var(--color-soft-ink)]">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {topic.details?.map((detail) => (
                    <div key={detail.title} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-5 py-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">{detail.title}</p>
                      <div className="mt-4 space-y-3">
                        {detail.items.map((item) => (
                          <div key={item} className="flex gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-4">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                            <p className="flex-1 text-sm leading-7 text-[var(--color-soft-ink)]">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {detailedMateriSections
                    .filter((section) => section.title === topic.title)
                    .flatMap((section) => section.subsections)
                    .map((subsection) => (
                      <div key={`${topic.id}-${subsection.title}`} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] px-5 py-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">{subsection.title}</p>
                        <div className="mt-4 space-y-3">
                          {subsection.paragraphs.map((paragraph) => (
                            <div key={paragraph} className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-4">
                              <p className="text-sm leading-7 text-[var(--color-soft-ink)]">{paragraph}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
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
