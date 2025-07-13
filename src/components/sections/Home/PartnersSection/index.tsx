type Partner = {
  id: number
  imageUrl: string
  alt: string
}

const partners: Partner[] = [
  { id: 1, imageUrl: 'https://placehold.co/111x92', alt: 'Parceiro 1' },
  { id: 2, imageUrl: 'https://placehold.co/111x92', alt: 'Parceiro 2' },
  { id: 3, imageUrl: 'https://placehold.co/111x92', alt: 'Parceiro 3' },
  { id: 4, imageUrl: 'https://placehold.co/111x92', alt: 'Parceiro 4' },
  { id: 5, imageUrl: 'https://placehold.co/111x92', alt: 'Parceiro 5' },
  { id: 6, imageUrl: 'https://placehold.co/111x92', alt: 'Parceiro 6' },
]

export function PartnersSection() {
  return (
    <section className="container mx-auto py-12 bg-white text-center">
      <h2 className="text-xl sm:text-2xl font-bold text-[#0b0d21] mb-8 font-answeone">
        Conheça alguns dos nossos parceiros e clientes
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {partners.map((partner) => (
          <img
            key={partner.id}
            src={partner.imageUrl}
            alt={partner.alt}
            className="w-30 h-24 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  )
}
