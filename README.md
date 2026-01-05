# Senior Shopify Plus Engineer Portfolio

A production-grade personal portfolio website for a Senior Shopify Plus Developer / Tech Lead, optimized for hiring managers, agency leads, and high-ticket freelance clients.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** Dark-first luxury design

## Features

- ✅ Hero section with clear value proposition
- ✅ Engineering Philosophy section
- ✅ Technical Expertise (grouped by category)
- ✅ 6 Detailed Case Studies
- ✅ Advanced Shopify Systems showcase
- ✅ Experience Timeline
- ✅ Metrics & Impact
- ✅ Resume section (web + PDF)
- ✅ Contact/Conversion section
- ✅ SEO optimized (metadata, OpenGraph, JSON-LD)
- ✅ Accessibility (ARIA labels, semantic HTML)
- ✅ Performance optimized (target: 95+ Lighthouse)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

```bash
npm run build
npm start
```

## Design System

### Colors

- **Background:** Deep Dark Blue / Near-Black (`#0a0e1a`)
- **Primary Accent:** Soft Light Purple (`#a78bfa`)
- **Secondary Accent:** Light Pink (`#f9a8d4`)
- **Text:** Off-white / muted gray hierarchy

### Typography

- Modern, professional, enterprise-grade
- Clear hierarchy for technical scanning
- Inter font family

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # All section components
│   ├── Navigation.tsx      # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── SEO/                # SEO components
├── data/
│   └── caseStudies.ts      # Case study data
└── public/                 # Static assets
```

## Customization

### Update Case Studies

Edit `data/caseStudies.ts` to update case study information.

### Update Contact Information

Edit `components/sections/Contact.tsx` to update email addresses and links.

### Update Resume

1. Add your resume PDF to `public/resume.pdf`
2. Update resume content in `components/sections/Resume.tsx`

### Update SEO Metadata

Edit `app/layout.tsx` to update SEO metadata, OpenGraph, and Twitter cards.

## Performance

This portfolio is optimized for:
- Core Web Vitals
- Lighthouse score 95+
- Fast page loads
- Smooth animations

## License

Private portfolio project.

