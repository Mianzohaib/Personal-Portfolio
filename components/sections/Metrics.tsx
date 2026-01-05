'use client'

import { motion } from 'framer-motion'
import { Store, TrendingUp, Globe, Zap } from 'lucide-react'

const metrics = [
  {
    icon: Store,
    value: '100+',
    label: 'Stores Delivered',
    description: 'Shopify Plus implementations across various industries',
  },
  {
    icon: TrendingUp,
    value: '35%',
    label: 'Avg. AOV Improvement',
    description: 'Average increase in average order value through optimization',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Multi-language Stores',
    description: 'International implementations with localization',
  },
  {
    icon: Zap,
    value: '95+',
    label: 'Lighthouse Score',
    description: 'Average performance score across all projects',
  },
]

export default function Metrics() {
  return (
    <section
      id="metrics"
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
            Metrics & Impact
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto px-4">
            Quantified results that demonstrate technical authority and business impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background-secondary p-6 sm:p-7 md:p-8 rounded-lg border border-primary/10 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary mx-auto mb-3 sm:mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-base sm:text-lg font-semibold text-primary mb-2">
                  {metric.label}
                </div>
                <p className="text-text-tertiary text-xs sm:text-sm">
                  {metric.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

