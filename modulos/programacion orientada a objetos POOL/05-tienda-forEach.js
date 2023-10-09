
function contador(params) {
    let signo = Math.sign(params);
    
    let camisa = 60

    if (signo === 1) {
        let cuenta =0;
             // camisa params
        console.log(camisa  + params);
    }else if (signo === -1) {
        camisa = params
        console.log(" -  ", camisa );
    }



}



function cargarArticulos(valor) {

    contador(valor)
    console.log("valores" +valor);
}

let comprar = [10, 20, 30]
comprar.forEach(valores => { 
    cargarArticulos(valores)
})
