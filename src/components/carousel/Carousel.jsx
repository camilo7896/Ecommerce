import React from 'react'
import Styles from './carousel.module.css'
export default function Carousel() {
  return (
    <div className={Styles.container}>
   <div className="carousel rounded-box">
  <div className="carousel-item">
    <img src="https://i.ibb.co/CJGLKXh/red-blend-small.png" alt="Burger" />
  </div> 
  <div className="carousel-item">
  <img src="https://i.ibb.co/VT49vmj/xtrem-small.png" alt="Burger" />
  </div> 
</div>
    </div>
  )
}
