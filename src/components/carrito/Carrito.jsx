import React from 'react'
import { useGlobalContext } from '../../provider/DataProvider'
import Swal from 'sweetalert'

export default function Carrito() {
   {/********************************** Contexto Global **********************************/}
   const {allProduct,setAllproduct, total} = useGlobalContext()

   const sendList=()=>{
    Swal("Genial!", "Se ha enviado tu producto")

    let message = "https://wa.me/573132361040?text=" + " Han realizado un pedido de " + '*'+ allProduct.map((i)=>{return( i.name)}) +'*'+ " Por total de " + "$" + '*' + parseFloat(total)+'*'; 
   window.location.href= message;
   }
   

  return (
    <>
    <div>

    <h1>Total = $ {total}</h1>
    <div className='flex justify-center p-5 '>
    <h1 className='text-xl font-bold'>Realizar Compra</h1>
    </div>
    
    {allProduct.map((item)=>{
      return (
    <div>
    <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
   
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" className='w-20' />
              </div>
            </div>
          </div>
        </td>
        <td>
         <p>{item.name}</p>
        </td>
        <td>{item.price}</td>
        {/* <td>No.{item.id}</td> */}
      </tr>

    </tbody>
  </table>
</div>

    </div>
  )
    })}
   
    <button className="btn btn-block bg-success" onClick={sendList}>Enviar Pedido</button>
   
    
    </div>

  
    </>
  )
}
