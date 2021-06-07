import cipher from './cipher.js';
//elegir los elementos que usare del html

document.getElementById('offset').focus();

const btnLimpiar = document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click', () => {
    document.getElementById('offset').value ="";
    document.getElementById('mensaje').value ="";
    document.getElementById('mensajeResultado').value ="";
    document.getElementById('offset').focus();
});

const btnCifrar = document.getElementById('btnCifrar');
btnCifrar.addEventListener('click', () => {
   
    let offset =document.getElementById('offset').value;    
    let frase=document.getElementById('mensaje').value;
    
    let resultado = (cipher.encode(offset,frase));

    document.getElementById('mensajeResultado').value = resultado;
});

const btnDescifrar = document.getElementById('btnDescifrar');
btnDescifrar.addEventListener('click', () => {
   
    let offset =document.getElementById('offset').value;    
    let frase=document.getElementById('mensaje').value;
    
    let resultado = (cipher.decode(offset,frase));

    document.getElementById('mensajeResultado').value = resultado;
});