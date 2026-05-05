import fs from "node:fs";
import path from "node:path";

export type QuizQuestion = {
  number: number;
  prompt: string;
  options: string[];
  answer?: string;
};

export type EssayQuestion = {
  number: number;
  prompt: string;
};

export function readProjectMarkdown(fileName: string) {
  const filePath = path.join(process.cwd(), fileName);
  return fs.readFileSync(filePath, "utf8");
}

export function extractSections(markdown: string) {
  const headingMatches = Array.from(markdown.matchAll(/^#\s+(.+)$/gm));

  return headingMatches.map((match, index) => {
    const start = match.index ?? 0;
    const end = headingMatches[index + 1]?.index ?? markdown.length;
    const content = markdown.slice(start, end).trim();

    return {
      title: match[1].trim(),
      content,
    };
  });
}

export function extractImportantTerms(markdown: string) {
  const lines = markdown.split("\n");
  const start = lines.findIndex((line) => line.trim() === "# Istilah-Istilah Penting");

  if (start === -1) return [];

  const terms = [] as { term: string; description: string }[];

  for (let index = start + 1; index < lines.length; index += 1) {
    const line = lines[index].trim();

    if (line === "---" || line.startsWith("# Contoh Penerapan")) {
      break;
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      const description = lines[index + 1]?.trim();

      if (description) {
        terms.push({
          term: line.replace(/^\*\*|\*\*$/g, "").trim(),
          description,
        });
      }
    }
  }

  return terms;
}

export function extractMultipleChoiceQuestions(markdown: string) {
  const lines = markdown.split("\n");
  const questions: QuizQuestion[] = [];
  const answerMap = new Map<number, string>();

  for (const line of lines) {
    const match = line.trim().match(/^(\d+)\.\s([A-D])$/);

    if (match) {
      answerMap.set(Number(match[1]), match[2]);
    }
  }

  for (let index = 0; index < lines.length; index += 1) {
    const promptMatch = lines[index].trim().match(/^\*\*(\d+)\.\s(.+?)\*\*$/);

    if (!promptMatch) continue;

    const number = Number(promptMatch[1]);

    if (number > 40) continue;

    const options = [lines[index + 1], lines[index + 2], lines[index + 3], lines[index + 4]]
      .map((line) => line?.trim())
      .filter(Boolean)
      .map((line) => line.replace(/^[A-D]\.\s/, ""));

    if (options.length === 4) {
      questions.push({
        number,
        prompt: promptMatch[2].trim(),
        options,
        answer: answerMap.get(number),
      });
    }
  }

  return questions;
}

export function extractEssayQuestions(markdown: string) {
  const essayBlock = markdown.match(/## B\. Essay([\s\S]*?)---/);

  if (!essayBlock) return [];

  return Array.from(essayBlock[1].matchAll(/\*\*(4[1-5])\.\s(.*?)\*\*/g)).map((match) => ({
    number: Number(match[1]),
    prompt: match[2].trim(),
  })) as EssayQuestion[];
}
