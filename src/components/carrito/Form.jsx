import { text } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { useGlobalContext } from '../../provider/DataProvider'

export default function Form() {
  const {allProduct,setAllproduct, total, message} = useGlobalContext()
  return (
    <div>
        <form>
     
            <input type="text" placeholder="Nombres" className="input input-bordered input-info w-full max-w-xs" />
           
            <input type="Number" placeholder="Celular" className="input input-bordered input-info w-full max-w-xs" />

            <button className="btn btn-block bg-success" onClick={sendList}>Enviar Pedido</button>
        </form>
    </div>
  )
}
