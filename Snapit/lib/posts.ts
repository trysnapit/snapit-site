import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function requiredText(value: unknown, filename: string, field: "title" | "summary"): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Blog post ${filename} is missing a ${field}.`);
  }
  return value.trim();
}

function requiredDate(value: unknown, filename: string): string {
  if (typeof value === "string" && DATE.test(value)) {
    return value;
  }
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  throw new Error(`Blog post ${filename} is missing a YYYY-MM-DD date.`);
}

function readPost(filename: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  return {
    slug: filename.slice(0, -3),
    title: requiredText(data.title, filename, "title"),
    date: requiredDate(data.date, filename),
    summary: requiredText(data.summary, filename, "summary"),
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((filename) => filename.endsWith(".md") && filename !== "README.md")
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
