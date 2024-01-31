import React, {useState,useEffect} from 'react'
import axios from 'axios'
import '../css/noticiasContainer.css'
import Formulario from './Formulario'
import ListaNoticias from './ListaNoticias'

const categorias = [ 'world','business', 'crime', 'domestic', 'education', 'entertainment','environment','food', 'health', 'other', 'politics', 'science', 'sports', 'technology', 'top', 'tourism']
const paises = [{nombre:'Estados Unidos',value:'us'},{nombre: 'China', value:'cn'},  {nombre:'India',value:'in'} , {nombre:'Francia',value:'fr'},{nombre:'Inglaterra',value:'en'}]
const NoticiasContainer = () => {

const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('world')
const [paisesSeleccionado, setPaisesSeleccionado] = useState('us')
const [noticias, setNoticias] = useState([])  

const VITE_REACT_APP_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

const obtenerNoticias = async () => {
  try{
    const response = await axios.get(`https://newsdata.io/api/1/news?apiKey=${VITE_REACT_APP_API_KEY}&category=${categoriaSeleccionada}&country=${paisesSeleccionado}`)
    setNoticias(response.data.results)
  }catch(error){
    console.log(error)
  }
}


useEffect(() => {
  obtenerNoticias()
}, [categoriaSeleccionada,paisesSeleccionado])

  return (
    <div className='noticias-container'>
      <Formulario categorias={categorias} paises={paises} onCategoriaChange={setCategoriaSeleccionada} onPaisChange={setPaisesSeleccionado} />
      <ListaNoticias noticias={noticias} />
    </div>
  )  
}

export default NoticiasContainer