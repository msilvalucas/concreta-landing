import { Footer } from "../../components/layout/Footer"
import { Navbar } from "../../components/layout/Navbar"
import { ConsortiumExplanation } from "../../components/sections/Consortium/ConsortiumExplanation"
import { ConsortiumHero } from "../../components/sections/Consortium/ConsortiumHero"
import { FAQAccordion } from "../../components/sections/Consortium/FAQAccordion"

export const Consortium = () => {
  return (
    <main>
      <Navbar />
      <ConsortiumHero />
      <ConsortiumExplanation />
      <FAQAccordion />
      <Footer />
    </main>
  )
}