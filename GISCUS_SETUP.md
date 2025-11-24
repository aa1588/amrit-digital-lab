# Giscus Comments Setup Guide

I've added a beautiful comments section to your blog! Here's how to complete the setup:

## Step 1: Enable GitHub Discussions

1. Go to your GitHub repository: `https://github.com/aa1588/your-repo-name`
2. Click on **Settings** tab
3. Scroll down to **Features** section
4. Check the box for **Discussions**

## Step 2: Install Giscus App

1. Visit: https://github.com/apps/giscus
2. Click **Install**
3. Select your repository (aa1588/your-repo-name)
4. Authorize the app

## Step 3: Get Your Configuration

1. Go to: https://giscus.app
2. Fill in the configuration:
   - **Repository**: `aa1588/your-repo-name`
   - **Page ↔️ Discussions Mapping**: Choose "pathname"
   - **Discussion Category**: Choose "General" or create a new category like "Blog Comments"
   - **Features**: Enable reactions
   - **Theme**: Choose "light" (matches your site)

3. Scroll down and copy the generated values:
   - `data-repo-id`
   - `data-category-id`

## Step 4: Update Your Code

Open `src/components/Comments.astro` and replace these values:

```astro
data-repo="aa1588/your-actual-repo-name"
data-repo-id="YOUR_REPO_ID"          // Replace with actual ID from giscus.app
data-category-id="YOUR_CATEGORY_ID"  // Replace with actual ID from giscus.app
```

## Step 5: Deploy

Once you've updated the values, commit and deploy your site. The comments section will appear at the bottom of every blog post!

## Features Included:

✅ Beautiful, centered header with "Comments" title
✅ Subtle border and shadow for visual separation
✅ Fully responsive design
✅ Matches your site's design system
✅ Readers can comment using their GitHub accounts
✅ You'll get email notifications for new comments
✅ You can reply directly from GitHub Discussions or the blog

## Testing:

After setup, visit any blog post and you should see the comments section at the bottom. Try leaving a test comment!

## Need Help?

If you run into any issues:
1. Make sure Discussions are enabled on your repo
2. Double-check the repo-id and category-id values
3. Ensure the Giscus app is installed on your repository
4. Check browser console for any errors
