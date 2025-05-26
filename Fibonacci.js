let cousins = [2,3,5,7];
let EsPrimo = false
let EsPar   = false

let l = 1
let k = 2
let residuo
let array = []
let Fibonacci

function Validacion(value) {
    
    for (let n = 0; n < cousins.length; n++){

        console.log(value)

        y = value % cousins[n]
        x = value % 2
        
        // Primos
        if (y == 0 ? EsPrimo = true: EsPrimo = false)

        // Pares
        if(x == 0 ? EsPar = true : EsPar = false);
}

    for (let v = 0; v < value; v++){
                
        let residuo = l + k
        l = k
        k = residuo
        
        if(residuo == value ? Fibonacci = true : Fibonacci = false);

}
    console.log("El numero : ", value,
                "Es Par? :", EsPar, 
                "Es Primo? : ", EsPrimo, 
                "Es Fibonacci? :", Fibonacci)
}

console.log(Validacion(13));


