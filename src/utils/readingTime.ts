export function calculateReadingTime(content: string): string {
  // Remove HTML tags and code blocks for more accurate word count
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, ''); // Remove inline code
  
  // Count words
  const words = cleanContent.trim().split(/\s+/).length;
  
  // Average reading speed: 200 words per minute
  const readingSpeed = 200;
  const minutes = Math.ceil(words / readingSpeed);
  
  return `${minutes} min read`;
}
