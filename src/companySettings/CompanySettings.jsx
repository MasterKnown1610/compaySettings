import React from 'react'
import  {Outlet } from 'react-router-dom'
import './companySettings.scss'

const CompanySettings = () => {
  return (
    <div className='companySettingsContainer'>
      <Outlet/>
    </div>
  )
}

export default CompanySettings
