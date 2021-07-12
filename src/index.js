import cipher from './cipher.js';
// elegir los elementos que usare del html
document.getElementById('offset').focus();

const btnLimpiar = document.getElementById('btnLimpiar');
btnLimpiar.addEventListener('click', () => {
  document.getElementById('offset').value = '';
  document.getElementById('mensaje').value = '';
  document.getElementById('mensajeResultado').value = '';
  document.getElementById('offset').focus();
});

const btnCifrar = document.getElementById('btnCifrar');
btnCifrar.addEventListener('click', () => {
  const offset = document.getElementById('offset').value;
  const frase = document.getElementById('mensaje').value;
  /* if(cipher.validar(offset)){
        alert("Ingrese un número");
    }else{
        let resultado = (cipher.encode(offset,frase));
        document.getElementById('mensajeResultado').value = resultado;
    } */
  // llama a la función encode y le envia parámetros(offset y frase)
  const resultado = (cipher.encode(offset, frase));
  document.getElementById('mensajeResultado').value = resultado;
});

const btnDescifrar = document.getElementById('btnDescifrar');
btnDescifrar.addEventListener('click', () => {
  const offset = document.getElementById('offset').value;
  const frase = document.getElementById('mensaje').value;
  // llama a la función decode y le envia parámetros(offset y frase)
  const resultado = (cipher.decode(offset, frase));
  document.getElementById('mensajeResultado').value = resultado;
});
