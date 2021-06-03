import cipher from './cipher.js';
//elegir los elementos que usare del html
//console.log(cipher);

console.log(cipher.decode("hola mundo"));

console.log("probando.........");
let frase = 'ABCDef G';
let offset = 7;
console.log("Texto:");
console.log(frase);

console.log("");
console.log("CIFRANDO:");
console.log("--------------------");
let array="";
let nuevaFrase="";
for(let i=0;i<frase.length;i++){
    //obtiene el caracter en unicode y le suma el offset
    array=(frase.charCodeAt(i)+offset);
    //recibe el nuevo unicode y lo tansforma a letra
    nuevaFrase+=String.fromCharCode(array);
}
console.log(nuevaFrase);

console.log("");
console.log("DESCIFRANDO:");
console.log("--------------------");
let array2="";
let nuevaFrase2="";
for(let i=0;i<nuevaFrase.length;i++){
    //obtiene el caracter en unicode y le suma el offset
    array2=(nuevaFrase.charCodeAt(i)-offset);
    //recibe el nuevo unicode y lo tansforma a letra
    nuevaFrase2+=String.fromCharCode(array2);
}
console.log(nuevaFrase2);


