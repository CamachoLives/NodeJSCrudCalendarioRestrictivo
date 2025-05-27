// Con la parte de abajo traigo el paquete que esta en la parte de abajo
// El paquete es asincrono
const axios = require('axios');

const main = async() => {
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    let {data: {results}} = response;
    let characters = results.map((character) => {
        return {id: character.id,
        id: character.name
        }
    })
    console.log(characters);
}
// MAIN
main();