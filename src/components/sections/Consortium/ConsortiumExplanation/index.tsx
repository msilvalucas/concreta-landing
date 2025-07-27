import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

export const ConsortiumExplanation = () => {
  return (
    <section className="bg-white py-4 px-4">
      <div className="w-full container mx-auto space-y-6">
        <h2 className="text-3xl text-center md:text-left font-bold text-[#0E1022]">Venda de Consórcios</h2>

        <p className="text-[20px] text-[#0E1022] text-center md:text-left">
          A venda de consórcio é uma modalidade de negociação em que o titular de uma cota
          de consórcio decide vender seu direito a essa cota para a Concreta FIDC. Esse tipo
          de transação é interessante para quem não deseja mais esperar pela contemplação no
          consórcio ou precisa de dinheiro imediatamente, já que o valor da venda costuma ser
          pago à vista pela instituição compradora.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 bg-[#A8CDEE] p-4 rounded-md">
          <div className='flex justify-center items-center bg-[#0e1022] h-[56px] w-[56px] sm:h-[36px] sm:w-[66px] rounded-full'>
            <FontAwesomeIcon icon={faDollarSign} className="text-[#fff] mt-1" size="lg" />
          </div>
          <p className="text-[#0E1022] text-2xl">
            A venda de consórcio para uma instituição financeira é uma solução prática
            para quem busca transformar a cota em dinheiro sem precisar aguardar pela
            contemplação.
          </p>
        </div>
      </div>
    </section>
  )
}
