import React from 'react'
import Styles from './typeWines.module.css'

export default function TipeWines() {

    const tinto=()=>{
        console.log('Clic en Vino tinto')
    }
  return (
    <div>
    <h1 className='text-center mt-10 font-bold text-2xl'>Tipos de vinos</h1>
    <div className='flex justify-center mt-6 space-x-5 flex-wrap'>
      <div className={Styles.circleType} onClick={tinto}> <button>TINTO</button></div>
      <div className={Styles.circleType}> BLANCO</div>
      <div className={Styles.circleType}> ROSADO</div>
      <div className={Styles.circleType}> ESPUMOSO</div>
      <div className={Styles.circleType}> GENEROSO</div>
    </div>
    </div>
  )
}
