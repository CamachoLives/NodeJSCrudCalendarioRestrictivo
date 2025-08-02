// // Con la parte de abajo traigo el paquete que esta en la parte de abajo
// // El paquete es asincrono
// const axios = require('axios');

// const main = async() => {
//     let response = await axios.get('https://rickandmortyapi.com/api/character');
//     let {data: {results}} = response;
//     let characters = results.map((character) => {
//         return {
//             id: character.id,
//             name: character.name,
//             status: character.status,
//             species: character.species
//         }
//     }).map((personaje) => Object.values(personaje).join(",")).join("\n");
//     console.log(characters);
// };
// // MAIN
// main(); 



const characters = {
    Batman:{
        age:28,
        weight:78,
        power:"Strenght",
        color: "black"
    },
    Hulk:{
        age:25,
        weight:18,
        power:"Strenght",
        color: "Green"
    },
    Thor:{
        age:34,
        weight:28,
        power:"Flying",
        color: "blue"
    },
    Popeye:{
        age:45,
        weight:38,
        power:"Strenght",
        color: "white"
    }
} 


const resta = (x,z,CB) => {

}
const resultado = (R) => (console.log(R));

resta(9,5,resultado);

