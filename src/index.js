import cipher from './cipher.js';
//elegir los elementos que usare del html



const btnLimpiar = document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click', () => {
    document.getElementById('offset').value ="";
    document.getElementById('mensaje').value ="";
    document.getElementById('mensajeResultado').value ="";
});

const btnCifrar = document.getElementById('btnCifrar');
btnCifrar.addEventListener('click', () => {
   
    let offset =document.getElementById('offset').value;    
    let frase=document.getElementById('mensaje').value;
    
    let mensaje = (cipher.encode(offset,frase));

    document.getElementById('mensajeResultado').value = mensaje;
    
});


const btnDescifrar = document.getElementById('btnDescifrar');
btnDescifrar.addEventListener('click', () => {
   
    let offset =document.getElementById('offset').value;    
    let frase=document.getElementById('mensaje').value;
    
    let mensaje = (cipher.decode(offset,frase));

    document.getElementById('mensajeResultado').value = mensaje;
    
});