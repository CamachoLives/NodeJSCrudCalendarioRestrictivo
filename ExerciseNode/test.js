// let paquete = {
//   meta: {
//     version: "1.0",
//     autor: "Cristian"
//   },
//   contenido: {
//     frutas: ["🍎", "🍌", "🍇"],
//     verduras: ["🥦", "🥕"]
//   },
//   estado: "listo"
// }; 

// let {contenido:{verduras}} = paquete 

// console.log("Aqui las verduras --> ", verduras);

const axios = require('axios');

const main = async() => {
    let getting = await axios.get('https://rickandmortyapi.com/api/character');
    let {data:{results}} = getting;

    const characters = results.map((character) => {
            return {
                name: character.name,
                species: character.species
            }
     })
    console.log(characters);
}

main()