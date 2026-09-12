import './styles.scss'

import Image from 'next/image'

import SectionHeading from '@/app/components/UI/SectionHeading/SectionHeading'
import aboutImg from '@/public/about.png'

export default function AboutSection() {
  return (
    <section className='about'>
      <SectionHeading
        buttonText='Know More'
        buttonHref='/about'
        title='I am Damien'
        subtitle='About'
      />
      <div className='about__content'>
        <Image alt='about' src={aboutImg} />
        <div className='about__content__info'>
          <div className='about__content__info__intro'>
            <div className='about__content__info__intro-title'>
              Introduction
            </div>
            <div className='about__content__info__intro-subtitle'>
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world`s beauty as I see it. Based in the
              enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and
              every frame is a piece of my heart.
            </div>
          </div>
          <div className="about__content__info__contact">

          </div>
        </div>
      </div>
    </section>
  )
}
