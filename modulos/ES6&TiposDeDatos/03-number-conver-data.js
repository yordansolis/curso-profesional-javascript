let amount = '3000';

// Change string to number
// forme 1:  amount = parseInt(amount);
// forme 2:  amount =  +amount;
// forme 3:  amount = Number(amount);

console.log(amount, typeof (amount));


// Change number to string

let age = 24;

age = age.toString();

console.log(age, typeof age);


// Change float to decimal

let temp = 99.5;

console.log(temp, typeof temp);

temp = parseInt(temp)

console.log(temp, typeof temp);

// Convert Boolean
temp = Boolean(temp);

console.log(temp, typeof temp);


// Nan normalmente los Nan se dan cuando hacer una operación pero no te devuelve un numero ejemplo

console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foot' / 3);
