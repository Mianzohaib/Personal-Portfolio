'use client'

import { motion } from 'framer-motion'

const expertiseGroups = [
  {
    title: 'Shopify Core',
    items: [
      'Shopify Liquid',
      'OS 2.0 Architecture',
      'Metafields & Metaobjects',
      'Checkout Extensibility',
      'Shopify Functions',
    ],
  },
  {
    title: 'APIs & Backend',
    items: [
      'Admin API',
      'Storefront API',
      'Webhooks',
      'Node.js Services',
    ],
  },
  {
    title: 'Frontend',
    items: [
      'JavaScript (ES6+)',
      'React',
      'Tailwind',
      'Performance Optimization',
    ],
  },
  {
    title: 'CRO & Analytics',
    items: [
      'Microsoft Clarity',
      'Lucky Orange',
      'Funnel Optimization',
      'A/B Testing Mindset',
    ],
  },
]

export default function TechnicalExpertise() {
  return (
    <section
      id="expertise"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-text-primary">
            Technical Expertise
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto px-4">
            Deep specialization in Shopify Plus ecosystem and modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {expertiseGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="bg-background-secondary p-4 sm:p-5 md:p-6 rounded-lg border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">
                {group.title}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-text-secondary text-sm sm:text-base flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

