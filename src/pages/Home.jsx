import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FooterMovile from '../components/footerMovile/FooterMovile'
import Corousel from '../components/carousel/Carousel'
import ProductHome from './ProductHome'
import Hero from '../components/hero/Hero'


export function Home() {
  return (
    <div>
        
      <Navbar />
      <Corousel/>
      <ProductHome/>
      <Hero/>
      <Footer/>
      <FooterMovile/>
    </div>
  )
}
