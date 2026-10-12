import { stepLabels, steps, systems } from "@/lib/home";
import type { Post } from "@/lib/posts";
import { site } from "@/lib/site";

const organizationId = `${site.domain}/#organization`;
const websiteId = `${site.domain}/#website`;
const appId = `${site.domain}/#app`;

export function siteGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        url: site.domain,
        email: site.email,
        description: site.description,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: site.email,
          telephone: "+6589736594",
          availableLanguage: "English",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.name,
        url: site.domain,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": organizationId },
      },
    ],
  };
}

export function homeGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${site.domain}/#webpage`,
        url: site.domain,
        name: site.title,
        description: site.description,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        about: { "@id": appId },
        publisher: { "@id": organizationId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": appId,
        name: site.name,
        url: site.domain,
        description: site.description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        provider: { "@id": organizationId },
        featureList: [
          ...steps,
          `Posts to ${systems.live.join(", ")}.`,
          ...systems.api,
          systems.whatsapp,
        ],
      },
    ],
  };
}

export function howToSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "One WhatsApp message. One posted bill.",
    description: "A photo or PDF on WhatsApp becomes a posted bill, and the chat replies with the total.",
    step: stepLabels.map((name, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name,
      text: steps[index],
      url: `${site.domain}/#how-it-works`,
    })),
  };
}

export function blogGraph(posts: readonly Post[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog",
    url: `${site.domain}/blog`,
    isPartOf: { "@id": websiteId },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `${site.domain}/blog/${post.slug}`,
        description: post.summary,
      })),
    },
  };
}

export function articleGraph(post: Post): Record<string, unknown> {
  const url = `${site.domain}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        description: post.summary,
        url,
        inLanguage: "en",
        mainEntityOfPage: url,
        author: { "@id": organizationId },
        publisher: { "@id": organizationId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${site.domain}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}
