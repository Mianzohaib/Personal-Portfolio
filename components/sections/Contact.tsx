'use client'

import { motion } from 'framer-motion'
import { Mail, Briefcase, User } from 'lucide-react'

const contactOptions = [
  {
    icon: Briefcase,
    title: 'Hire for Shopify Plus',
    description: 'Looking for a Senior Engineer to lead your Shopify Plus initiatives? Let\'s discuss how I can help scale your e-commerce architecture.',
    cta: 'Start Conversation',
    href: 'mailto:hire@example.com?subject=Shopify Plus Role Inquiry',
  },
  {
    icon: User,
    title: 'Remote Role Inquiry',
    description: 'Interested in bringing me on as a Tech Lead or Senior Engineer? I\'m open to full-time remote opportunities with product companies and agencies.',
    cta: 'Discuss Role',
    href: 'mailto:roles@example.com?subject=Remote Role Inquiry',
  },
  {
    icon: Mail,
    title: 'Freelance Collaboration',
    description: 'Have a high-ticket Shopify Plus project? I work with agencies and direct clients on complex implementations, migrations, and custom app development.',
    cta: 'Project Inquiry',
    href: 'mailto:projects@example.com?subject=Freelance Project Inquiry',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
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
            Let's Work Together
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto px-4">
            Professional, direct communication. No sales pitches—just technical discussions about 
            how I can help solve your Shopify Plus challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {contactOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <motion.a
                key={option.title}
                href={option.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background-secondary p-6 sm:p-7 md:p-8 rounded-lg border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group block min-h-[44px]"
                aria-label={`${option.title} - ${option.cta}`}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-text-primary group-hover:text-primary transition-colors">
                  {option.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                  {option.description}
                </p>
                <span className="text-primary font-semibold text-xs sm:text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  {option.cta}
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <p className="text-text-tertiary text-xs sm:text-sm mb-3 sm:mb-4">
            Prefer a different communication method?
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors text-xs sm:text-sm min-h-[44px] flex items-center"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <span className="text-text-tertiary flex items-center">•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors text-xs sm:text-sm min-h-[44px] flex items-center"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <span className="text-text-tertiary flex items-center">•</span>
            <a
              href="mailto:contact@example.com"
              className="text-text-secondary hover:text-primary transition-colors text-xs sm:text-sm min-h-[44px] flex items-center"
              aria-label="Direct Email"
            >
              Direct Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

