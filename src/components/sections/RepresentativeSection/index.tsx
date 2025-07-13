export function RepresentativeSection() {
  return (
    <section className="container mx-auto py-12 bg-white text-[#0b0d21] text-center px-4">
      <h2 className="text-xl sm:text-2xl font-bold font-answeone mb-8">
        Seja um representante que faz acontecer
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 max-w-6xl mx-auto">
        <img
          src="https://placehold.co/574x481"
          alt="Equipe de representantes"
          className="w-full max-w-md rounded-2xl object-cover"
        />

        <div className="flex flex-col items-center">
          <div className="min-h-[280px] flex flex-col justify-center bg-[#cce2f9] text-[#0b0d21] rounded-2xl p-6 w-full max-w-md">
            <div className="text-4xl mb-2">💲</div>
            <h3 className="text-4xl font-semibold font-answeone">Alta Remuneração</h3>
            <p className="mt-2 text-2xl">
              Comissões elevadas aumentam ganhos conforme vendas crescem.
            </p>
          </div>

          <div className="flex gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#0b0d21]' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>

          <button className="mt-6 bg-[#0b0d21] text-white px-6 py-2 rounded-full font-medium transition hover:brightness-110">
            Inscreva-se agora
          </button>
        </div>
      </div>
    </section>
  )
}
