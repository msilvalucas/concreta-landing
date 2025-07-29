import { useFormContext } from 'react-hook-form'
import { FormLayout } from './../../common/FormLayout'
import bgForm from './../../../assets/bg-step-one.png';

const incomeOptions = [
  'Sou CLT',
  'Sou autônomo',
  'Sou empresário',
  'Recebo aposentadoria/pensão',
  'Sou funcionário público',
  'Desempregado'
]

type StepPersonalInfoProps = {
  onNext: () => void
  onBack?: () => void
}

export const StepPersonalInfo = ({ onNext, onBack }: StepPersonalInfoProps) => {
  const { register, watch, setValue, formState: { errors } } = useFormContext()
  const selected = watch('incomeSources', [])

  const handleToggle = (value: string) => {
    const current = new Set(selected)
    current.has(value) ? current.delete(value) : current.add(value)
    setValue('incomeSources', Array.from(current))
  }

  return (
    <FormLayout imageSrc={bgForm} alt="Pessoa preenchendo formulário">
      <h2 className="hidden md:block text-4xl font-bold text-center text-[#0E1022] mb-4">Para você</h2>

      <div className="w-full flex justify-center items-center gap-4 text-[#0E1022] text-sm font-medium mb-6">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0E1022] text-white text-xs">
          1
        </span>
        <span className="flex-1 border-t border-[#0E1022]" />
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0E1022] text-white text-xs">
          2
        </span>
        <span className="flex-1 border-t border-[#0E1022]" />
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0E1022] text-white text-xs">
          3
        </span>
      </div>

      <label className="text-[#0E1022] text-base font-bold mb-1">Nome</label>
      <input {...register('name')} className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-2" />
      {errors.name && <p className="text-red-600 text-sm mb-2">{errors.name.message as string}</p>}

      <label className="text-[#0E1022] text-base font-bold mb-1">E-mail</label>
      <input {...register('email')} className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-2" />
      {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email.message as string}</p>}

      <label className="text-[#0E1022] text-base font-bold mb-1">Telefone</label>
      <input {...register('phone')} className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-4" />
      {errors.phone && <p className="text-red-600 text-sm mb-2">{errors.phone.message as string}</p>}

      {/* Checkboxes */}
      <label className="text-[#0E1022] text-base font-bold mb-1">Qual é a sua fonte de renda?</label>
      <div className="space-y-2">
        {incomeOptions.map((option) => (
          <label key={option} className="flex items-center gap-2 text-[#0E1022] text-sm">
            <input type="checkbox" checked={selected?.includes(option)} onChange={() => handleToggle(option)} className="w-4 h-4" />
            {option}
          </label>
        ))}
        {errors.incomeSources && <p className="text-red-600 text-sm mt-1">{errors.incomeSources.message as string}</p>}
      </div>

      {/* Buttons */}
      <div className={`flex mt-6 ${onBack ? 'justify-between' : 'justify-center'}`}>
        {onBack && (
          <button type="button" onClick={onBack} className="w-1/2 bg-zinc-400 text-white px-4 py-2 rounded mr-2">
            Voltar
          </button>
        )}
        <button type="button" onClick={onNext} className={`${onBack ? 'w-1/2' : 'w-2/3'} bg-[#0E1022] text-white px-4 py-2 rounded`}>
          Continuar
        </button>
      </div>
    </FormLayout>
  )
}
