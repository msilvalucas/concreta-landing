type FormLayoutProps = {
  children: React.ReactNode
  imageSrc: string
  alt?: string
}

export const FormLayout = ({ children, imageSrc, alt }: FormLayoutProps) => {
  return (
    <div className="container mx-auto mb-8 gap-6 flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
      <div className="md:w-1/2">
        <img
          src={imageSrc}
          alt={alt ?? 'Imagem'}
          className="w-full h-[682px]"
        />
      </div>

      <div className="md:w-1/2 w-full bg-[#A8CDEE] p-8 space-y-4 flex flex-col justify-center rounded-lg">
        {children}
      </div>
    </div>
  )
}
