import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { BecomeRep } from "./pages/BecomeRep"
import { Consortium } from "./pages/Consortium"
import { ForIndividuals } from "./pages/ForIndividuals"
import { ForCompanies } from "./pages/ForCompanies"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quero-ser-representante" element={<BecomeRep />} />
      <Route path="/consorcios" element={<Consortium />} />
      <Route path="/para-voce" element={<ForIndividuals />} />
      <Route path="/para-empresas" element={<ForCompanies />} />
    </Routes>
  )
}

export default App