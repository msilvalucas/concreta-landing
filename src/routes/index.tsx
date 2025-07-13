import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
// import { ForIndividuals } from '../pages/ForIndividuals/ForIndividuals'
// import { ForCompanies } from '../pages/ForCompanies/ForCompanies'
// import { BecomeRep } from '../pages/BecomeRep/BecomeRep'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/para-voce" element={<ForIndividuals />} />
      <Route path="/para-empresas" element={<ForCompanies />} />
      <Route path="/quero-ser-representante" element={<BecomeRep />} /> */}
    </Routes>
  )
}
