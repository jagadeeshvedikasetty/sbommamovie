# 🚀 SHETTY Website - Complete Deployment Guide

## Table of Contents
1. [Vercel Deployment (Easiest)](#vercel-deployment)
2. [Netlify Deployment](#netlify-deployment)
3. [GitHub Pages Deployment](#github-pages-deployment)
4. [Traditional Web Hosting (cPanel/FTP)](#traditional-hosting)
5. [Pre-Deployment Checklist](#pre-deployment-checklist)

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All custom images are added to `public/images/movies/`
- [ ] Movie data in `src/components/MovieGrid.js` is updated
- [ ] Project builds successfully: `npm run build`
- [ ] Test locally: `npm start` works without errors

---

## 1. Vercel Deployment (Easiest & Recommended)

### ⭐ Best for: Quick deployment, automatic updates, free hosting

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Navigate to Your Project
```bash
cd shetty-website
```

### Step 3: Deploy
```bash
vercel
```

### Step 4: Follow the Prompts
- Login/Signup when prompted
- Set up and deploy: **Yes**
- Which scope: Choose your account
- Link to existing project: **No**
- Project name: `shetty-website` (or your preferred name)
- Directory: `./` (press Enter)
- Override settings: **No**

### Step 5: Done! 🎉
You'll get a URL like: `https://shetty-website.vercel.app`

### To Update Your Site:
```bash
vercel --prod
```

---

## 2. Netlify Deployment

### ⭐ Best for: Continuous deployment, form handling, free SSL

### Method A: Netlify CLI

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Build Your Project
```bash
cd shetty-website
npm run build
```

#### Step 3: Deploy
```bash
netlify deploy
```

#### Step 4: Follow Prompts
- Authorize with Netlify
- Create & configure a new site
- Deploy path: `./build`

#### Step 5: Deploy to Production
```bash
netlify deploy --prod
```

### Method B: Netlify Drop (Drag & Drop)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag and drop the `build` folder

4. Done! You'll get a URL like: `https://random-name.netlify.app`

### Method C: Connect to Git (Automatic Updates)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click "Deploy site"

---

## 3. GitHub Pages Deployment

### ⭐ Best for: Free hosting with your GitHub account

### Step 1: Install gh-pages Package
```bash
cd shetty-website
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these lines to `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/shetty-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    // ... existing scripts
  }
}
```

Replace `yourusername` with your actual GitHub username.

### Step 3: Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 4: Create GitHub Repository
1. Go to [github.com](https://github.com) and create a new repository named `shetty-website`
2. Don't initialize with README

### Step 5: Push to GitHub
```bash
git remote add origin https://github.com/yourusername/shetty-website.git
git branch -M main
git push -u origin main
```

### Step 6: Deploy
```bash
npm run deploy
```

### Step 7: Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Select `gh-pages` branch
4. Click Save

Your site will be live at: `https://yourusername.github.io/shetty-website`

### To Update:
```bash
npm run deploy
```

---

## 4. Traditional Web Hosting (cPanel/FTP)

### ⭐ Best for: Shared hosting with cPanel, Bluehost, HostGator, etc.

### Step 1: Build Your Project
```bash
cd shetty-website
npm run build
```

This creates a `build` folder with all optimized files.

### Step 2: Option A - Using cPanel File Manager

1. Login to your cPanel
2. Go to "File Manager"
3. Navigate to `public_html` (or your domain's root folder)
4. Delete any existing files (or create a subfolder)
5. Upload all contents from the `build` folder:
   - Select all files in `build` folder
   - Upload using the Upload button
   - Wait for upload to complete

### Step 2: Option B - Using FTP Client (FileZilla)

1. Download [FileZilla](https://filezilla-project.org/)
2. Connect to your server:
   - Host: `ftp.yourdomain.com`
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
3. Navigate to `public_html` on the remote side
4. Drag all contents from your local `build` folder to the server
5. Wait for upload to complete

### Step 3: Configure .htaccess (Important!)

Create a `.htaccess` file in your `public_html` folder with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures React Router works properly.

### Step 4: Visit Your Site
Go to `https://yourdomain.com`

---

## 5. Quick Deployment with Standalone HTML

### ⭐ Best for: Simple deployment without build process

If you want to deploy WITHOUT the React build process:

1. Use the `index.html` file from the root of the project
2. Upload it directly to any web hosting
3. No build required!

This version works instantly but doesn't have the performance optimizations of the React build.

---

## Environment Variables (Optional)

If you need environment variables (API keys, etc.):

### Create .env file in project root:
```
REACT_APP_API_KEY=your-api-key
REACT_APP_API_URL=https://api.example.com
```

### Access in code:
```javascript
const apiKey = process.env.REACT_APP_API_KEY;
```

### For Vercel:
```bash
vercel env add REACT_APP_API_KEY
```

### For Netlify:
Site settings → Environment variables → Add variable

### For GitHub Pages:
Use GitHub Secrets in repository settings

---

## Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

### For Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Configure DNS settings

### For GitHub Pages:
1. Add a `CNAME` file in `public` folder with your domain
2. Configure your domain's DNS:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### White Screen After Deployment
- Check browser console for errors (F12)
- Verify all image paths are correct
- Check that `homepage` in package.json is correct

### 404 on Refresh (GitHub Pages)
- Make sure `.htaccess` or equivalent routing is configured
- Consider using HashRouter instead of BrowserRouter

### Images Not Loading
- Verify images are in `public/images/movies/`
- Check image paths start with `/` in React version
- Ensure images were included in the build

---

## Performance Optimization Tips

1. **Compress Images**: Use [TinyPNG](https://tinypng.com/)
2. **Enable Compression**: Most platforms do this automatically
3. **Use CDN**: Vercel and Netlify include CDN by default
4. **Lazy Loading**: Already implemented in the code
5. **Cache Headers**: Automatically handled by hosting platforms

---

## Deployment Comparison

| Platform | Difficulty | Speed | Free Tier | Best For |
|----------|-----------|-------|-----------|----------|
| Vercel | ⭐ Easy | ⚡ Fast | ✅ Yes | React apps |
| Netlify | ⭐ Easy | ⚡ Fast | ✅ Yes | Static sites |
| GitHub Pages | ⭐⭐ Medium | 🚀 Good | ✅ Yes | Open source |
| cPanel/FTP | ⭐⭐⭐ Hard | 🐌 Varies | ❌ Paid | Traditional hosting |

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Run locally
npm start

# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod

# Deploy to GitHub Pages
npm run deploy

# Test production build locally
npx serve -s build
```

---

## Need Help?

- **Vercel Issues**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Issues**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)

---

## 🎉 Congratulations!

Your SHETTY website is now live! Share your URL with the world! 🌍

Remember to update your deployment whenever you make changes to the code or add new movies.
