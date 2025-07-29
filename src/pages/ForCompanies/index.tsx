import { ForCompanyForm } from "../../components/forCompanies"
import { Footer } from "../../components/layout/Footer"
import { Navbar } from "../../components/layout/Navbar"

export const ForCompanies = () => {
  return (
    <main>
      <Navbar />
      <div className="w-full md:px-4 md:mt-6 flex justify-center items-center z-50">
        <div className="container mx-auto">
          <ForCompanyForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}