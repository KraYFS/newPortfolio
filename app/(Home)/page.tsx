'use client'

import './styles.scss'

import AboutSection from './sections/About/AboutSection'
import HeroSection from './sections/Hero/HeroSection'
import PortfolioSection from './sections/portfolio/PortfolioSection'
import ServicesSection from './sections/Services/ServicesSection'
import TestimonialsSection from './sections/Testimonials/TestimonialsSection'

export default function Home() {
  return (
    <main>
      <div className='container'>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
      </div>
    </main>
  )
}
