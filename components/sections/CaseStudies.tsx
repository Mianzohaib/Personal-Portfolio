'use client'

import { motion } from 'framer-motion'
import { caseStudies } from '@/data/caseStudies'
import { ExternalLink } from 'lucide-react'

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background-secondary"
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
            Case Studies
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto px-4">
            Real Shopify Plus implementations that demonstrate system-level engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-4 sm:p-6 md:p-8 rounded-lg border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-text-primary group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <p className="text-text-tertiary text-xs sm:text-sm">{study.client}</p>
                    {study.url && (
                      <a
                        href={study.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark text-xs sm:text-sm flex items-center gap-1 transition-colors min-h-[44px] sm:min-h-0"
                        aria-label={`View live site for ${study.title}`}
                      >
                        View Live Site
                        <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">Business Context</h4>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{study.businessContext}</p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">Problem</h4>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{study.problem}</p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">Solution</h4>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="text-text-secondary text-xs sm:text-sm flex items-start gap-2 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

