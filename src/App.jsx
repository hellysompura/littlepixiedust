
import React from 'react'
import './App.css'
import TopHeader from './components/TopHeader'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'

function App() {

  return (
    <React.Fragment>

      <TopHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </React.Fragment>
  )
}

export default App
