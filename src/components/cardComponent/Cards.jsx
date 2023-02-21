import React, { useState } from 'react'
import { useGlobalContext } from '../../provider/DataProvider'
import Styles from './cards.module.css'
import Productslist from '../../data/products.json'
import Search from '../search/Search'
import TipeWines from '../tipeWines/TipeWines'
import Swal from "sweetalert";

export default function Cards() {

  {/********************************** Contexto Global **********************************/}
  const {valorFormateado, allProduct,setAllproduct,total, setTotal, subTotal } = useGlobalContext()
  {/********************************** Fin Contexto Global **********************************/}
  const [mostrarComponente, setMostrarComponente] = useState(false);
{/************************************  Metodos  *****************************************/}

const alertProduct=()=>{
  let windowAlert = Swal("Producto agregado al carrito");
  setTimeout(() => {
    windowAlert.style.display ='none'
  }, 500);
}

const onAddProduc =product=>{
  setAllproduct([...allProduct, product])
  setTotal(total + product.price)
  // alertProduct()
}
let viewbtn = "Ver tipos de vinos"
let disguiseBtn = "Ocultar"

const handleClick = () => {
  setMostrarComponente(!mostrarComponente);
};
// const formattedAmount = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  {/************************************ Fin Metodos  *****************************************/}
 


  return (
    <>
    <Search/>

    <div className={Styles.containerBtn}>
      <button className={Styles.btn} onClick={handleClick}>{mostrarComponente == false?viewbtn:disguiseBtn}</button>
      {mostrarComponente && <Componente />}
    </div>
  
    
      <div className={Styles.container}>
        {/* Recorrido de la data */}
        {Productslist.products.map((product) => {
          return (
            <div key={product.id} className={Styles.containerCard}>
              <div className="card w-72 bg-base-100 shadow-xl m-6 mb-36 justify-center">
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
function Componente() {
  return <TipeWines/>   
  ;
}