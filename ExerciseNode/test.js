let paquete = {
  meta: {
    version: "1.0",
    autor: "Cristian"
  },
  contenido: {
    frutas: ["🍎", "🍌", "🍇"],
    verduras: ["🥦", "🥕"]
  },
  estado: "listo"
}; 

let {contenido:{verduras}} = paquete 

console.log("Aqui las verduras --> ", verduras);