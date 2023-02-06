import React, { useState } from 'react'
import ProductData from '../../data/products.json'
import Styles from './cards.module.css'

export default function Cards() {
  const [product, setProduct] = useState(ProductData)
  const [count, setCount] = useState(0)
  return (
    <>
      <div className={Styles.container}>
        {product.products.map((item) => {
          return (
            <div key={item.id} className={Styles.containerCard}>
              <div className="card w-72 bg-base-100 shadow-xl m-6">
                <figure className="px-10 pt-10">
                  <img src={item.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <div className="justify-items-end">
                    <span>$ {item.price}</span>
                  </div>
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.description}</p>
                  <div className="flex m-2 items-center">
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
                    <button className="btn btn-success">
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
