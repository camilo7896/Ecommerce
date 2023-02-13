import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FooterMovile from '../components/footerMovile/FooterMovile'


export function Home() {
  return (
    <div>
      <Navbar />
    
      <Footer/>
      <FooterMovile/>
    </div>
  )
}
