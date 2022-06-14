import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../mocks/ApiNba'




const ItemListContainer = () =>{

    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false) 
    
    useEffect(() => {
        setCargando(true)
        getProductos
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error))
        .finally(() => setCargando(false))
        
    }, [])
    

    return (
        <>
         {cargando ? <p>Cargando... </p> : <ItemList listaProductos={listaProductos} />}
       
        </>
    )
}

export default ItemListContainer