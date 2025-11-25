# Alert Component Guide

## Overview

The Alert component allows you to add beautiful, color-coded callout boxes in your blog posts to highlight important information, warnings, tips, and errors.

## Alert Types

There are 4 types of alerts, each with a unique color scheme and icon:

| Type | Icon | Color | Use Case |
|------|------|-------|----------|
| `info` | 💡 | Blue | Tips, helpful information, general notes |
| `success` | ✅ | Green | Positive messages, best practices, completed steps |
| `warning` | ⚠️ | Yellow/Orange | Cautions, important considerations, things to watch out for |
| `error` | 🚨 | Red | Critical information, common mistakes, things to avoid |

## How to Use in Blog Posts

### Step 1: Import the Component

At the top of your MDX file (after the frontmatter), add the import statement:

```mdx
---
title: 'Your Blog Post Title'
description: 'Your description'
pubDate: 2024-11-24
author: 'Amrit Adhikari'
tags: ['tutorial']
draft: false
---

import Alert from '../../components/Alert.astro';
```

### Step 2: Add Alerts in Your Content

Use the Alert component anywhere in your blog post:

```mdx
<Alert type="info">
Your message here
</Alert>
```

## Examples

### Info Alert (Blue) 💡

**Use for:** Tips, helpful information, pro tips, general notes

```mdx
<Alert type="info">
💡 **Pro Tip:** You can use markdown formatting inside alerts, including **bold** and *italic* text.
</Alert>
```

```mdx
<Alert type="info">
This tutorial assumes you have Node.js installed. If not, download it from [nodejs.org](https://nodejs.org).
</Alert>
```

### Success Alert (Green) ✅

**Use for:** Positive messages, achievements, best practices, correct approaches

```mdx
<Alert type="success">
✅ **Great job!** You've successfully set up your development environment.
</Alert>
```

```mdx
<Alert type="success">
This is the recommended approach for production applications.
</Alert>
```

### Warning Alert (Yellow) ⚠️

**Use for:** Cautions, important notes, potential issues, things to watch out for

```mdx
<Alert type="warning">
⚠️ **Important:** Make sure to backup your database before running this migration.
</Alert>
```

```mdx
<Alert type="warning">
This feature is experimental and may change in future versions.
</Alert>
```

### Error Alert (Red) 🚨

**Use for:** Critical information, common mistakes, security issues, things to avoid

```mdx
<Alert type="error">
🚨 **Security Warning:** Never commit your API keys or passwords to version control!
</Alert>
```

```mdx
<Alert type="error">
**Common Mistake:** Forgetting to close database connections can lead to memory leaks.
</Alert>
```

## Complete Blog Post Example

```mdx
---
title: 'Getting Started with Docker'
description: 'A beginner-friendly guide to Docker'
pubDate: 2024-11-24
author: 'Amrit Adhikari'
tags: ['docker', 'tutorial']
draft: false
---

import Alert from '../../components/Alert.astro';

## Introduction

Docker is a powerful tool for containerizing applications...

<Alert type="info">
💡 **New to Docker?** This guide assumes no prior knowledge. We'll start from the basics!
</Alert>

## Installation

First, download Docker Desktop from the official website...

<Alert type="warning">
Make sure to enable virtualization in your BIOS settings before installing Docker.
</Alert>

## Your First Container

Let's run your first Docker container:

```bash
docker run hello-world
```

<Alert type="success">
If you see "Hello from Docker!", your installation is working correctly!
</Alert>

## Common Mistakes

<Alert type="error">
**Never** run containers as root in production. Always use a non-root user for security.
</Alert>

## Next Steps

Now that you have Docker running, you can...
```

## Advanced Tips

### Multiple Paragraphs

You can include multiple paragraphs in an alert:

```mdx
<Alert type="info">
This is the first paragraph with important information.

This is a second paragraph with additional details.
</Alert>
```

### Markdown Support

Alerts support full markdown formatting:

```mdx
<Alert type="warning">
**Important considerations:**

- First point to remember
- Second important item
- Third critical detail

Make sure to review all of these before proceeding.
</Alert>
```

### Combining with Code

```mdx
<Alert type="error">
**Don't do this:**

```javascript
// Bad practice
var password = "12345";
```

Always use environment variables for sensitive data!
</Alert>
```

## Best Practices

1. **Use alerts sparingly** - Too many alerts can overwhelm readers
2. **Choose the right type** - Match the alert type to your message's importance
3. **Be concise** - Keep alert messages short and actionable
4. **Add context** - Explain why something is important
5. **Use bold for emphasis** - Highlight key words with `**bold**`
6. **Include emojis** - The default emojis are great, but you can add more for personality

## When to Use Each Type

### Use Info (💡) when:
- Providing helpful tips or shortcuts
- Explaining prerequisites
- Sharing additional resources
- Clarifying concepts

### Use Success (✅) when:
- Confirming correct completion
- Highlighting best practices
- Showing expected results
- Celebrating achievements

### Use Warning (⚠️) when:
- Noting potential issues
- Explaining breaking changes
- Highlighting important considerations
- Mentioning experimental features

### Use Error (🚨) when:
- Pointing out security risks
- Highlighting common mistakes
- Showing what NOT to do
- Emphasizing critical information

## Quick Reference

```mdx
import Alert from '../../components/Alert.astro';

<Alert type="info">Info message</Alert>
<Alert type="success">Success message</Alert>
<Alert type="warning">Warning message</Alert>
<Alert type="error">Error message</Alert>
```

---

**Remember:** Alerts are designed to enhance your content, not replace it. Use them to draw attention to the most important information in your blog posts!
