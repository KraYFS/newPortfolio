import './styles.scss'

import CtaBlock from '@/app/components/CtaBlock/CtaBlock'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__content'>
        <CtaBlock />
      </div>
    </section>
  )
}
