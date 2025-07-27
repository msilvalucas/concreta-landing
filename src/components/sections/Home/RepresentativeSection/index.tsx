import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'

const REPRESENTATIVE_CARDS = [
  {
    emoji: '💲',
    title: 'Alta Remuneração',
    description: 'Comissões elevadas aumentam ganhos conforme vendas crescem.',
  },
  {
    emoji: '🚀',
    title: 'Crescimento Rápido',
    description: 'Escale sua carreira como nosso parceiro comercial.',
  },
  {
    emoji: '🤝',
    title: 'Suporte Dedicado',
    description: 'Você nunca estará sozinho nessa jornada de sucesso.',
  },
]

export function RepresentativeSection() {
  const paginationRef = useRef<HTMLDivElement | null>(null)
  const [isPaginationReady, setIsPaginationReady] = useState(false)

  useEffect(() => {
    // Garante que o Swiper renderize após o ref existir
    if (paginationRef.current) {
      setIsPaginationReady(true)
    }
  }, [])

  return (
    <section className="container mx-auto py-12 bg-white text-[#0b0d21] text-center px-4">
      <h2 className="text-xl sm:text-2xl font-bold font-answeone mb-8">
        Seja um representante que faz acontecer
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        <img
          src="https://placehold.co/574x481"
          alt="Equipe de representantes"
          className="w-full max-w-md rounded-2xl object-cover"
        />

        <div className="w-full max-w-md">
          {isPaginationReady && (
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1}
              spaceBetween={16}
              pagination={{
                clickable: true,
                el: paginationRef.current!,
              }}
              className="pb-8"
            >
              {REPRESENTATIVE_CARDS.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="min-h-[280px] flex flex-col justify-center bg-[#cce2f9] text-[#0b0d21] rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">{card.emoji}</div>
                    <h3 className="text-2xl font-semibold font-answeone">{card.title}</h3>
                    <p className="mt-2 text-base">{card.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <div ref={paginationRef} className="custom-pagination flex justify-center mt-6" />

          <div className="flex justify-center mt-6">
            <button className="bg-[#0b0d21] text-white px-6 py-2 rounded-full font-medium transition hover:brightness-110">
              Inscreva-se agora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
