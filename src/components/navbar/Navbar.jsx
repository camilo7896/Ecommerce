import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Carrito from '../carrito/Carrito'
import ProductHome from '../../pages/ProductHome'
import { useGlobalContext } from '../../provider/DataProvider'
import Styles from './Styles.module.css'

export default function Navbar() {

    {/********************************** Contexto Global **********************************/}
  const {valorFormateado, dataProduct, allProduct,setAllproduct, count, setCount, total, setTotal } = useGlobalContext()





  return (
    <>
      <div>
        <div className={Styles.containerNabvar}>
          <div className="flex-1">
            <Link to={'/'} className="btn btn-ghost normal-case text-xl">
              Le vin
            </Link>
        
          </div>

          <div className='font-bold'>
          {allProduct==''?"$ 0.000":<span>$ {valorFormateado}</span>}
          </div>
     
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">{allProduct.length}</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body bg-slate-700 rounded-md">
                  <span className="font-bold text-lg">{allProduct.length} Productos</span>
                  <span className="text-info">Subtotal: ${total}</span>
                  <div className="card-actions">
                    {/*link router */}
                    <Link to={'/carrito'}>
                      <button className="btn btn-success btn-block font-bold">
                        Ir a carrito
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <Routes>
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/" element={<ProductHome/>} />
        </Routes>
      </div>
    </>
  )
}
