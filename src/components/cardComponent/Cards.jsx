import React, { useState } from 'react'
import { useGlobalContext } from '../../provider/DataProvider'
import Styles from './cards.module.css'
import Productslist from '../../data/products.json'

export default function Cards() {

  {/********************************** Contexto Global **********************************/}
  const {allProduct,setAllproduct,total, setTotal, subTotal, setSubtotal } = useGlobalContext()
  {/********************************** Fin Contexto Global **********************************/}

{/************************************  Metodos  *****************************************/}
const onAddProduc =product=>{
  setAllproduct([...allProduct, product])
  setTotal(total + product.price)
 setSubtotal(total)
 
}
// const formattedAmount = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  {/************************************ Fin Metodos  *****************************************/}
  return (
    <>
      <div className={Styles.container}>
        {/* Recorrido de la data */}
        {Productslist.products.map((product) => {
          return (
            <div key={product.id} className={Styles.containerCard}>
              <div className="card w-72 bg-base-100 shadow-xl m-6 justify-center">
                <figure className="px-10 pt-10">
                  <img src={product.image} alt="Shoes" className="rounded-xl w-28" />
                </figure>
                <div className="card-body products-center text-center">
                  <div className="justify-products-end">
                    <span>$ {product.price}</span>
                  </div>
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="flex m-2 products-center justify-center">
                   
                   {/* <button
                      onClick={() => setCount(count - 1)}
                      className="m-5  btn btn-outline btn-secondary"
                    >
                      -
                    </button>
                    <br />
                    <span>{count}</span>
                    <br />
                    <button
                      onClick={() => setCount(count + 1)}
                      className="m-5 btn btn-outline btn-accent"
                    >
                      +
                    </button>
                    */}
                  </div>
                  <div className="card-actions flex justify-center aling-center">
                    <button className="btn btn-success" onClick={()=> onAddProduc(product, product.price)}>
                      agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
