const cipher = {
  
  encode:(offset,frase) =>{
    let indiceLetra="";
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
    return nuevaFrase;
  },

  decode:(offset,frase) => {
    let indiceLetra="";
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
    return nuevaFrase;
  },

};

//envía todo lo que esta dentro de cipher 
export default cipher;