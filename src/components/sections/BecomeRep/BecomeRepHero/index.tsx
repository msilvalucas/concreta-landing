import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import mobileBg from './../../../../assets/mobileRep.png'

const schema = z.object({
  name: z.string().min(2, 'Informe o nome'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(8, 'Telefone inválido'),
  linkedin: z.string().min(8, 'Informe o LinkedIn'),
})

type FormData = z.infer<typeof schema>

export const BecomeRepHero = () => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log('Dados enviados:', data)
    setSubmitted(true)
  }

  return (
    <section className="w-full relative bg-white">
      <div className="md:hidden relative h-[420px] w-full">
        <img
          src={mobileBg}
          alt="Seja um representante"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10" />
        <div className="absolute bottom-14 left-4 right-4 text-white z-20">
          <h2 className="text-3xl font-bold mb-2">Quero ser um representante</h2>
        </div>
      </div>

      <h2 className="container mx-auto hidden md:block text-4xl font-bold text-[#0E1022] mt-6">
        Quero ser um representante
      </h2>

      <div className="container mx-auto relative px-4 py-10 md:grid md:grid-cols-2 md:items-start md:gap-12">
        <div className="hidden md:block">
          <img
            src="https://placehold.co/600x535"
            alt="Seja um representante"
            className="rounded-lg object-cover w-full h-[525px]"
          />
        </div>

        <div className="flex flex-col justify-center gap-6">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#A8CDEE] p-6 mt-[-80px] sm:mt-0 rounded-lg space-y-4 shadow-lg z-10 md:min-h-[525px] flex flex-col justify-center"
          >
            <div>
              <label className="block text-base font-medium mb-1">Nome</label>
              <input
                type="text"
                {...register('name')}
                className="w-full p-3 rounded-md border border-white bg-white"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-base font-medium mb-1">E-mail</label>
              <input
                type="email"
                {...register('email')}
                className="w-full p-3 rounded-md border border-white bg-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-base font-medium mb-1">Telefone</label>
              <input
                type="tel"
                {...register('phone')}
                className="w-full p-3 rounded-md border border-white bg-white"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block text-base font-medium mb-1">LinkedIn</label>
              <input
                type="text"
                {...register('linkedin')}
                className="w-full p-3 rounded-md border border-white bg-white"
              />
              {errors.linkedin && (
                <p className="text-red-500 text-sm mt-1">{errors.linkedin.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-4/5 p-3 bg-[#0E1022] text-white rounded-md hover:opacity-90 transition mt-4"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
