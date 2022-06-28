import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductos } from '../../mocks/ApiNba'



const ItemDetailContainer = () => {

    const [unProducto, setUnProducto] = useState([])
    const {id} = useParams();

    useEffect(() => {
       
        getProductos
        
        .then(data => setUnProducto(data.find(item => item.id === parseInt(id))))
        .catch(err => console.log(err))
    }, []) 
    
    return (
        <>
            <ItemDetail item={unProducto} />
        </>
    )


}

export default ItemDetailContainer