const  $clasList = document.querySelector(".clasList")

console.log($clasList);

let frutas = ['Manzana', 'Pera', 'Uva', 'Limon']

let fragment = new DocumentFragment()

frutas.forEach(function (fruta){
    let li = document.createElement('li')
    li.innerHTML = fruta
    fragment.appendChild(li)
})


$clasList.appendChild(fragment)




let datos = [  
    { 
    "id" : 1,
    "nombre" : "jordan",
    "correo" : "jordan@example.com"
    },
    { 
    "id" : 2,
    "nombre" : "pepe",
    "correo" : "pepe@example.com"
    },
    { 
    "id" : 3,
    "nombre" : "pablo",
    "correo" : "pablo@example.com"
    }
];

console.log(datos);
console.log(datos[1]["nombre"]);
console.log(datos[2]);


const $personas = document.querySelector(".lista-personas");

//console.log($personas);
console.log("----------");

datos.forEach(function (personas) {
    const lisP = document.createElement("p");
    console.log(personas.id);
    lisP.innerHTML = personas.id + " " + personas.nombre +" " + personas.correo
    
    fragment.appendChild(lisP)
})

$personas.appendChild(fragment)














