import { useState } from 'react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'Informe o nome'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(8, 'Telefone inválido')
})

type FormData = z.infer<typeof schema>

export const ConsortiumHero = () => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    console.log('Dados enviados:', data)
    setSubmitted(true)
  }

  return (
    <section className="w-full bg-white py-10 px-4 mt-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-stretch min-h-[535px]">
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-6 w-full">
            <div>
              <h2 className="text-5xl font-bold text-[#0E1022] mb-2">
                Compra de Consórcios
              </h2>
              <p className="text-zinc-600 text-2xl">
                Solução prática para quem busca transformar a cota em dinheiro
                sem precisar aguardar pela contemplação
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#A8CDEE] p-6 rounded-lg space-y-4 h-[535px] flex flex-col justify-center"
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

              <div className='flex justify-center'>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-4/5 p-3 bg-[#0E1022] text-white rounded-sm hover:opacity-90 transition mt-4"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://placehold.co/600x535"
            alt="Compra de Consórcios"
            className="rounded-lg object-cover w-full h-[680px]"
          />
        </div>
      </div>
    </section>
  )
}
