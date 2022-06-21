import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductos } from '../../mocks/ApiNba'



const ItemDetailContainer = () => {

    const [unProducto, setUnProducto] = useState([])

    useEffect(() => {
        getProductos
            .then((res) => setUnProducto(res))
            .catch((error) => console.log(error))

    }, [])



   return (
        <>
            <ItemDetail item={unProducto} />
        </>
    )


}

export default ItemDetailContainer