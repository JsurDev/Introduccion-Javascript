//Practicando Funciones

/*Funciones declarativas
Es la mas descriptiva.
**/

// 1. Palabra clave (function)
// 2. Nombre claro (en camelCase)
// 3. Parámetros (las variables que recibe entre paréntesis)
// 4. Bloque de código (entre llaves)
// 5. Retorno (la palabra 'return' para escupir el resultado)

function saludandoUsuario(nombre) {
    return `Hola ${nombre}, bienvenido bro' lo estas haciendo bien.`;
}
console.log(saludandoUsuario('Jesur'));

/** Ejemplo 2*/
function calcularLiquidacion(diasTrabajados, salarioDiario) {
    const total = 11 * 22.5;
    return total;
}

console.log(calcularLiquidacion());

