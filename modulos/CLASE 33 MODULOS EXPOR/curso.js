const invertirCadena = (cad )=> {
  
    if(!cad)return console.warn("Falta contenido en la cadena"); 
    if(cad < 1 )return console.warn("Solo aceptamos cadenas"); 
  
    let nuevaCadena=''; //esta variable almacenara la cadena creada 
      for (let i = cad.length - 1; i >= 0; i--) {
          nuevaCadena += cad[i];
      }
      console.log("Cadena original " + cad);
      return "Invertida es: "+nuevaCadena;
  }
  invertirCadena(" ");
  invertirCadena("-111 ");
  invertirCadena("suma + 12  esto para Jsva scrtip es una cadena ");
  