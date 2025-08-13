// Vamos aprender sobre el forEach

// Creemos un arreglo
let array = [];

// array.forEach((array) => {
//     console.log(array);
// })


// Push - Shift - Pop
// let name = "Valentina"
// for(let i = 0; i <= name.length; i++ ){
//     //  Agrega un valor
//     array.push(name)
//     //  Elimina el ultimo elemento
//     array.shift(name)
//     //  Trae el ultimo elemento
//     array.pop(name)
//     // console.log("Name --> ", array[i]);
// }

// array.push(name, "Cristian")
// console.log(array);
// let x = array.pop(name)
// console.log(x)


// Vamos a utilizar .map()

let arrayNames = ["Cris","Vale","Fer","Alex"];
let age = [20,20,25,32]
// Con el index podemos agregar mas valores mapeando, obligatorio agregar el mismo nombre 
let user = arrayNames.map((name,index) =>{
    return {
        name: name,
        age: age[index]
    }
})

console.log("Arrays --> ", arrayNames,age)
console.log("Object --> ", user);


// Another form that we can do add new items into the function
let CompleteArray = [
    { name: "Carlos", age: 45 },
    { name: "Nini", age: 43},
    { name: "Andres", age: 24}
]

let userComplete = CompleteArray.map((CompleteArray) => {
    return {
        ...CompleteArray,
        Passport: "false"
    }
})

console.log("New array --> ", userComplete)


// Now we make a return that 