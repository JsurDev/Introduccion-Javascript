//Practicando For//
/**
    Expresion 1.Se ejecuta una sola vez antes de comenzar con el bloque de codigo.
    Expresion 2.Condicion,si se cumple se ejecuta el bloque de codigo.
    Expresion 3.Se ejecuta siempre y despues de que se ejecute el bloque de codigo.
 */

const trendingMovies = [
    "The Last Protocol",
    "Neon Dreams",
    "Midnight in Tokyo",
    "Quantum Heist",
    "Project Lazarus",
    "Solaris Drift",
    "Echoes of Silence",
    "Beyond the Horizon",
    "The Night Agent",
    "Beef"
];

const arrayVacio = [];

for (let peli = 0; peli < trendingMovies.length; peli++) {

    const nomMayus = trendingMovies[peli].toUpperCase();
    arrayVacio.push(nomMayus);
}

console.log(arrayVacio);