import { useState } from 'react'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full px-4 mt-6 flex justify-center items-center z-50">
      <nav className="container h-20 bg-[#0E1022] rounded-[15px] px-6 flex items-center justify-between shadow-md relative">
        <Link to="/" className="text-white font-extrabold text-xl mt-9">
          <svg className="h-40 w-auto" viewBox="0 0 246 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2452 74.802C15.2452 66.8024 21.3861 61.0784 29.6498 61.0784C34.2373 61.0784 38.0662 62.7457 40.5672 65.7797L36.6244 69.4196C34.8432 67.3719 32.6064 66.3104 29.9528 66.3104C24.9872 66.3104 21.4612 69.7977 21.4612 74.802C21.4612 79.8063 24.9872 83.2935 29.9528 83.2935C32.6064 83.2935 34.8432 82.2321 36.6244 80.1479L40.5672 83.7878C38.0662 86.8583 34.2373 88.5256 29.6111 88.5256C21.3838 88.5256 15.2429 82.8015 15.2429 74.802H15.2452Z" fill="#FFFEFB" />
            <path d="M41.8952 74.802C41.8952 66.9163 48.0361 61.0784 56.4137 61.0784C64.7914 61.0784 70.9323 66.8776 70.9323 74.802C70.9323 82.7264 64.7527 88.5256 56.4137 88.5256C48.0748 88.5256 41.8952 82.6876 41.8952 74.802ZM64.7162 74.802C64.7162 69.7613 61.1538 66.3104 56.4137 66.3104C51.6737 66.3104 48.1112 69.759 48.1112 74.802C48.1112 79.845 51.6737 83.2935 56.4137 83.2935C61.1538 83.2935 64.7162 79.8427 64.7162 74.802Z" fill="#FFFEFB" />
            <path d="M99.3271 61.5339V88.07H94.2841L81.0547 71.9593V88.07H74.989V61.5339H80.0684L93.2613 77.6447V61.5339H99.3271Z" fill="#FFFEFB" />
            <path d="M103.384 74.802C103.384 66.8024 109.525 61.0784 117.788 61.0784C122.376 61.0784 126.205 62.7457 128.706 65.7797L124.763 69.4196C122.982 67.3719 120.745 66.3104 118.091 66.3104C113.126 66.3104 109.6 69.7977 109.6 74.802C109.6 79.8063 113.126 83.2935 118.091 83.2935C120.745 83.2935 122.982 82.2321 124.763 80.1479L128.706 83.7878C126.205 86.8583 122.376 88.5256 117.75 88.5256C109.525 88.5256 103.382 82.8015 103.382 74.802H103.384Z" fill="#FFFEFB" />
            <path d="M149.176 88.07L144.058 80.6787H138.409V88.07H132.268V61.5339H143.755C150.844 61.5339 155.278 65.2103 155.278 71.1621C155.278 75.1414 153.269 78.0615 149.821 79.5398L155.773 88.07H149.176ZM143.413 66.5359H138.409V75.786H143.413C147.167 75.786 149.062 74.0412 149.062 71.1621C149.062 68.283 147.167 66.5382 143.413 66.5382V66.5359Z" fill="#FFFEFB" />
            <path d="M180.108 83.1409V88.07H159.563V61.5339H179.616V66.463H165.665V72.2258H177.986V77.0023H165.665V83.1432H180.108V83.1409Z" fill="#FFFEFB" />
            <path d="M189.928 66.5358H181.436V61.5315H204.56V66.5358H196.069V88.0676H189.928V66.5358Z" fill="#FFFEFB" />
            <path d="M223.439 82.3823H211.118L208.767 88.0676H202.474L214.302 61.5315H220.368L232.233 88.0676H225.789L223.439 82.3823ZM221.505 77.7197L217.298 67.5608L213.091 77.7197H221.507H221.505Z" fill="#FFFEFB" />
          </svg>

        </Link>


        <ul className="hidden md:flex gap-6 items-center text-[#A8CDEE] font-medium text-sm relative">
          <li className="relative group">
            <Link to="/para-voce">
              <button className="hover:text-blue-400 flex items-center gap-1">
                Para você <span className="text-xs">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8C0 9.58225 0.469192 11.129 1.34824 12.4446C2.22729 13.7602 3.47672 14.7855 4.93853 15.391C6.40034 15.9965 8.00887 16.155 9.56072 15.8463C11.1126 15.5376 12.538 14.7757 13.6569 13.6569C14.7757 12.538 15.5376 11.1126 15.8463 9.56072C16.155 8.00887 15.9965 6.40034 15.391 4.93853C14.7855 3.47672 13.7602 2.22729 12.4446 1.34824C11.129 0.469192 9.58225 0 8 0C5.87897 0.00229405 3.84547 0.845886 2.34568 2.34568C0.845885 3.84547 0.00229405 5.87897 0 8ZM10.276 7.05733C10.526 7.30737 10.6664 7.64645 10.6664 8C10.6664 8.35355 10.526 8.69263 10.276 8.94267L7.16067 12.058L6.218 11.1153L9.33333 8L6.19267 4.85867L7.13333 3.916L10.276 7.05733Z" fill="#A8CDEE" />
                  </svg>

                </span>
              </button>
            </Link>

            <div className="absolute top-full left-0 mt-2 bg-[#1E2035] text-white rounded-md shadow-lg py-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
              <Link to="/para-voce" className="block px-4 py-2 hover:bg-[#2c2f4d] text-sm">
                Antecipação de FGTS
              </Link>
              <Link to="/para-voce" className="block px-4 py-2 hover:bg-[#2c2f4d] text-sm font-semibold">
                Compra de Consórcios
              </Link>
              <Link to="/para-voce" className="block px-4 py-2 hover:bg-[#2c2f4d] text-sm">
                Consignado Privado
              </Link>
              <Link to="/para-voce" className="block px-4 py-2 hover:bg-[#2c2f4d] text-sm">
                Crédito Consignado Público <br /> Estadual e Federal
              </Link>
            </div>
          </li>

          <li>
            <Link to="/para-empresas" className="hover:text-blue-400 flex items-center gap-1">
              Para empresas
              <span className="text-xs">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8C0 9.58225 0.469192 11.129 1.34824 12.4446C2.22729 13.7602 3.47672 14.7855 4.93853 15.391C6.40034 15.9965 8.00887 16.155 9.56072 15.8463C11.1126 15.5376 12.538 14.7757 13.6569 13.6569C14.7757 12.538 15.5376 11.1126 15.8463 9.56072C16.155 8.00887 15.9965 6.40034 15.391 4.93853C14.7855 3.47672 13.7602 2.22729 12.4446 1.34824C11.129 0.469192 9.58225 0 8 0C5.87897 0.00229405 3.84547 0.845886 2.34568 2.34568C0.845885 3.84547 0.00229405 5.87897 0 8ZM10.276 7.05733C10.526 7.30737 10.6664 7.64645 10.6664 8C10.6664 8.35355 10.526 8.69263 10.276 8.94267L7.16067 12.058L6.218 11.1153L9.33333 8L6.19267 4.85867L7.13333 3.916L10.276 7.05733Z" fill="#A8CDEE" />
                </svg>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/quero-ser-representante" className="hover:text-blue-400">
              Quero ser representante
            </Link>
          </li>
        </ul>

        <Link
          to="/quero-ser-representante"
          className="hidden md:flex bg-white text-[#0E1022] text-sm font-bold px-4 py-2 rounded-full items-center gap-2 hover:opacity-90 transition"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-[green]" /> Fale conosco
        </Link>


        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed h-90 inset-4 mt-3 top-20 border border-top-3 rounded-[15px] bg-[#0E1022] text-white flex flex-col gap-4 px-6 py-4 z-40 shadow-lg md:hidden">
          <Link to="/fgts" className="hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>
            Antecipação de FGTS
          </Link>
          <Link to="/consorcios" className="hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>
            Compra de Consórcios
          </Link>
          <Link to="/privado" className="hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>
            Consignado Privado
          </Link>
          <Link to="/publico" className="hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>
            Crédito Consignado Público
          </Link>
          <Link to="/para-empresas" className="hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>
            Para empresas
          </Link>
          <Link to="/quero-ser-representante" className="hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>
            Quero ser representante
          </Link>
          <Link
            to="/quero-ser-representante"
            className="mt-4 bg-white text-[#0E1022] font-semibold px-4 py-2 rounded-full text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-[green]" /> Fale conosco
          </Link>
        </div>
      )}
    </header>
  )
}
