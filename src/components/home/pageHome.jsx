import React from 'react'
import Styles from './wineStyle.module.css'
import Icon from '../Icon'
import Wines from '../../pages/Wines';
import {faWineGlass, faBeerMugEmpty} from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Link } from 'react-router-dom'
import Contact from '../contact/Contact';



export default function pageHome() {
  return (
    <div>
    <div className='flex justify-center m-5'>
    <Contact/>
    </div>
    {/* card del producto Promoción */}
      <div className={Styles.subContainer}>
      <h2 className='font-bold'>Promoción del dia</h2>
          <div className={Styles.containerProduct}>
              <div className={Styles.containerImg}>
              <img src='https://us.123rf.com/450wm/oleghz/oleghz1702/oleghz170200004/71233942-vino-tinto-en-copas-de-vino-y-botella-de-vino-sobre-un-fondo-negro-silueta-minimalismo-iluminaci%C3%B3n-d.jpg' alt=' wine'/>
              </div>
              <div className={Styles.containerText}>
                <h2 className='font-semibold'>Promoción del dia</h2>
                <h4 className='font-semibold'>$ 50.000</h4>
              </div>
          </div>
      </div>
      {/* Botones de categorias */}
      <div className={Styles.containerBtns}>
        <div className={Styles.btnCategories}>
        <button>
       <Link to={'wine'}>
        <Icon  css={'icon'} icon={faWineGlass}/> <small>Vinos</small>
        </Link>
        </button>
        </div>
        <div className={Styles.btnCategories}>
        <button>
        <Icon  css={'icon'} icon={faBeerMugEmpty}/> <small>Cervezas</small>
        </button>
        </div>

      </div>

      <Routes>
          <Route path="wine" element={<Wines />} />
        </Routes>
    </div>
  )
}
