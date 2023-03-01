import React from 'react'
import Styles from './carousel.module.css'
export default function Carousel() {
  return (
    <div className={Styles.container}>
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
  <div className="carousel-item">
    <img src="https://i.ibb.co/4WX7js0/extreme.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.ibb.co/4WX7js0/extreme.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.ibb.co/4WX7js0/extreme.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.ibb.co/4WX7js0/extreme.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.ibb.co/4WX7js0/extreme.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.ibb.co/4WX7js0/extreme.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.ibb.co/4WX7js0/extreme.png" className="rounded-box" />
  </div>
</div>
    </div>
  )
}
