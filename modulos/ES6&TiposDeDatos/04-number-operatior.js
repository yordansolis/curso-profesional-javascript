// Operadores de Comparación:

// == : Igualdad (compara el valor)
// === : Igualdad estricta (compara valor y tipo de dato)
// != : Desigualdad
// !== : Desigualdad estricta
// > : Mayor que
// < : Menor que
// >= : Mayor o igual que
// <= : Menor o igual que
// Operadores Lógicos:

// && : AND lógico
// || : OR lógico
// ! : NOT lógico
// Operadores de Incremento/Decremento:

// ++ : Incremento
// -- : Decremento
// Operadores Ternarios:

// condición ? valorSiVerdadero : valorSiFalso 



const numeroEntero = 32;
const numberoDecimal = 3.14;

// operaciones basicas 

let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let division = 20 / 5;
let modulo = 15 % 4; 


//Funciones matemáticas incorporadas:

let raizCuadrada = Math.sqrt(25);
console.log('Raiz: ',raizCuadrada);

let potencia = Math.pow(2, 3)
console.log('Potencia: ',potencia);

let redondeo = Math.round(3.7);
console.log('Redonde: ', redondeo);

let maximo = Math.max(10, 20, 30);
console.log('maximo: ' ,maximo);



// Parseo de cadena a numero
let cadenaNumero = '42';
let entero = parseFloat(cadenaNumero);
console.log('Paseo: ', typeof(entero), entero);

let decimal = parseFloat("3.14");


/**
 * Javascript tiene algunas pecularidades para almacenar numeros  flotantes a la memoria y esto puede llevar a errores de precición
 */

// Numeros con problemas de precisión -> 31.830000000000002

// Representar los valores en centavos
let valor1 = 2894; // 28.94 * 100
let valor2 = 289;  // 2.89 * 100

// Realizar la suma en centavos
let sumaEnCentavos = valor1 + valor2;

// Convertir la suma de centavos a dólares y centavos
let dolares = Math.floor(sumaEnCentavos / 100); // Parte entera (dólares)

console.log('Dolares: ', dolares); // 31



// Ejemplo bueno
let val1 =  28.94;
let val2 = 2.89;
console.log(val1, " ", val2);
console.log('error.', val1 + val2);
console.log(val1 * 100, " ", val2 * 100);
console.log('ok.', (val1 * 100) + (val2 *100));
let valor = (val1 * 100) + (val2 *100);
console.log(valor / 100);

console.log('Genial ');

console.log('$' + (2095 +799) / 100 );

console.log('Items (' + (1 + 1) + ')');

