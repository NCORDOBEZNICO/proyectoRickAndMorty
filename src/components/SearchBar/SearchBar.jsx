import { useState } from 'react';
import style from './Search.module.css'

export default function SearchBar({onSearch}) {

   const [id,setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };


   return (
      <div className={style.bar}>
         <input className={style.searchInput} type='search' onChange={handleChange} />
         <button className={style.searchButton} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
