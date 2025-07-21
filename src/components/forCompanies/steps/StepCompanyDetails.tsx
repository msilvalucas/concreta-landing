import { useFormContext } from 'react-hook-form'
import { FormLayout } from '../../common/FormLayout'
import bgForm from './../../../assets/bg-forCompany.png'

const creditValues = [
  'Até 100 mil reais',
  'De 100 mil a 500 mil reais',
  'De 500 mil a 1 milhão de reais',
  'De 1 milhão a 5 milhões de reais',
  'Acima de 5 milhões de reais',
]

const products = [
  'Produto Farmacêutico',
  'Produto Alimentar',
  'Produto de Higiene',
  'Prestação de Serviços',
  'Outros'
]

type StepCompanyDetailsProps = {
  onNext: () => void
  onBack: () => void
}

export const StepCompanyDetails = ({ onNext, onBack }: StepCompanyDetailsProps) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext()

  const selectedCreditValues = watch('creditNeeds', [])
  const selectedProducts = watch('providedProducts', [])

  const handleToggle = (key: string, value: string[]) => {
    const current = new Set(watch(key, []))
    if (current.has(value)) current.delete(value)
    else current.add(value)
    setValue(key, Array.from(current))
  }

  return (
    <FormLayout imageSrc={bgForm} alt="Equipe em reunião ao redor da mesa">
      <h2 className="text-4xl font-bold text-center text-[#0E1022] mb-4">Para empresas</h2>

      <div className="w-full flex justify-center gap-2 text-[#0E1022] text-lg font-medium mb-6">
        <span className="rounded-full w-10 h-10 border border-[#0E1022] flex items-center justify-center">1</span>
        <span className="border-t border-[#0E1022] w-34 mt-5" />
        <span className="bg-[#0E1022] text-white rounded-full w-10 h-10 flex items-center justify-center">2</span>
        <span className="border-t border-[#0E1022] w-34 mt-5" />
        <span className="rounded-full w-10 h-10 border border-[#0E1022] flex items-center justify-center">3</span>
      </div>

      <label className="text-[#0E1022] text-base font-bold mb-1">CPF</label>
      <input
        {...register('cpf')}
        className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-2"
      />
      {errors.cpf && <p className="text-red-600 text-sm mb-2">{errors.cpf.message as string}</p>}

      <label className="text-[#0E1022] text-base font-bold mb-1">Cidade/Estado</label>
      <input
        {...register('cityState')}
        className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-2"
      />
      {errors.cityState && <p className="text-red-600 text-sm mb-2">{errors.cityState.message as string}</p>}

      <label className="text-[#0E1022] text-base font-bold mb-1">CNPJ</label>
      <input
        {...register('cnpj')}
        className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-2"
      />
      {errors.cnpj && <p className="text-red-600 text-sm mb-2">{errors.cnpj.message as string}</p>}

      <label className="text-[#0E1022] text-base font-bold mb-1">Descreva brevemente o serviço/produto da sua empresa</label>
      <textarea
        {...register('companyDescription')}
        className="bg-white w-full p-3 rounded-md border border-zinc-300 mb-4"
      />
      {errors.companyDescription && (
        <p className="text-red-600 text-sm mb-2">{errors.companyDescription.message as string}</p>
      )}

      <label className="text-[#0E1022] text-base font-bold mb-1">Qual o valor de crédito que sua empresa precisa?</label>
      <div className="space-y-2 mb-4">
        {creditValues.map(option => (
          <label key={option} className="flex items-center gap-2 text-[#0E1022] text-sm">
            <input
              type="checkbox"
              checked={selectedCreditValues?.includes(option)}
              onChange={() => handleToggle('creditNeeds', option)}
              className="w-4 h-4"
            />
            {option}
          </label>
        ))}
        {errors.creditNeeds && (
          <p className="text-red-600 text-sm mt-1">{errors.creditNeeds.message as string}</p>
        )}
      </div>

      <label className="text-[#0E1022] text-base font-bold mb-1">O que você fornece para a Drogaria Araújo?</label>
      <div className="space-y-2">
        {products.map(option => (
          <label key={option} className="flex items-center gap-2 text-[#0E1022] text-sm">
            <input
              type="checkbox"
              checked={selectedProducts?.includes(option)}
              onChange={() => handleToggle('providedProducts', option)}
              className="w-4 h-4"
            />
            {option}
          </label>
        ))}
        {errors.providedProducts && (
          <p className="text-red-600 text-sm mt-1">{errors.providedProducts.message as string}</p>
        )}
      </div>

      <div className="flex mt-6 justify-between">
        <button
          type="button"
          onClick={onBack}
          className="w-1/2 bg-zinc-400 text-white px-4 py-2 rounded mr-2"
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
