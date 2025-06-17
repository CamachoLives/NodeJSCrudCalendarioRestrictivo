// Solicitamos que ingrese el numero al usuario
let number = prompt("Ingresa un número cualquiera:");

// Convertimos el numero en entero
number = parseInt(number);

// Validamos si el numero es valido
if (isNaN(number)) {
  alert("No es un número válido :/.");
} else {
  // Se valida si el número es par o impar.
  if (number % 2 === 0) {
    alert("El número ingresado" + number + " es par.");
  } else {
    alert("El número ingresado" + number + " es impar.");
  }
}



// Escribe un programa que pida un número y muestre su tabla de multiplicar del 1 al 10.

// Solicitamos que ingrese el numero al usuario
let N = prompt("Ingresa el numero de la tabla a mostrar:");
// Mostramos cual sera la tabla de multiplicar
alert("Tabla de multiplicar del -> ", N );
for (i = 0; i <= 10; i++ ){
    alert(N, " X ", i, " = ", N * i   );
};

//hOLA
//Escribe un programa que cuente del 1 al 20, pero que diga “¡Boom!” en lugar del número 13.
//Inicializamos el for hasta el numero 20
for ( x = 1; x <= 20; x++) {
    /**
     * En cada iteraccion validamos exactamente si es el numero 13
     * para hacer el Boom!, si no seguimos el conteo
     */
  if (x === 13) {
    alert("¡Boom!");
  } else {
    alert(x);
  }
}