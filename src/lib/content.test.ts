import { describe, expect, it } from "vitest";

import {
  extractEssayQuestions,
  extractImportantTerms,
  extractMultipleChoiceQuestions,
  extractSections,
  readProjectMarkdown,
} from "@/lib/content";

describe("content helpers", () => {
  it("extracts major sections from materi markdown", () => {
    const materi = readProjectMarkdown("materi.md");
    const sections = extractSections(materi);

    expect(sections.length).toBeGreaterThan(6);
    expect(sections.some((section) => section.title.includes("Praktikum 8"))).toBe(true);
    expect(sections.some((section) => section.title.includes("Pertemuan 12"))).toBe(true);
  });

  it("extracts important terms from materi markdown", () => {
    const materi = readProjectMarkdown("materi.md");
    const terms = extractImportantTerms(materi);

    expect(terms.length).toBeGreaterThan(10);
    expect(terms.find((term) => term.term === "Landing Page")?.description).toContain("Halaman");
  });

  it("extracts multiple choice and essay questions from latihan markdown", () => {
    const latihan = readProjectMarkdown("latihan.md");
    const multipleChoice = extractMultipleChoiceQuestions(latihan);
    const essays = extractEssayQuestions(latihan);

    expect(multipleChoice).toHaveLength(40);
    expect(multipleChoice[0]).toMatchObject({ number: 1, answer: "B" });
    expect(essays).toHaveLength(5);
    expect(essays[0]?.number).toBe(41);
  });
});
