import React from 'react'
import Styles from './carousel.module.css'
export default function Carousel() {
  return (
    <div className={Styles.container}>
   <div className="carousel rounded-box">
   
  <div className="carousel-item">
    <img className='w-60' src={"https://i.ibb.co/nCsXSnB/23325.png"} alt="Burger" />
  </div> 
  <div className="carousel-item">
  <img className='w-60'  src={"https://i.ibb.co/RbPYC1g/Anna-rose.png"} alt="Burger" />
  </div> 
  <div className="carousel-item">
  <img className='w-60'  src={"https://i.ibb.co/ZHJ6Qhy/porto-Cruz.png"} alt="Burger" />
  </div> 
</div>
    </div>
  )
}
