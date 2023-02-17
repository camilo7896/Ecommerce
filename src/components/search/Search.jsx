import React,{useState} from 'react'
import { useGlobalContext } from '../../provider/DataProvider';

export default function Search() {
    const {dataProduct, setDataProduct } = useGlobalContext()

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

      const filteredData = dataProduct.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

    return (
    <div>
       <div className='flex justify-center mt-5'>
    <input type="text" placeholder="Buscar" onChange={handleSearch} className="input input-bordered input-accent w-full max-w-xs" />
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
    </div>
  )
}
