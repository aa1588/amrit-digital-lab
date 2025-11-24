# Creating Blog Post Series

This guide will help you create multi-part blog post series for your DigitalLab blog. Series posts are great for tutorials, courses, or any content that spans multiple articles.

## What is a Series?

A series groups related blog posts together and displays navigation between them. Readers can easily move from one part to the next, and see their progress through the series.

## Step 1: Plan Your Series

Before creating posts, plan out your series:

1. Choose a series name (e.g., "JavaScript Mastery", "React Deep Dive")
2. Decide how many parts you'll have
3. Outline each part's topic

## Step 2: Create Your First Series Post

Navigate to `src/content/blog/` and create a new `.mdx` file:

```bash
# Example for a 3-part series
src/content/blog/javascript-mastery-part-1.mdx
```

## Step 3: Add Series Frontmatter

Add the frontmatter with **series** and **seriesOrder** fields:

```mdx
---
title: 'JavaScript Fundamentals'
description: 'Learn the core concepts of JavaScript including variables, data types, and functions.'
pubDate: 2024-03-01
author: 'Amrit Adhikari'
tags: ['javascript', 'tutorial', 'beginner']
series: 'JavaScript Mastery'
seriesOrder: 1
draft: false
---
```

### Series-Specific Fields:

- **series** (required for series): The name of your series (must be identical across all parts)
- **seriesOrder** (required for series): The order number (1, 2, 3, etc.)

## Step 4: Create Additional Parts

Create the remaining posts in your series with the same `series` name but different `seriesOrder` numbers:

### Part 2:
```mdx
---
title: 'Mastering Async/Await in JavaScript'
description: 'Learn how to write clean asynchronous code using async/await and handle promises effectively.'
pubDate: 2024-03-08
author: 'Amrit Adhikari'
tags: ['javascript', 'async', 'promises']
series: 'JavaScript Mastery'
seriesOrder: 2
---
```

### Part 3:
```mdx
---
title: 'Advanced JavaScript Patterns'
description: 'Explore design patterns and advanced techniques for writing maintainable JavaScript code.'
pubDate: 2024-03-15
author: 'Amrit Adhikari'
tags: ['javascript', 'patterns', 'advanced']
series: 'JavaScript Mastery'
seriesOrder: 3
---
```

## Step 5: Write Your Content

Write each post as you would a regular blog post. The series navigation will be automatically added:

```mdx
---
title: 'JavaScript Fundamentals'
description: 'Learn the core concepts of JavaScript including variables, data types, and functions.'
pubDate: 2024-03-01
author: 'Amrit Adhikari'
tags: ['javascript', 'tutorial', 'beginner']
series: 'JavaScript Mastery'
seriesOrder: 1
---

Welcome to the first part of the JavaScript Mastery series! In this series, we'll take you from beginner to advanced JavaScript developer.

## What You'll Learn

In this series, you'll master:
- JavaScript fundamentals
- Asynchronous programming
- Advanced patterns and techniques

## Variables and Data Types

Let's start with the basics...

```javascript
// Variable declarations
let name = "Amrit";
const age = 25;
var oldStyle = "avoid this";
```

## Next Steps

In the next part, we'll dive into asynchronous JavaScript and learn about promises and async/await.
```

## How Series Navigation Works

When you create series posts, your blog will automatically display:

1. **Series Header**: Shows the series name and current position (e.g., "Part 2 of 3")
2. **Series List**: All posts in the series with the current one highlighted
3. **Navigation Links**: Previous/Next buttons to move between parts
4. **Series Badge**: A visual indicator on blog cards showing it's part of a series

## Complete Example: 3-Part Series

### File: `react-hooks-basics.mdx`
```mdx
---
title: 'React Hooks: Getting Started'
description: 'Introduction to React Hooks and why they matter for modern React development.'
pubDate: 2024-04-01
author: 'Amrit Adhikari'
tags: ['react', 'hooks', 'tutorial']
series: 'React Hooks Deep Dive'
seriesOrder: 1
---

Content here...
```

