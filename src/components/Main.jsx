import React, {useState} from 'react';
import usePagination from '../hooks/usePagination';
import pokemons from '../data/pokemondata';


const Main=()=>{
  const[paginatedData, nextPage, prevPage]=usePagination(pokemons,1);

  const[selectedItem, setSelectedItem]=useState(null);


  const handleSelectChange=(event)=>{
    const selectedName=event.target.value;
    const selected=pokemons.find((item)=>item.name===selectedName)
    setSelectedItem(selected);
  }
  return(
    <div>
      <select onChange={handleSelectChange}>
        <option value="">select a pokemon</option>
        {pokemons.map((item)=>(
          <option key={item.name} value={item.name}>{item.name}</option>
        ))}
      </select>

      {selectedItem && (
        <div>
          <h2>{selectedItem.name}</h2>
          <img src={selectedItem.image} alt={selectedItem.name}/>
          <p>Name: {selectedItem.name}</p>
          <p>Description: {selectedItem.description}</p>
        </div>
      )}

      {/* pagination */}
      <div>
        {paginatedData.map((item)=>(
          <div key={item.name}>
            <img src={item.image} alt={item.name}/>
            <h3>{item.name}</h3>{item.description}
          </div>
        ))}
        <button onClick={prevPage} disabled={paginatedData[0]?.name===pokemons[0]?.name}>Previous</button>
        <button onClick={nextPage} disabled={paginatedData[paginatedData.length-1]?.name===pokemons[pokemons.length-1]?.name}>Next</button>
      </div>
    </div>
  )
}
export default Main