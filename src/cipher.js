const cipher = {
  // ...
  encode:(offset,frase) =>{
    console.log(frase);
    console.log(offset);
    console.log("");
    console.log("CIFRANDO:");
    console.log("--------------------");
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
        //console.log(nuevaFrase);
        return nuevaFrase;
  },


  decode:(offset,frase) => {
    console.log(frase);
    console.log(offset);
    console.log("DESCIFRANDO:");
    console.log("--------------------");
    let indiceLetra2="";
    let nuevaFrase2="";
    for(let i=0;i<frase.length;i++){
        //obtiene el caracter en unicode y le suma el offset
        indiceLetra2=(frase.charCodeAt(i)-parseInt(offset));
        if(indiceLetra2<65){
            indiceLetra2=(91-(65-indiceLetra2))
        }
        //recibe el nuevo unicode y lo tansforma a letra
        nuevaFrase2+=String.fromCharCode(indiceLetra2);
    }
    //console.log(nuevaFrase2);
    return nuevaFrase2;
  },


};


//transformar a mensaje cifrado
export default cipher;