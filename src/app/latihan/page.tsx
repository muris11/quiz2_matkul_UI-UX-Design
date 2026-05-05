import { SiteShell } from "@/components/site-shell";
import { essayAnswers, essayQuestions, multipleChoiceQuestions } from "@/lib/site-data";

const latihanTopics = [
  {
    id: "all",
    label: "Semua Materi",
    description: "Mencakup Praktikum 8-12 UI/UX Design.",
    matchesQuestion: () => true,
    matchesEssay: () => true,
  },
  {
    id: "praktikum-8",
    label: "Praktikum 8",
    description: "Landing page, CTA, hero section, social proof, dan visual hierarchy.",
    matchesQuestion: (number: number) => number >= 1 && number <= 12,
    matchesEssay: (number: number) => number === 41,
  },
  {
    id: "praktikum-9",
    label: "Praktikum 9",
    description: "Scrolling UI, overflow, clip content, dan preserve scroll position.",
    matchesQuestion: (number: number) => number >= 13 && number <= 21,
    matchesEssay: (number: number) => number === 42,
  },
  {
    id: "praktikum-10",
    label: "Praktikum 10",
    description: "Animasi, interaction details, transition, easing, dan flow prototype.",
    matchesQuestion: (number: number) => number >= 22 && number <= 32,
    matchesEssay: (number: number) => number === 43,
  },
  {
    id: "praktikum-11",
    label: "Praktikum 11",
    description: "Component, instance, variants, dan interactive component.",
    matchesQuestion: (number: number) => number >= 33 && number <= 37,
    matchesEssay: (number: number) => number === 44,
  },
  {
    id: "praktikum-12",
    label: "Praktikum 12",
    description: "Variable, colors, tokens, modes, dan Light/Dark Mode.",
    matchesQuestion: (number: number) => number >= 38 && number <= 40,
    matchesEssay: (number: number) => number === 45,
  },
];

function getTopicLabelForQuestion(number: number) {
  return latihanTopics.find((topic) => topic.id !== "all" && topic.matchesQuestion(number))?.label ?? "Materi Umum";
}

function getTopicLabelForEssay(number: number) {
  return latihanTopics.find((topic) => topic.id !== "all" && topic.matchesEssay(number))?.label ?? "Materi Umum";
}

export default function LatihanPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-muted)]">Halaman Latihan</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Latihan soal UI/UX Design</h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-soft-ink)]">
            Bagian ini merangkum 40 soal pilihan ganda dan 5 soal essay agar latihan belajar terasa terstruktur. Cocok dipakai untuk review sebelum kuis atau presentasi.
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Soal Sesuai Materi</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {latihanTopics.map((topic) => (
              <article key={topic.id} className="rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-4">
                <p className="text-sm font-semibold text-[var(--color-accent)]">{topic.label}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-soft-ink)]">{topic.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Pilihan Ganda</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {multipleChoiceQuestions.map((question) => (
              <article key={question.number} className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-[var(--color-accent)]">Soal {question.number}</p>
                  <span className="rounded-full border border-[var(--color-line)] bg-slate-950/25 px-3 py-1 text-xs font-medium tracking-[0.08em] text-[var(--color-soft-ink)]">
                    {getTopicLabelForQuestion(question.number)}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-medium leading-7">{question.prompt}</h3>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-soft-ink)]">
                  {question.options.map((option, index) => (
                    <li key={`${question.number}-${index}`} className="rounded-2xl border border-[var(--color-line)] px-4 py-3">
                      {String.fromCharCode(65 + index)}. {option}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">Kunci: {question.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Essay</h2>
          <div className="mt-6 grid gap-5">
            {essayQuestions.map((question) => {
              const matchingAnswer = essayAnswers.find((item) => item.number === question.number);

              return (
                <article key={question.number} className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-[var(--color-accent)]">Essay {question.number}</p>
                    <span className="rounded-full border border-[var(--color-line)] bg-slate-950/25 px-3 py-1 text-xs font-medium tracking-[0.08em] text-[var(--color-soft-ink)]">
                      {getTopicLabelForEssay(question.number)}
                    </span>
                  </div>
                  <p className="mt-3 text-base leading-8 text-[var(--color-soft-ink)]">{question.prompt}</p>

                  {matchingAnswer ? (
                    <div className="mt-5 rounded-[1.25rem] border border-[var(--color-line)] bg-slate-950/20 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">Contoh Jawaban</p>
                      <p className="mt-3 text-sm leading-8 text-[var(--color-soft-ink)]">{matchingAnswer.answer}</p>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </SiteShell>
  );
}
