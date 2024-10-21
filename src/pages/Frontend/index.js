import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Vegetable from './Vegetable'
import Fruits from './Fruits'
import DairyProducts from './DairyProducts'
import GroceryItems from './GroceryItems'
import About from './About'
import AboutMe from './AboutMe'
import Contact from './Contact'


export default function Frontend() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/vegetable' element={<Vegetable />} />
                <Route path='/fruits' element={<Fruits />} />
                <Route path='/dairyProducts' element={<DairyProducts />} />
                <Route path='/groceryItems' element={<GroceryItems />} />
                <Route path="/about" element={<About />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path='/contact' element={<Contact />} />

            </Routes>
        </>
    )
}
