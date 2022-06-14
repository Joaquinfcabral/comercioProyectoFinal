import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import '../styles/NavBar.css'

const CartWidget = () => {
    return (
        <div>
            <MdAddShoppingCart className='tamañoCarrito'></MdAddShoppingCart>
        </div>
    )
}

export default CartWidget