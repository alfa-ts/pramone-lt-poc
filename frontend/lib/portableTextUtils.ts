import type { BlockContent } from "@/sanity.types";

/**
 * Extracts plain text from Portable Text content
 */
export function toPlainText(blocks: BlockContent | null | undefined): string {
  if (!blocks) return "";

  return (
    (blocks as any[])
      // Only process text blocks
      .filter((block: any) => block._type === "block")
      // Get all children text
      .map((block: any) => {
        return (block.children || [])
          .map((child: any) => child.text || "")
          .join("");
      })
      .join(" ")
      // Clean up whitespace
      .replace(/\s+/g, " ")
      .trim()
  );
}

/**
 * Creates an excerpt from Portable Text content
 * @param content - The Portable Text content
 * @param maxLength - Maximum length of the excerpt (default: 300)
 */
export function createExcerpt(
  content: BlockContent | null | undefined,
  maxLength: number = 300
): string {
  const plainText = toPlainText(content);

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Find the last complete word within maxLength
  const truncated = plainText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0
    ? truncated.substring(0, lastSpace) + "..."
    : truncated + "...";
}

