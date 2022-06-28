import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getProductos } from '../../mocks/ApiNba'




const ItemListContainer = () =>{

    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando] = useState(false); 
    const {id} = useParams();
    
    useEffect(() => {
        setCargando(true)
        getProductos
        .then((res) => setListaProductos(res.filter(item => {
            if (id === undefined) return item;
            return item.category === parseInt(id)
        })))
        .catch((error) => console.log(error))
        .finally(() => setCargando(false))
        
    }, [id]);
    

    return (
        <>
         {cargando ? <p>Cargando... </p> : <ItemList listaProductos={listaProductos} />}
       
        </>
    )
}

export default ItemListContainer