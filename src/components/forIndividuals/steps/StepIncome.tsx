import { useFormContext } from 'react-hook-form'
import { FormLayout } from './../../common/FormLayout'
import bgForm from './../../../assets/bg-step-one.png'

const incomeRangeOptions = [
  'Até 2 mil reais',
  'De 2 mil até 5 mil reais',
  'De 5 mil até 10 mil reais',
  'De 10 mil até 50 mil reais',
  'Acima de 50 mil reais',
  'Não possuo renda',
]

type StepIncomeProps = {
  onNext: () => void
  onBack?: () => void
}

export const StepIncome = ({ onNext, onBack }: StepIncomeProps) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext()

  const selected = watch('incomeRange')

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

      <div className='mb-3'>
        <label className="text-[#0E1022] text-base font-bold mb-1">CPF</label>
        <input
          {...register('cpf')}
          className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-1"
        />
        {errors.cpf && (
          <span className="text-sm text-red-500">{errors.cpf.message?.toString()}</span>
        )}
      </div>

      <div className='mb-3'>
        <label className="text-[#0E1022] text-base font-bold mt-4 mb-1">Cidade/Estado</label>
        <input
          {...register('location')}
          className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-1"
        />
        {errors.location && (
          <span className="text-sm text-red-500">{errors.location.message?.toString()}</span>
        )}
      </div>

      <div className='mb-3'>
        <label className="text-[#0E1022] text-base font-bold mt-4 mb-1">Data de nascimento</label>
        <input
          {...register('birthDate')}
          type="date"
          className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-1"
        />
        {errors.birthDate && (
          <span className="text-sm text-red-500">{errors.birthDate.message?.toString()}</span>
        )}

      </div>
      <label className="text-[#0E1022] text-base font-bold mt-4 mb-1">Qual é o valor da sua renda mensal?</label>
      <div className="space-y-2 py-4 rounded">
        {incomeRangeOptions.map((option) => (
          <label key={option} className="flex items-center gap-2 text-[#0E1022] text-sm">
            <input
              type="radio"
              value={option}
              checked={selected === option}
              onChange={() => setValue('incomeRange', option)}
              className="w-4 h-4"
            />
            {option}
          </label>
        ))}
      </div>
      {errors.incomeRange && (
        <span className="text-sm text-red-500">{errors.incomeRange.message?.toString()}</span>
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
          Continuar
        </button>
      </div>
    </FormLayout>
  )
}