import './styles.scss'

import Button from '../Button/Button'

export default function SectionHeading({
  title,
  subtitle,
  buttonText,
  buttonHref,
  swiper
}: {
  title: string
  subtitle: string
  buttonText?: string
  buttonHref?: string
  swiper?: {
    nextSlide: () => void
    prevSlide: () => void
  }
}) {
  return (
    <div className='section-heading'>
      <div className='section-heading__content'>
        <h2 className='section-heading__subtitle'>{subtitle}</h2>
        <h1 className='section-heading__title'>{title}</h1>
      </div>
      <div className='section-heading__btn'>
        {buttonText && <Button href={buttonHref} text={buttonText} />}
        {swiper && (
          <div className='section-heading__slide-btns'>
            <Button
              onClick={swiper.prevSlide}
              className='section-heading__slide-btn'
              text='<'
            />
            <Button
              onClick={swiper.nextSlide}
              className='section-heading__slide-btn'
              text='>'
            />
          </div>
        )}
      </div>
    </div>
  )
}
