import './styles.scss'

import CtaBlock from '@/app/components/CtaBlock/CtaBlock'
import SectionHeading from '@/app/components/UI/SectionHeading/SectionHeading'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__content'>
        <SectionHeading title='Damien Braun' subtitle='Stunning Photography' />
        тут пездатый фон
        <CtaBlock />
      </div>
      и сюда придумать блок с примером работ
    </section>
  )
}
