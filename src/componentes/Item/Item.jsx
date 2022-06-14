import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const Item = ({producto}) =>{
    const {name, imagen, description, stock} = producto
    return (
        <div className='card' style={{width:'18rem', margin: '.5rem'}}>
            <img src={imagen} className='car-img-top' alt={name}/>
            <div className='card-body'>
                <p className='card-text'>{name}</p>
                <p className='card-text'>{description}</p>
            </div>
            <ItemCount stock={stock} />

        </div>
    )
}

export default Item