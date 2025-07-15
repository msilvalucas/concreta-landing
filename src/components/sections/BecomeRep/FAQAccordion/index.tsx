import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type FAQItem = {
  question: string
  answer: string
}

const faqList: FAQItem[] = [
  {
    question: 'Prospecção de Clientes',
    answer:
      'O Representante da Concreto identifica e aborda potenciais clientes, promovendo ativamente os produtos da Concreto FIDC, como empréstimos e soluções financeiras.'
  },
  {
    question: 'Análise e Compreensão das Necessidades dos Clientes',
    answer:
      ' Cabe ao Representante da Concreto entender o perfil e as necessidades específicas de cada cliente para oferecer as melhores opções financeiras.'
  },
  {
    question: 'Explicação e Transparência',
    answer:
      'Ele é responsável por esclarecer todos os detalhes dos produtos, taxas, condições de pagamento e demais aspectos do contrato, garantindo que o cliente tome uma decisão informada.'
  },
  {
    question: 'Conformidade com as Normas Regulatórias',
    answer:
      'Como representante de uma instituição financeira, o Representante da Concreto deve garantir que todas as práticas de vendas sigam normas éticas e regulatórias.'
  },
  {
    question: 'Manutenção de Relacionamento Pós-venda',
    answer: 'O Representante da Concreto deve se manter acessível para auxiliar os clientes mesmo após a contratação, fortalecendo a relação de confiança com a Concreto FIDC.'
  },
  {
    question: 'Alcançar de Metas e Resultados',
    answer: 'Você deve buscar o cumprir as metas estabelecidas, contribuindo para o crescimento e rentabilidade da Concreto FIDC.'
  }
]

export const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="w-full bg-white py-4 px-4 mb-20">
      <div className="container mx-auto space-y-4 rounded-full">
        {faqList.map((item, index) => (
          <div key={index} className="rounded overflow-hidden border border-[#A8CDEE]">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between bg-[#0E1022] text-white text-left px-4 py-3 text-sm sm:text-2xl font-semibold"
            >
              {item.question}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {activeIndex === index && (
              <div className="bg-[#F8FCFF] px-4 py-3 text-sm sm:text-2xl text-zinc-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
