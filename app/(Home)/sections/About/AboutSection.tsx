import './styles.scss'

import Image from 'next/image'

import SocialLinkBlock from '@/app/components/SocialLinksBlock/SocialLinksBlock'
import Button from '@/app/components/UI/Button/Button'
import SectionHeading from '@/app/components/UI/SectionHeading/SectionHeading'
import aboutImg from '@/public/about.png'

export default function AboutSection() {
  const contactLinks = [
    { label: 'Email', value: 'damienbraun@gmail.com' },
    { label: 'Phone Number', value: '+00 000000000' }
  ]

  return (
    <section className='about'>
      <SectionHeading
        buttonText='Know More'
        buttonHref='/about'
        title='I am Damien'
        subtitle='About'
      />

      <div className='about__content'>
        <Image loading='eager' alt='about' src={aboutImg} />

        <div className='about__info'>
          <div className='about__intro'>
            <span className='about__intro-title'>Introduction</span>
            <span className='about__intro-text'>
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world`s beauty as I see it. Based in the
              enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and
              every frame is a piece of my heart.
            </span>
          </div>

          <div className='about__contact'>
            <span className='about__contact-title'>Contact Information</span>

            <div className='about__contact-links'>
              {contactLinks.map(({ label, value }) => (
                <div className='about__contact-item' key={label}>
                  <span className='about__contact-label'>{label}</span>
                  <span className='about__contact-value'>{value}</span>
                </div>
              ))}
            </div>
            <div className='about__contact-actions'>
              <SocialLinkBlock />
              <>
                <Button className='about__contact-btn' text='Let’s Work' />
                <Button className='about__contact-btn' text='Download CV' />
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
