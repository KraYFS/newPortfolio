import SwiperSection from '@/app/components/SwiperSection/SwiperSection'
import Testimonial from '@/app/components/UI/Testimonial/Testimonal'

export default function TestimonialsSection() {
  return (
    <SwiperSection
      title='What our clients say about us'
      subtitle='Testimonials'
      buttonText='View All Testimonials'
      buttonHref='/testimonials'
      slidesPerView={3}
      gap={30}
      slides={[
        <Testimonial
          name='John Doe'
          location='New York'
          key='1'
          stars={5}
          review='John is an exceptional photographer. His work is simply mesmerizing. He has a unique ability to capture the essence of a moment, making every shot feel alive and vibrant. I highly recommend his services to anyone looking for top-notch photography.'
        />,
        <Testimonial
          name='Jane Smith'
          location='Los Angeles'
          key='2'
          stars={4}
          review='Jane is a talented artist with a keen eye for detail. Her work consistently exceeds expectations and brings a unique perspective to every project. Highly recommended!'
        />,
        <Testimonial
          name='Michael Johnson'
          location='Chicago'
          key='3'
          stars={5}
          review='Michael is a fantastic designer. His creativity and attention to detail are unmatched. He delivered beyond my expectations and made the entire process enjoyable.'
        />,
        <Testimonial
          name='Emily Davis'
          location='San Francisco'
          key='4'
          stars={5}
          review='Emily is an incredibly talented professional. Her work is always of the highest quality and she delivers exceptional results. I would highly recommend her services to anyone in need of her expertise.'
        />
      ]}
    ></SwiperSection>
  )
}
