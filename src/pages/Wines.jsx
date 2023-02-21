import React from 'react'
import Cards from '../components/cardComponent/Cards'
import Footer from '../components/footer/Footer'
import FooterMovile from '../components/footerMovile/FooterMovile'
import Navbar from '../components/navbar/Navbar'

export default function Wines() {
  return (
    <div>
    <Navbar/>
      <Cards/>
      <Footer/>
      <FooterMovile/>
    </div>
  )
}
