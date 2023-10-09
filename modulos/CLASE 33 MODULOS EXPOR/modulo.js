/** imprimir los numeros del 50  al 100 
//CICLO WHILE
nota se debe tener referencia que del ciclo WHILE solo se usa cuando necesitamos que el codigo por lo menos cumpla una condicion 

let x = 50;
   while (x <= 100) {
  console.log(x);
     // debe llevar este acumulador 
     x = x + 1;
 }
 */
 /** Imprimir los números del -50 al 0.
 let j = -50;
 j inicia en -50 y cuando, j sea menor o igual a 0 se pare 
 while(j <= 0){
  console.log(j); 
  j = j + 1;
}
 */

/** ACUMULULADOR  el acumulador nos sirve para guardar la ferencia de un valor 
 * Problema: Desarrollar un funcion que permita la carga de 5
 *  valores por teclado y nos muestre posteriormente la suma.

const miSuma = (numero) =>{
  // se debe inicilizar la x en 1
  let x=1;
  let acumulador=0, valor;  
 while(x <= numero ){
  valor = parseInt(prompt('Ingrese valor:'));
  acumulador = acumulador + valor;
  x = x + 1; 
 }
 console.log("la suma es: " + acumulador);
}

let obj = prompt("Ingrese valor"); 
miSuma(obj);
 */

      //21	Clase Array   ejercicios para mejorar mi logica de programacion 
      //https://www.tutorialesprogramacionya.com/javascriptya/index.php?inicio=20

/**6) Programa una función para contar el número de veces
 *  que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

     /* const  miFuncion = (cadena, elemento)=>{
        let arrayi = cadena.split(" ");
        let arrayj = elemento.split(" ");
        let contador=0;
        for(let i = 0; i < arrayi.length; i++){
          //console.log(arrayi[i]);
          for(let j = 0; j< arrayj.length; j++){
            console.log(arrayj[j]+ " " +  arrayi[i]);
            if(arrayj[j] === arrayi[i]){
              console.log("se repiten");
              contador++;
                }
               }          
              }
              return contador;
           }


    miFuncion("hola mundo adios mundo", "mundo");*/

/*

    const  miFuncion = (cadena, elemento)=>{
    let text = cadena.split(" ");
    var contador = 0;
      for(let i = 0; i < text.length; i++){
    console.log(text[i]  + " "+ elemento)
          if(text[i] === elemento){
            //console.log("se repiten");
            contador++;
              }   
              
            }
            return contador;   
         }


  miFuncion("hola mundo adios mundo", "mundo");

*/
/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/
/*
 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.


/*
cadena = "Para más información, vea Capítulo 3.4.5.1";
expresion = /(\d+(\.\d)*)/i;
hallado = cadena.match(expresion);
console.log(hallado);
*/





/*) 
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
 */
const calculaAno = (fecha = undefined )=>{
  if(fecha === undefined )return console.warn(`el año se puede convertir`);
 if(!(fecha instanceof Date))return console.warn(`el valor ingresado no es valido`);
 let hoyMenosFecha = new Date().getTime() - fecha.getTime(), aniosEnMs = 1000 * 60 * 60 * 24 * 365
 anosHumanos = Math.floor(hoyMenosFecha/ aniosEnMs); 
 
   return (Math.sign(anosHumanos) === -1 )
   ?console.info(`faltan ${Math.abs(anosHumanos)}  años para ${fecha.getFullYear()}`)
 :(Math.sign(anosHumanos) === 1)
   ?console.info(`Han pasado ${anosHumanos}  años desde ${fecha.getFullYear()}.`)
   :console.info(`estamos en el  años actual ${fecha.getFullYear()}`)
    
         
      }
   
 calculaAno();
 calculaAno(false);
 calculaAno({});
 calculaAno(new Date());
 calculaAno(new Date(1997,9,12));
 
 