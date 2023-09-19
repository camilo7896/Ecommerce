import React, { useState } from "react";
import { useGlobalContext } from "../../provider/DataProvider";
import Swal from "sweetalert";
import Styles from "./carrito.module.css";

export default function Carrito() {
  {
    /********************************** Contexto Global **********************************/
  }
  const { allProduct, setAllproduct, total, data, setData,valorFormateado } =
    useGlobalContext();
  const { name, cel, address } = data;

  const clean =(e)=>{
    console.log('clean', e)
  }

  const handleName = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.cel]: e.target.value,
      [e.target.address]: e.target.value,
    });
  };

  const sendData = (e) => {
    e.preventDefault();
    console.log("nombres: ", e.target.value);
  };

  const sendList = () => {
    Swal("Genial!", "Se ha enviado tu producto");
    let nameProduct = allProduct.map((i) => {
      return i.name;
    });

    let message =
      "https://wa.me/573156882897?text=" +
      "Orden de " +
      "*" +
      nameProduct.length +
      " "
      +
      "Productos "+
      nameProduct+
      " "
      +
      "*" +
      " Por total de " +
      "$" +
      "*" +
      parseFloat(total) +
      "*";
    window.location.href = message;
  };

  const deleteData=()=>{
    let arr =[]
    setAllproduct(arr)
    console.log('Borrado')
  }

  return (
    <>
      <div  className={Styles.container}>
      {/* <div className={Styles.containerTotal}>
          <div className={Styles.total}>
            {total == 0 ? "" : <h1>Total = $ {total}</h1>}
          </div>
        </div> */}
      
        <div className="flex justify-center p-5 ">
          {allProduct == "" ? (
            <h1 className="text-xl font-bold">El carrito esta vacio</h1>
          ) : (
            <h1 className="text-xl font-bold">
              Tienes {allProduct.length} productos
            </h1>
          )}
         
        </div>
        <div className="flex justify-center">
        <div className={Styles.contTotal}>{allProduct.length==" "?" ":<h2>Total: {valorFormateado}</h2>} </div>
        </div>
        <div className="flex  flex-row justify-center items-center">
        <div className=" ">
          {allProduct == "" ? (
            ""
          ) : (
            <button
              type="submit"
              className="btn bg-success w-20 m-5"
              onClick={sendList}
            >
              Enviar Pedido
            </button>
          )}
        </div>
        <div className="">
        {allProduct==""?"": <button  onClick={deleteData} className="btn btn-outline w-20 m-5 btn-error">Vaciar Carrito</button>}
        </div>
        </div>
        {allProduct.map((item) => {
          const valorFormateado = item.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 });
          {}
          return (
            <div className={Styles.containerTable}>
              <div className={Styles.tabContainer}>
                <table key={item.id} className="table w-full">
                  {/* <!-- head --> */}

                  <tbody>
                    {/* <!-- row 1 --> */}
                    <tr>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item.image}
                                alt="Avatar Tailwind CSS Component"
                                className="w-20"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <div className="h-14">
                      <td>
                        <p>{item.name}</p>
                      </td>
                      </div>
                      <div className="flex justify-end">
                      <td>{valorFormateado}</td>
                      </div>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      
      </div>
      <hr />
    
    </>
  );
}
