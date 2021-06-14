Cifrado César (Laboratoria)
=============
- Este proyecto se realizó siguiendo estas consideraciones [El Proyecto](https://github.com/Laboratoria/LIM015-cipher) , lo desarrollé dentro de las primeras semanas en [Laboratoria - Sede Lima](https://www.laboratoria.la/)

- **Periodo :** 31 Mayo - 14 Junio, 2021
> En este proyecto se usó HTML, CSS y JS

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios de aceptación mínimos del proyecto](#4-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## 2. Resumen del proyecto

Esta web esta diseñada para poder cifrar/descifrar mensajes para enviar entre amigos, ya que hoy en día se habla de la privacidad y confidencialidad que muchas apps al parecer no están cumpliendo, ya que están accediendo a los mensajes enviados para así ofrecerles servicios o productos de acuerdo a lo que conversan a través de sus chats. Con el uso del cifrado y descifrado de mensajes se evitarían el ser espiados por estas empresas.

## 3. Objetivos de aprendizaje

Los objetivos en general son los siguientes, de los cuáles utilicé los que están con  ✓

### HTML y CSS

* [x] Uso de HTML semántico.
* [x] Uso de selectores de CSS.

### DOM

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [x] Manipulación dinámica del DOM.
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Manipulación de strings.
* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de bucles (for | for..in | for..of | while)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Declaración correcta de variables (const & let)

### Testing

* [x] Testeo unitario

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

## 4. Criterios de aceptación mínimos del proyecto

La página cifra/descifra este alfabeto simple (solamente mayúsculas y sin ñ):

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Definición del producto
Los usuarios que lo usarian serían los preocupados por que se vulnere su privacidad al momento de conversar con sus contactos, amigos, familiares, etc. 
Para definir como funcionaría la página hice un boceto en figma, que muestro a continuación:

En esta plantilla, plantee como quería que fuera el esquema según los requerimientos que se pedía.

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/plantilla.jpg)
> Plantilla en figma 

* Usuarios de producto: Las personas preocupadas por su confidencialidad 
* Objetivos de estos usuarios: Usar la página para cifrar/descifrar mensajes y copiarlo y pegarlo en el app de mensajería.
* Resolviendo sus problemas: De confidencialidad cuando quieren mandar mensajes que sean dificiles de traducir por la app, asi lo que envien será secreto :3

### Interfaz de usuario (UI)

La interfaz permite al usuario:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron. Aquí puedes agregar un parte para definir tu plan de acción, 
  Objetivos de Aprendizaje que vas a prioritizar este proyecto.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras
minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El
boilerplate incluye algunos tests (comentados en principio) que puedes usar como
punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del
hacker edition te invitamos a explorar también esta caso por tu cuenta.

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript puro
también conocido como Vanilla JavaScript.

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

***

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/bootcamp/tree/main/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/bootcamp/tree/main/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.net/)
   que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows
   10 o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Debes realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. 
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/) tu fork a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

### Achicando el gran problema en problemas más pequeños

Un "superpoder" que esperamos puedas desarrollar durante el bootcamp es el de definir "mini-proyectos" que te acerquen paso a paso a la solución del "gran proyecto". Es el equvalente a comenzar armando esquinas o bordes del rompecabezas/puzzle sin saber necesariamente cómo encajarán al final. Déjate llevar y explora. Estas son algunas sugerencias:

**"Mover" un valor de una caja de texto a otra**  
Crea una interfaz simple con 2 cajas de texto y un botón. Si escribo algo en la caja de texto 1 y le doy click al botón, quiero que lo que escribí se "mueva" desde la caja 1 hacia la caja 2.

Para lograr esto tendrás que aprender a: detectar un evento en el navegador (click), identificar un elemento de tu interfaz para obtener su contenido/valor (la caja de texto 1), "escribir" un valor en otro elemento de la interfaz (caja de texto 2).

**"Convertir" una letra en su código ASCII**  
Pensando en la misma interfaz anterior (2 cajas de texto y 1 botón). Quiero escribir A o B (una sola) en la caja de texto 1 y que cuando le dé click al botón, aparezca el código ASCII de la letra en la caja de texto 2.

Ahora no solamente estás "leyendo" y "escribiendo" valores en el navegador, también tendrás que "manipularlos" antes de "escribirlos".

**"Cifrar" A o B con un desplazamiento (offset) de 3**  
Cuando escriba A o B en la caja de texto 1 y le dé click al botón, quiero que apaezca la letra cifrada en la caja de texto 2. Por ejemplo, si escribo B debe aparecer E.

