# How to Use Alerts in Your Blog Posts

I've created a beautiful alert component with 4 different types. Here's how to use them in your MDX blog posts:

## Alert Types

### 1. Info Alert (Blue) 💡
Use for helpful information, tips, or notes.

```mdx
import Alert from '../../components/Alert.astro';

<Alert type="info">
This is an informational message. Use it for helpful tips and general information.
</Alert>
```

### 2. Success Alert (Green) ✅
Use for positive messages, completed steps, or best practices.

```mdx
<Alert type="success">
Great job! This is a success message. Use it to highlight achievements or correct approaches.
</Alert>
```

### 3. Warning Alert (Yellow/Orange) ⚠️
Use for cautions, important notes, or things to watch out for.

```mdx
<Alert type="warning">
**Warning:** This is a warning message. Use it to alert readers about potential issues or important considerations.
</Alert>
```

### 4. Error Alert (Red) 🚨
Use for critical information, common mistakes, or things to avoid.

```mdx
<Alert type="error">
**Error:** This is an error message. Use it to highlight critical issues or common mistakes to avoid.
</Alert>
```

## Complete Example in a Blog Post

```mdx
---
title: "My Blog Post"
description: "A post with alerts"
pubDate: 2024-01-15
author: "Amrit Adhikari"
tags: ["tutorial"]
---

import Alert from '../../components/Alert.astro';

## Introduction

Here's some regular content...

<Alert type="info">
💡 **Pro Tip:** You can use markdown inside alerts, including **bold text** and *italics*.
</Alert>

## Important Section

<Alert type="warning">
Make sure to backup your data before proceeding with this step!
</Alert>

## Common Mistakes

<Alert type="error">
**Never** commit your API keys to version control. This is a common security mistake!
</Alert>

## Success!

<Alert type="success">
You've successfully completed the tutorial! Your application is now ready to deploy.
</Alert>
```

## Features

✅ Four distinct alert types with unique colors and icons
✅ Beautiful, modern design with rounded corners
✅ Left border accent for visual hierarchy
✅ Supports markdown content inside alerts
✅ Fully responsive
✅ Matches your blog's design system

## Tips

- Use alerts sparingly for maximum impact
- Choose the right type for your message
- You can use **bold** and *italic* text inside alerts
- Keep alert messages concise and actionable
