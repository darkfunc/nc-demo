import type { PortableTextBlock } from "sanity";

export function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
    .toUpperCase()
    .replace(",", ",");
}

export function excerptFromBlocks(blocks: PortableTextBlock[] = [], maxLength = 160) {
  const text = blocks
    .filter((b) => b._type === "block")
    .map((b) => (b.children ?? []).map((c: any) => c.text).join(""))
    .join(" ")
    .trim();

  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + "…" : text;
}