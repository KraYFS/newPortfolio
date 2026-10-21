import './styles.scss'

import type { StaticImageData } from 'next/image'
import Image from 'next/image'

export default function PreviewProject({
  image,
  title,
  date,
  href
}: {
  image: StaticImageData | string
  title: string
  date: string
  href: string
}) {
  return (
    <div className='preview-project'>
      <Image src={image} alt={title} />
      <div className='preview-project__content'>
        <div className='preview-project__heading'>
          <h3 className='preview-project__title'>{title}</h3>
          <p className='preview-project__date'>{date}</p>
        </div>
        <a href={href} className='preview-project__link'>
          View Project
        </a>
      </div>
    </div>
  )
}
