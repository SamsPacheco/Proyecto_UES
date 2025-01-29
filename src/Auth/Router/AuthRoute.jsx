import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { CreateAccount } from '../Pages/CreateAccount'

export const AuthRoute = () => {
  return (
    <Routes>
        {/* Although, the login is provider for Google */}
        {/* <Route path='/Login'></Route>  */}

        {/* This page is only for a students */}
        <Route path='/CreateAccoutStudent' element={<CreateAccount />}/>
    
        <Route path='/*' element={ <Navigate to='/auth/CreateAccoutStudent'/>} />
    
    </Routes>
  )
}
