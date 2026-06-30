import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/home/Home'

export default function Layout() {
    return (
        <React.Fragment>
            <div className='h-[70px] shadow-md'>
                <Header />
            </div>

            <div className='w-full'>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </React.Fragment>
    )
}
