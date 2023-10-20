import React , {useState} from 'react'
import {BsSearch} from 'react-icons/bs'

function SearchBar() {

    const [searchValue, setSearchValue]= useState('')

    return ( 
        <>
            <form className='ms-sm-5' >

                <input 
                    type='search' 
                    placeholder='products...' 
                    required 
                    value={searchValue}
                    style={{ fontStyle:'italic', outline:'none', background:'white' }}
                    className='border-0 text-black-50 p-1 border-end '
                    onChange={({target})=>setSearchValue(target.value)}
                />

                <button type='submit'
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