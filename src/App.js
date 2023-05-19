import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Routes, Route } from 'react-router-dom'
import Aboutus from "./components/Aboutus"
import Footer from "./components/Footer"
import Contactus from "./components/Contactus"
import Privacy from "./components/Privacy"


function App() {
  return (
    
    <div>
      <Header />

      <Routes >
        <Route exact path="/" element={<Photos />} />
        <Route exact path="/Cart" element={<Cart/>} />
        <Route exact path="/About" element={<Aboutus />} />
        <Route exact path="/Contact" element={<Contactus />} />
        <Route exact path="/Privacy" element={<Privacy />} />
      </Routes>

      <Footer />

    
    </div>
  )
}

export default App