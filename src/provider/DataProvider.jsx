import React, {Children, useState} from 'react'
import ProductData from '../data/products.json'

const dataContext = React.createContext();

export default function DataProvider() {

    {/*Estado de los productos */}
  const [dataProduct, setDataProduct] = useState(ProductData)

  return (
    <dataContext.Provider value={ProductData}>
        {Children}
    </dataContext.Provider>
  )
}

