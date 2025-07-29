
import React from 'react'
import './App.css'
import TopHeader from './components/TopHeader'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe'
import ContactUs from './components/pages/ContactUs'
import Footer from './components/Footer'
import ProductList from './components/pages/ProductList'
import Policies from './components/pages/Policies'

function App() {

  return (
    <div className='root-container'>

      <TopHeader />

      <div className='flex-1'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product/:productType" element={<ProductList />} />
          <Route path="/:policyType" element={<Policies />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
