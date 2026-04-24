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


/* .slice()
    Nos permite copiar una parte de un arreglo a otro.
    -1er parametro - Posicion desde donde queremos copiar.
    -2do parametro - Hasta antes de que elemento copiar.
*/

const frutas = ['Fresa', 'Naranja', 'Mango', 'Pera', 'Manzana', 'Melon'];
const frutasFav = frutas.slice(0, 3);
console.log(frutasFav);

/* .indexOf()
    Obtenemos el primer index de un elemento.
    Si no hay elementos retornara -1
*/
const nombres = [
    'Jesur',
    'Maria',
    'Carlos',
    'Ana',
    'Roberto',
    'Lucia',
    'Diego',
    'Elena',
    'Fernando',
    'Gabriela'
];

console.log(nombres.indexOf('Ana'));//Esta en la posicion 3. 
console.log(nombres.indexOf('Elena'));//Esta en la posicion 7. 
console.log(nombres.indexOf('Mark'));//-1 pues no existe.


/* .indexOf()
    Obtenemos el ultimo index de un elemento.
*/
const nombres2 = [
    'Jesur',
    'Maria',
    'Carlos',
    'Ana',
    'Roberto',
    'Lucia',
    'Diego',
    'Elena',
    'Fernando',
    'Gabriela'
];

console.log(nombres2.indexOf('Fernando'));


/* .forEach()
    Nos permite ejecutar una funcion por cada elemento.
    .forEach() sabe que debe entregar :
    1) nombre, 
    2) posicion(indice) ,
    3) Arreglo completo(opcional)
*/

nombres2.forEach((nombre) => {
    console.log(`Hola ${nombre}`);
});

console.log('---------------------');
console.log('Practicando');
console.log('---------------------');

//Aqui la palabra 'indice' podria ser reemplazado por cualquier palabra.
nombres.forEach((nom, index) => {
    console.log('Hey que tal ' + nom + ' ' + index);
});


/* .find()
    Recorre el arreglo y devuelve el PRIMER elemento que retornemos.
*/
console.log('------------------------')
console.log('Usando el metodo .find()')

nombres.find((nombre) => {
    console.log(nombre);
});

console.log('------------------------')
console.log('Otra forma: ------------');

const resultado = nombres.find((nombre) => {
    if (nombre[0] === 'J') {
        return nombre;
    }
});

console.log(resultado);

console.log(' ')
console.log(' ')
console.log(' ')
console.log(' ')
console.log(' ')

/* .map()
    Ejecuta una funcion por cada elemento y crea un nuevo
    arreglo en base a los resultados de esa funcion
*/
const animales = [
    'León',
    'Elefante',
    'Tigre',
    'Cebra',
    'Jirafa',
    'Panda',
    'Koala'
];

console.log(`Aqui estan sin mayusculas : ${animales}`)

const nombreMayuscula = animales.map((nombreAnimal) => {
    return nombreAnimal.toUpperCase();
})
console.log(`Aqui estan con mayusculas : ${nombreMayuscula}`);


/* .filter()
    Ejecuta una funcion por cada elemento y crea un nuevo
    arreglo en base a los resultados de esa funcion.
    Muestra resultados que complan con condicion.
*/

const nombres4Letras = animales.filter((nom4Ltr) => {
    if (nom4Ltr.length === 4) {
        return nom4Ltr;
    }
});

console.log(nombres4Letras); 


