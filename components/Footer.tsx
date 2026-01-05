import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="mb-2 flex justify-center md:justify-start">
              <Logo />
            </div>
            <p className="text-text-tertiary text-xs sm:text-sm">
              © {new Date().getFullYear()} Zohaib Tabish · Senior Shopify Plus Engineer
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-primary transition-colors text-xs sm:text-sm min-h-[44px] flex items-center"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-primary transition-colors text-xs sm:text-sm min-h-[44px] flex items-center"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-text-tertiary hover:text-primary transition-colors text-xs sm:text-sm min-h-[44px] flex items-center"
              aria-label="Email Contact"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

