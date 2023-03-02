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
   alertProduct()
}


const handleClick = () => {
  setMostrarComponente(!mostrarComponente);
};
// const formattedAmount = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  {/************************************ Fin Metodos  *****************************************/}
 
  return (
    <>
    <Search/>
      <div className={Styles.container}>
        {/* Recorrido de la data */}
        {Productslist.products.map((product) => {
          
          return (
            <div key={product.id} className={Styles.containerCard}>
              <div className="card w-72  bg-base-100 shadow-xl m-6 mb-36 justify-center">
                <figure className="px-10 pt-10 w-auto">
                  <img src={product.image} alt="Shoes" className={Styles.imgCard}/>
                </figure>
                <div className="card-body products-center text-center">
                  <div className="justify-products-end">
                    <span>$ {product.priceString}</span>
                  </div>
                  <div className='h-20 flex justify-center'>
                  <h2 className="card-title">{product.name}</h2>
                  </div>
                  {/* <div className='h-90'>
                  <p>{product.description}</p>
                  </div> */}
                  <div className="flex m-2 products-center justify-center">
                   
                  </div>
                  <div className="card-actions flex justify-center aling-center">
                    <button className={Styles.btnAdd} onClick={()=> onAddProduc(product, product.price)}>
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