import { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import CompanySettings from './companySettings/CompanySettings'
import OverView from './companySettings/OverView'
import Branding from './companySettings/Branding'
import DominVerification from './companySettings/DominVerification'
import Gallery from './companySettings/Gallery'
import Integrations from './companySettings/Integrations'
import TeamMenber from './companySettings/TeamMenber'
import PlanBill from './companySettings/PlanBill'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompanySettings />}>
          <Route path='' element={<OverView/>}/>
          <Route path='branding' element={<Branding/>}/>
          <Route path='domain_verification' element={<DominVerification/>}/>
          <Route path='gallery' element={<Gallery/>} />
          <Route path='integration' element={<Integrations/>}/>
          <Route path='teamMenber' element={<TeamMenber/>}/>
          <Route path='plan_bill' element={<PlanBill/>} />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
