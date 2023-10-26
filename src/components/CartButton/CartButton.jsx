import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'  
import './CartButton.css'
import AppContext from '../../context/AppContext'


function CartButton() {

   const { cartItems, isCartVisible, setIsCartVisible } =useContext(AppContext)

    return (
        <section>

            <button 
            
            type='button'  
            className='cart__button' accordion 
            onClick={()=>setIsCartVisible(!isCartVisible)}
            >
            <AiOutlineShoppingCart/>         
            { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }

            </button>

        </section>
    )
}

export default CartButton