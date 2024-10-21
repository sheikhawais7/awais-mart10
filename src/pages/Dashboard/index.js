import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import UpdatePassword from './UpdatePassword'

export default function index() {
    return (
        <>
            <Routes>
                <Route path="/cart" element={<Cart/>} />
                <Route path="/updatepassword" element={<UpdatePassword/>} />
            </Routes>
        </>
    )
}
