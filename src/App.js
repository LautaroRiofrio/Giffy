import './App.css';
import React, {useState, useEffect} from 'react';
import GetGifs from './services/getGifs';
import Gif from './components/Gif';
import SearchBar from './components/SearchBar';


function App() {

  const [busqueda, setBusqueda] = useState("");

  const handlerOnSubmit = (nuevaBusqueda) => {
    setBusqueda(nuevaBusqueda);
  }
  const [loading, setLoading] = useState(false);
  const [gifs,setGifs] = useState([]);

  useEffect( () => {
        setLoading(true);
        GetGifs({keyword: busqueda}).then(gifs => {
          setGifs(gifs)
          setLoading(false);
        } );
  }, [busqueda] )
  

  if (loading) {
    return (<h1 className='loading' >Cargando</h1>);
  }

  return (
    <section className="App-header">
      <h1 className='titulo'>Giffy</h1>
      <h3 className='sub-titulo'>Galeria de Gifs</h3>
      <SearchBar handlerOnSubmit={handlerOnSubmit} />
      <div className='galeria' >        
        {
          gifs.map( ({id, title, url}) => <Gif key={id} title={title} url={url} id={id} /> )
        }        
      </div>
    </section>
  );
}









export default App;
