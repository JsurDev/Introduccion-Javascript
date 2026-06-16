/*
  map() = accepts a callback and applies that fuction
  to each element of an array, then return a new array
*/

//declaramos el arreglo
const numeros = [1, 2, 3, 4, 5, 6];

//almaceno en un nuero arreglo
const alCuadrado = numeros.map(cuadrado);
const alCubo = numeros.map(cubo);

//al cuadrado
function cuadrado(elementos) {
  return Math.pow(elementos, 2);
}

//al Cubo
function cubo(elementos) {
  return Math.pow(elementos, 3);
}

//imprimimos
console.log(alCuadrado);
console.log(alCubo);


//Ejercicio 2.

//Arreglo de estudiantes
const students = ["Ben", "Mia", "Leo", "Ava", "Jax"];

//nuevo arreglo
const mayusculasStudents = students.map(upperCase);

function upperCase(nombresStudents) {
  return nombresStudents.toUpperCase()
}

console.log(mayusculasStudents);
console.log("-----------------------")

//Ejercicio 3.
//Dar formato a fechas

const fechas = ["2026-1-10", "2026-5-1", "2026-2-28"];

//new array
const nuevoFormatoFechas = fechas.map(formatoFechas);

//imprimimos el nuevo formato
console.log(nuevoFormatoFechas);


function formatoFechas(fecha) {
  const partes = fecha.split("-");
  return `${partes[1]}/${partes[2]}/${partes[0]}`;
}