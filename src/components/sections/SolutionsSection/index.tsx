import { useState } from 'react'
import { Card } from '../../common/Card'

const solutions = {
  individual: [
    {
      id: 1,
      image: 'https://placehold.co/246x130',
      title: 'Antecipação de FGTS',
      description:
        'Para quem tem saldo no fundo e deseja um dinheiro rápido e com juros baixos',
    },
    {
      id: 2,
      image: 'https://placehold.co/246x130',
      title: 'Crédito consignado',
      description:
        'Forma de empréstimo prática e com melhores condições de juros e prazo',
    },
    {
      id: 3,
      image: 'https://placehold.co/246x130',
      title: 'Antecipação de salário',
      description:
        'Alternativa prática e rápida para trabalhadores assalariados que necessitam de dinheiro imediato.',
    },
    {
      id: 4,
      image: 'https://placehold.co/246x130',
      title: 'Venda seu consórcio',
      description:
        'Solução prática para quem busca transformar a cota em dinheiro sem precisar aguardar pela contemplação.',
    },
  ],
  business: [
    {
      id: 1,
      image: 'https://placehold.co/246x130',
      title: 'Crédito PJ',
      description:
        'Soluções personalizadas para impulsionar o crescimento da sua empresa com liquidez e agilidade.',
    },
    {
      id: 2,
      image: 'https://placehold.co/246x130',
      title: 'Crédito PJ',
      description:
        'Soluções personalizadas para impulsionar o crescimento da sua empresa com liquidez e agilidade.',
    },
    {
      id: 2,
      image: 'https://placehold.co/246x130',
      title: 'Crédito PJ',
      description:
        'Soluções personalizadas para impulsionar o crescimento da sua empresa com liquidez e agilidade.',
    },
    {
      id: 3,
      image: 'https://placehold.co/246x130',
      title: 'Crédito PJ',
      description:
        'Soluções personalizadas para impulsionar o crescimento da sua empresa com liquidez e agilidade.',
    },
  ],
}

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<'individual' | 'business'>('individual')

  return (
    <section className="container mx-auto py-16 px-4 sm:px-8 lg:px-24 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-extrabold text-neutral-900 mb-6">
        Tudo o que você precisa, agora.
      </h2>

      <div className="flex justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveTab('individual')}
          className={`px-6 py-2 rounded-xl font-semibold ${activeTab === 'individual'
            ? 'bg-blue-200 text-blue-900'
            : 'border border-black text-black'
            }`}
        >
          Para você
        </button>
        <button
          onClick={() => setActiveTab('business')}
          className={`px-6 py-2 rounded-xl font-semibold ${activeTab === 'business'
            ? 'bg-blue-200 text-blue-900'
            : 'border border-black text-black'
            }`}
        >
          Para empresas
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center sm:place-items-stretch gap-6">
        {solutions[activeTab].map((item) => (
          <Card key={item.id} title={item.title} description={item.description} showButton>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-36 object-cover rounded-[20px]"
            />
          </Card>
        ))}
      </div>
    </section>
  )
}
