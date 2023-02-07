import React, { useState } from 'react'
import ProductData from '../../data/products.json'
import Styles from './cards.module.css'

export default function Cards() {

  {/**************  Estados  ***************/}
{/*Estado de los productos */}
  const [dataProduct, setDataProduct] = useState(ProductData)
  {/**Estado del carrito**/}
  const [allProduct, setAllproduct] = useState([])
  {/*Estado del contador */}
  const [count, setCount] = useState(0)
  {/*Total de productos */}
const [total, setTotal]=useState(0)

const onAddProduc =product=>{
  setAllproduct([...allProduct, product])
}
  console.log(allProduct, count)
  return (
    <>
      <div className={Styles.container}>
        {/* Recorrido de la data */}
        {dataProduct.products.map((product) => {
          return (
            <div key={product.id} className={Styles.containerCard}>
              <div className="card w-72 bg-base-100 shadow-xl m-6">
                <figure className="px-10 pt-10">
                  <img src={product.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body products-center text-center">
                  <div className="justify-products-end">
                    <span>$ {product.price}</span>
                  </div>
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="flex m-2 products-center">
                    <button
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
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-success" onClick={()=> onAddProduc(product)}>
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
