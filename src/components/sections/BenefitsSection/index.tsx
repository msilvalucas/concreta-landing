import { useState } from 'react'

import { Card } from '../../common/Card'

const BENEFITS = {
  individual: [
    {
      id: 1,
      title: 'Processo rápido e sem burocracia',
      description: 'Flexibilidade na avaliação e disponibilizado em até 24 horas',
    },
    {
      id: 2,
      title: 'Taxas atrativas',
      description: 'Taxas a partir de 1,9% e condições especiais de pagamento',
    },
    {
      id: 3,
      title: 'Atendimento especializado',
      description: 'Equipe dedicada a auxiliá-lo em todas as etapas',
    },
    {
      id: 4,
      title: 'Segurança e confiabilidade',
      description: 'Compromisso em oferecer soluções seguras e confiáveis',
    },
  ],
  business: [
    {
      id: 1,
      title: 'Soluções PJ',
      description: 'Ofertas customizadas para sua empresa escalar com confiança',
    },
    {
      id: 2,
      title: 'Consultoria dedicada',
      description: 'Especialistas prontos para entender e apoiar seu negócio',
    },
  ],
}

export function BenefitsSection() {
  const [activeTab, setActiveTab] = useState<'individual' | 'business'>('individual')

  return (
    <section className="container mx-auto py-8 px-4 sm:px-8 lg:px-24 bg-white">
      <div className="flex justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveTab('individual')}
          className={`px-6 py-2 rounded-xl font-semibold ${activeTab === 'individual'
            ? 'bg-blue-200 text-blue-900'
            : 'border border-black text-black'
            }`}
        >
          Soluções para você
        </button>
        <button
          onClick={() => setActiveTab('business')}
          className={`px-6 py-2 rounded-xl font-semibold ${activeTab === 'business'
            ? 'bg-blue-200 text-blue-900'
            : 'border border-black text-black'
            }`}
        >
          Soluções para sua empresa
        </button>
      </div>

      <h2 className="text-center text-2xl md:text-3xl font-extrabold text-neutral-900 mb-10">
        Somos sua melhor escolha!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {BENEFITS[activeTab].map((benefit) => (
          <Card
            key={benefit.id}
            title={benefit.title}
            description={benefit.description}
          >
            <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28.5" cy="28.5" r="28.5" fill="#0E1022" />
              <g clipPath="url(#clip0_0_1)">
                <path d="M25.25 46.375C25.25 46.806 25.0788 47.2193 24.774 47.524C24.4693 47.8288 24.056 48 23.625 48H10.625C10.194 48 9.7807 47.8288 9.47595 47.524C9.1712 47.2193 9 46.806 9 46.375C9 45.944 9.1712 45.5307 9.47595 45.226C9.7807 44.9212 10.194 44.75 10.625 44.75H23.625C24.056 44.75 24.4693 44.9212 24.774 45.226C25.0788 45.5307 25.25 45.944 25.25 46.375Z" fill="#A8CDEE" />
                <path d="M10.625 41.5H20.375C20.806 41.5 21.2193 41.3288 21.524 41.024C21.8288 40.7193 22 40.306 22 39.875C22 39.444 21.8288 39.0307 21.524 38.726C21.2193 38.4212 20.806 38.25 20.375 38.25H10.625C10.194 38.25 9.7807 38.4212 9.47595 38.726C9.1712 39.0307 9 39.444 9 39.875C9 40.306 9.1712 40.7193 9.47595 41.024C9.7807 41.3288 10.194 41.5 10.625 41.5Z" fill="#A8CDEE" />
                <path d="M10.625 35H17.125C17.556 35 17.9693 34.8288 18.274 34.524C18.5788 34.2193 18.75 33.806 18.75 33.375C18.75 32.944 18.5788 32.5307 18.274 32.226C17.9693 31.9212 17.556 31.75 17.125 31.75H10.625C10.194 31.75 9.7807 31.9212 9.47595 32.226C9.1712 32.5307 9 32.944 9 33.375C9 33.806 9.1712 34.2193 9.47595 34.524C9.7807 34.8288 10.194 35 10.625 35Z" fill="#A8CDEE" />
                <path d="M28.5 9C23.3283 9 18.3684 11.0545 14.7114 14.7114C11.0545 18.3684 9 23.3283 9 28.5C9 28.5991 9.013 28.695 9.01462 28.7941C9.53072 28.605 10.0754 28.5055 10.625 28.5H17.125C17.9227 28.4973 18.7088 28.691 19.4139 29.0641C20.119 29.4372 20.7214 29.9782 21.1679 30.6392C21.6143 31.3003 21.8912 32.0611 21.974 32.8545C22.0568 33.6479 21.9429 34.4495 21.6425 35.1885C22.3078 35.3631 22.9283 35.6777 23.4623 36.1112C23.9964 36.5448 24.4318 37.0873 24.7394 37.7025C25.047 38.3178 25.2198 38.9916 25.2462 39.679C25.2726 40.3664 25.152 41.0515 24.8925 41.6885C25.5424 41.8543 26.1502 42.1546 26.6767 42.5701C27.2032 42.9855 27.6366 43.5069 27.9489 44.1004C28.2612 44.6939 28.4454 45.3464 28.4897 46.0156C28.534 46.6848 28.4373 47.3559 28.2059 47.9854C28.305 47.9854 28.4009 48 28.5 48C33.6717 48 38.6316 45.9455 42.2886 42.2886C45.9455 38.6316 48 33.6717 48 28.5C48 23.3283 45.9455 18.3684 42.2886 14.7114C38.6316 11.0545 33.6717 9 28.5 9ZM34.5239 34.5239C34.2191 34.8285 33.8059 34.9997 33.375 34.9997C32.9441 34.9997 32.5309 34.8285 32.2261 34.5239L27.3511 29.6489C27.0464 29.3442 26.8751 28.9309 26.875 28.5V20.375C26.875 19.944 27.0462 19.5307 27.351 19.226C27.6557 18.9212 28.069 18.75 28.5 18.75C28.931 18.75 29.3443 18.9212 29.649 19.226C29.9538 19.5307 30.125 19.944 30.125 20.375V27.8273L34.5239 32.2261C34.8285 32.5309 34.9997 32.9441 34.9997 33.375C34.9997 33.8059 34.8285 34.2191 34.5239 34.5239Z" fill="#A8CDEE" />
              </g>
              <defs>
                <clipPath id="clip0_0_1">
                  <rect width="39" height="39" fill="white" transform="translate(9 9)" />
                </clipPath>
              </defs>
            </svg>
          </Card>
        ))}
      </div>
    </section>
  )
}
