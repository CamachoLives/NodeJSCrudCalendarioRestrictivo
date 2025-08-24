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

const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

const main = async () => {
  let getting = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = getting;

  const characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        species: character.species,
      };
    })
    .map((Valores) => Object.values(Valores).join(","))
    .join("\n");

  const cabecera = "Id,Name,Specie";
  await fs.writeFile(
    path.join(__dirname, "Datos1.csv"),
    cabecera + "\n" + characters
  );

  // console.log(path.join(__dirname,"Datos.csv"));
  // const cabecera = "Id,Name,Specie"
  // console.log(cabecera + "\n" + characters);
  // HI
};

main();
