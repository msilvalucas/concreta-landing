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
    <section className="w-full relative bg-white">
      {/* MOBILE IMAGE (somente mobile) */}
      <div className="md:hidden relative h-[420px] w-full">
        <img
          src="https://placehold.co/600x535"
          alt="Compra de Consórcios"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute bottom-6 left-4 right-4 text-white z-20">
          <h2 className="text-2xl font-bold">Compra de consórcios</h2>
          <p className="text-sm mt-1">
            Solução prática para quem busca transformar a cota em dinheiro sem precisar aguardar pela contemplação
          </p>
        </div>
      </div>

      {/* CONTAINER DESKTOP */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-10 md:py-16">
        {/* TEXTO (Desktop apenas) */}
        <div className="hidden md:flex flex-col w-full max-w-[500px] pr-8 border">
          <h2 className="text-4xl font-bold text-[#0E1022] mb-4">
            Compra de Consórcios
          </h2>
          <p className="text-zinc-600 text-xl">
            Solução prática para quem busca transformar a cota em dinheiro sem precisar aguardar pela contemplação
          </p>


        </div>

        {/* FORMULÁRIO */}
        <div className="relative z-30 -mt-20 md:mt-0 w-full max-w-[500px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#A8CDEE] p-6 rounded-lg space-y-4 shadow-lg"
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

            <div className="flex justify-center">
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

        {/* IMAGEM (somente desktop) */}
        <div className="hidden md:flex w-full max-w-[420px]">
          <img
            src="https://placehold.co/600x535"
            alt="Compra de Consórcios"
            className="rounded-lg object-cover w-full h-[420px]"
          />
        </div>
      </div>
    </section>
  )
}
