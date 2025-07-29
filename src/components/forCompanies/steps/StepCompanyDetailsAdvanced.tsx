import { useFormContext } from 'react-hook-form'
import { FormLayout } from '../../common/FormLayout'
import bgForm from './../../../assets/bg-forCompany.png'

const revenueOptions = [
  'Até 500 mil reais',
  'De 500 mil a 1,5 milhões de reais',
  'De 1,5 milhões a 5 milhões de reais',
  'Acima de 5 milhões de reais',
]

const drogariaRevenueOptions = [
  'Até 100 mil reais',
  'De 100 mil a 500 mil reais',
  'De 500 mil a 1 milhão de reais',
  'Acima de 1 milhão de reais',
]

const salesFrequency = [
  'Todos os meses',
  'Mais de 9 meses no ano',
  'De 4 a 9 meses no ano',
  'Menos de 4 meses no ano',
]

const timeAsSupplier = [
  'Menos de 1 ano',
  'De 1 a 3 anos',
  'De 3 a 6 anos',
  'Mais de 6 anos',
]

const creditTypes = [
  'Antecipação de Recebíveis',
  'Capital de Giro',
  'Empréstimo com Garantia Imobiliária',
  'Empréstimo com Garantia de Veículos',
]

const guarantees = [
  'Casa',
  'Apartamento',
  'Terreno',
  'Lote',
  'Imóvel Rural',
  'Caminhão',
  'Ônibus',
  'Carro',
  'Moto',
  'Trava de Recebíveis',
  'Não possui',
]

const invoiceOptions = ['Sim', 'Não']

type Props = {
  onBack: () => void
  onNext: () => void
}

export const StepCompanyDetailsAdvanced = ({ onBack, onNext }: Props) => {
  const { register, watch, setValue, formState: { errors } } = useFormContext()

  const checkboxGroup = (key: string, options: string[]) => {
    const selected = watch(key, [])
    const toggle = (option: string) => {
      const current = new Set(selected)
      current.has(option) ? current.delete(option) : current.add(option)
      setValue(key, Array.from(current))
    }

    return options.map(option => (
      <label key={option} className="flex items-center gap-2 text-[#0E1022] text-sm">
        <input
          type="checkbox"
          checked={selected.includes(option)}
          onChange={() => toggle(option)}
          className="w-4 h-4"
        />
        {option}
      </label>
    ))
  }

  return (
    <FormLayout imageSrc={bgForm} alt="Formulário de dados avançados para empresas" title="Para empresas">
      <h2 className="hidden md:block text-4xl font-bold text-center text-[#0E1022] mb-4">Para empresas</h2>

      <div className="w-full flex justify-center gap-2 text-[#0E1022] text-lg font-medium mb-6">
        <span className="bg-[#0E1022] text-white rounded-full w-10 h-10 flex items-center justify-center">1</span>
        <span className="border-t border-[#0E1022] flex-1 mt-5 max-w-[80px]" />
        <span className="bg-[#0E1022] text-white rounded-full w-10 h-10 border border-[#0E1022] flex items-center justify-center">2</span>
        <span className="border-t border-[#0E1022] flex-1 mt-5 max-w-[80px]" />
        <span className="bg-[#0E1022] text-white rounded-full w-10 h-10 border border-[#0E1022] flex items-center justify-center">3</span>
      </div>

      <label className="font-bold text-[#0E1022] mb-1">Faturamento médio mensal da empresa</label>
      <div className="space-y-2 mb-4">{checkboxGroup('monthlyRevenue', revenueOptions)}</div>
      {errors.monthlyRevenue && <p className="text-red-600 text-sm">{errors.monthlyRevenue.message as string}</p>}

      <label className="font-bold text-[#0E1022] mb-1">Faturamento médio com a Drogaria Araújo</label>
      <div className="space-y-2 mb-4">{checkboxGroup('drogariaRevenue', drogariaRevenueOptions)}</div>
      {errors.drogariaRevenue && <p className="text-red-600 text-sm">{errors.drogariaRevenue.message as string}</p>}

      <label className="font-bold text-[#0E1022] mb-1">Periodicidade das vendas para a Drogaria Araújo</label>
      <div className="space-y-2 mb-4">{checkboxGroup('salesFrequency', salesFrequency)}</div>
      {errors.salesFrequency && <p className="text-red-600 text-sm">{errors.salesFrequency.message as string}</p>}

      <label className="font-bold text-[#0E1022] mb-1">Tempo como fornecedor da Drogaria Araújo</label>
      <div className="space-y-2 mb-4">{checkboxGroup('supplierTime', timeAsSupplier)}</div>
      {errors.supplierTime && <p className="text-red-600 text-sm">{errors.supplierTime.message as string}</p>}

      <label className="font-bold text-[#0E1022] mb-1">Tipo de crédito demandado</label>
      <div className="space-y-2 mb-4">{checkboxGroup('creditTypes', creditTypes)}</div>
      {errors.creditTypes && <p className="text-red-600 text-sm">{errors.creditTypes.message as string}</p>}

      <label className="font-bold text-[#0E1022] mb-1">Garantias disponíveis</label>
      <div className="space-y-2 mb-4">{checkboxGroup('guarantees', guarantees)}</div>
      {errors.guarantees && <p className="text-red-600 text-sm">{errors.guarantees.message as string}</p>}

      <label className="font-bold text-[#0E1022] mb-1">Você possui notas de outros clientes?</label>
      <div className="space-y-2 mb-6">{checkboxGroup('hasInvoices', invoiceOptions)}</div>
      {errors.hasInvoices && <p className="text-red-600 text-sm">{errors.hasInvoices.message as string}</p>}

      <div className="flex mt-4 gap-6 justify-between">
        <button
          type="button"
          onClick={onBack}
          className="w-1/2 bg-zinc-400 text-white px-4 py-2 rounded"
        >
          Voltar
        </button>

        <button
          type="button"
          onClick={onNext}
          className="w-1/2 bg-[#0E1022] text-white px-4 py-2 rounded"
        >
          Continuar
        </button>
      </div>
    </FormLayout>
  )
}
