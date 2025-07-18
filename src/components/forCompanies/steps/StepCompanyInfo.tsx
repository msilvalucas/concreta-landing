import { useFormContext } from 'react-hook-form'
import { FormLayout } from '../../common/FormLayout'
import bgForm from './../../../assets/bg-forCompany.png'

const originOptions = [
  'Sou fornecedor da Drogaria Araújo e quero crédito',
  'Sou fornecedor da Copasa e quero crédito',
  'Sou responsável por uma empresa e quero crédito'
]

type StepCompanyInfoProps = {
  onNext: () => void
  onBack?: () => void
}

export const StepCompanyInfo = ({ onNext, onBack }: StepCompanyInfoProps) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext()

  const selectedOrigins = watch('customerOrigin', [])

  const handleToggleOrigin = (value: string) => {
    const current = new Set(selectedOrigins)
    if (current.has(value)) current.delete(value)
    else current.add(value)
    setValue('customerOrigin', Array.from(current))
  }

  return (
    <FormLayout imageSrc={bgForm} alt="Equipe reunida em uma mesa">
      <h2 className="text-4xl font-bold text-center text-[#0E1022] mb-4">Para empresas</h2>

      <div className="w-full flex justify-center gap-2 text-[#0E1022] text-lg font-medium mb-6">
        <span className="bg-[#0E1022] text-white rounded-full w-10 h-10 flex items-center justify-center">1</span>
        <span className="border-t border-[#0E1022] w-34 mt-5" />
        <span className="rounded-full w-10 h-10 border border-[#0E1022] flex items-center justify-center">2</span>
        <span className="border-t border-[#0E1022] w-34 mt-5" />
        <span className="rounded-full w-10 h-10 border border-[#0E1022] flex items-center justify-center">3</span>
      </div>

      <label className="text-[#0E1022] text-base font-bold mb-1">Nome</label>
      <input
        {...register('name')}
        className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-2"
      />
      {errors.name && <p className="text-red-600 text-sm mb-2">{errors.name.message as string}</p>}

      <label className="text-[#0E1022] text-base font-bold mb-1">E-mail</label>
      <input
        {...register('email')}
        className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-2"
      />
      {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email.message as string}</p>}

      <label className="text-[#0E1022] text-base font-bold mb-1">Telefone</label>
      <input
        {...register('phone')}
        className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-4"
      />
      {errors.phone && <p className="text-red-600 text-sm mb-2">{errors.phone.message as string}</p>}

      <label className="text-[#0E1022] text-base font-bold mb-1">Origem do Cliente</label>
      <div className="space-y-2">
        {originOptions.map((option) => (
          <label key={option} className="flex items-center gap-2 text-[#0E1022] text-sm">
            <input
              type="checkbox"
              checked={selectedOrigins?.includes(option)}
              onChange={() => handleToggleOrigin(option)}
              className="w-4 h-4"
            />
            {option}
          </label>
        ))}
        {errors.customerOrigin && (
          <p className="text-red-600 text-sm mt-1">{errors.customerOrigin.message as string}</p>
        )}
      </div>

      <div className={`flex mt-6 border ${onBack ? 'justify-between' : 'justify-center'}`}>
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="w-1/2 bg-zinc-400 text-white px-4 py-2 rounded mr-2"
          >
            Voltar
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          className={`${onBack ? 'w-1/2' : 'w-2/3'} bg-[#0E1022] text-white px-4 py-2 rounded`}
        >
          Continuar
        </button>
      </div>
    </FormLayout>
  )
}
