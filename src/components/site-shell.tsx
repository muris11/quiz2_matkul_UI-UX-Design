import Link from "next/link";

const navigation = [
  { href: "/", label: "Beranda" },
  { href: "/materi", label: "Materi" },
  { href: "/latihan", label: "Latihan" },
  { href: "/ringkasan", label: "Ringkasan" },
];

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[color:color-mix(in_oklab,var(--color-surface)_84%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] text-sm font-semibold text-[var(--color-accent)] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              UI
            </span>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-muted)]">Quiz 2</p>
              <p className="text-lg font-semibold">UI/UX Design Learning Hub</p>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center justify-end gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-[var(--color-soft-ink)] transition hover:border-[var(--color-line)] hover:bg-white/5 hover:text-[var(--color-ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Website belajar UI/UX Design berbasis materi Praktikum 8-12.</p>
          <p>Next.js 16 + Tailwind CSS 4 + siap deploy ke Vercel.</p>
        </div>
      </footer>
    </div>
  );
}
