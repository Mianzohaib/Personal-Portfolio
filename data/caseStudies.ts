export interface CaseStudy {
  id: string
  title: string
  client: string
  businessContext: string
  problem: string
  solution: string
  technologies: string[]
  results: string[]
  url?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'fum',
    title: 'FUM – The Good Habit',
    client: 'FUM',
    url: 'https://tryfum.com/',
    businessContext: 'Health & wellness brand with complex subscription model and international expansion needs. Shopify Plus store requiring pixel-perfect design implementation.',
    problem: 'Needed complete custom build from Figma designs to Shopify Plus storefront. Required 100% dynamic conversion maintaining design fidelity, custom checkout experience, and subscription functionality.',
    solution: 'Custom-built complete Shopify Plus storefront from Figma designs using HTML, CSS, and JavaScript. Converted all designs to fully dynamic Shopify Liquid templates. Developed custom Checkout Extensions using React + TypeScript for enhanced checkout experience. Integrated comprehensive marketing and analytics tools: Klaviyo and Mailchimp for email marketing, Hotjar for user behavior analytics, Google Analytics for tracking, Gorgias Live Chat for customer support, Twitter Ads for advertising, and Loox Reviews for social proof. Ensured pixel-perfect implementation with responsive design across all devices.',
    technologies: [
      'Shopify Plus',
      'Figma to Shopify Conversion',
      'HTML, CSS, JavaScript',
      'Shopify Liquid',
      'Checkout Extensibility (React + TypeScript)',
      'Klaviyo',
      'Mailchimp',
      'Hotjar',
      'Google Analytics',
      'Gorgias Live Chat',
      'Twitter Ads',
      'Loox Reviews',
      'Shopify CLI',
      'GitHub',
      'Dynamic Theme Development',
    ],
    results: [
      '100% pixel-perfect Figma to Shopify conversion',
      'Fully dynamic and responsive storefront',
      'Custom checkout experience with React + TypeScript',
      'Production-ready Shopify Plus implementation',
    ],
  },
  {
    id: 'getmiilk',
    title: 'GetMiilk',
    client: 'GetMiilk',
    url: 'http://getmiilk.com/',
    businessContext: 'Health & wellness brand requiring complete custom storefront with advanced product bundling and subscription functionality.',
    problem: 'Needed 100% Figma to Shopify conversion with custom "Build Your Own Bundle" functionality. Required subscription widget integration and fully dynamic theme implementation.',
    solution: 'Converted complete Figma designs to fully dynamic Shopify storefront. Custom-built "Build Your Own Bundle" functionality enabling users to create personalized product bundles. Integrated subscription widget for recurring orders. Enabled Shopify payment methods for seamless checkout. Implemented comprehensive analytics and tracking: Google Analytics (GA4), Google Tag Manager, Google Ads conversion tracking, Facebook Pixel, Microsoft Clarity for user behavior analytics, and Klaviyo for email marketing automation. Ensured pixel-perfect implementation with responsive design across all devices.',
    technologies: [
      'Figma to Shopify Conversion',
      'HTML, CSS, JavaScript',
      'Shopify Liquid',
      'Custom Bundle Functionality',
      'Subscription Widget',
      'Google Analytics (GA4)',
      'Google Tag Manager',
      'Google Ads Conversion Tracking',
      'Facebook Pixel',
      'Microsoft Clarity',
      'Klaviyo',
      'Shopify Payment Methods',
      'Shopify CLI',
      'GitHub',
      'Dynamic Theme Development',
    ],
    results: [
      '100% pixel-perfect Figma to Shopify conversion',
      'Custom "Build Your Own Bundle" functionality',
      'Seamless subscription widget integration',
      'Fully dynamic and responsive storefront',
    ],
  },
  {
    id: 'dailybelts',
    title: 'DailyBelts',
    client: 'DailyBelts',
    url: 'https://dailybelts.com/',
    businessContext: 'Fashion accessories brand with high-volume sales requiring custom quantity-based bundling and tiered pricing functionality.',
    problem: 'Needed premium theme customization based on specific client requirements. Required quantity-based bundle functionality with tiered pricing (discounts increasing with quantity). Needed comprehensive analytics and marketing integrations.',
    solution: 'Customized premium Shopify theme according to client requirements. Built custom quantity-based bundle functionality enabling tiered pricing with discounts based on quantity selection (1, 2, 3, 4+ quantities with increasing discounts). Integrated Klaviyo for email marketing, Google Analytics for tracking, and Facebook Pixel for advertising. Ensured responsive design and optimal performance.',
    technologies: [
      'Premium Theme Customization',
      'Quantity-Based Bundle Functionality',
      'Tiered Pricing System',
      'Klaviyo',
      'Google Analytics',
      'Facebook Pixel',
      'Shopify CLI',
      'GitHub',
    ],
    results: [
      'Custom quantity-based bundle with tiered pricing implemented',
      'Premium theme customized per client requirements',
      'Comprehensive analytics and marketing integrations',
      'Responsive and performance-optimized storefront',
    ],
  },
  {
    id: 'haywood-golf',
    title: 'Haywood Golf',
    client: 'Haywood Golf',
    url: 'https://www.haywoodgolf.com/',
    businessContext: 'Premium golf equipment brand requiring interactive product recommendation system to help customers find the right products based on their preferences.',
    problem: 'Needed custom quiz page to collect user data and provide personalized product recommendations. Required solution without third-party apps - fully custom-built with data stored in JSON format.',
    solution: 'Built custom interactive quiz page that collects user data through multi-step questions. Stored all product data and recommendation logic in JSON format. Implemented comparison algorithm that matches user answers with stored data to generate personalized product recommendations. No third-party apps used - completely custom-built solution using JavaScript, Shopify Liquid, and JSON data structure.',
    technologies: [
      'Custom Quiz Page Development',
      'JSON Data Storage',
      'Product Recommendation Algorithm',
      'JavaScript',
      'Shopify Liquid',
      'Shopify CLI',
      'GitHub',
    ],
    results: [
      'Custom quiz page with interactive user experience',
      'JSON-based product recommendation system',
      'Personalized product suggestions based on user data',
      'Fully custom-built solution without third-party dependencies',
    ],
  },
  {
    id: 'nonchicashmere',
    title: 'Nonchicashmere',
    client: 'Nonchicashmere',
    url: 'https://nonchicashmere.com/',
    businessContext: 'Luxury fashion brand requiring premium storefront with extensive custom functionality and pixel-perfect design implementation.',
    problem: 'Needed premium Shopify theme customized according to client requirements. Required extensive custom work to implement complex functionality. Client provided Figma designs that needed to be converted to fully functional Shopify storefront.',
    solution: 'Used premium Shopify theme as base and customized it extensively according to client requirements. Converted complete Figma designs to fully dynamic Shopify storefront. Implemented extensive custom functionality including custom sections, advanced product features, and tailored user experience. Ensured pixel-perfect implementation with responsive design across all devices.',
    technologies: [
      'Premium Theme Customization',
      'Figma to Shopify Conversion',
      'HTML, CSS, JavaScript',
      'Shopify Liquid',
      'Extensive Custom Development',
      'Shopify CLI',
      'GitHub',
    ],
    results: [
      'Premium theme customized per client requirements',
      'Complete Figma to Shopify conversion',
      'Extensive custom functionality implemented',
      'Pixel-perfect and responsive storefront',
    ],
  },
]

