import React, { Children, createContext, useContext, useState } from 'react'

const GlobalSearhContext = createContext();

export const UseSearchContext =()=> useContext(GlobalSearhContext);

export default function SearchProvider() {

    const [dataFilter, setDataFilter] = useState(1212121);
    const [searchTerm, setSearchTerm] = useState("sasa");

  return (
    <div>
    <GlobalSearhContext.Provider value={{dataFilter,setDataFilter,searchTerm,setSearchTerm}}>
        {Children}
    </GlobalSearhContext.Provider>
      
    </div>
  )
}
