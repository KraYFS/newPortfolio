import './styles.scss'

import Star from '@/public/icons/star'

import SocialLinkBlock from '../../SocialLinksBlock/SocialLinksBlock'

export default function Testimonial({
  name,
  location,
  review,
  stars
}: {
  name: string
  location: string
  review?: string
  stars?: number
}) {
  return (
    <div className='testimonial'>
      <div className='testimonial__header'>
        <div className='testimonial__title'>
          <div className='testimonial__name'>{name}</div>
          <div className='testimonial__location'>{location}</div>
        </div>
        <SocialLinkBlock />
      </div>
      <div className='testimonial__stars'>
        {Array.from({ length: stars || 0 }).map((_, index) => (
          <Star key={index} />
        ))}
      </div>
      <div className='testimonial__content'>
        <p>{review}</p>
      </div>
    </div>
  )
}