### File: `react-hooks-usestate-useeffect.mdx`
```mdx
---
title: 'useState and useEffect Explained'
description: 'Master the two most important React Hooks with practical examples.'
pubDate: 2024-04-08
author: 'Amrit Adhikari'
tags: ['react', 'hooks', 'tutorial']
series: 'React Hooks Deep Dive'
seriesOrder: 2
---

Content here...
```

### File: `react-hooks-advanced.mdx`
```mdx
---
title: 'Advanced React Hooks Patterns'
description: 'Learn custom hooks, useContext, useReducer, and advanced patterns.'
pubDate: 2024-04-15
author: 'Amrit Adhikari'
tags: ['react', 'hooks', 'advanced']
series: 'React Hooks Deep Dive'
seriesOrder: 3
---

Content here...
```

## Best Practices for Series

### 1. Consistent Naming
Use the exact same series name across all parts:
- ✅ "JavaScript Mastery" (all parts)
- ❌ "JavaScript Mastery", "Javascript Mastery", "JS Mastery" (inconsistent)

### 2. Sequential Order
Number your parts sequentially starting from 1:
- ✅ seriesOrder: 1, 2, 3, 4
- ❌ seriesOrder: 1, 3, 5, 7

### 3. Consistent Publishing
Try to publish parts on a regular schedule:
- Weekly (every Monday)
- Bi-weekly
- All at once (if series is complete)

### 4. Cross-Reference
Mention other parts in your content:
```markdown
In [Part 1](/blog/series-part-1), we covered the basics...
In the next part, we'll explore advanced techniques...
```

### 5. Standalone Value
Each part should provide value on its own while building on previous parts:
- Include a brief recap at the start
- Summarize key points at the end
- Link to previous parts when referencing concepts

### 6. Clear Titles
Make titles descriptive and indicate progression:
- ✅ "Part 1: Introduction to TypeScript"
- ✅ "Getting Started with TypeScript"
- ❌ "TypeScript Part 1" (too generic)

## Viewing Your Series

### On the Blog Page
Series posts show a special badge indicating they're part of a series.

### On Individual Posts
Each series post displays:
- Series navigation at the top
- List of all parts with current one highlighted
- Previous/Next navigation at the bottom

### On the Series Page
Visit `/series` to see all your series grouped together.

## Tips for Great Series

1. **Plan ahead**: Outline all parts before writing
2. **Maintain momentum**: Publish parts regularly
3. **Build progressively**: Each part should build on the previous
4. **Keep it focused**: Don't try to cover too much in one series
5. **Update as needed**: You can add parts later if needed

## Example Series Ideas

- **Tutorial Series**: "Building a Full-Stack App" (5 parts)
- **Concept Deep Dive**: "Understanding Async JavaScript" (3 parts)
- **Technology Guide**: "Mastering Docker" (4 parts)
- **Best Practices**: "Clean Code Principles" (6 parts)
- **Framework Course**: "React from Scratch" (10 parts)

## Troubleshooting

### Series navigation not showing?
- Check that `series` name is identical across all parts
- Verify `seriesOrder` is a number, not a string
- Make sure `draft: false` on all parts

### Wrong order?
- Double-check `seriesOrder` values
- Ensure no duplicate order numbers

### Missing parts?
- Verify all parts have the same `series` name (case-sensitive)
- Check that all parts are published (not drafts)

## File Structure Example

```
src/content/blog/
├── javascript-mastery-part-1.mdx
├── javascript-mastery-part-2.mdx
├── javascript-mastery-part-3.mdx
├── react-hooks-basics.mdx
├── react-hooks-advanced.mdx
└── standalone-post.mdx
```

## Need Help?

- Check existing series posts in `src/content/blog/` for examples
- Look at `src/components/SeriesNav.astro` to see how series navigation works
- Refer to the Individual_Post.md guide for general post creation tips
