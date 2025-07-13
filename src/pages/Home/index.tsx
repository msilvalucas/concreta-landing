
import { BenefitsSection } from "../../components/sections/Home/BenefitsSection"
import { Footer } from "../../components/layout/Footer"
import { HeroSection } from "../../components/sections/Home/HeroSection"
import { PartnersSection } from "../../components/sections/Home/PartnersSection"
import { RepresentativeSection } from "../../components/sections/Home/RepresentativeSection"
import { SolutionsSection } from "../../components/sections/Home/SolutionsSection"
import { TestimonialsSection } from "../../components/sections/Home/TestimonialsSection"

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