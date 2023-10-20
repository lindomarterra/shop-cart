import React , { useState, useEffect } from 'react'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard';

function Products() {

    const [products, setProducts]=useState([]) 

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
          setProducts(response);
        });
      }, []);

    return (
        <section style={{paddingTop:'100px'}} >

            <ProductCard/>

        </section>
    )
}

export default Products

//array vazio serve para salvar algo dentro
// use effect vai receber dois parametros, um é uma função callback
// vai executar fetchProducts e depois vai pegar a resposta. o parametro response pode ser outra palavra 
//outro é um array de dependencias, vai executar uma vez só)
//array de dependencias serve para executar uma determinada ação, pode colocar uma parametro dentro dele e ele vai executar esse parametro outra vez dentro da função ond ele esta