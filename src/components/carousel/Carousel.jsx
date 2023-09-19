import React from 'react'
import Styles from './carousel.module.css'
export default function Carousel() {
  return (
    <div className={Styles.container}>
   <div className="carousel rounded-box">
  <div className="carousel-item w-60">
    <img src="https://m.media-amazon.com/images/I/61aGI7MtBvL._AC_UY350_.jpg" alt="gorra" />
  </div> 
  <div className="carousel-item w-60">
  <img src="https://ae01.alicdn.com/kf/Hdc11e0ae398442e38bbe2101b36bad03y/Gorra-de-b-isbol-de-moda-el-hambre-ajustable-del-sombrero-del-SNAPBACK-de-gorro-de.jpg" alt="gorra" />
  </div> 
  <div className="carousel-item w-60">
    <img src="https://images.unsplash.com/photo-1624383708120-5989205ffeef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk0OTkyMzUxfA&ixlib=rb-4.0.3&q=80&w=200" alt="gorra" />
  </div> 
</div>
    </div>
  )
}
