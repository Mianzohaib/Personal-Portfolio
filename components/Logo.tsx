'use client'

import { motion } from 'framer-motion'

export default function Logo() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector('#hero')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      href="#hero"
      onClick={handleClick}
      className="flex items-center gap-2 group min-h-[44px] min-w-[44px]"
      aria-label="Home - Zohaib Portfolio"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        {/* Logo text with professional gradient effect */}
        <span className="text-xl sm:text-2xl font-bold relative inline-block tracking-tight">
          {/* Gradient Z with subtle glow */}
          <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent relative">
            <span className="absolute inset-0 bg-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            Z
          </span>
          {/* Rest of name */}
          <span className="text-text-primary group-hover:text-primary transition-colors duration-300">
            ohaib
          </span>
        </span>
        
        {/* Subtle accent underline on hover */}
        <motion.div
          className="absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-primary via-primary-light to-secondary origin-left rounded-full"
          initial={{ width: 0, opacity: 0 }}
          whileHover={{ width: '100%', opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>
    </a>
  )
}

