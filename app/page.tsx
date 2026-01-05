import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechnicalExpertise from '@/components/sections/TechnicalExpertise'
import CaseStudies from '@/components/sections/CaseStudies'
import AdvancedSystems from '@/components/sections/AdvancedSystems'
import Experience from '@/components/sections/Experience'
import Metrics from '@/components/sections/Metrics'
import Resume from '@/components/sections/Resume'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { PersonSchema } from '@/components/SEO/PersonSchema'

export default function Home() {
  return (
    <>
      <PersonSchema />
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <TechnicalExpertise />
        <CaseStudies />
        <AdvancedSystems />
        <Experience />
        <Metrics />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

