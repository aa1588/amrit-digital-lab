# Reading Time Implementation

## Overview

The reading time feature automatically calculates and displays how long it will take to read each blog post. It appears in the post metadata at the top of every article.

**Example:** `November 24, 2024 • Amrit Adhikari • 📖 5 min read`

## How It Works

### 1. Reading Time Calculation Utility

**File:** `src/utils/readingTime.ts`

This utility function calculates reading time based on word count:

```typescript
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
```

**Key Features:**
- Removes HTML tags for accurate counting
- Excludes code blocks (both fenced and inline)
- Uses 200 words per minute (industry standard)
- Rounds up to nearest minute
- Returns formatted string

### 2. Integration in Blog Post Layout

**File:** `src/layouts/BlogPost.astro`

The reading time is calculated and displayed in the blog post layout:

```astro
---
import { calculateReadingTime } from '../utils/readingTime';

// Get the rendered content for reading time calculation
const content = await Astro.slots.render('default');
const readingTime = calculateReadingTime(content);
---

<div class="post-meta">
  <time datetime={pubDate.toISOString()}>{formattedDate}</time>
  <span>•</span>
  <span>{author}</span>
  <span>•</span>
  <span class="reading-time">📖 {readingTime}</span>
</div>
```

### 3. Styling

The reading time is styled to match the post metadata:

```css
.post-meta {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.reading-time {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 500;
}
```

## Technical Details

### Reading Speed Calculation

The standard reading speed used is **200 words per minute**, which is:
- Average for technical content
- Accounts for code examples and diagrams
- Conservative estimate (better to overestimate)

### Content Cleaning Process

Before counting words, the function removes:

1. **HTML Tags:** `<[^>]*>` - All HTML markup
2. **Code Blocks:** ` ```[\s\S]*?``` ` - Fenced code blocks
3. **Inline Code:** `` `[^`]*` `` - Inline code snippets

This ensures:
- More accurate word count
- Code doesn't inflate reading time
- Focus on actual readable content

### Word Counting

```typescript
const words = cleanContent.trim().split(/\s+/).length;
```

- Trims whitespace
- Splits on any whitespace character
- Counts resulting array length

### Rounding

```typescript
const minutes = Math.ceil(words / readingSpeed);
```

- Uses `Math.ceil()` to round up
- Ensures minimum of 1 minute
- Better UX than showing "0 min read"

## Automatic Application

The reading time feature is **automatically applied** to all blog posts because:

1. It's integrated into the `BlogPost.astro` layout
2. All blog posts use this layout
3. No changes needed to individual posts
4. Calculation happens at build time

## Benefits

### For Readers
- ✅ Know time commitment upfront
- ✅ Decide if they have time to read
- ✅ Better content discovery
- ✅ Professional appearance

### For You
- ✅ Zero maintenance required
- ✅ Automatic for all posts
- ✅ Accurate calculations
- ✅ Industry-standard feature

## Customization Options

### Change Reading Speed

Edit `src/utils/readingTime.ts`:

```typescript
// Slower reading speed (more time)
const readingSpeed = 150; // 150 words per minute

// Faster reading speed (less time)
const readingSpeed = 250; // 250 words per minute
```

### Change Display Format

Edit `src/layouts/BlogPost.astro`:

```astro
<!-- Remove emoji -->
<span class="reading-time">{readingTime}</span>

<!-- Different emoji -->
<span class="reading-time">⏱️ {readingTime}</span>

<!-- Add text -->
<span class="reading-time">Reading time: {readingTime}</span>
```

### Change Position

Move the reading time element in `BlogPost.astro`:

```astro
<!-- Before author -->
<span class="reading-time">📖 {readingTime}</span>
<span>•</span>
<span>{author}</span>

<!-- On separate line -->
<div class="post-meta">
  <time>{formattedDate}</time>
  <span>•</span>
  <span>{author}</span>
</div>
<div class="reading-time-line">
  📖 {readingTime}
</div>
```

## Performance

- **Build Time:** Calculation happens during build (not runtime)
- **No JavaScript:** Pure server-side calculation
- **Zero Impact:** No effect on page load speed
- **Static Output:** Reading time is baked into HTML

## Testing

To verify reading time accuracy:

1. Check a short post (should be 1-2 min)
2. Check a long post (should be 5-10+ min)
3. Verify code blocks don't inflate time
4. Ensure all posts show reading time

## Future Enhancements

Possible improvements:

1. **Show on blog listing page** - Add to post cards
2. **Different speeds by category** - Technical vs. general content
3. **Include images** - Add time for viewing images
4. **Localization** - Support different languages ("5 min de lectura")
5. **Reading progress bar** - Show how far through the post

## Files Modified

1. **Created:** `src/utils/readingTime.ts` - Calculation utility
2. **Modified:** `src/layouts/BlogPost.astro` - Display integration
3. **No changes needed:** Individual blog posts

## Summary

The reading time feature is a simple but powerful addition that:
- Enhances user experience
- Requires zero maintenance
- Works automatically for all posts
- Uses industry-standard calculations
- Adds professional polish to your blog

It's a "set it and forget it" feature that provides ongoing value to your readers!
