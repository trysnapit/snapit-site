import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PostDate } from "@/components/blog/post-date";
import { getAllPosts, getPost } from "@/lib/posts";

const homeSections = {
  "retyping-invoices": {
    href: "/#costs",
    label: "What retyping really costs you",
  },
  "one-whatsapp-message": {
    href: "/#how-it-works",
    label: "One WhatsApp message. One posted bill.",
  },
  "posting-to-your-books": {
    href: "/#systems",
    label: "Posts to the system you already use.",
  },
} as const;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const homeSection = homeSections[post.slug as keyof typeof homeSections];

  return (
    <article className="min-w-0 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          <PostDate date={post.date} />
        </p>
        <p className="mt-6 text-lg leading-relaxed text-ink">{post.summary}</p>
        <div className="article-body mt-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
        <div className="mt-12 flex flex-col">
          {homeSection ? (
            <Link
              href={homeSection.href}
              className="inline-flex min-h-11 items-center font-semibold text-accent"
            >
              {homeSection.label}
            </Link>
          ) : null}
          <Link href="/blog" className="inline-flex min-h-11 items-center font-semibold text-accent">
            Back to the blog
          </Link>
        </div>
      </div>
    </article>
  );
}
