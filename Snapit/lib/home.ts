type StoryItem = {
  title: string;
  detail: string;
};

type DayOneRow = {
  label: string;
  today: string;
  withSnapit: string;
};

export const costs = [
  {
    title: "Wrong numbers",
    detail: "Wrong numbers in reports and tax filings.",
  },
  {
    title: "Paying twice",
    detail: "Cash paid out twice.",
  },
  {
    title: "Lost invoices",
    detail: "Expenses that never get recorded.",
  },
  {
    title: "Books behind",
    detail: "No view of what is owed.",
  },
  {
    title: "No paper trail",
    detail: "Audits become a document hunt.",
  },
  {
    title: "Wasted talent",
    detail: "Finance staff stuck on data entry.",
  },
] as const satisfies readonly StoryItem[];

export const steps = [
  "Send a photo or PDF on WhatsApp.",
  "Snapit reads the supplier, invoice number, date, tax, and total.",
  "The bill and the original document post.",
  "The same chat replies with the total.",
] as const satisfies readonly string[];

export const stepLabels = ["Snap", "Read", "Post", "Reply"] as const;

export const fields = [
  "Supplier",
  "Invoice number",
  "Date",
  "Line items",
  "Tax",
  "Total",
  "Duplicate check",
] as const satisfies readonly string[];

export const views = [
  {
    title: "Branch staff",
    detail: "Branch staff get the total back and a duplicate warning.",
  },
  {
    title: "Finance",
    detail: "Finance sees every branch, posted or flagged.",
  },
] as const satisfies readonly StoryItem[];

export const systems = {
  live: ["Xero", "QuickBooks", "Zoho Books"],
  soon: ["NetSuite", "Odoo", "ERPNext", "SQL Account", "Mekari Jurnal", "Accurate"],
  api: [
    "The REST API pulls invoice data and documents.",
    "Webhooks push each invoice when it is read.",
  ],
  whatsapp: "The WhatsApp step stays the same.",
} as const satisfies {
  live: readonly string[];
  soon: readonly string[];
  api: readonly string[];
  whatsapp: string;
};

export const audiences = [
  {
    title: "Any business",
    detail: "Any business that receives invoices.",
    examples: [
      "design agency",
      "dental clinic",
      "construction firm",
      "logistics firm",
      "retail chain",
      "law firm",
      "factory",
      "school",
      "startup",
      "restaurant",
    ],
  },
  {
    title: "Accounting firms",
    detail: "Accounting firms use one number per client and review instead of retyping.",
  },
] as const satisfies readonly (StoryItem & { examples?: readonly string[] })[];

export const dayOne = [
  {
    label: "Where invoices land",
    today: "Chats, emails, drawers",
    withSnapit: "One WhatsApp number",
  },
  {
    label: "Who types them in",
    today: "Someone on your team",
    withSnapit: "Nobody",
  },
  {
    label: "Time to book",
    today: "Days, or month-end",
    withSnapit: "Seconds",
  },
  {
    label: "Duplicates",
    today: "Caught if someone notices",
    withSnapit: "Flagged automatically",
  },
  {
    label: "Original document",
    today: "Filed separately, if at all",
    withSnapit: "Attached to every bill",
  },
  {
    label: "What staff learn",
    today: "Your accounting process",
    withSnapit: "Nothing. It's WhatsApp.",
  },
] as const satisfies readonly DayOneRow[];
