/**
 *Nos permite obtener un Elemento en base a su atributo id
 */
const contenedor1 = document.getElementById('contenedor1');
console.log(contenedor1);

/**
 * Childre , nos permite obtener los elementos Hijo
 */

console.log(contenedor1.children);

/**
 * parentElement
 * Obtenemos el elemento padre de un elemento
 */
console.log(contenedor1.parentElement);

/**
 * getElementByTagName
 * obtenemos Coleccion de elementos
 */
const divs = document.getElementsByTagName('div');
console.log(divs);

/*getElementByClassName
Obtenemos elementos en base a su clase css
 */
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);