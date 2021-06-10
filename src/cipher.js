const cipher = {
  
  /*validar:(offset)=>{
     offset=offset.charCodeAt(0);
    if(offset>=48 && offset<=57){
      cipher.encode;
      console.log("es number")
    }
    else{
      console.log("no es number")
    }
  },*/
  encode:(offset,frase) =>{
    /*let indiceLetra="";
    let nuevaFrase="";
    for(let i=0;i<frase.length;i++){
      //obtiene el caracter en unicode y le suma el offset
      indiceLetra=(frase.charCodeAt(i)+parseInt(offset));
        if(indiceLetra>90){
            indiceLetra=(indiceLetra-90)+64;
        }
      //recibe el nuevo unicode y lo tansforma a letra
      nuevaFrase+=String.fromCharCode(indiceLetra);
    }
    return nuevaFrase;*/
   
      
    
    let nuevaFrase="";
      for(let i=0;i<frase.length;i++){
          let indiceLetra=frase.charCodeAt(i);
        if(indiceLetra>=65 && indiceLetra<=90){
          indiceLetra=((indiceLetra-65+parseInt(offset))%26+65);
          nuevaFrase+=String.fromCharCode(indiceLetra);
        }
        else if(indiceLetra>=97 && indiceLetra<=122){
          indiceLetra=((indiceLetra-97+parseInt(offset))%26+97);
          nuevaFrase+=String.fromCharCode(indiceLetra);
        }
        else if(indiceLetra>=32 && indiceLetra<=64){
          indiceLetra=((indiceLetra-32+parseInt(offset))%33+32);
          nuevaFrase+=String.fromCharCode(indiceLetra);
        }
      
      }
      return nuevaFrase;
    
  },

  decode:(offset,frase) => {
    /*let indiceLetra="";
    let nuevaFrase="";
    for(let i=0;i<frase.length;i++){
      //obtiene el caracter en unicode y le suma el offset
      indiceLetra=(frase.charCodeAt(i)-parseInt(offset));
        if(indiceLetra<65){
            indiceLetra=(91-(65-indiceLetra))
        }
      //recibe el nuevo unicode y lo tansforma a letra
      nuevaFrase+=String.fromCharCode(indiceLetra);
    }
    return nuevaFrase;*/
    let nuevaFrase="";
      for(let i=0;i<frase.length;i++){
          let indiceLetra=frase.charCodeAt(i);
        if(indiceLetra>=65 && indiceLetra<=90){
          indiceLetra=((indiceLetra+65-parseInt(offset))%26+65);
          nuevaFrase+=String.fromCharCode(indiceLetra);
        }
        else if(indiceLetra>=97 && indiceLetra<=122){
          indiceLetra=((indiceLetra+97+parseInt(offset))%26+97);
          nuevaFrase+=String.fromCharCode(indiceLetra);
        }
        else if(indiceLetra>=32 && indiceLetra<=64){
          
          nuevaFrase=frase;
        }
      
      }
      return nuevaFrase;
  },

};

//envía todo lo que esta dentro de cipher 
export default cipher;