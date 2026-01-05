export function PersonSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'M. Zohaib Tabish',
    givenName: 'Zohaib',
    familyName: 'Tabish',
    jobTitle: 'Senior Shopify Plus Engineer & Tech Lead',
    description: '4+ years of Shopify Plus expertise. Specialized in Checkout Extensibility, Custom Apps, and large-scale migrations. Available for remote roles and high-ticket freelance projects.',
    knowsAbout: [
      'Shopify Plus',
      'Checkout Extensibility',
      'Custom Shopify Apps',
      'Shopify Functions',
      'E-commerce Architecture',
      'Web Development',
      'Shopify Liquid',
      'React',
      'TypeScript',
      'Node.js',
    ],
    url: siteUrl,
    email: 'mianzohaib0304@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
    sameAs: [
      'https://linkedin.com',
      'https://github.com',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Virtual University of Pakistan',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

