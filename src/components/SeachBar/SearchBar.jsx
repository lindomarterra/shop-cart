import React, { useState, useContext } from 'react'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'
import fetchProducts from  '../../api/fetchProducts'
import AppContext from '../../context/AppContext'

function SearchBar() {

    const { setProducts, setLoading }= useContext(AppContext)

    const [searchValue, setSearchValue]=useState('')

    const handleSearch=  async (event)=>{
        event.preventDefault() // não deixa carregar pagina
        setLoading(true)

        const products= await fetchProducts(searchValue)

        setProducts(products)
        setLoading(false)
        setSearchValue('')
    }

    return (
        <section>
            <form className='search-bar' onSubmit={handleSearch} >
                <input
                    type="search"
                    value={searchValue}
                    placeholder="products..."
                    className="search__input"
                    onChange={ ({ target }) => setSearchValue(target.value) }
                    required
                />
                <button type='submit' className='search__button '>
                    <BsSearch/>
                </button>

            </form>

        </section>
    )
}

export default SearchBar