//Nota Importante -> el local storage solo almacena string
/**por ejemplo para guardar los datos
 * se `persona  se tiene que convertir a Json
 */

function guardar_localstorage() {
    let persona = {
        nombre: "Jhordan Andres",
        telefono: "3113636333",
        edad: 25,
        estado: {
            alturra: 1.75,
            peso: "45kilos"
        }
    }
    let profesion = "Estudiante  de ingeniria del sistemas";

    localStorage.setItem("profesion", profesion)
    localStorage.setItem("persona", JSON.stringify(persona))
    
}

// si quiere ver llamamos la funcion 
//guardar_localstorage();


/*** Obtener la información de local storage -> 
 *  es bueno tener encuenta controlarlo
 */

function obtener_localStorage() {

    if (localStorage.getItem("profesion")) {
        //   se que exite este nombre
        let nombre = localStorage.getItem("profesion")
        console.log(nombre);
    } else {
        console.log("No hay informacón en el local Storage");
    }


    //*********** seginda parte:  **************** */



    if (localStorage.getItem("persona")) {
        let persona = JSON.parse(localStorage.getItem("persona")
        );
        console.log(persona);
        console.log(persona.edad);
    } else {
        console.log("No hay informacón en el local Storage");
    }
}

obtener_localStorage()