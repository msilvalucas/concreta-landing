import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <footer className="bg-[#0b0d21] text-white py-8 text-center text-sm sm:text-base">
      <div className='container mx-auto'>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-5xl gap-4">

            <div className='flex justify-center sm:justify-start sm:flex-7'>
              <svg className="h-50" viewBox="0 0 288 288" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.848 141.427C17.848 132.061 25.0373 125.36 34.712 125.36C40.0827 125.36 44.5653 127.312 47.4933 130.864L42.8773 135.125C40.792 132.728 38.1733 131.485 35.0667 131.485C29.2533 131.485 25.1253 135.568 25.1253 141.427C25.1253 147.285 29.2533 151.368 35.0667 151.368C38.1733 151.368 40.792 150.125 42.8773 147.685L47.4933 151.947C44.5653 155.541 40.0827 157.493 34.6667 157.493C25.0347 157.493 17.8453 150.792 17.8453 141.427H17.848Z" fill="#FFFEFB" />
                <path d="M49.048 141.427C49.048 132.195 56.2373 125.36 66.0453 125.36C75.8533 125.36 83.0426 132.149 83.0426 141.427C83.0426 150.704 75.808 157.493 66.0453 157.493C56.2826 157.493 49.048 150.659 49.048 141.427ZM75.7653 141.427C75.7653 135.525 71.5946 131.485 66.0453 131.485C60.496 131.485 56.3253 135.523 56.3253 141.427C56.3253 147.331 60.496 151.368 66.0453 151.368C71.5946 151.368 75.7653 147.328 75.7653 141.427Z" fill="#FFFEFB" />
                <path d="M116.285 125.894V156.96H110.381L94.8933 138.099V156.96H87.792V125.894H93.7387L109.184 144.755V125.894H116.285Z" fill="#FFFEFB" />
                <path d="M121.035 141.427C121.035 132.061 128.224 125.36 137.899 125.36C143.269 125.36 147.752 127.312 150.68 130.864L146.064 135.125C143.979 132.728 141.36 131.485 138.253 131.485C132.44 131.485 128.312 135.568 128.312 141.427C128.312 147.285 132.44 151.368 138.253 151.368C141.36 151.368 143.979 150.125 146.064 147.685L150.68 151.947C147.752 155.541 143.269 157.493 137.853 157.493C128.224 157.493 121.032 150.792 121.032 141.427H121.035Z" fill="#FFFEFB" />
                <path d="M174.645 156.96L168.653 148.307H162.04V156.96H154.851V125.894H168.299C176.597 125.894 181.789 130.198 181.789 137.166C181.789 141.824 179.437 145.243 175.4 146.974L182.368 156.96H174.645ZM167.899 131.75H162.04V142.579H167.899C172.293 142.579 174.512 140.536 174.512 137.166C174.512 133.795 172.293 131.752 167.899 131.752V131.75Z" fill="#FFFEFB" />
                <path d="M210.859 151.19V156.96H186.805V125.894H210.283V131.664H193.949V138.411H208.373V144.003H193.949V151.192H210.859V151.19Z" fill="#FFFEFB" />
                <path d="M222.355 131.749H212.413V125.891H239.485V131.749H229.544V156.957H222.355V131.749Z" fill="#FFFEFB" />
                <path d="M261.587 150.301H247.163L244.411 156.957H237.043L250.891 125.891H257.992L271.883 156.957H264.339L261.587 150.301ZM259.323 144.843L254.397 132.949L249.472 144.843H259.325H259.323Z" fill="#FFFEFB" />
              </svg>

            </div>

            <div className="flex flex-col sm:flex-row sm:flex-5 items-center sm-justify-between gap-4 text-2xl">
              <div className="space-y-1">
                <p>(31) 2117-9072</p>
                <p>contato@concreto.com.br</p>
              </div>

              <div className='flex p-4 gap-4'>
                <a href="#" aria-label="Instagram" className="hover:text-[#ccc]">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#ccc]">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 w-full max-w-5xl text-center space-y-2">
            <p>
              <a href="#" className="underline">
                Termos de uso e privacidade
              </a>{' '}
              © 2024 Concreto FIDC
            </p>
            <p>
              Av. Brig. Faria Lima, 3900 - cj 601, 6º andar - Itaim Bibi, São Paulo, Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


