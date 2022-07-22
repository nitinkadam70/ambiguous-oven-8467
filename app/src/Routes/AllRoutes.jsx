import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppPage from '../Pages/AppPage'
import BlogPage from '../Pages/Blog'
import Homepage from '../Pages/Homepage'
import LoginPage from '../Pages/LoginPage'
import { Partner } from '../Pages/Partner'
import PricingPage from '../Pages/PricingPage'
import Solutionspage from '../Pages/Solutionspage'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/blogs' element={<BlogPage />} />
                <Route path='/apps' element={<AppPage />} />
                <Route path='/partners' element={<Partner />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/solutions' element={<Solutionspage />} />
                <Route path='/pricing' element={<PricingPage />} />

                <Route />
            </Routes>
        </>
    )
}

export default AllRoutes