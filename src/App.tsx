import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { BecomeRep } from "./pages/BecomeRep"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quero-ser-representante" element={<BecomeRep />} />
      {/* <Route path="/para-voce" element={<ForIndividuals />} />
      <Route path="/para-empresas" element={<ForCompanies />} />
      <Route path="/quero-ser-representante" element={<BecomeRep />} /> */}
    </Routes>
  )
}

export default App