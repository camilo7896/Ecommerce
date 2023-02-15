import React from 'react'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';
import { Link, Route, Routes } from 'react-router-dom';
import Cards from '../cardComponent/Cards';

export default function ButonStore() {
  return (
    <div>
  
        <div className='p-3 flex justify-center animate-bounce'><Icon css='icon' icon={faArrowDown}/></div>
    <div className='flex justify-center flex-col'>
   <Link to={'/'}>
      <button className="btn btn-warning text-lg">Ir a la tienda</button>
      </Link>
    </div>
    <Routes>
        <Route path='/' element={<Cards/>} />
    </Routes>

    </div>
  )
}
