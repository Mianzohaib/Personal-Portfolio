# Quick Setup Guide

## Installation & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Checklist

### Required Updates

- [ ] **Contact Information:** Update email addresses in `components/sections/Contact.tsx`
- [ ] **Social Links:** Update LinkedIn, GitHub, and email links in:
  - `components/Footer.tsx`
  - `components/sections/Contact.tsx`
  - `components/SEO/PersonSchema.tsx`
- [ ] **Resume PDF:** Add your resume PDF to `public/resume.pdf`
- [ ] **SEO Metadata:** Update metadata in `app/layout.tsx`:
  - Title
  - Description
  - OpenGraph URLs
  - Twitter card URLs
- [ ] **Person Schema:** Update `components/SEO/PersonSchema.tsx` with your actual URLs

### Optional Updates

- [ ] **Case Studies:** Customize case study data in `data/caseStudies.ts`
- [ ] **Experience:** Update experience timeline in `components/sections/Experience.tsx`
- [ ] **Metrics:** Update metrics in `components/sections/Metrics.tsx`
- [ ] **Resume Content:** Update resume section content in `components/sections/Resume.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Performance Optimization

The portfolio is already optimized for:
- ✅ Core Web Vitals
- ✅ SEO (metadata, OpenGraph, JSON-LD)
- ✅ Accessibility (ARIA labels, semantic HTML)
- ✅ Dark theme with luxury aesthetic
- ✅ Subtle Framer Motion animations

## Notes

- All sections are fully functional and responsive
- Dark theme is the primary theme (as specified)
- All animations are subtle and premium
- Code is production-ready with proper TypeScript types
- Component structure is clean and maintainable

