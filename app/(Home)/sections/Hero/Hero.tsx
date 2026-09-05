import './styles.scss'

import CtaBlock from '@/app/components/CtaBlock/CtaBlock'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__content'>
        <div className='hero__content__heading'>
          <span className='hero__content__heading-subtitle'>
            Stunning Photography
          </span>
          <h1 className='hero__content__heading-title'>Damien Braun</h1>
        </div>
        <CtaBlock />
      </div>
    </section>
  )
}
