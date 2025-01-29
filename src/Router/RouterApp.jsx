import React from 'react'
import { Route, Routes } from 'react-router'
import { AuthRoute } from '../Auth/Router/AuthRoute'
import { AppRoutes } from '../App/Routes/AppRoutes'

export const RouterApp = () => {
  return (
    <>
    
        <Routes>

        {/* Login and register */}
        <Route path="/auth/*" element={<AuthRoute />} />

        {/* HomePage */}
        <Route path='/*' element={ <AppRoutes/> } />



        </Routes>
    
    
    </>
  )
}
