# External Resources Guide

## Overview

The External Resources section appears on the Gallery page and provides a clean, list-based interface for sharing presentations, slides, code repositories, videos, and other materials with your audience.

## Location

The resources section is displayed at the bottom of the Gallery page (`/gallery`), after the photo gallery grid.

## How to Add/Edit Resources

### Step 1: Open the Component File

Navigate to and open: `src/components/ResourcesSection.astro`

### Step 2: Update the Resources Array

Find the `resources` array at the top of the file and modify it with your own resources:

```javascript
const resources = [
  {
    title: 'Your Presentation Title',
    description: 'Brief description of the resource',
    link: 'https://your-link.com',
    type: 'Slides', // or 'GitHub', 'Video', 'PDF', etc.
    icon: '📊' // Any emoji
  },
  // Add more resources here...
];
```

## Resource Properties

Each resource object has 5 properties:

### 1. `title` (required)
- **Type:** String
- **Description:** The name of your resource
- **Example:** `'Spring Boot Microservices Presentation'`

### 2. `description` (required)
- **Type:** String
- **Description:** A brief description of what the resource contains
- **Example:** `'Slides from my workshop on building microservices with Spring Boot'`
- **Tip:** Keep it concise (1-2 sentences)

### 3. `link` (required)
- **Type:** String (URL)
- **Description:** The full URL to your resource
- **Examples:**
  - Google Slides: `'https://docs.google.com/presentation/d/your-id'`
  - GitHub: `'https://github.com/username/repo-name'`
  - YouTube: `'https://youtube.com/watch?v=video-id'`
  - Dropbox: `'https://www.dropbox.com/s/your-file'`
  - Google Drive: `'https://drive.google.com/file/d/your-id'`

### 4. `type` (required)
- **Type:** String
- **Description:** Category/type of the resource (displays as a badge)
- **Common Types:**
  - `'Slides'` - For presentations
  - `'GitHub'` - For code repositories
  - `'Video'` - For video recordings
  - `'PDF'` - For PDF documents
  - `'Docs'` - For documentation
  - `'Demo'` - For live demos
  - `'Article'` - For blog posts or articles
- **Tip:** Keep it short (1-2 words)

### 5. `icon` (required)
- **Type:** String (Emoji)
- **Description:** An emoji that represents the resource type
- **Suggested Icons:**
  - 📊 - Presentations/Slides
  - 💻 - Code/GitHub
  - 🎥 - Videos
  - 📚 - Documentation/Books
  - 📄 - PDFs/Documents
  - 🔗 - Links/URLs
  - 🎓 - Educational content
  - 🛠️ - Tools/Utilities
  - 📝 - Articles/Blogs

## Complete Examples

### Example 1: Presentation Slides

```javascript
{
  title: 'Introduction to Docker & Kubernetes',
  description: 'Complete slide deck from my DevOps workshop covering containerization basics',
  link: 'https://docs.google.com/presentation/d/1abc123xyz',
  type: 'Slides',
  icon: '📊'
}
```

### Example 2: GitHub Repository

```javascript
{
  title: 'Spring Boot REST API Template',
  description: 'Production-ready template with best practices, testing, and Docker support',
  link: 'https://github.com/aa1588/spring-boot-template',
  type: 'GitHub',
  icon: '💻'
}
```

### Example 3: Video Recording

```javascript
{
  title: 'Tech Talk: Microservices Architecture',
  description: 'Recording of my presentation at Tech Conference 2024',
  link: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
  type: 'Video',
  icon: '🎥'
}
```

### Example 4: PDF Document

```javascript
{
  title: 'Java Best Practices Cheat Sheet',
  description: 'Quick reference guide for writing clean, maintainable Java code',
  link: 'https://drive.google.com/file/d/your-file-id/view',
  type: 'PDF',
  icon: '📄'
}
```

## Full Configuration Example

Here's a complete example with multiple resources:

