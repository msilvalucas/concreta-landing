import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { StepCompanyInfo } from './steps/StepCompanyInfo';
import { StepCompanyDetails } from './steps/StepCompanyDetails'
import { StepCompanyDetailsAdvanced } from './steps/StepCompanyDetailsAdvanced'
import { StepSuccess } from './steps/StepSuccess'

import { companyStep1Schema } from '../../schemas/companyStep1Schema';
import { companyStep2Schema } from '../../schemas/companyStep2Schema';
import { companyStep3Schema } from '../../schemas/companyStep3Schema';

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
  StepCompanyInfo,
  StepCompanyDetails,
  StepCompanyDetailsAdvanced,
  StepSuccess
]

const schemas = [companyStep1Schema, companyStep2Schema, companyStep3Schema]

export const ForCompanyForm = () => {
  const [step, setStep] = useState(0)

  const methods = useForm({
    resolver: zodResolver(schemas[step] ?? companyStep1Schema),
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
