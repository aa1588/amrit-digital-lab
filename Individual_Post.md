# Creating Individual Blog Posts

This guide will help you create standalone blog posts for your DigitalLab blog.

## Step 1: Create a New MDX File

Navigate to the `src/content/blog/` directory and create a new `.mdx` file. Use a descriptive filename with hyphens (e.g., `my-awesome-post.mdx`).

```bash
# Example
src/content/blog/understanding-react-hooks.mdx
```

## Step 2: Add Frontmatter

At the top of your file, add the frontmatter section with metadata about your post:

```mdx
---
title: 'Your Post Title Here'
description: 'A brief description of what this post is about (1-2 sentences)'
pubDate: 2024-03-15
author: 'Amrit Adhikari'
tags: ['javascript', 'react', 'tutorial']
draft: false
---
```

### Frontmatter Fields Explained:

- **title** (required): The main title of your blog post
- **description** (required): A short summary that appears in post cards and SEO
- **pubDate** (required): Publication date in YYYY-MM-DD format
- **author** (optional): Defaults to "Your Name" if not specified
- **tags** (optional): Array of tags for categorization (use lowercase)
- **image** (optional): Path to a hero image (e.g., `/images/post-hero.jpg`)
- **draft** (optional): Set to `true` to hide the post from your site

## Step 3: Write Your Content

After the frontmatter, write your blog post using Markdown and MDX syntax:

```mdx
---
title: 'Understanding React Hooks'
description: 'Learn how to use React Hooks to manage state and side effects in functional components.'
pubDate: 2024-03-15
author: 'Amrit Adhikari'
tags: ['react', 'javascript', 'hooks']
---

React Hooks revolutionized how we write React components. In this post, we'll explore the most commonly used hooks.

## What are Hooks?

Hooks are functions that let you use state and other React features in functional components.

## useState Hook

The `useState` hook allows you to add state to functional components:

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## useEffect Hook

The `useEffect` hook lets you perform side effects in your components:

```javascript
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

## Best Practices

1. Always call hooks at the top level
2. Only call hooks from React functions
3. Use the ESLint plugin for hooks

## Conclusion

React Hooks make your code cleaner and more reusable. Start using them in your projects today!
```

## Step 4: Preview Your Post

Start the development server to preview your post:

```bash
npm run dev
```

Visit `http://localhost:4321/blog` to see your new post in the blog listing.

## Markdown Features You Can Use

### Headings
```markdown
## Heading 2
### Heading 3
```

### Lists
```markdown
- Unordered item
- Another item

1. Ordered item
2. Another item
```

### Links
```markdown
[Link text](https://example.com)
```

### Images
```markdown
![Alt text](/images/my-image.jpg)
```

### Code Blocks
````markdown
```javascript
const greeting = "Hello, World!";
console.log(greeting);
```
````

### Inline Code
```markdown
Use `const` instead of `var` in modern JavaScript.
```

### Blockquotes
```markdown
> This is a quote
```

### Bold and Italic
```markdown
**Bold text**
*Italic text*
```

## Step 5: Publish Your Post

Once you're happy with your post:

1. Make sure `draft: false` in the frontmatter (or remove the draft field)
2. Commit your changes to Git
3. Deploy your site (the post will automatically appear)

## Tips for Great Blog Posts

- **Use descriptive titles**: Make it clear what the post is about
- **Write good descriptions**: This appears in search results and social shares
- **Add relevant tags**: Helps readers find related content
- **Use code examples**: Show, don't just tell
- **Break up text**: Use headings, lists, and images to improve readability
- **Proofread**: Check for typos and grammar errors before publishing

## Example File Structure

```
src/content/blog/
├── understanding-react-hooks.mdx
├── intro-to-typescript.mdx
├── building-rest-apis.mdx
└── your-new-post.mdx
```

## Need Help?

- Check existing posts in `src/content/blog/` for examples
- Refer to the [Astro Content Collections docs](https://docs.astro.build/en/guides/content-collections/)
- Refer to the [MDX documentation](https://mdxjs.com/)
