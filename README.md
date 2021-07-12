Cifrado César (Laboratoria)
=============
- Este proyecto se realizó siguiendo estas consideraciones [El Proyecto](https://github.com/Laboratoria/LIM015-cipher) , lo desarrollé dentro de las primeras semanas en [Laboratoria - Sede Lima](https://www.laboratoria.la/)

- **Periodo :** 31 Mayo - 14 Junio, 2021
> En este proyecto se usó HTML, CSS y JS

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios que cumple el proyecto](#4-criterios-que-cumple-el-proyecto)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)


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

## 4. Criterios que cumple el proyecto

La página cifra/descifra este alfabeto simple :

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* a b c d e f g h i j k l m n o p q r s t u v w x y z
* **espacio** ! " # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @


* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Permite usar un `offset` positivo.
* [x] Permite usar un `offset` negativo.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.
* [x] Cifra/descifra mayúsculas
* [x] Cifra/descifra minúsculas
* [x] Cifra/descifra _caracteres_ (espacio, signos de exclamación, números, ...)
* [ ] Cifra/descifra _otros_ caracteres (letras tíldadas, `ñ`, `á`, ...)

### Definición del producto

#### ¿Quiénes son los principales usuarios de producto?

Los usuarios que lo usarian serían los jóvenes ya que son los más preocupados por que se vulnere su privacidad al momento de conversar con sus contactos, amigos, familiares, etc. 

#### ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?

Usar la página para cifrar/descifrar mensajes y copiarlo y pegarlo en el app de mensajería.

#### ¿Cómo el producto que estás creando está resolviendo sus problemas?

Resolveria sus problemas de confidencialidad cuando quieren mandar mensajes que sean dificiles de traducir por la app, asi lo que envien será secreto


### Interfaz de usuario (UI)

Para definir como funcionaría la página hice un boceto en figma, que muestro a continuación:

En esta plantilla, plantee como quería que fuera el esquema según los requerimientos que se pedía.

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/plantilla.jpg)
> Plantilla en figma 

La interfaz permite al usuario:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que  el cifrado desplace cada caracter (Este puede ser positivo o negativo).
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

### Implementación de la Interfaz de usuario (HTML/CSS/JS)

A continuación se muestra el funcionamiento de la página :

Aquí siempre que se recargue la página por defecto el cursor ya estará en el *offset* para facilitarle al usuario el ingreso directo del número, también se usó un input number para que pueda escoger el número con las flechitas si en caso no desea escribir el número.

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla1.jpg)
> Pantalla de **INICIO**

Una vez escriba el *offset* y el *mensaje* a cifrar/descifrar y presiono **Cifrar**

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla2.jpg)
> Pantalla de **INICIO** opción *Cifrar*

Al darle click en **Cifrar**, te devuelve el mensaje cifrado

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla3.jpg)
> Pantalla de **INICIO** opción *Cifrar*

Cuando le das click en  **Limpiar**

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla4.jpg)
> Pantalla de **INICIO** opción *Limpiar*

Al darle click en **Limpiar**, te limpia las casillas y te vuelve el cursor al offset

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla5.jpg)
> Pantalla de **INICIO** opción *Limpiar*

Una vez escriba el *offset* y el *mensaje* a cifrar/descifrar y presiono **Descifrar**

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla6.jpg)
> Pantalla de **INICIO**  opción *Descifrar*

Al darle click en **Descifrar**, te devuelve el mensaje descifrado

![](https://raw.githubusercontent.com/sgcm14/LIM015-cipher/main/src/img/pantalla7.jpg)
> Pantalla de **INICIO**  opción *Descifrar*

### Test Unitarios

Los tests unitarios tienen una cobertura del mas 70% de _statements_, _functions_,
 _lines_, y  de _branches_.

## 5. Consideraciones técnicas

La lógica del proyecto esta implementada completamente en JavaScript. En
este proyecto NO se ha usado librerías o frameworks, solo JavaScript puro
también conocido como Vanilla JavaScript.

### `src/index.html`

  Este es el punto de entrada de la aplicación. Este archivo
  contiene el _markup_ (HTML) e incluye el CSS y JavaScript necesario.

### `src/cipher.js`

  Acá se implementó el objeto `cipher`. Este objeto (`cipher`) contiene dos métodos:
  * `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  * `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.

### `src/index.js`

  Acá se escucha los eventos del DOM, invocamos `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizamos el resultado en la UI.

### `test/cipher.spec.js`

  Los tests implementados para `cipher.encode()` y `cipher.decode()`.

**Realizado por :** 

Sammy Gigi Cantoral Montejo (sgcm14)

![](https://edteam-media.s3.amazonaws.com/users/avatar/16f3b00c-18cf-43f5-af5f-f9692fa3e5f1.jpg)