import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FooterMovile from '../components/footerMovile/FooterMovile'
import Corousel from '../components/carousel/Carousel'
import ProductHome from './ProductHome'


export function Home() {
  return (
    <div>
        
      <Navbar />
      <Corousel/>
      <ProductHome/>
      <Footer/>
      <FooterMovile/>
    </div>
  )
}
