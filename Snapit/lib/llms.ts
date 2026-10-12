import { faqs } from "@/lib/faq";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export function llmsText() {
  const posts = getAllPosts();
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    site.title,
    site.domain,
    "",
    "Sample invoice figures on the home page are illustrations. They are not customer results.",
    "",
    "## Questions",
    "",
    ...faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]),
    "## Pages",
    "",
    `- [Home](${site.domain}/): ${site.description}`,
    `- [How it works](${site.domain}/#how-it-works): One WhatsApp message. One posted bill.`,
    `- [What it reads](${site.domain}/#reads): Every detail, read and checked.`,
    `- [Costs](${site.domain}/#costs): What retyping really costs you.`,
    `- [Accounting systems](${site.domain}/#systems): Posts to the system you already use.`,
    `- [Who it is for](${site.domain}/#who): Get invoices? Snapit is for you.`,
    `- [Day one](${site.domain}/#day-one): What changes on day one.`,
    `- [Questions](${site.domain}/#questions): Questions and answers.`,
    `- [Blog](${site.domain}/blog): Articles on retyping, one WhatsApp message, and posting to the books.`,
    ...posts.map(
      (post) => `- [${post.title}](${site.domain}/blog/${post.slug}): ${post.summary}`,
    ),
    "",
    "## Contact",
    "",
    `Email: ${site.email}`,
    `WhatsApp: ${site.whatsappDisplay}`,
    site.whatsappUrl,
    `Log in: ${site.appUrl}`,
    "",
  ];

  return `${lines.join("\n")}`;
}
