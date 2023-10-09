const name = 'Jordan andres';

// cuenta el numeros de caracter
console.log(`Tiene ${name.length} caracteres...`);


// SUBSTRING-> tomará todos los caracteres desde la posición 1 en adelante
const originalString = 'Hola, mundo';
console.log(originalString.substring(1));// Esto imprimirá "ola, mundo"


//  toUpperCase use for convert of mayus
const publication = 'freeCodeCamp';

const mayusPublication = publication[0].toUpperCase()
console.log(publication, mayusPublication);


// to retrieve the full word
const palabraComplete = mayusPublication + publication.substring(1)
console.log(palabraComplete);


// Convert of upppercase
console.log(publication.toUpperCase());


// to place oration in upppercase 

const myOration = "freeCodeCamp is an awesome resource";

// Convert to matriz
const words = myOration.split(' ');

console.log('Array: ', words);

// convert the first letter to uppercase
const resulOration = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1)
}).join(" ");


//join use for spacie   
console.log(resulOration);


// INCLUDE -> for search  texto

const time = "    Anuel y baila por la noche ";

console.log(time.includes("baila"));
console.log(time.includes("jordan"));


// para quetar espacios al inicio y al final

console.log(time);
const tim = time.trim()
console.log(tim);
