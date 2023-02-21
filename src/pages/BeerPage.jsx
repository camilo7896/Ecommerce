import React from 'react'
import Beer from '../components/beer/Beer'
import Footer from '../components/footer/Footer'
import FooterMovile from '../components/footerMovile/FooterMovile'
import Navbar from '../components/navbar/Navbar'

export default function BeerPage() {
  return (
    <div>
    <Navbar/>
      <Beer/>
      <Footer/>
      <FooterMovile/>
    </div>
  )
}
