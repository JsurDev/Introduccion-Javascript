/*
-Variables declaradas dentro de una funcion
-Solamente se accede desde dentro de la funcion.
 */

var numero = 1; //variable global.

var contandoLetras = (nombre) => {
    var numeroLetras = nombre.length;
    console.log(` ${nombre} tiene  ${numeroLetras} letras`);
};

contandoLetras('Joseph');
console.log(numero);//variable global
