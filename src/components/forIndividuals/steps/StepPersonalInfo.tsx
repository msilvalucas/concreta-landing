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

export const StepPersonalInfo = () => {
  const { register, watch, setValue } = useFormContext()
  const selected = watch('incomeSources', [])

  const handleToggle = (value: string) => {
    const current = new Set(selected)
    if (current.has(value)) current.delete(value)
    else current.add(value)
    setValue('incomeSources', Array.from(current))
  }

  return (
    <FormLayout imageSrc={bgForm} alt="Pessoa preenchendo formulário">
      <h2 className="text-xl font-bold text-center text-[#0E1022] mb-4">Para você</h2>

      {/* Progresso */}
      <div className="flex justify-center gap-2 text-[#0E1022] text-lg font-medium mb-6">
        <span className="bg-[#0E1022] text-white rounded-full w-6 h-6 flex items-center justify-center">1</span>
        <span className="border-t border-[#0E1022] w-6 mt-3" />
        <span className="rounded-full w-6 h-6 border border-[#0E1022] flex items-center justify-center">2</span>
        <span className="border-t border-[#0E1022] w-6 mt-3" />
        <span className="rounded-full w-6 h-6 border border-[#0E1022] flex items-center justify-center">3</span>
      </div>

      {/* Inputs */}
      <label className="text-[#0E1022] text-sm">Nome</label>
      <input
        {...register('name')}
        className="w-full p-3 rounded-md border border-zinc-300 mb-2"
      />

      <label className="text-[#0E1022] text-sm">E-mail</label>
      <input
        {...register('email')}
        className="w-full p-3 rounded-md border border-zinc-300 mb-2"
      />

      <label className="text-[#0E1022] text-sm">Telefone</label>
      <input
        {...register('phone')}
        className="w-full p-3 rounded-md border border-zinc-300 mb-4"
      />

      <label className="text-[#0E1022] text-sm mb-1">Qual é a sua fonte de renda?</label>
      <div className="space-y-2">
        {incomeOptions.map((option) => (
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
    </FormLayout>
  )
}
