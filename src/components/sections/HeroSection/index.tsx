import { Navbar } from '../../layout/Navbar'
import heroImage from './../../../assets/bg-hero.png';

export function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-left sm:bg-center md:min-h-[calc(100vh-2rem)] flex flex-col"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Navbar />

      <div className="sm:mt-[200px] container flex justify-start items-center mx-auto">
        <div className="max-w-[675px] p-6 md:p-10 rounded-xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold sm:text-[#0E1022] leading-tight">
            Compromisso em oferecer soluções <br />
            <span className="sm:text-[#0E1022]">seguras e confiáveis</span>
          </h1>

          <div className='rounded p-4 mt-6 bg-white opacity-75'>
            <p className="text-2xl md:text-[32px] text-[#0E1022]">
              Transforme seus sonhos em realidade, com <strong>facilidade</strong> e{' '}
              <strong>segurança</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
