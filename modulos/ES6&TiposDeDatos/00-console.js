console.log('Hello word'); 

console.table({'welcome': 'I love javascript'})


console.error('Ocurrio un error!');


console.warn('Albertencia');


console.info('informacion');




// para recorrer  por console.
for(i=0; i<5; i++){
    console.count()
  } 



  // Para emular cuando dura el codigo en ejecución:
console.time()
setTimeout(() => {
  console.timeEnd()
}, 5000)


// group
console.log('No estoy en un grupo')

console.group()
console.log('Estoy en un grupo')
console.log('También estoy en un grupo')
console.groupEnd()

console.log('No estoy en un grupo')