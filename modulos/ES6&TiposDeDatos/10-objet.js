/**
 * los objetos en javascript tiene sus funciones ejemplo: la console.log
 * es una funcion que tiene sus acciones 
 * tambien el math
 */

const product1 = {
    name: 'shirt',
    'delivery-time': '1 day',
    reting : {
        star: 4.5,
        count: 87
    },
    fun: function function1(){
        console.log('objet function');
    }
}

// Notaciones JavaScript:
// Normalmente se usa la notacion de . de un objeto por que es mas corta y mas facil de leer

console.log('1. ' ,product1);
console.log('2. ' ,product1.name);
console.log('3. ' ,product1['delivery-time']);


console.log('4. ' ,product1.reting);
console.log('5. ' ,product1.reting.star);


product1.fun();


//Convert the javascritp a Json universal.  este json universal no admite funciones
console.log('7. ' ,JSON.stringify(product1));
console.log('8. ' ,typeof JSON.stringify(product1));


// Convert the json to javascript
const jsonString = JSON.stringify(product1);
console.log('9. ' , JSON.parse(jsonString));

// almacenamiento local o localSto


const object1 = {
    message: 'Good-jordan',
    price: 5000
}

const { message , price } = object1;
console.log('10. ' ,object1);
console.log('11. ' ,message);
console.log('12. ' ,price);


const objet5 ={
    message,
    method: function function1(){
        console.log('method');
    }

}

console.log(objet5);






const myObj = {
  name: "John",
  age: 30,
  cars: [
        {name:"Ford",
         models: ["Fiesta", "Focus", "Mustang"]
        },
        {
        name:"BMW",
        models:["320", "X3", "X5"]},
        {
            name:"Fiat", 
            models:["500", "Panda"]
        }
  ]
}

console.log(myObj);


