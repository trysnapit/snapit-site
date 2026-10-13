import { audiences, costs, dayOne, fields, steps, systems, views } from "@/lib/home";
import { site } from "@/lib/site";

const anyBusiness = audiences[0];
const firms = audiences[1];

export const faqs = [
  {
    question: "What does Snapit do?",
    answer: `${site.description} ${steps[0]} ${steps[2]} ${steps[3]}`,
  },
  {
    question: "What does retyping really cost you?",
    answer: `${costs.map((cost) => cost.detail).join(" ")} The cost is more than typing time.`,
  },
  {
    question: "What happens after one WhatsApp message?",
    answer: steps.join(" "),
  },
  {
    question: "What does Snapit read?",
    answer: `Snapit reads ${fields.join(", ")}. ${steps[1]}`,
  },
  {
    question: "What do branch staff and finance see?",
    answer: `${views[0].detail} ${views[1].detail}`,
  },
  {
    question: "Which accounting systems does Snapit post to?",
    answer: `Live: ${systems.live.join(", ")}. Coming soon: ${systems.soon.join(", ")}. ${systems.api.join(" ")} ${systems.whatsapp}`,
  },
  {
    question: "Who is Snapit for?",
    answer: `${anyBusiness.detail} Examples: ${"examples" in anyBusiness ? anyBusiness.examples.join(", ") : ""}. ${firms.detail}`,
  },
  {
    question: "What changes on day one?",
    answer: dayOne
      .map((row) => `${row.label}: today, ${row.today}. With Snapit, ${row.withSnapit}.`)
      .join(" "),
  },
  {
    question: "How do you reach Snapit?",
    answer: `Email ${site.email} or WhatsApp ${site.whatsappDisplay}.`,
  },
] as const;

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
