import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Routes, Route } from 'react-router-dom'
import Slider from "./components/Slider"
import Aboutus from "./components/Aboutus"
import Footer from "./components/Footer"


function App() {
  return (
    
    <div>
      <Header />

      <Routes >
        <Route exact path="/" element={<Photos />} />
        <Route exact path="/Cart" element={<Cart/>} />
        <Route exact path="/About" element={<Aboutus />} />
      </Routes>

    
    </div>
  )
}

export default App