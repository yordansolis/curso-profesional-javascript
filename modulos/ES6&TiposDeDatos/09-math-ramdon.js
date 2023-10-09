// Math es un objeto que tieen sus propiedades en javascript 
// su propiedad de matematicas javascript

console.log(Math);

let x;

let num= 9;
x = Math.sqrt(num);//sqrt obtiene la raiz  cuadrada
console.log(`raiz ${num}:`, x); //3










console.log('Siguiente----- Rount');

// redondea un número al entero más CERCANO. Si la parte decimal es 0.5 o mayor, el número se redondea al siguiente entero superior
num = 5.4;
x = Math.round(num); 
console.log(`round ${num}:`, x); // Resultado: 5


num = 5.6;
x = Math.round(num); 
console.log(`round ${num}:`, x); // Resultado: 6










console.log('Siguiente----- ceil');

// Redondea un número siempre hacia arriba 
num = 5.1;
x = Math.ceil(num); 
console.log(`round ${num}:`, x); // Resultado: 6


num = 5.9;
x = Math.ceil(num); 
console.log(`round ${num}:`, x); // Resultado: 6


console.log('-- fin---');










console.log('Siguiente----- floor');
//esta vez siempre hacia abajo al entero más cercano.
x = Math.floor(5.9)
console.log(x); 
x = Math.floor(4.999); // Resultado: 4
console.log(x); 



console.log('-- fin---');





x = Math.min(10, 5, 3)
console.log(x);



x = Math.random();
console.log(x);


let y = Math.floor((Math.random() * 10 + 1));

console.log(y);