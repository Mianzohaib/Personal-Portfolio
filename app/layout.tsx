import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'),
  title: {
    default: 'Senior Shopify Plus Engineer & Tech Lead | Portfolio',
    template: '%s | Senior Shopify Plus Engineer'
  },
  description: '4+ years of Shopify Plus expertise. Specialized in Checkout Extensibility, Custom Apps, and large-scale migrations. Available for remote roles and high-ticket freelance projects.',
  keywords: [
    'Shopify Plus',
    'Shopify Developer',
    'Checkout Extensibility',
    'Shopify Apps',
    'E-commerce Engineer',
    'Tech Lead',
    'Shopify Plus Developer',
    'Custom Shopify Apps',
    'Shopify Migration',
    'Shopify Plus Engineer',
    'Remote Shopify Developer',
    'Shopify Plus Consultant'
  ],
  authors: [{ name: 'M. Zohaib Tabish', url: 'https://linkedin.com' }],
  creator: 'M. Zohaib Tabish',
  openGraph: {
    title: 'Senior Shopify Plus Engineer & Tech Lead',
    description: '4+ years of Shopify Plus expertise. Specialized in Checkout Extensibility, Custom Apps, and large-scale migrations.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Senior Shopify Plus Engineer Portfolio',
    // images: [] - Add when domain is configured and images are available
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Shopify Plus Engineer & Tech Lead',
    description: '4+ years of Shopify Plus expertise. Specialized in Checkout Extensibility, Custom Apps, and large-scale migrations.',
    // creator: '@yourhandle' - Add when Twitter handle is available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  category: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="skip-to-content"
          aria-label="Skip to main content"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}

