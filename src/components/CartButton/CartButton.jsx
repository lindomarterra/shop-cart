import React from 'react'
import {BsCart3} from 'react-icons/bs'

function CartButton() {
    return ( 
        <>

            <button 
            style={{fontSize:'1.5rem', color:'#222'}}
            className='border-0 bg-transparent position-relative  '
            >
                <BsCart3/>

                <span 
                style={{fontSize:'11px', width:'18px', height:'18px', borderRadius:'18px' }}
                className='bg-danger p-2 text-white position-absolute top-0 end-0 d-flex justify-content-center align-items-center ' >
                    3
                </span>

            </button>

            

        </>
    )
}

export default CartButton




