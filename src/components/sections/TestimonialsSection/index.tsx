import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    name: 'Maria Júlia',
    timeAgo: '2 dias atrás',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Maria Júlia',
    timeAgo: '2 dias atrás',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Regina Weber',
    timeAgo: '2 dias atrás',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="container mx-auto py-16 px-4 sm:px-8 lg:px-24 bg-white">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-neutral-900 mb-10">
        O que nossos clientes dizem?
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-blue-100 text-neutral-700 rounded-2xl p-4 shadow-md w-full md:w-[300px] flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" />

            <h3 className="font-bold text-lg text-neutral-900 my-4">{item.name}</h3>
            <span className="text-sm text-neutral-500 my-1">{item.timeAgo}</span>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
              ))}
            </div>

            <p className="text-sm my-4">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
