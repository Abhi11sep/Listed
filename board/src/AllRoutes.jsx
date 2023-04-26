import React from 'react'
import SignIn from './Pages/SignIn'
import Dashboard from './Pages/Dashboard'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
    )
}

export default AllRoutes