// Mirrors the live credit settings and packs in the app (Admin → Credits).
// Update this file whenever those change.
const centsPerCredit = 10;
const largestPack = 2000;

export function formatUsd(cents: number) {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents % 100 ? 2 : 0,
  }).format(cents / 100);
}

export const pricing = {
  welcomeCredits: 10,
  perInvoice: formatUsd(centsPerCredit),
  packs: [100, 500, largestPack].map((credits) => ({
    credits: credits.toLocaleString("en-SG"),
    price: formatUsd(credits * centsPerCredit),
  })),
  terms: [
    "Credits you buy don't expire.",
    "Re-reading an invoice is free.",
    "If an upload fails on our side, the credit comes back.",
    "Bank statements: 1 credit each, any length.",
  ],
  firms: "One credit balance covers every client company. Set a monthly cap for each.",
  volume: `Need more than ${largestPack.toLocaleString("en-SG")} invoices a month?`,
} as const;
