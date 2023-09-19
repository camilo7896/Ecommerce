import React, { Children, useContext } from 'react'
import Swal from 'sweetalert'


const GlobalBtn = createContext();
const UseGlobalBtn = () => useContext(GlobalBtn)

export default function btnProvider() {

    const sendList=()=>{
        Swal("Genial!", "Se ha enviado tu producto")
        let nameProduct = allProduct.map((i)=>{return( i.name)});
        
        let message = "https://wa.me/573156882897?text=" + "Orden de "+  '*'+ nameProduct +'*'+ " Por total de " + "$" + '*' + parseFloat(total)+'*'; 
        window.location.href= message;
       }
  return (
    <div>
    <GlobalBtn.provider value={sendList}>
        {Children}
    </GlobalBtn.provider>
      
    </div>
  )
}
