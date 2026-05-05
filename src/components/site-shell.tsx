"use client";

import Link from "next/link";
import { useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[color:color-mix(in_oklab,var(--color-surface)_84%,transparent)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsMenuOpen(false)}>
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] text-sm font-semibold text-[var(--color-accent)] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                UI
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-muted)] sm:text-sm">Quiz 2</p>
                <p className="truncate text-base font-semibold sm:text-lg">UI/UX Design Learning Hub</p>
              </div>
            </Link>

            <nav className="hidden items-center justify-end gap-2 md:flex">
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

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-ink)] transition hover:bg-white/10 md:hidden"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <span className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>

          <div
            id="mobile-navigation"
            className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${isMenuOpen ? "max-h-96 pt-4 opacity-100" : "max-h-0 pt-0 opacity-0"}`}
          >
            <nav className="grid gap-2 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-3 shadow-[0_18px_60px_rgba(2,8,23,0.28)]">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-[1rem] border border-transparent px-4 py-3 text-sm font-medium text-[var(--color-soft-ink)] transition hover:border-[var(--color-line)] hover:bg-white/5 hover:text-[var(--color-ink)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
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
