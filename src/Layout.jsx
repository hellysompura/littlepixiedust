import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/home/Home'

export default function Layout() {
    return (
        <React.Fragment>
            <div className='h-17.5 shadow-md'>
                <Header />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </React.Fragment>
    )
}
