import SwiperSection from '@/app/components/SwiperSection/SwiperSection'
import PreviewProject from '@/app/components/UI/PreviewProject/PreviewProject'
import project1Img from '@/public/about.png'

export default function PortfolioSection() {
  return (
    <section>
      <SwiperSection
        slidesPerView={3}
        title='View my portfolio of work'
        subtitle='Portfolio'
        buttonText='View All Projects'
        buttonHref='/portfolio'
        gap={50}
        slides={[
          <PreviewProject
            key='project1'
            image={project1Img}
            title='Project 1'
            date='date'
            href='/projects/1'
          />,
          <PreviewProject
            key='project1'
            image={project1Img}
            title='Project 1'
            date='date for Project 1'
            href='/projects/1'
          />,
          <PreviewProject
            key='project1'
            image={project1Img}
            title='Project 1'
            date='date for Project 1'
            href='/projects/1'
          />,
          <PreviewProject
            key='project1'
            image={project1Img}
            title='Project 1'
            date='date for Project 1'
            href='/projects/1'
          />,
          <PreviewProject
            key='project1'
            image={project1Img}
            title='Project 1'
            date='date for Project 1'
            href='/projects/1'
          />,
          <PreviewProject
            key='project1'
            image={project1Img}
            title='Project 1'
            date='date for Project 1'
            href='/projects/1'
          />
        ]}
      />
    </section>
  )
}
