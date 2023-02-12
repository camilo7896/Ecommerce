import { createContext, useContext, useState } from "react";
import DataProduct from "../data/products.json"

  const GlobalContext = createContext();

  export const useGlobalContext = () => useContext(GlobalContext);

  const DataContext = ({children}) =>{
    {/*Estado de los productos */}
  const [dataProduct, setDataProduct] = useState(DataProduct);
    {/**Estado del carrito**/}
    const [allProduct, setAllproduct] = useState([]) 
  {/*Estado del contador */}
  const [count, setCount] = useState(0)
  {/*Total de productos */}
const [total, setTotal]=useState(0)
return(
  <GlobalContext.Provider value={{dataProduct, setDataProduct, allProduct, setAllproduct, count, setCount, total, setTotal}}>
  {children}
  </GlobalContext.Provider>
)
  };

  export default DataContext;