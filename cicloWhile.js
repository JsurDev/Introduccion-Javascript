/**
 *Practicando Do/While
 */



//Do while: Ejecuta al menos una vez el codigo
let contadorDo = 0;

do {
    console.log("Este código se ejecuta sí o sí la primera vez");
    contadorDo++;
} while (contadorDo < 0); // La condición es falsa, pero ya se ejecutó una vez.


/*
While: se ejecuta mientras la condicino se cumpla
*/
let contadorWhile = 7;

while (contadorWhile <= 10) {
    console.log(contadorWhile);
    contadorWhile++;
}

