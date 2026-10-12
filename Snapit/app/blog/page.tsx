import type { Metadata } from "next";
import Link from "next/link";
import { PostDate } from "@/components/blog/post-date";
import { JsonLd } from "@/components/json-ld";
import { getAllPosts } from "@/lib/posts";
import { blogGraph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Why retyping invoices costs more than the typing, what happens after one WhatsApp message, and posting into Xero, QuickBooks, Zoho Books, or your own system.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">Blog</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Why retyping invoices costs more than the typing, what happens after one WhatsApp
          message, and posting into Xero, QuickBooks, Zoho Books, or your own system.
        </p>
        <ul className="mt-12 flex flex-col gap-10">
          {posts.map((post) => (
            <li key={post.slug} className="min-w-0">
              <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-muted">
                <PostDate date={post.date} />
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink">{post.summary}</p>
            </li>
          ))}
        </ul>
      </div>
      <JsonLd data={blogGraph(posts)} />
    </div>
  );
}
