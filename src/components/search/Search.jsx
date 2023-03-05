import React,{useState} from 'react'
import { useGlobalContext } from '../../provider/DataProvider';

export default function Search() {
    const {dataProduct, setDataProduct, Search,setSearch } = useGlobalContext()

    const handleInput = (e) => {
      filtrar(e.target.value)
    }
    const filtrar = (terminoBusqueda) => {
      let resultadoBusqueda = dataProduct.filter((element) => {
        if (
          element.name
            .toString()
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase())
            || element.type.toString()
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase())
        ) {
          return element
        }
      })
      setDataProduct(resultadoBusqueda)
    }


    return (
    <div>
       <div className='flex justify-center mt-5'>
    <input type="text" placeholder="Buscar" onChange={handleInput} className="input input-bordered input-accent w-full max-w-xs" />
  </div>
    </div>
  )
}
