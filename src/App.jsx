
import React from 'react'
import './App.css'
import TopHeader from './components/TopHeader'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Categories from './components/pages/Categories'
import AboutMe from './components/pages/AboutMe'
import ContactUs from './components/pages/ContactUs'

function App() {

  return (
    <React.Fragment>

      <TopHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

    </React.Fragment>
  )
}

export default App
