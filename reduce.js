// Now we will learn about the .reduce with the manipulate's arrays

let ages = [20,18,18,20,44,44,35,18,18,20,44];

let result = ages.reduce((contador, age) => {
    if (!contador[age]) {
        contador[age] = 1
    }else{
        contador[age] += 1
    }
    return contador
},{})

console.log("Array --> ", ages );
console.log("Resultado --> ", result );