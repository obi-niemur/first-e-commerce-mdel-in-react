import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Routes, Route } from 'react-router-dom'
import Aboutus from "./components/Aboutus"
import Footer from "./components/Footer"
import Contactus from "./components/Contactus"
import Privacy from "./components/Privacy"
import Values from "./components/Values"
import Careers from "./components/Careers"
import Coupon from "./components/Coupon"
import Customer from "./components/Customer"
import Locator from "./components/Locator"


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
        <Route exact path="/Values" element={<Values />} />
        <Route exact path="/Career" element={<Careers />} />
        <Route exact path="/Coupon" element={<Coupon />} />
        <Route exact path="/Customer" element={<Customer />} />
        <Route exact path="/Locator" element={<Locator />} />
      </Routes>

      <Footer />

    
    </div>
  )
}

export default App