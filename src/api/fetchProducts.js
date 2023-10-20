const fetchProducts= async (query)=>{

    const response= await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    const data= await response.json()
    return data.results
}

export default fetchProducts

// quando usar uma api externa necessita de async await
// vai rececer uma consulta query que vem do input
// results é a chave que foi selecionada dentro da lista de array da api do mercado livre