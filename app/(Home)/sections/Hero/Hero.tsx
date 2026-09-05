import './styles.scss'

import CtaButton from '@/app/components/UI/CtaButton/CtaButton'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__cta'>
        <CtaButton text='Contact Me' href='/contact' />
      </div>
    </section>
  )
}
