const cipher = {
  /*validar:(offset)=>{
    let esNumero=true;
    offset=offset.charCodeAt(0);
      if(offset>=48 && offset<=57){
        esNumero=false;
      }
    return esNumero;
  },*/
  encode:(offset,frase) =>{
    //if((offset.charCodeAt(0))>=48 && (offset.charCodeAt(0))<=57){
    if(isNaN(offset) || offset == null || offset == 0 || Array.isArray(frase)) {
     throw new TypeError('Numero no valido'); 
    } 
    //else {
      //try{
    let nuevaFrase="";
      for(let i=0;i<frase.length;i++){
              //obtiene el caracter en unicode
            let indiceLetra=frase.charCodeAt(i);
              
          if(indiceLetra>=65 && indiceLetra<=90){
              //letras mayusculas (A=65) y (Z=90)
              if(offset>0){
                  //aplicando formula cifrado cesar si el offset es positivo
                indiceLetra=((indiceLetra-65+parseInt(offset))%26+65);
              }
              else{
                  //aplicando formula cifrado cesar si el offset es negativo
                indiceLetra=((indiceLetra-90+parseInt(offset))%26+90);
              }
              //retornando la nueva letra de acuerdo la nueva posicion
            nuevaFrase+=String.fromCharCode(indiceLetra);
          }
            
          else if(indiceLetra>=97 && indiceLetra<=122){
              //letras minusculas (a=97) y (z=122)
              if(offset>0){
                  //aplicando formula cifrado cesar si el offset es positivo
                indiceLetra=((indiceLetra-97+parseInt(offset))%26+97);
              }
              else{
                  //aplicando formula cifrado cesar si el offset es negativo
                indiceLetra=((indiceLetra-122+parseInt(offset))%26+122);
              }
              //retornando la nueva letra de acuerdo la nueva posicion
            nuevaFrase+=String.fromCharCode(indiceLetra);
          }
            
          else if(indiceLetra>=32 && indiceLetra<=64){
              //caracteres especiales (espacio=32) y (@=64)
              if(offset>0){
                  //aplicando formula cifrado cesar si el offset es positivo
                indiceLetra=((indiceLetra-32+parseInt(offset))%33+32);
              }
              else{
                  //aplicando formula cifrado cesar si el offset es negativo
                indiceLetra=((indiceLetra-64+parseInt(offset))%33+64);
              }
              //retornando la nueva letra de acuerdo la nueva posicion
            nuevaFrase+=String.fromCharCode(indiceLetra);
          }
      }
      return nuevaFrase;
      //}
      /*}catch(e){
        throw new TypeError(e.message); 
      }*/
   // }
  },

  decode:(offset,frase) => {
    if(isNaN(offset) || offset == null || offset == 0 || Array.isArray(frase)) {
      throw new TypeError('Numero no valido'); 
    }
    let nuevaFrase="";
      for(let i=0;i<frase.length;i++){
              //obtiene el caracter en unicode
            let indiceLetra=frase.charCodeAt(i);
              
          if(indiceLetra>=65 && indiceLetra<=90){
              //letras mayusculas (A=65) y (Z=90)
              if(offset>0){
                  //aplicando formula cifrado cesar si el offset es positivo
                indiceLetra=((indiceLetra-90-parseInt(offset))%26+90);
              }
              else{
                  //aplicando formula cifrado cesar si el offset es negativo
                indiceLetra=((indiceLetra-65-parseInt(offset))%26+65);
              }
              //retornando la nueva letra de acuerdo la nueva posicion
            nuevaFrase+=String.fromCharCode(indiceLetra);
          }
              
          else if(indiceLetra>=97 && indiceLetra<=122){
              //letras minusculas (a=97) y (z=122)
              if(offset>0){
                  //aplicando formula cifrado cesar si el offset es positivo
                indiceLetra=((indiceLetra-122-parseInt(offset))%26+122);
              }
              else{
                  //aplicando formula cifrado cesar si el offset es negativo
                indiceLetra=((indiceLetra-97-parseInt(offset))%26+97);
              }
              //retornando la nueva letra de acuerdo la nueva posicion
            nuevaFrase+=String.fromCharCode(indiceLetra);
          }
              
          else if(indiceLetra>=32 && indiceLetra<=64){
              //caracteres especiales (espacio=32) y (@=64)
              if(offset>0){
                  //aplicando formula cifrado cesar si el offset es positivo
                indiceLetra=((indiceLetra-64-parseInt(offset))%33+64);
              }
              else{
                  //aplicando formula cifrado cesar si el offset es negativo
                indiceLetra=((indiceLetra-32-parseInt(offset))%33+32);
              }
              //retornando la nueva letra de acuerdo la nueva posicion
            nuevaFrase+=String.fromCharCode(indiceLetra);
          }
      }
      return nuevaFrase;
  },

};

//envía todo lo que esta dentro de cipher 
export default cipher;