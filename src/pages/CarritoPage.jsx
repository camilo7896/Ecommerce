import React from 'react'
import Carrito from '../components/carrito/Carrito'
import Footer from '../components/footer/Footer'
import FooterMovile from '../components/footerMovile/FooterMovile'
import Navbar from '../components/navbar/Navbar'

export default function CarritoPage() {
  return (
    <div>
    <Navbar/>
      <Carrito/>
      <Footer/>
      <FooterMovile/>
    </div>
  )
}
