import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    name: 'Maria Júlia',
    timeAgo: '2 dias atrás',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Regina Weber',
    timeAgo: '2 dias atrás',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'José Ricardo',
    timeAgo: '3 dias atrás',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export function TestimonialsSection() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const Card = ({ name, timeAgo, text }: { name: string; timeAgo: string; text: string }) => (
    <div className="bg-blue-100 text-neutral-700 rounded-2xl p-4 shadow-md w-full md:w-[300px] flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" />

      <h3 className="font-bold text-lg text-neutral-900 my-4">{name}</h3>
      <span className="text-sm text-neutral-500 my-1">{timeAgo}</span>

      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-blue-200" />
        ))}
      </div>

      <p className="text-sm my-4">{text}</p>
    </div>
  )

  return (
    <section className="container mx-auto py-8 px-4 sm:px-8 lg:px-24 bg-white">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-neutral-900 mb-10">
        O que nossos clientes dizem?
      </h2>

      {isMobile ? (
        <>
          <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={1}
            pagination={{ el: '.testimonial-pagination', clickable: true }}
            className="pb-6"
            spaceBetween={16}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <Card {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination flex justify-center mt-2" />
        </>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {testimonials.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      )}
    </section>
  )
}
