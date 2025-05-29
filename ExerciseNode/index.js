// Con la parte de abajo traigo el paquete que esta en la parte de abajo
// El paquete es asincrono
const axios = require('axios');

const main = async() => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    let {data: {results}} = response;
    let characters = results.map((character) => {
        return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species
        }
    }).map((personaje) => Object.values(personaje).join(",")).join("\n");
    console.log(characters);
};
// 
main();