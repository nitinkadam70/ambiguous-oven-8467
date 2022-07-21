import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import {Partner} from '../Components/partner Page/Partner'
const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route  path='/partner' element={<Partner/>} />
                <Route />
                <Route />
                <Route />
            </Routes>
        </>
    )
}

export default AllRoutes