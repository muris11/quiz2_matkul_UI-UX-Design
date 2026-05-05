import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";
import LatihanPage from "@/app/latihan/page";
import MateriPage from "@/app/materi/page";
import RingkasanPage from "@/app/ringkasan/page";

describe("site pages", () => {
  it("renders the landing page with the primary navigation", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: /ui\/ux design praktikum 8-12/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /buka materi/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /kerjakan latihan/i })).toBeInTheDocument();
  });

  it("renders the materi page with practical sections", () => {
    render(<MateriPage />);

    expect(screen.getByRole("heading", { name: /materi lengkap/i })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { name: /praktikum 8/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /pertemuan 12/i })).toBeInTheDocument();
  });

  it("renders the latihan page with multiple choice and essay sections", () => {
    render(<LatihanPage />);

    expect(screen.getByRole("heading", { name: /latihan soal/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^pilihan ganda$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^essay$/i })).toBeInTheDocument();
  });

  it("renders the ringkasan page with key terms", () => {
    render(<RingkasanPage />);

    expect(screen.getByRole("heading", { name: /ringkasan \& istilah penting/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^landing page$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^auto layout$/i })).toBeInTheDocument();
  });
});
