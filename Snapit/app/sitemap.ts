import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.domain },
    { url: `${site.domain}/blog` },
    ...getAllPosts().map((post) => ({
      url: `${site.domain}/blog/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
