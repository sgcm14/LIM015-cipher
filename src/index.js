import cipher from './cipher.js';
//elegir los elementos que usare del html
//console.log(cipher);

console.log(cipher.decode("hola mundo"));

console.log("CIFRANDO");
let frase = 'ABCDef G';
let offset = 7;

console.log("Texto:");
console.log(frase);
let array="";
let nuevaFrase="";
console.log("Nuevo Texto:");
for(let i=0;i<frase.length;i++){
    //obtiene el caracter en unicode y le suma el offset
    array=(frase.charCodeAt(i)+offset);
    //recibe el nuevo unicode y lo tansforma a letra
    nuevaFrase+=String.fromCharCode(array);
    console.log(nuevaFrase);
}



