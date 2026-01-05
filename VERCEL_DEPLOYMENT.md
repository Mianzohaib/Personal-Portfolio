# Vercel Deployment Guide

## Quick Deploy

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

## Environment Variables (Optional)

When you get a custom domain, add this in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
```

This will update all SEO metadata automatically.

## Post-Deployment Checklist

### When You Get a Custom Domain:

1. **Update Environment Variable:**
   - Add `NEXT_PUBLIC_SITE_URL` in Vercel with your domain

2. **Update SEO Metadata:**
   - Update `app/layout.tsx` metadataBase URL
   - Add OpenGraph image URL
   - Add Twitter card image URL
   - Update PersonSchema URL in `components/SEO/PersonSchema.tsx`

3. **Add Social Links:**
   - Update LinkedIn URL in Footer and Contact sections
   - Update GitHub URL in Footer and Contact sections
   - Add Twitter handle if available

4. **Add Resume PDF:**
   - Place `resume.pdf` in `public/` folder
   - Update resume content in `components/sections/Resume.tsx` if needed

5. **Verify:**
   - Run Lighthouse audit
   - Test mobile responsiveness
   - Check all links work
   - Verify SEO metadata

## Performance Optimization

The site is already optimized for:
- ✅ Core Web Vitals
- ✅ Mobile responsiveness
- ✅ Accessibility (WCAG AA)
- ✅ Security headers
- ✅ SEO metadata

## Custom Domain Setup

1. Add domain in Vercel Dashboard
2. Update DNS records as instructed
3. Update `NEXT_PUBLIC_SITE_URL` environment variable
4. Redeploy (automatic on env var change)

---

**Note:** All enhancements are complete. The site is ready for Vercel deployment!

