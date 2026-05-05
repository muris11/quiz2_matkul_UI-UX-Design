import { SiteShell } from "@/components/site-shell";
import { keyTerms, materiSections } from "@/lib/site-data";

export default function RingkasanPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted)]">Ringkasan Inti</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Ringkasan & istilah penting</h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-soft-ink)]">
            Halaman ini memadatkan inti materi dan istilah utama agar kamu cepat melakukan review konsep tanpa harus membaca seluruh modul dari atas ke bawah.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6">
            <h2 className="text-2xl font-semibold">Alur pembelajaran</h2>
            <div className="mt-5 space-y-4">
              {materiSections.slice(1, 7).map((section) => (
                <div key={section.title} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] p-4">
                  <h3 className="text-lg font-medium">{section.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-soft-ink)]">
                    {section.content.split("\n").slice(1, 5).join(" ").slice(0, 180)}...
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6">
            <h2 className="text-2xl font-semibold">Istilah penting</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {keyTerms.map((term) => (
                <div key={term.term} className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/[0.03] p-4">
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
