import React from 'react'
import { Route, Routes } from 'react-router'
import { HomePage, Offerts, ProfileAccountStd, StudentsProfiles, PublishOffer  } from '../Pages'


export const AppRoutes = () => {
  return (
    <Routes>

        {/* HomePage */}
        <Route path='/' element={ <HomePage/> } />

        {/* Students Profiles */}
        <Route path='/StudentsProfiles' element={ <StudentsProfiles/> } />

        {/* Offerts */}
        <Route path='/Offerts' element={ <Offerts/> } />

        {/* Profile Account */}
        <Route path='/ProfileAccount' element={ <ProfileAccountStd/> } />

        {/* Publish offert */}
        <Route path='/PublishOffer' element={ <PublishOffer/> } />

        <Route path='/*' element={ <HomePage/> } />

    </Routes>
  )
}
