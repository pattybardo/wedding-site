# Quick Deployment Guide

## Deploy Your Wedding Site to GitHub Pages

Follow these steps to get your wedding website live on the internet.

### Step 1: Commit and Push Your Changes

```bash
# Add all files to git
git add .

# Commit with a message
git commit -m "Set up wedding site with GitHub Actions deployment"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/pattybardo/wedding-site
2. Click on **Settings** (top navigation)
3. Click on **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions** from the dropdown
5. That's it! No need to click save, it auto-saves

### Step 3: Watch the Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow called "Deploy to GitHub Pages" running
3. Click on it to watch the progress
4. Wait for the green checkmark (usually takes 30-60 seconds)

### Step 4: View Your Live Site

Your site will be available at:

**https://pattybardo.github.io/wedding-site/**

You can now:
- Share this URL with friends and family
- View it on your phone
- Make changes from anywhere using Claude on the web

## Making Updates

Whenever you want to make changes:

1. Edit your files (locally or via GitHub web interface with Claude)
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Update wedding details"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and deploy your site
4. Changes appear live in 1-2 minutes

## Using Claude Web to Edit

Once deployed, you can use Claude on any device:

1. Go to https://claude.ai
2. Tell Claude: "I want to edit my wedding site at https://github.com/pattybardo/wedding-site"
3. Claude can help you make changes to any file
4. Commit and push the changes through GitHub
5. View the updated site on your phone at the GitHub Pages URL

## Troubleshooting

**Site not appearing?**
- Check the Actions tab for any errors (red X)
- Make sure GitHub Pages source is set to "GitHub Actions"
- Wait a few minutes and try again

**Changes not showing?**
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear your browser cache
- Wait 1-2 minutes for deployment to complete

**Need help?**
- Check the Actions tab for deployment logs
- Look for error messages in the workflow run
