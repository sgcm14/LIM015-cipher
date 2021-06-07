import cipher from './cipher.js';
//elegir los elementos que usare del html
//console.log(cipher);

//console.log(cipher.decode("hola mundo"));





const btn = document.getElementById('btnCifrar');
btn.addEventListener('click', () => {
    let frase= "ABC";
    let offset =document.getElementById('offset').value;
    //console.log(frase);
    console.log(cipher.encode(offset,frase));
});


//de aqui a abajo es prueba
/*console.log("--------------------");
console.log("probando.........");
let frase = 'HOLAMUNDO';
let offsetPrueba = 5;
console.log("Texto:");
console.log(frase);*/



/*console.log("");
console.log("DESCIFRANDO:");
console.log("--------------------");
let indiceLetra2="";
let nuevaFrase2="";
for(let i=0;i<nuevaFrase.length;i++){
    //obtiene el caracter en unicode y le suma el offset
    indiceLetra2=(nuevaFrase.charCodeAt(i)-offsetPrueba);
    if(indiceLetra2<65){
        indiceLetra2=(91-(65-indiceLetra2))
    }
    //recibe el nuevo unicode y lo tansforma a letra
    nuevaFrase2+=String.fromCharCode(indiceLetra2);
}
console.log(nuevaFrase2);*/