import React from 'react'
import Styles from './creation.module.css'

export function Progress() {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.iconSpider}>
          <img src="https://i.ibb.co/sypQYmB/spiderman.png" alt="Icono" />
        </div>
      </div>
      <div className={Styles.containerCircle}>
        <h1>Website in progress</h1>
        <div className={Styles.circle}></div>
      </div>
    </div>
  )
}
