console.log("Paso por contact form");

// Por ahora todo tipo de dato ingresa por prompt
let myEdad = parseInt(prompt("Que edad tenes?"));

// Cual es la diferencia entre let var y const?
// entre let y var en 1 mismo archivo no hay diferencia.
// const es constante una vez definido no se puede cambiar.

const PI = 3.141592653589793; // Tambien se podria Maht.PI

const EDAD_MINIMA = 18;

let tieneEdadMinima = (myEdad >= EDAD_MINIMA); // Uso el operador > para comparar numeros
//let myValorFalse = false;

if (!tieneEdadMinima) { // if ( condition ) si la condicion es verdadera pasa sino no.
    alert("Sos Menor, no podes ingresar");
    document.location = "../index.html"; // Te vas al index.html
} else {
    alert("Bienvenido!");
}

let myInputNumber = parseInt(prompt("Ingrese un Numero"));

console.log(Math.floor(myInputNumber / 2)); // Convierte a IEEE 754 y luego toma la parte entera

console.log(myInputNumber >> 1); // Divido por dos y me quedo con el entero

console.log(myInputNumber << 1); // Multiplicar por dos 

////////////////////////////
//  Como es el 15 en binario?
//  1111 en binario
// Si lo divido / 2 esto se convierte a decimal...

// 7 en binario es 0111

// Si divido 15 / 2 ... es 7 + 1 de resto...

console.log("El resto es: " + myInputNumber % 2);

let esPar = ((myInputNumber % 2) == 0) ? true : false;

if (esPar) {
    alert("El numero elegido es Par");
}


let myMonthInput = parseInt(prompt("Ingrese el mes usando numeros del 1 al 12"));

// Es muy bueno para recorrer elementos o listas
//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
  
//}


do {
    switch (myMonthInput) {
        case 12:
        case 1:
        case 2:
            alert("Este es un mes de Verano");
            break;
        case 3:
        case 4:
        case 5:
            alert("Este es un mes de Otoño");
            break;
        case 6:
        case 7:
        case 8:
            alert("Este es un mes de Invierno");
            break;
        case 9:
        case 10:
        case 11:
            alert("Este es un mes de Primavera");
            break;
        default:
            alert("N/A");
            break;
    }
} while ( (myMonthInput!=12) ) // Como hago para combinar estos meses??  (myMonthInput!=1) (myMonthInput!=2));

