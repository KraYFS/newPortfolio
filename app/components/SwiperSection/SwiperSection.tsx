import 'swiper/css'

import { useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import SectionHeading from '../UI/SectionHeading/SectionHeading'

export default function SwiperSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  console.log(swiper)

  return (
    <section className='services'>
      <SectionHeading
        buttonText='View All Services'
        buttonHref='/services'
        title='My Photography Services'
        subtitle='Services'
        swiper={{
          nextSlide: () => swiper?.slideNext(),
          prevSlide: () => swiper?.slidePrev()
        }}
      />
      <Swiper
        slidesPerView={1}
        loop
        controller
        onSlideChange={() => console.log('change')}
        onSwiper={setSwiper}
      >
        <SwiperSlide>123</SwiperSlide>
        <SwiperSlide>123</SwiperSlide>
      </Swiper>
    </section>
  )
}
