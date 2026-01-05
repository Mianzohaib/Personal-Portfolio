'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background-secondary"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-text-primary">
            Resume
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Download PDF or view enhanced web-formatted version optimized for recruiters
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-background rounded-lg font-semibold transition-all duration-300 min-h-[44px]"
            aria-label="Download Resume PDF"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Download PDF Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background p-4 sm:p-6 md:p-8 rounded-lg border border-primary/10"
        >
          <div className="mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
              Senior Shopify Plus Engineer & Tech Lead
            </h3>
            <p className="text-text-secondary text-sm sm:text-base">
              4+ years of specialized Shopify Plus experience
            </p>
          </div>

          <div className="space-y-5 sm:space-y-6">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                Core Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-text-secondary font-medium mb-2">Shopify Plus</p>
                  <ul className="text-text-tertiary text-sm space-y-1">
                    <li>• Checkout Extensibility</li>
                    <li>• Custom Apps</li>
                    <li>• Shopify Functions</li>
                    <li>• OS 2.0 Architecture</li>
                  </ul>
                </div>
                <div>
                  <p className="text-text-secondary font-medium mb-2">Technical Leadership</p>
                  <ul className="text-text-tertiary text-sm space-y-1">
                    <li>• Architecture Design</li>
                    <li>• Team Mentorship</li>
                    <li>• Code Review & Standards</li>
                    <li>• Technical Interviews</li>
                  </ul>
                </div>
                <div>
                  <p className="text-text-secondary font-medium mb-2">APIs & Backend</p>
                  <ul className="text-text-tertiary text-sm space-y-1">
                    <li>• Admin API</li>
                    <li>• Storefront API</li>
                    <li>• Webhooks</li>
                    <li>• Node.js Services</li>
                  </ul>
                </div>
                <div>
                  <p className="text-text-secondary font-medium mb-2">Performance & CRO</p>
                  <ul className="text-text-tertiary text-sm space-y-1">
                    <li>• Core Web Vitals</li>
                    <li>• Conversion Optimization</li>
                    <li>• Analytics Integration</li>
                    <li>• A/B Testing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-primary mb-3">Professional Experience</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="border-l-2 border-primary/30 pl-3 sm:pl-4">
                  <p className="text-text-primary font-semibold text-sm sm:text-base">
                    Senior Shopify Plus Engineer & Tech Lead
                  </p>
                  <p className="text-text-tertiary text-xs sm:text-sm">2020 - Present</p>
                  <p className="text-text-secondary text-xs sm:text-sm mt-2 leading-relaxed">
                    Led architecture and implementation of 100+ Shopify Plus stores. Mentored 
                    engineering teams, established coding standards, and owned end-to-end 
                    delivery of complex projects including migrations and custom apps.
                  </p>
                </div>
                <div className="border-l-2 border-primary/30 pl-3 sm:pl-4">
                  <p className="text-text-primary font-semibold text-sm sm:text-base">
                    Shopify Plus Developer
                  </p>
                  <p className="text-text-tertiary text-xs sm:text-sm">2019 - 2020</p>
                  <p className="text-text-secondary text-xs sm:text-sm mt-2 leading-relaxed">
                    Developed custom Shopify themes, implemented checkout customizations, 
                    and integrated third-party services. Delivered 30+ store launches with 
                    95+ Lighthouse scores.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-primary mb-3">Key Achievements</h4>
              <ul className="space-y-2 text-text-secondary text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  100+ Shopify Plus store implementations across various industries
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Average 35% AOV improvement through optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Led technical architecture for multi-store and international implementations
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Reduced average project delivery time by 40% through process improvements
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

