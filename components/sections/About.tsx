'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background-secondary"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-text-primary">
            Engineering Philosophy
          </h2>
          
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-text-secondary text-base sm:text-lg leading-normal sm:leading-relaxed">
            <p>
              As a Senior Shopify Plus Engineer, I approach e-commerce architecture with a 
              systems-level mindset. Every decision—from checkout extensibility implementations 
              to custom app architecture—is evaluated through the lens of scalability, 
              performance, and maintainability.
            </p>
            
            <p>
              <strong className="text-text-primary">Performance & CRO:</strong> I don't just 
              build features; I optimize for conversion. Every implementation considers Core 
              Web Vitals, checkout abandonment rates, and funnel optimization. This means 
              strategic use of Shopify Functions, efficient API calls, and data-driven 
              decision-making.
            </p>
            
            <p>
              <strong className="text-text-primary">Separation of Concerns:</strong> The 
              modern Shopify Plus stack demands clear boundaries between storefront and 
              checkout logic. I architect solutions that leverage Checkout Extensibility 
              for checkout customizations while keeping storefront code clean and maintainable. 
              This separation enables faster iterations, easier testing, and better performance.
            </p>
            
            <p>
              <strong className="text-text-primary">Why Shopify Plus Experience Matters:</strong> 
              Beyond theme customization, Shopify Plus requires deep understanding of APIs, 
              webhooks, multi-store architectures, and enterprise-scale challenges. My 
              experience spans 100+ store implementations, complex migrations, and custom 
              app development that solves real business problems.
            </p>
            
            <p>
              I write code for other engineers. Clean, documented, and maintainable. I mentor 
              teams, make architectural decisions, and take ownership of outcomes—not just 
              deliverables.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

