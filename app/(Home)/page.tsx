import './styles.scss'

import AboutSection from './sections/About/AboutSection'
import HeroSection from './sections/Hero/HeroSection'

export default function Home() {
  return (
    <main>
      <div className='container'>
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  )
}
