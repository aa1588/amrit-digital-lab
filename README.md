# Astro Blog

A modern, feature-rich blog built with Astro - inspired by Dan Vega's classic blog design.

## Features

- 🚀 Lightning-fast performance with Astro
- 📝 MDX support for rich content
- 🎨 Clean, classic design
- 🌓 Dark/Light theme toggle
- 🔍 Real-time search functionality
- 🏷️ Tag filtering system
- 📚 Blog series support with navigation
- 📱 Fully responsive
- 🔒 Type-safe content with Content Collections
- ♿ Accessible

## Getting Started

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to see your blog.

### Building for Production

Build the site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   │   ├── BlogCard.astro
│   │   ├── SearchBar.astro
│   │   ├── SeriesNav.astro
│   │   └── ThemeToggle.astro
│   ├── content/     # Blog posts (MDX files)
│   │   ├── blog/
│   │   └── config.ts
│   ├── layouts/     # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/       # Routes
│   │   ├── blog/
│   │   ├── index.astro
│   │   ├── series.astro
│   │   └── about.astro
│   └── styles/      # Global styles
└── package.json
```

## Adding New Blog Posts

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: 'Your Post Title'
description: 'A brief description'
pubDate: 2024-03-15
author: 'Dan'
tags: ['tag1', 'tag2']
series: 'Series Name'  # Optional
seriesOrder: 1         # Optional
draft: false           # Optional
---

Your content here...
```

## Creating a Blog Series

To create a series of related posts:

1. Add the same `series` name to multiple posts
2. Set `seriesOrder` to define the sequence
3. Posts in a series will show navigation between parts
4. Series are automatically listed on the `/series` page

Example:
```mdx
---
title: 'Part 1: Introduction'
series: 'JavaScript Mastery'
seriesOrder: 1
---
```

## Features Guide

### Theme Toggle
- Automatic dark/light mode based on system preference
- Manual toggle in navigation
- Preference saved in localStorage

### Search
- Real-time search across titles, descriptions, and tags
- Available on the blog listing page

### Tag Filtering
- Click tags to filter posts
- Combine with search for refined results

### Series Navigation
- Automatic prev/next navigation within series
- Visual progress indicator
- Complete series overview

## Customization

### Colors & Theme
Edit `src/styles/global.css` to customize colors:
```css
:root {
  --color-primary: #0066cc;
  --color-text: #1a1a1a;
  /* ... */
}

[data-theme="dark"] {
  --color-primary: #3b82f6;
  --color-text: #e2e8f0;
  /* ... */
}
```

### Site Info
- Update site name in `src/layouts/BaseLayout.astro`
- Modify hero section in `src/pages/index.astro`
- Edit about page in `src/pages/about.astro`
- Change site URL in `astro.config.mjs`

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [MDX Documentation](https://mdxjs.com/)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
