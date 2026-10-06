import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/home/Home'
import Footer from './pages/Footer'
import ProductList from './pages/product/ProductList'

export default function Layout() {
    return (
        <React.Fragment>
            <div className='h-[70px] shadow-md'>
                <Header />
            </div>

            <div className='w-full'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<ProductList />} />
                </Routes>
            </div>

            <div>
                <Footer />
            </div>
        </React.Fragment>
    )
}
