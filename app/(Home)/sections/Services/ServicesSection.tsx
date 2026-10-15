import './styles.scss'

import Image from 'next/image'

import SwiperSection from '@/app/components/SwiperSection/SwiperSection'
import CtaButton from '@/app/components/UI/CtaButton/CtaButton'
import heroSlideImg from '@/public/heroSlide.png'

function heroSlide() {
  return (
    <>
      <div className='hero-slide'>
        <div className='hero-slide__content'>
          <span className='hero-slide__title'>
            <h1>Events</h1>
            <CtaButton href='/services' />
          </span>
          <h2 className='hero-slide__subtitle'>
            Our event photography service is dedicated to capturing the magic of
            your special occasions. Whether it`s a wedding, corporate event, or
            milestone celebration, we`re there to document every heartfelt
            moment. We blend into the background, ensuring natural and candid
            shots that reflect the emotions of the day.
          </h2>
        </div>
        <Image loading='eager' alt='about' src={heroSlideImg} />
      </div>
    </>
  )
}

function secondSlide() {
  return <>4321</>
}

export default function ServicesSection() {
  return (
    <section className='services'>
      <SwiperSection
        slidesPerView={1}
        title='My Photography Services'
        subtitle='Services'
        buttonText='View All Services'
        buttonHref='/services'
        slides={[heroSlide(), secondSlide()]}
      />
    </section>
  )
}