```javascript
const resources = [
  {
    title: 'Spring Boot Microservices Workshop',
    description: 'Complete presentation covering microservices architecture, Spring Cloud, and deployment strategies',
    link: 'https://docs.google.com/presentation/d/1abc123',
    type: 'Slides',
    icon: '📊'
  },
  {
    title: 'Microservices Demo Application',
    description: 'Full source code for the demo application built during the workshop',
    link: 'https://github.com/aa1588/microservices-demo',
    type: 'GitHub',
    icon: '💻'
  },
  {
    title: 'Workshop Recording',
    description: 'Full video recording of the 2-hour workshop session',
    link: 'https://youtube.com/watch?v=example',
    type: 'Video',
    icon: '🎥'
  },
  {
    title: 'Docker & Kubernetes Guide',
    description: 'Comprehensive guide with commands, examples, and troubleshooting tips',
    link: 'https://github.com/aa1588/docker-k8s-guide',
    type: 'Docs',
    icon: '📚'
  },
  {
    title: 'Code Samples Collection',
    description: 'Curated collection of code snippets and examples from various talks',
    link: 'https://github.com/aa1588/code-samples',
    type: 'GitHub',
    icon: '🛠️'
  }
];
```

## Tips for Great Resources

### 1. Use Descriptive Titles
- ✅ Good: "Spring Boot REST API Best Practices"
- ❌ Bad: "My Presentation"

### 2. Write Clear Descriptions
- ✅ Good: "Step-by-step guide to building scalable microservices with Spring Boot and Docker"
- ❌ Bad: "Some stuff about microservices"

### 3. Choose Appropriate Icons
- Match the icon to the content type
- Use commonly recognized emojis
- Be consistent across similar resource types

### 4. Verify Links Work
- Test all links before publishing
- Use direct links (not shortened URLs)
- Ensure links are publicly accessible

### 5. Keep It Organized
- Group similar resources together
- Order by importance or chronology
- Remove outdated resources

## Common Link Types

### Google Slides
```
https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID
```
Make sure to set sharing to "Anyone with the link can view"

### GitHub Repository
```
https://github.com/YOUR_USERNAME/REPO_NAME
```
Repository should be public

### YouTube Video
```
https://youtube.com/watch?v=VIDEO_ID
```
Video should be public or unlisted

### Google Drive
```
https://drive.google.com/file/d/FILE_ID/view
```
Set sharing to "Anyone with the link can view"

### Dropbox
```
https://www.dropbox.com/s/FILE_ID/filename.pdf?dl=0
```
Use the sharing link from Dropbox

## Removing Resources

To remove a resource, simply delete its entire object from the array:

```javascript
// Before
const resources = [
  { title: 'Resource 1', ... },
  { title: 'Resource 2', ... },  // Delete this one
  { title: 'Resource 3', ... }
];

// After
const resources = [
  { title: 'Resource 1', ... },
  { title: 'Resource 3', ... }
];
```

## Design Features

The resources section includes:
- ✅ Clean, list-based layout
- ✅ Hover effects (slides right on hover)
- ✅ Type badges for quick identification
- ✅ External link indicators
- ✅ Fully responsive design
- ✅ Accessible with proper ARIA labels
- ✅ Opens links in new tabs

## Mobile Behavior

On mobile devices:
- Resources stack vertically
- Arrow icons are hidden to save space
- Touch-friendly tap targets
- Optimized padding and spacing

## Customization

### Change Section Title

Edit the `resources-header` section:

```astro
<div class="resources-header">
  <h2>Your Custom Title</h2>
  <p class="resources-subtitle">Your custom subtitle</p>
</div>
```

### Change Maximum Width

Edit the CSS:

```css
.resources-grid {
  max-width: 800px; /* Change this value */
  margin: 0 auto;
}
```

### Hide the Section

If you don't want to show resources, simply remove the component from `src/pages/gallery.astro`:

```astro
<!-- Remove this line -->
<ResourcesSection />
```

## Summary

The External Resources section is perfect for:
- 📊 Sharing presentation slides
- 💻 Linking to code repositories
- 🎥 Embedding video recordings
- 📚 Providing documentation
- 🔗 Quick access without login

Simply update the `resources` array in `src/components/ResourcesSection.astro` with your own materials, and they'll automatically appear on your Gallery page!
