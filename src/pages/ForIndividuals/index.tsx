import { ForIndividualsForm } from "../../components/forIndividuals"
import { Footer } from "../../components/layout/Footer"
import { Navbar } from "../../components/layout/Navbar"

export const ForIndividuals = () => {
  return (
    <main>
      <Navbar />
      <div className="w-full p-0 mt-0 md:px-4 sm:mt-6 flex justify-center items-center z-50">
        <div className="container mx-auto">
          <ForIndividualsForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}