const colores = ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Violeta', 'Naranja'];
const letras = ['d', 'x', 'v', 'z']

/* .length
    Propiedad que nos permite conocer la cantidad de elementos en el array.
 */
console.log(colores.length);

/* .toString()
    Transforma arreglo a cadena de texto.
    Ejemplo : Mostrarlo en el navegador.
 */
console.log(colores.toString())

/* .join()
    Transforma arreglo a cadena de texto y separa cada elemento.
 */
console.log(colores.join(' - '));


/* .sort()
    Nos permite ordenar arreglos de texto en orden alfabetico
 */
console.log(letras.sort());

/* .reverse()
    Nos permite ordenar arreglos de forma descendente
*/
console.log(letras.reverse());

/* .concat()
    Nos permite juntar dos areeglos en uno solo
*/
const arreglo1 = [1, 2, 3];
const arreglo2 = ['M', 'N', 'F'];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);

/* .push()
    Nos permite agregar un elemento al final del arreglo
*/
const arregloNum = [1, 2, 3];
console.log(arregloNum.push('7'));

/* .pop()
    Nos permite eliminar el ultimo elemento del arreglo
*/
console.log('arreglo completo: ')
const arregloPop = [1, 2, 3, 4, 5, 6];
console.log(arregloPop);
console.log('Elemento eliminado ' + arregloPop.pop());
console.log('arreglo sin el ultimo valor :');
console.log(arregloPop);


/* .shift()
    Nos permite eliminar el primer elemento del arreglo y recorre los elementos.
*/
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
console.log(dias);
console.log('Eliminamos el primer elemento ');
console.log('Elemento eliminado es: ' + dias.shift());
console.log('Arreglo sin primer elemento: ' + dias);


/* .unshift()
    Nos permite agregar un elemento al inicio del arreglo.
*/
console.log('Practicando con unshift');
dias.unshift('Dia Agregado');
console.log(dias);


/* .splice()
    Nos permite insertar elementos a un arreglo donde lo especifiquemos.
    -1er parametro : Posicion donde queremos comenzar a insertar los elementos.
    -2do parametro - Si queremos eliminar elementos del arreglo desde la posicion indicada.
    - resto elemento  - elementos a insertar.
*/

const friends = ['Joseph1', 'Josep2', 'Joseph3'];
friends.splice(0, 0, 'Aa', 'Bb');
console.log(friends);