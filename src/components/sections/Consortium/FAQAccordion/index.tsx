import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type FAQItem = {
  question: string
  answer: string
}

const faqList: FAQItem[] = [
  {
    question: 'Por que vender a cota do consórcio?',
    answer:
      'O titular pode vender sua cota por necessidade de dinheiro, desistência ou falta de interesse em aguardar a contemplação. Assim, recupera parte ou todo o valor investido.'
  },
  {
    question: 'Como funciona na Concreta FIDC?',
    answer:
      'Após o contato, avaliamos a cota conforme o valor pago, tempo restante e condições do contrato. Cotas contempladas têm maior valor; as não contempladas podem ter valor reduzido, pois dependem de sorteio ou lance.'
  },
  {
    question: 'Valores e condições',
    answer:
      'O pagamento varia conforme o valor já quitado e o total da carta de crédito. Embora possa ser inferior ao investido, o titular recebe dinheiro imediato.'
  },
  {
    question: 'Transferência',
    answer:
      'Após o acordo de compra, a titularidade da cota é transferida para a instituição financeira, que assume todos os direitos e deveres relacionados àquela cota. A instituição passa a ser responsável pelo pagamento das parcelas restantes e tem direito à contemplação do crédito, seja por sorteio ou lance.'
  },
  {
    question: 'Transferência',
    answer:
      'A venda para uma instituição financeira oferece liquidez imediata, o que é interessante para quem precisa de dinheiro com urgência ou deseja sair do consórcio sem perder o investimento. A negociação também é simples e direta, com menos exigências do que uma venda para pessoa física.'
  }
]

export const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="w-full bg-white py-4 px-4">
      <div className="container mx-auto space-y-4">
        {faqList.map((item, index) => (
          <div key={index} className="rounded overflow-hidden border border-[#A8CDEE]">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between bg-[#0E1022] text-white text-left px-4 py-3 text-sm sm:text-base font-semibold"
            >
              {item.question}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {activeIndex === index && (
              <div className="bg-[#F8FCFF] px-4 py-3 text-sm sm:text-base text-zinc-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
