import React from 'react'
import Icon from '../Icon'
import Styles from './FooterMovile.module.css'
import { Routes, Route, Link } from 'react-router-dom'

import {faHouse, faPhone, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Carrito from '../carrito/Carrito';


export default function FooterMovile() {
  return (
    <div className={Styles.footMovile}>
      <footer className="footer items-center space-x-16 p-7 bg-black text-white pr-6 fixed bottom-0 flex justify-center">
      <div className='ml-3 mr-3'>
      <Icon css='icon' icon={faPhone}/>
      </div>
      <div className='ml-3 mr-3 '>
      <Link to={"/"}>
      <Icon  css={'icon'} icon={faHouse}/>
      </Link>
      </div>
      <div className='ml-3 mr-3'>
      <Link to={"/carrito"}>
      <Icon css='icon' icon={faShoppingBag}/>
      </Link>
      </div>
</footer>
    </div>
  )
}