**"Cifrar" una letra con un desplazamiento de 30 caracteres**  
En los casos anteriores probamos con letras y con un desplazamiento que no implicaban llegar "más allá" de final del alfabeto. Ahora prueba con un caso que sí lo requiera. Por ejmplo 30 caracteres de desplazamiento. Para esto te puede ayudar el video de la sección "Recursos y temas relacionados". La fórmula no es lo importante en este proyecto, lo importante es lo que haces con la fórmula.

**"Cifrar" tres letras con un desplazamiento cuqlquiera**  
Hasta ahora hemos explorado trabajar con una sola letra pero ¿cómo haríamos si son más? Para hacerlo tendrás que aprender cómo ir cifrando letra por letra y ya estás mucho más cerca de resolver el proyecto "grande"

Fíjate que la complejidad es creciente, la clave está en definir el primer paso lo más simple y pequeño que puedas. Luego tú misma puedes ir agregando complejidad a medida que avanzas.

### Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

[Link](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

También una metodología para empezar a desarrollar tareas con JavaScript:

[![Resolución de problemas con JavaScript](http://i3.ytimg.com/vi/lYfEmhLmu7A/hqdefault.jpg)](https://www.youtube.com/watch?v=lYfEmhLmu7A)

[Link](https://www.youtube.com/watch?v=lYfEmhLmu7A)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Guía para Cifrado César](https://docs.google.com/presentation/d/e/2PACX-1vTQ7-8LZDHrT4Y6AOBN72Nkfz1eJAeseBHpcHX8BSq0aFCFoZmuMjluMeyFNgK9ISKxTz0H03yGfJiT/pub?start=false&loop=false&delayms=60000)

## 9. Checklist

Esta sección está para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria

* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] `README.md` (o otro archivo) contiene tu plan de acción - Objetivos que prioritizaste este proyecto.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.



A continuación muestro como quedó el Juego de Trivia :

En la pantalla de **BIENVENIDA**, se solicita al usuario su nombre para empezar a jugar.

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla1.jpg)
> Pantalla de **INICIO**

Una vez escriba su nombre debe darle click en **ENTRAR**

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla2.jpg)
> Pantalla de **INICIO**

En la pantalla **CATEGORIA**, se muestra el nombre del usuario a su vez, se solicita al usuario que seleccione una de las categorías. Una vez selecciona una de ellas, lo redireccionara a la sección de preguntas, de acuerdo a la categoría seleccionada.

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla3.jpg)
> Pantalla de **CATEGORIA**

En la pantalla **PREGUNTAS** , si el usuario no selecciona nada, se agota su tiempo de 10 segundos.
![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla4.jpg)
> Pantalla de **PREGUNTAS** (Aparece un timer que contabiliza un tiempo para pasar a la siguiente pregunta)

En la pantalla **PREGUNTAS** , al agotarse el tiempo pasa a la siguiente pregunta automaticamente.

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla5.jpg)
> Pantalla de **PREGUNTAS** (Aparece un timer que contabiliza un tiempo para pasar a la siguiente pregunta)

En la pantalla **PREGUNTAS** , el usuario selecciona una opción de respuesta, si esta es correcta el juego le avisará y a su vez se desactivaran todas las respuestas, debe darle click a **NEXT**.

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla6.jpg)
> Pantalla de **PREGUNTAS** (Aparece un timer que contabiliza un tiempo para pasar a la siguiente pregunta)

En la pantalla **PREGUNTAS** , el usuario selecciona una opción de respuesta, si esta es incorrecta el juego le avisará y a su vez se desactivaran todas las respuestas, debe darle click a **NEXT**.

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla7.jpg)
> Pantalla de **PREGUNTAS** (Aparece un timer que contabiliza un tiempo para pasar a la siguiente pregunta)

En la pantalla **RESULTADOS** se muestra las respuestas, e indica cuáles fueron correctas y cuáles fueron incorrectas. Asimismo, el usuario tiene la opción de volver a jugar, o finalizar el juego.

![](https://raw.githubusercontent.com/sgcm14/LIM015-trivia/master/img/doc/8.jpg)
> Pantalla de **RESULTADOS** (Al cerrar sesión, se inicia el juego nuevamente)


**Realizado por :** 

Sammy Gigi Cantoral Montejo (sgcm14)

![](https://edteam-media.s3.amazonaws.com/users/avatar/16f3b00c-18cf-43f5-af5f-f9692fa3e5f1.jpg)