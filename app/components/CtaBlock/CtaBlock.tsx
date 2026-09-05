import './styles.scss'

import CtaButton from '../UI/CtaButton/CtaButton'

export default function CtaBlock() {
  return (
    <div className='Cta-block'>
      <h1 className='Cta-block__text'>
        <span>
          Let’s
          <CtaButton className='Cta-block__button' href='/contact' />
        </span>
        Work Together
      </h1>
    </div>
  )
}
