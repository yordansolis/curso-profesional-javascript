/*** Modificadores de array */
// Configuración
const numeros = [18, 64, 99];
console.log(numeros);
numeros[0] = 45;
console.log(numeros);
console.log("---------------------------------");


const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];

  for(let i = 0; i< myArray.length; i++ ){
    console.log(myArray[i]);
  }
  console.log("-------------- forEach vs for  -------------------");
  
  myArray.forEach(valor => {
    console.log(valor);
   })
   
  console.log("---------------------------------");






//.push() toma uno o más parámetros y los "empuja" al final del arreglo.

// Configuración
const datos = [["John", 23], ["cat", 2]];
console.log(datos);

datos.forEach(valores => { 
    console.log(valores);
})
console.log("-------------------------------");
// Cambia solo el código debajo de esta línea
datos.push(["I love dog", 3]);
console.log(datos);



//.pop() elimina el último elemento de un arreglo y devuelve ese elemento
// Configuración
const myArr = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArr.pop();
// Cambia solo el código debajo de esta línea



//elimina el primer elemento
// Configuración
const valor1 = [["John", 23], ["dog", 3]];
const removedFromMyArra = valor1.shift()



//agregando elemettos
// Configuración
const valor02 = [["John", 23], ["dog", 3]];
valor02.shift();
valor02.unshift(["Paul", 35]);

// Cambia solo el código debajo de esta línea
