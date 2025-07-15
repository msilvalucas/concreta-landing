
import { Footer } from "../../components/layout/Footer"
import { Navbar } from "../../components/layout/Navbar"
import { BecomeRepHero } from "../../components/sections/BecomeRep/BecomeRepHero"
import { BecomeRepIntro } from "../../components/sections/BecomeRep/BecomeRepIntro"
import { BenefitGrid } from "../../components/sections/BecomeRep/BenefitGrid"
import { FAQAccordion } from "../../components/sections/BecomeRep/FAQAccordion"

export const BecomeRep = () => {
  return (
    <main>
      <Navbar />
      <BecomeRepHero />
      <BenefitGrid />
      <BecomeRepIntro />
      <FAQAccordion />
      <Footer />
    </main>
  )
}