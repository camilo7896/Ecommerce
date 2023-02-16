import React, {useState} from 'react'
import { useGlobalContext } from '../../provider/DataProvider'
import Swal from 'sweetalert'
import  Styles  from "./carrito.module.css";


export default function Carrito() {
   {/********************************** Contexto Global **********************************/}
   const {allProduct,setAllproduct, total, data, setData} = useGlobalContext()
  const {name, cel,address}=data;

  const handleName =(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value,
      [e.target.cel]:e.target.value,
      [e.target.address]:e.target.value
    })
  };


  const sendData=(e)=>{
    e.preventDefault();
    console.log('nombres: ', e.target.value)
   
  }

   const sendList=()=>{
    Swal("Genial!", "Se ha enviado tu producto")
    let nameProduct = allProduct.map((i)=>{return( i.name)});
    let nameClient = data.map((b)=>{return(b)});
    let message = "https://wa.me/573132361040?text=" + "Orden de "+  '*'+ nameProduct +'*'+ " Por total de " + "$" + '*' + parseFloat(total)+'*'; 
    window.location.href= message;
   }
   
   console.log(data)

  return (
    <>
    <div>
    <div className={Styles.containerTotal}>
      <div className={Styles.total}>
        <h1>Total = $ {total}</h1>
      </div>
</div>
    <div className='flex justify-center p-5 '>
    {allProduct == "" ?  <h1 className='text-xl font-bold'>El carrito esta vacio</h1>:<h1 className='text-xl font-bold'>Tienes {allProduct.length} productos</h1>}

    </div>
    
    {allProduct.map((item)=>{
      return (
    <div>
    <div  className="overflow-x-auto w-full">
  <table key={item.id} className="table w-full">
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
    <hr/>
    <div className='mt-5 flex justify-center'>
    {allProduct==""? "": 
    <form className='flex justify-center flex-col' onSubmit={sendData}>
    <h2 className='text-center'>Datos de envio</h2>
    <input type="text" name='name' onChange={handleName} placeholder="Nombre" required className=" m-2 input input-bordered input-accent w-full max-w-xs" />
    <input type="text" name='cel' onChange={handleName} placeholder="Celular" required className=" m-2 input input-bordered input-accent w-full max-w-xs" />
    <input type="text" name='address' onChange={handleName} placeholder="Direccion" required className=" m-2 input input-bordered input-accent w-full max-w-xs" />

    <button type='submit' className="btn btn-block bg-success mt-10" onClick={sendList}>Enviar Pedido</button>
    </form>
    }
    </div> 
    </div>

  
    </>
  )
}
