# Deploy Circle Apex Axis to Vercel

## Quick Start (2 minutes)

### Step 1: Go to Vercel
Open your browser and navigate to:
```
https://vercel.com
```

### Step 2: Sign Up / Log In
- Click **"Sign Up"** (or **"Log In"** if you have an account)
- Use GitHub to authenticate (easiest option)
- Authorize Vercel to access your GitHub account

### Step 3: Import Your Repository
1. After logging in, click **"Add New..."** button (top right)
2. Select **"Project"**
3. Click **"Import Git Repository"**
4. Search for: **`Circle-Apex-Axis-`**
5. Click **"Import"**

### Step 4: Configure Project
The default settings are perfect. You'll see:
- **Framework Preset:** Vite (auto-detected ✓)
- **Build Command:** `npm run build` (auto-filled ✓)
- **Output Directory:** `dist` (auto-filled ✓)
- **Install Command:** `npm install` (auto-filled ✓)

**Just click "Deploy"**

### Step 5: Wait for Deployment
Vercel will:
1. Clone your repo
2. Install dependencies
3. Build the site
4. Deploy to CDN

**Takes ~2-3 minutes first time**

---

## Your Live Site URLs

After deployment completes, you'll get:

### Production URL
```
https://circle-apex-axis.vercel.app
```

### Custom Domain (Optional)
In Vercel Dashboard > Settings > Domains:
- Add custom domain: `circleapexaxis.com`
- Update DNS with Vercel's nameservers
- Auto HTTPS certificate

---

## Auto-Deploy (Future Updates)

**Every time you push to GitHub, Vercel auto-deploys:**

```bash
# Make changes locally
git add .
git commit -m "Update site"
git push origin main

# Vercel automatically rebuilds and deploys! ✨
```

---

## Vercel Dashboard Controls

Once deployed, access your dashboard at:
```
https://vercel.com/band1eader/circle-apex-axis
```

### Common Tasks:
- **View Logs:** Deployments tab → see build logs
- **Rollback:** Deployments tab → click previous deployment → "Promote to Production"
- **Environment Variables:** Settings → Environment Variables (for API keys, etc.)
- **Domains:** Settings → Domains (add custom domain)
- **Analytics:** Analytics tab (track visitor stats)

---

## Troubleshooting

### Deployment Failed?
1. Check build logs in Vercel Dashboard
2. Common issues:
   - Missing dependencies → Run `npm install` locally
   - TypeScript errors → Run `npm run typecheck`
   - Environment variables → Add to Vercel Settings

### Need to Debug Locally?
```bash
npm run build
npm run preview
# Opens local preview of production build
```

### Update Dependencies
```bash
npm update
git add package-lock.json
git commit -m "Update dependencies"
git push
# Vercel auto-deploys
```

---

## Next Steps

1. ✅ Deploy to Vercel (follow steps above)
2. 📧 Add newsletter backend (Mailchimp/Resend)
3. 💳 Add merchandise payments (Stripe)
4. 🎵 Add Spotify/SoundCloud embeds
5. 📊 Set up analytics (Google Analytics / Plausible)

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev

---

**Your site will be live in minutes!** 🚀
