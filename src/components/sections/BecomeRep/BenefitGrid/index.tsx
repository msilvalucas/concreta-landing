import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDollarSign,
  faClock,
  faUserGroup,
  faBriefcase,
  faUserGear,
  faStar
} from '@fortawesome/free-solid-svg-icons'

type Benefit = {
  icon: any
  title: string
  description: string
}

const benefits: Benefit[] = [
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
    description:
      'Aprimora negociação, comunicação e relacionamento interpessoal.'
  },
  {
    icon: faStar,
    title: 'Satisfação Pessoal',
    description: 'Ajuda clientes a atingir objetivos financeiros.'
  }
]

export const BenefitGrid = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-[#A8CDEE] p-6 rounded-[40px] flex flex-col justify-center text-center items-center text-[#0E1022] min-w-[359px] min-h-[325px]"
          >
            <FontAwesomeIcon icon={benefit.icon} size="4x" className="mb-4" />
            <h3 className="text-[32px] font-bold leading-snug">{benefit.title}</h3>
            <p className="text-[24px] mt-2 leading-tight">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
