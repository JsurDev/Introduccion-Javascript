const saludo = "Practicando Arreglos...";
console.log(saludo);

const arreglo = ['Texto', 456.10, false, { propiedad: 'valor' }]
console.log(arreglo);

const arreglo2 = ['Jsur1', 'Jsur2', 'Jsur3'];
console.log(arreglo2[0]);

const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Verde';
colores[3] = 'Amarillo';
colores[3] = 'Azul'; /*sobreescribimos*/

console.log(colores);
console.log('El arreglo colores tiene: ' + colores.length + ' elementos')

colores.push('Blanco');
console.log(colores)
console.log('El color que agregamos con la funcion Push , fue: ' + colores[4]);



/*1.Ejercicio para comprender mejor*/

// 1. Crea un arreglo llamado 'tareas' con 3 tareas iniciales (ej: 'Comprar café')
const tareas = ['Despertar', 'Desayunar', 'Estudiar']; //

// 2. Agrega una nueva tarea al FINAL usando el método que ya conoces
// Tu código aquí:
tareas.push('Practicar');

// 3. Agrega una nueva tarea al PRINCIPIO del arreglo.
// Tu código aquí:
tareas.unshift('Apagar alarma');

// 4. Muestra en consola el siguiente mensaje usando la propiedad length:
//console.log('Tiens un todal de ' + tareas.length + ' pendientes para este dia.');
console.log(`Tienes un total de ${tareas.length} tareas por hacer este dia.`);

// 5. Elimina la última tarea del arreglo.
tareas.pop()

//mostramos lo que quedo del ejercicio
console.log(tareas);
//Termina el Ejercicio


//**/ */
/*1.Ejercicio para comprender mejor*/
const herramientas = ['Martillo', 'Taladro', 'Sierra', 'Cinta métrica'];

// 1. ¿En qué índice está la 'Sierra'?
const pSierra = herramientas.indexOf('Sierra');
//console.log(herramientas.indexOf('Sierra'));

// 2. ¿Existe un 'Destornillador' en el arreglo?
const existeDestornillador = herramientas.includes('Destornillador');
//console.log(herramientas.includes('Destornillador'));

//Mejor explicado
console.log(`En otras palabras,la sierra esta en el indice #${pSierra}`);
console.log(`Existe un Destornillador? R:${existeDestornillador}`);

/*
3.Ejercicio Final.

Ahora que ya sabes buscar, vamos a intentar modificar un arreglo basándonos en una búsqueda. Este es un patrón que usarás muchísimo cuando crees aplicaciones reales.
Tu misión:

1.Tienes una lista de compras.
2.Encuentra la posición de los 'Clavos'.
3.Usa esa posición para cambiar 'Clavos' por 'Tornillos'.
*/

const ferreteria = ['Pintura', 'Clavos', 'Brocha', 'Lija'];

// 1. Encuentra el índice de 'Clavos' y guárdalo en una constante
const posClavo = ferreteria.indexOf('Clavos');
console.log(ferreteria.indexOf('Clavos'));//Solo para ver la posicion

// 2. Usa ese índice para cambiar el valor en el arreglo
ferreteria[posClavo] = 'Tornillos';

console.log(`El nuevo arreglo es el siguiente: ${ferreteria}`);