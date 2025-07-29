import { useFormContext } from 'react-hook-form'
import { FormLayout } from './../../common/FormLayout'
import bgForm from './../../../assets/bg-step-one.png'

const creditOptions = [
  'Antecipação de FGTS',
  'Compra de Consórcios',
  'Consignado Privado',
  'Crédito Consignado Público',
  'Estadual e Federal',
]

type StepCompanyAndCreditProps = {
  onNext: () => void
  onBack?: () => void
}

export const StepCompanyAndCredit = ({ onNext, onBack }: StepCompanyAndCreditProps) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext()

  const selected = watch('creditTypes', [])

  const handleToggle = (value: string) => {
    const current = new Set(selected)
    if (current.has(value)) current.delete(value)
    else current.add(value)
    setValue('creditTypes', Array.from(current))
  }

  return (
    <FormLayout imageSrc={bgForm} alt="Pessoa preenchendo formulário">
      <h2 className="hidden md:block text-4xl font-bold text-center text-[#0E1022] mb-4">Para você</h2>

      <div className="w-full flex justify-center gap-2 text-[#0E1022] text-lg font-medium mb-6">
        <span className="bg-[#0E1022] text-white rounded-full w-10 h-10 flex items-center justify-center">1</span>
        <span className="border-t border-[#0E1022] flex-1 mt-5 max-w-[80px]" />
        <span className="bg-[#0E1022] text-white rounded-full w-10 h-10 border border-[#0E1022] flex items-center justify-center">2</span>
        <span className="border-t border-[#0E1022] flex-1 mt-5 max-w-[80px]" />
        <span className="rounded-full w-10 h-10 border border-[#0E1022] flex items-center justify-center">3</span>
      </div>

      <label className="text-[#0E1022] text-base font-bold mb-1">Qual é o nome da empresa em que você trabalha?</label>
      <input
        {...register('companyName')}
        className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-1"
      />
      {errors.companyName && (
        <span className="text-sm text-red-500">{errors.companyName.message?.toString()}</span>
      )}

      <label className="text-[#0E1022] text-base font-bold mt-4 mb-1">
        Qual o CNPJ da empresa? <span className="text-sm font-normal text-zinc-500">Não obrigatório</span>
      </label>
      <input
        {...register('cnpj')}
        className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-4"
      />

      <label className="text-[#0E1022] text-base font-bold mb-1">Qual é o tipo de crédito você demanda atualmente?</label>
      <div className="space-y-2 mb-2">
        {creditOptions.map((option) => (
          <label key={option} className="flex items-center gap-2 text-[#0E1022] text-sm">
            <input
              type="checkbox"
              checked={selected?.includes(option)}
              onChange={() => handleToggle(option)}
              className="w-4 h-4"
            />
            {option}
          </label>
        ))}
      </div>
      {errors.creditTypes && (
        <span className="text-sm text-red-500">{errors.creditTypes.message?.toString()}</span>
      )}

      <div className="flex mt-6 justify-between">
        <button
          type="button"
          onClick={onBack}
          className="w-1/2 bg-[#A8CDEE] text-[#0E1022] px-4 py-2 rounded mr-2 border border-[#0E1022]"
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={onNext}
          className="w-1/2 bg-[#0E1022] text-white px-4 py-2 rounded"
        >
          Enviar
        </button>
      </div>
    </FormLayout>
  )
}