import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDollarSign,
  faClock,
  faUserGroup,
  faBriefcase,
  faUserGear,
  faStar
} from '@fortawesome/free-solid-svg-icons'

const benefits = [
  {
    icon: faDollarSign,
    title: 'Alta Remuneração',
    description: 'Comissões elevadas aumentam ganhos conforme vendas crescem.'
  },
  {
    icon: faClock,
    title: 'Horário Flexível',
    description: 'Possibilidade de organizar a própria rotina de trabalho.'
  },
  {
    icon: faUserGroup,
    title: 'Networking Profissional',
    description: 'Expande contatos úteis para futuras oportunidades de carreira.'
  },
  {
    icon: faBriefcase,
    title: 'Crescimento na Carreira',
    description: 'Boas chances de ascensão profissional e liderança.'
  },
  {
    icon: faUserGear,
    title: 'Desenvolvimento de Habilidades',
    description: 'Aprimora negociação, comunicação e relacionamento interpessoal.'
  },
  {
    icon: faStar,
    title: 'Satisfação Pessoal',
    description: 'Ajuda clientes a atingir objetivos financeiros.'
  }
]

export const BenefitGrid = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <section className="w-full bg-white p-4">
      {isMobile ? (
        <>
          <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ el: '.custom-pagination', clickable: true }}
            className="pb-4"
          >
            {benefits.map((benefit, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <BenefitCard {...benefit} isMobile />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center mt-4" />
        </>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      )}
    </section>
  )
}

type BenefitCardProps = {
  icon: any
  title: string
  description: string
  isMobile?: boolean
}

function BenefitCard({ icon, title, description, isMobile = false }: BenefitCardProps) {
  return (
    <div
      className={`bg-[#A8CDEE] p-6 rounded-[40px] flex flex-col justify-center text-center items-center text-[#0E1022] ${isMobile ? 'min-w-[280px] min-h-[300px]' : 'min-w-[359px] min-h-[325px]'
        }`}
    >
      <FontAwesomeIcon icon={icon} size={isMobile ? '2x' : '4x'} className="mb-4" />
      <h3 className={`font-bold ${isMobile ? 'text-lg' : 'text-[32px]'}`}>{title}</h3>
      <p className={`mt-2 ${isMobile ? 'text-sm' : 'text-[24px]'}`}>{description}</p>
    </div>
  )
}
