export function formatResponse(text) {
    if (!text || typeof text !== "string") return text;
  
    return text
      // Normalize line endings
      .replace(/\r\n/g, "\n")
  
      // Ensure blank line between paragraphs
      .replace(/\n{3,}/g, "\n\n")
  
      // Improve bullet readability
      .replace(/^\s*[-•]\s*/gm, "• ")
  
      // Trim excessive whitespace
      .trim();
  }
  