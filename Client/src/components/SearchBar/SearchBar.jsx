import { useState } from "react";

export default function SearchBar(props) {
   let [id, setId] = useState (``);

   const handleChange = (evento) => {
      setId (evento.target.value)
   }

   return (
      <div>
         { <><input type='search' onChange={handleChange} value={id} />
         <button onClick={() => props.onSearch(id)}>Agregar</button></> }
      </div>
   );
}
