'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Code2, Target } from 'lucide-react'

const experiences = [
  {
    period: 'Oct 2025 – Present',
    role: 'Senior Shopify Developer',
    company: 'SWIFTNINE | Lahore, Pakistan',
    icon: Code2,
    responsibilities: [
      'Lead Shopify projects end-to-end, owning technical planning, execution, and on-time delivery across multiple client accounts',
      'Act as the primary technical point of contact, translating business requirements into scalable Shopify Plus solutions',
      'Mentor and review work of junior developers, enforcing best practices, clean architecture, and performance standards',
      'Convert complex Figma designs into production-ready Shopify themes using Liquid, Shopify CLI, and modern frontend workflows',
      'Build Shopify Checkout Extensions and private Shopify apps to support custom business logic and advanced checkout flows',
      'Design and implement webhook-driven systems for multi-checkout setups, inventory synchronization, and order automation',
      'Optimize high-volume dropshipping stores, improving performance, stability, and operational efficiency',
      'Drive CRO initiatives through A/B testing and UX experimentation to improve conversion rates and Average Order Value',
      'Implement multilingual Shopify stores supporting 15+ languages for international markets',
      'Lead large-scale migrations from WooCommerce and Magento to Shopify with zero-downtime strategy',
      'Develop custom Node.js migration tools to migrate products, collections, pages, customers, orders, discounts, and SEO data',
      'Build interactive 2D product customizers enabling personalized product selection',
    ],
    achievements: [],
  },
  {
    period: 'Aug 2024 – Sep 2025',
    role: 'Senior Shopify Developer',
    company: 'Devsinside (Canada — Remote)',
    icon: Code2,
    responsibilities: [
      'Delivered end-to-end Figma-to-Shopify solutions in a fully remote, international team environment',
      'Led and supported junior developers through code reviews, architectural guidance, and task planning',
      'Built private Shopify apps and Checkout Extensions using Shopify CLI and GitHub workflows',
      'Implemented CRO-focused improvements and A/B testing strategies to optimize storefront conversions',
      'Collaborated closely with designers and stakeholders to ship performance-optimized Shopify storefronts',
    ],
    achievements: [],
  },
  {
    period: 'Oct 2023 – Oct 2024',
    role: 'Shopify Developer',
    company: 'TechSigma | Lahore, Pakistan',
    icon: Target,
    responsibilities: [
      'Developed Shopify themes from Figma to production deployment',
      'Resolved complex runtime issues related to Shopify themes, APIs, and custom JavaScript logic',
      'Mentored junior developers and assisted in maintaining code quality',
      'Worked with Cart API, Storefront API, Admin API, and third-party integrations',
      'Implemented dynamic storefront and cart logic',
    ],
    achievements: [],
  },
  {
    period: 'Mar 2023 – Sep 2023',
    role: 'Junior Shopify Developer',
    company: 'Webbuggs | Lahore, Pakistan',
    icon: Target,
    responsibilities: [
      'Built dynamic Shopify storefronts using Liquid, JavaScript, and OS 2.0 architecture',
      'Converted Figma designs into responsive, pixel-perfect Shopify themes',
      'Integrated Shopify Cart API for smooth cart interactions',
      'Migrated Online Store 1.0 themes to Shopify OS 2.0',
      'Fixed runtime theme issues using Shopify CLI and GitHub',
    ],
    achievements: [],
  },
  {
    period: 'Jun 2022 – Jan 2023',
    role: 'Frontend Web Developer',
    company: 'OOPTech IT Solutions | Faisalabad, Pakistan',
    icon: Target,
    responsibilities: [
      'Converted Figma designs into pixel-perfect, responsive HTML/CSS interfaces',
      'Fixed frontend performance and UI issues',
      'Integrated frontend with backend systems using REST APIs',
      'Maintained clean and scalable codebases using GitHub',
    ],
    achievements: [],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background-secondary"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-text-primary">
            Experience Timeline
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto px-4">
            Chronological progression with focus on leadership and technical ownership
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-12 sm:pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 sm:left-5 md:left-6 top-2 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-primary rounded-full border-2 sm:border-3 md:border-4 border-background-secondary" />

                  <div className="bg-background p-4 sm:p-5 md:p-6 rounded-lg border border-primary/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-tertiary" />
                          <span className="text-text-tertiary text-xs sm:text-sm">{exp.period}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-text-secondary text-xs sm:text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2 flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-text-secondary text-xs sm:text-sm flex items-start gap-2 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-secondary mb-1.5 sm:mb-2 flex items-center gap-2">
                          <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.achievements.map((ach, idx) => (
                            <li
                              key={idx}
                              className="text-text-secondary text-xs sm:text-sm flex items-start gap-2 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                              {ach}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

