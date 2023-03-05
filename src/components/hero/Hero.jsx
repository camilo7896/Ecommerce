import React from 'react'
import CarouselHero from './CarouselHero'
import Styles from '/home/cristian/Documentos/Ecommerce/Ecommerce/src/components/hero/hero.module.css'

export default function Hero() {
  return (
    <div>
      <div className={Styles.contHero}>
  <div className="hero-content flex-col lg:flex-row">
  <CarouselHero/>    <div>
      <h1 className="text-3xl font-bold">Casillero del Diablo Red Blend</h1>
      <p className="py-6">Diseño de packaging de Casillero del Diablo Red Blend realizado por Magdalena mientras trabajaba en Viña Concha y Toro.</p>
    </div>
  </div>
 
</div>
    </div>
  )
}
