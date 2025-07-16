import { ForIndividualsForm } from "../../components/forIndividuals"
import { Footer } from "../../components/layout/Footer"
import { Navbar } from "../../components/layout/Navbar"

export const ForIndividuals = () => {
  return (
    <main>
      <Navbar />
      <ForIndividualsForm />

      <Footer />
    </main>
  )
}