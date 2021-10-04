
// const axios = require ('axios')

// let characters = async () => {
//     let resultados = = axops-get('https://rickandmortyapi.com/api/character')
//     console.log(resultados.data);
// }

// characters();

const axios = require ('axios')

let pokemons = async () => {

    let resultados = await axios.get('https://pokeapi.co/api/v2/evolution-trigger')
    console.log(resultados.data);
}

pokemons();