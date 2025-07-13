
import { Footer } from "../../components/layout/Footer"
import { BenefitsSection } from "../../components/sections/BenefitsSection"
import { HeroSection } from "../../components/sections/HeroSection"
import { PartnersSection } from "../../components/sections/PartnersSection"
import { RepresentativeSection } from "../../components/sections/RepresentativeSection"
import { SolutionsSection } from "../../components/sections/SolutionsSection"
import { TestimonialsSection } from "../../components/sections/TestimonialsSection"

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <PartnersSection />
      <RepresentativeSection />
      <Footer />
    </main>
  )
}