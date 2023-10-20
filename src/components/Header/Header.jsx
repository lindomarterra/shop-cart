import React from 'react' 
import SearchBar from '../Search/SearchBar'
import CartButton from '../CartButton/CartButton'

function Header() {
    return ( 
        <header 
            style={{background:'#fff159'}}
            className='p-3 shadow-sm d-flex justify-content-between align-items-center position-fixed w-100  '
        >
            <SearchBar/>
            <CartButton/>

        </header>
    )
}

export default Header