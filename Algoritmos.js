/**
 * ALGORITHM PRACTICE: Time Complexity O(n) - Linear Time
 * -----------------------------------------------------------
 * Definition: The execution time increases in direct proportion 
 * to the size of the input data (n).
 * * Key Characteristics:
 * - Usually involves a single loop (for, while) or array methods 
 * like .forEach(), .map(), or .filter().
 * 
 * - Avoids nested loops (which would result in O(n²)).
 * - If the input size doubles, the time taken also doubles.
 */

/*
//Ejercicio 1.
const peliculas = ["Stranger Things", "The Crown", "Dark", "One Piece", "The Witcher"];

function buscarPelicula(lista, objetivo) {
    // Recorremos el array de principio a fin
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === objetivo) {
            return `¡Encontrada en la posición ${i}!`;
        }
    }
    return "No está en tu lista.";
}

// Caso O(n):
const resultadoBusqueda = buscarPelicula(peliculas, "One Piece");
console.log(resultadoBusqueda);

console.log(buscarPelicula(peliculas, "The Crown"));
*/
//Termina el ejercicio 1.


//Ejercicio 2.
// Input data: employee names for iteration
const NewHired = ['Alice', 'Bob', 'Charlie', 'Drake'];

NewHired.forEach(employee => {
    console.log(`Welcome to the team, ${employee}`);
});

//Tambien lo puedo expresar asi:

for (i = 0; i < NewHired.length; i++) {
    console.log(`Welcome to the company ${NewHired[i]}`);
}



//Ejercicio 3.
//Tienes un array con los precios base de varios productos. 
//Crea una función que use .forEach() para calcular el 
// precio final de cada uno sumándole el 13% de IVA.
//  Imprime cada precio final en la consola.


//Price array.
const pricProdut = [10, 20, 30, 40, 50];

for (let i = 0; i < pricProdut.length; i++) {
    const finalPrice = 1.13 * pricProdut[i];
    console.log(`The final pric will be: ${finalPrice.toFixed(2)}`);
}


//Ejercicio 4.
//Tienes una lista de nombres de usuario. 
//Crea una función que recorra el array y 
// solo imprima en pantalla aquellos nombres que 
// tengan más de 6 caracteres (los que son "seguros").

const listaNombres = ['Alejandro', 'David', 'Michael', 'Noe', 'Maximiliano', 'Donald'];

listaNombres.forEach(empleado => {
    if (empleado.length > 6) {
        console.log(empleado);
    }
});

//Ejercicio 5.
//Tienes un array de precios. Crea una función que:
//Recorra el array.
//Si el precio es mayor a 20, 
//aplícale un "descuento de lealtad" del 10% (multiplica por 0.90).
//A ese resultado, súmale el 13% de IVA (multiplica por 1.13).
//Muestra el resultado final con .toFixed(2).

const misPrecios = [15, 25, 10, 45];

let precioFinal = 0;
misPrecios.forEach(precio => {
    if (precio < 20) {
        precioFinal = precio * 1.13;

    } else {
        precioFinal = precio * 0.90 * 1.13;
    }

    console.log(precioFinal.toFixed(2));
});

