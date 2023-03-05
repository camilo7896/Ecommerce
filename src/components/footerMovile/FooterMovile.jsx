import React from 'react'
import Icon from '../Icon'
import Styles from './FooterMovile.module.css'
import { Routes, Route, Link } from 'react-router-dom'

import {faHouse, faPhone, faShoppingBag, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Carrito from '../carrito/Carrito';
import Wines from '../../pages/Wines';


export default function FooterMovile() {
  return (
    <div className={Styles.footMovile}>
      <footer className={Styles.subFooterMobile}>
      <div className='ml-3 mr-3'>
      <Link to={"/Wine"}>
      <Icon css='icon' icon={faShoppingBag}/>
      </Link>
      </div>
      <div className='ml-3 mr-3 '>
      <Link to={"/"}>
      <Icon  css={'icon'} icon={faHouse}/>
      </Link>
      </div>
      <div className='ml-3 mr-3'>
      <Link to={"/carrito"}>
      <Icon css='icon' icon={faCartShopping}/>
      </Link>
      </div>
</footer>
    </div>
  )
}
