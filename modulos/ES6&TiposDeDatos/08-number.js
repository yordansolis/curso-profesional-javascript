let a = 2;
let b = new Number(1);
let c = 7.19;
let d = '5.6';

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log('------');

console.log(c, c.toFixed(1)); //lo redondea a su mayor


console.log(c, parseInt(c), typeof c); // quita los decimales
console.log(parseFloat(c), typeof c);
