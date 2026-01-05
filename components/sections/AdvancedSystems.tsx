'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Database, GitBranch, RefreshCw, ArrowRight } from 'lucide-react'

const systems = [
  {
    icon: Code,
    title: 'Checkout Extensions',
    description: 'Built custom checkout UI extensions using Checkout Extensibility API. Implemented subscription selection, custom fields, and validation logic that integrates seamlessly with Shopify\'s checkout flow.',
    details: [
      'UI Extensions for custom checkout fields',
      'Function Extensions for validation and discounts',
      'Payment Customization for alternative payment methods',
      'Delivery Customization for shipping options',
    ],
  },
  {
    icon: Zap,
    title: 'Custom Shopify Apps',
    description: 'Developed production-grade Shopify Apps using Node.js, React, and Shopify CLI. Apps handle complex business logic, integrate with external services, and scale to handle enterprise traffic.',
    details: [
      'Admin API integration for data management',
      'Webhook handling for real-time updates',
      'OAuth flow and session management',
      'GraphQL and REST API usage',
    ],
  },
  {
    icon: Database,
    title: 'Multi-store Checkout Architecture',
    description: 'Architected multi-store setups with shared inventory, unified checkout experience, and centralized order management. Handles complex scenarios like B2B/B2C separation and international markets.',
    details: [
      'Shared inventory via Admin API',
      'Unified customer experience',
      'Centralized order processing',
      'Role-based access control',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Webhook-based Inventory & Order Sync',
    description: 'Built robust webhook systems for real-time inventory synchronization across multiple systems. Handles order processing, inventory updates, and third-party integrations with error handling and retry logic.',
    details: [
      'Real-time inventory synchronization',
      'Order status webhook processing',
      'Error handling and retry mechanisms',
      'Third-party system integration',
    ],
  },
  {
    icon: GitBranch,
    title: 'Subscription Systems',
    description: 'Implemented subscription management systems using Shopify Subscriptions API and custom apps. Handles subscription lifecycle, billing, and customer management with seamless checkout integration.',
    details: [
      'Subscription API integration',
      'Billing cycle management',
      'Customer subscription portal',
      'Checkout Extensibility for subscriptions',
    ],
  },
  {
    icon: ArrowRight,
    title: 'Migration Tooling',
    description: 'Developed custom migration tools for WooCommerce → Shopify and Magento → Shopify migrations. Handles product data, customer data, order history, and ensures zero downtime during transitions.',
    details: [
      'Automated data migration scripts',
      'Product and variant mapping',
      'Customer and order migration',
      'Post-migration validation',
    ],
  },
]

export default function AdvancedSystems() {
  return (
    <section
      id="advanced-systems"
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
            Advanced Shopify Systems
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto px-4">
            Enterprise-level architecture and implementation patterns for Senior Engineers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {systems.map((system, index) => {
            const Icon = system.icon
            return (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background-secondary p-4 sm:p-5 md:p-6 rounded-lg border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary mb-2 sm:mb-3" />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-text-primary group-hover:text-primary transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {system.description}
                  </p>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {system.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-text-tertiary text-xs sm:text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

