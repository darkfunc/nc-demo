type PTBlock = {
  _type: string;
  children?: { _type: string; text?: string }[];
};

export function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
    .toUpperCase()
    .replace(",", ",");
}

export function excerptFromBlocks(blocks: PTBlock[] = [], maxLength = 160) {
  const text = blocks
    .filter((b) => b._type === "block")
    .map((b) => (b.children ?? []).map((c) => c.text ?? "").join(""))
    .join(" ")
    .trim();
  return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + "…" : text;
}
