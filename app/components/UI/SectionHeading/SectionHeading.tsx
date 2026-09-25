import './styles.scss'

import Button from '../Button/Button'

export default function SectionHeading({
  title,
  subtitle,
  buttonText,
  buttonHref
}: {
  title: string
  subtitle: string
  buttonText?: string
  buttonHref?: string
}) {
  return (
    <div className='section-heading'>
      <div className='section-heading__content'>
        <h2 className='section-heading__subtitle'>{subtitle}</h2>
        <h1 className='section-heading__title'>{title}</h1>
      </div>
      {buttonText && <Button href={buttonHref} text={buttonText} />}
    </div>
  )
}
