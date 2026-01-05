'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault()
  const element = document.querySelector(targetId)
  element?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background gradient with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-text-primary"
          >
            Senior{' '}
            <span className="text-primary">Shopify Plus</span>
            <br />
            Engineer & Technical Lead
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-text-secondary mb-4 sm:mb-6 max-w-3xl mx-auto px-4"
          >
            Building scalable Shopify Plus systems with 4+ years of hands-on experience across checkout extensibility, custom apps, and large-scale migrations.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-4"
          >
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-lg border border-primary/20 text-xs sm:text-sm text-text-tertiary">
              Shopify Plus Architecture
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-lg border border-primary/20 text-xs sm:text-sm text-text-tertiary">
              Checkout Extensibility
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-lg border border-primary/20 text-xs sm:text-sm text-text-tertiary">
              Custom Shopify Apps
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-lg border border-primary/20 text-xs sm:text-sm text-text-tertiary">
              Enterprise Migrations
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <a
              href="#case-studies"
              onClick={(e) => smoothScroll(e, '#case-studies')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-background rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group min-h-[44px]"
              aria-label="View Selected Case Studies"
            >
              View Selected Case Studies
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#resume"
              onClick={(e) => smoothScroll(e, '#resume')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-background-secondary hover:bg-background border border-primary/30 text-text-primary rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px]"
              aria-label="Download Resume PDF"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Resume (PDF)
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs sm:text-sm text-text-tertiary mt-4 sm:mt-6 px-4"
          >
            Trusted by global brands · Remote & Product-ready
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-text-tertiary" />
      </motion.div>
    </section>
  )
}

