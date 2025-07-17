import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { StepPersonalInfo } from './steps/StepPersonalInfo';
import { StepIncome } from './steps/StepIncome';
import { StepCompanyAndCredit } from './steps/StepCompanyAndCredit'
import { StepSuccess } from './steps/StepSuccess'

import { schemaStep1 } from './../../schemas/step1Schema'
import { schemaStep2 } from './../../schemas/step2Schema'
import { schemaStep3 } from './../../schemas/step3Schema'

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
  StepIncome,
  StepCompanyAndCredit,
  StepSuccess
]

const schemas = [schemaStep1, schemaStep2, schemaStep3]

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
        <CurrentStep onNext={nextStep} onBack={step > 0 ? prevStep : undefined} />
      </form>
    </FormProvider>
  )
}
