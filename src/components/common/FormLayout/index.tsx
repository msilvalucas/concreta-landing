// FormLayout.tsx
type FormLayoutProps = {
  children: React.ReactNode
  imageSrc: string
  alt?: string
  title?: string
  description?: string
}

export const FormLayout = ({ children, imageSrc, alt }: FormLayoutProps) => {
  return (
    <section className="w-full relative bg-white">
      <div className="md:hidden relative h-[420px] w-full">
        <img
          src={imageSrc}
          alt={alt ?? 'Imagem'}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10" />
        <div className="absolute bottom-24 left-4 right-4 text-white z-20">
          <h2 className="text-3xl text-center font-bold">Pra você</h2>
        </div>
      </div>

      <div className="container mx-auto relative px-4 py-10 md:grid md:grid-cols-2 md:items-stretch md:gap-12">
        <div className="hidden md:block">
          <img
            src={imageSrc}
            alt={alt ?? 'Imagem'}
            className="rounded-lg object-cover w-full h-[525px]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-[#A8CDEE] p-6 rounded-lg shadow-lg mt-[-100px] md:mt-0">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
