import 'swiper/css'

import { ReactNode, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import SectionHeading from '../UI/SectionHeading/SectionHeading'

export default function SwiperSection({
  title,
  subtitle,
  buttonText,
  buttonHref,
  slides
}: {
  title: string
  subtitle: string
  buttonText: string
  buttonHref: string
  slides: ReactNode[]
}) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <>
      <SectionHeading
        buttonText={buttonText}
        buttonHref={buttonHref}
        title={title}
        subtitle={subtitle}
        swiper={{
          nextSlide: () => swiper?.slideNext(),
          prevSlide: () => swiper?.slidePrev()
        }}
      />
      <Swiper
        slidesPerView={1}
        loop
        allowTouchMove={false}
        onSlideChange={() => console.log('change')}
        onSwiper={setSwiper}
      >
        {slides.map((item, index) => {
          return <SwiperSlide key={index}>{item}</SwiperSlide>
        })}
      </Swiper>
    </>
  )
}
