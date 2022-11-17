import React, {useState} from 'react';

export default function SearchBar({ handlerOnSubmit }){
  const [input, setInput] = useState("");

  const handlerOnChange = (e) => {
    setInput(e.target.value);
  }

  return (
      <div className='search-bar'>
        <input type="text" placeholder='Busqueda...' onChange={ handlerOnChange} onKeyDown={ e => {if (e.keyCode === 13){ handlerOnSubmit(input) }} } />
        <br></br>
        <button onClick={ () => handlerOnSubmit(input) } >BUSCAR</button>
      </div>
  )
}