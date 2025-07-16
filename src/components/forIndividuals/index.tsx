import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { StepPersonalInfo } from './steps/StepPersonalInfo';
// import { Step2Income } from './steps/Step2Income'
// import { Step3CompanyAndCredit } from './steps/Step3CompanyAndCredit'
// import { Step4Success } from './steps/Step4Success'

import { schemaStep1 } from './../../schemas/step1Schema'
// import { schemaStep2 } from '@/schemas/step2Schema'
// import { schemaStep3 } from '@/schemas/step3Schema'

// Tipagem geral dos dados
const defaultValues = {
  name: '',
  email: '',
  phone: '',
  incomeSources: [],
  cpf: '',
  location: '',
  birthDate: '',
  incomeRange: '',
  companyName: '',
  cnpj: '',
  creditTypes: []
}

const steps = [
  StepPersonalInfo,
]

const schemas = [schemaStep1]

export const ForIndividualsForm = () => {
  const [step, setStep] = useState(0)

  const methods = useForm({
    resolver: zodResolver(schemas[step] ?? schemaStep1),
    defaultValues
  })

  const CurrentStep = steps[step]

  const nextStep = async () => {
    const isValid = await methods.trigger()
    if (!isValid) return
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    if (step > 0) setStep((prev) => prev - 1)
  }

  const handleFinalSubmit = (data: any) => {
    console.log('Form data:', data)
    setStep(3)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={
          step === 2 ? methods.handleSubmit(handleFinalSubmit) : (e) => e.preventDefault()
        }
      >
        <CurrentStep />

        {step < 3 && (
          <div className="flex justify-between mt-6 px-8">
            {step > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-zinc-400 text-white px-4 py-2 rounded-full"
              >
                Voltar
              </button>
            )}
            <button
              type="button"
              onClick={nextStep}
              className="bg-[#0E1022] text-white px-4 py-2 rounded-full ml-auto"
            >
              {step === 2 ? 'Enviar' : 'Continuar'}
            </button>
          </div>
        )}
      </form>
    </FormProvider>
  )
}
