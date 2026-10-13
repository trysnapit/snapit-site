export function PostDate({ date }: { date: string }) {
  const formatted = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

  return <time dateTime={date}>{formatted}</time>;
}
