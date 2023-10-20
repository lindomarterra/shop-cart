import React from 'react'
import {BsSearch} from 'react-icons/bs'

function SearchBar() {
    return ( 
        <>
            <form className='ms-sm-5 ' >

                <input 
                    type='search' placeholder='products...' required 
                    style={{fontStyle:'italic', outline:'none', background:'white'}}
                    className='border-0 text-black-50 p-1 border-end '
                />

                <button type='button'
                style={{background:'white' }}
                className='border-0 bg-light p-1 ps-2 pe-2 '
                > 
                <BsSearch/> 
                
                </button>

            </form>
        </>
     )
}

export default SearchBar