
import React from 'react'
import './App.css'
import TopHeader from './components/TopHeader'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Categories from './components/pages/Categories'
import AboutMe from './components/pages/AboutMe'
import ContactUs from './components/pages/ContactUs'
import Footer from './components/Footer'
import ProductList from './components/pages/ProductList'

function App() {

  return (
    <React.Fragment>

      <TopHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product/:productType" element={<ProductList />} />

      </Routes>

      <Footer />
    </React.Fragment>
  )
}

export default App
