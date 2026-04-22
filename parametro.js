//Funciones con parametros

const saludo4 = (nombre = 'amigo') => {
    // 'nombre' es el parámetro. 
    // Es el recipiente que recibirá el dato.
    console.log(`Practicando ${nombre}!`);
};

// Las llamadas: Aquí envías los ARGUMENTOS
saludo4();           // Argumento: ninguno (usa el valor por defecto 'amigo')
saludo4('Joseph');    // Argumento: 'Joseph'
saludo4('Marco');     // Argumento: 'Marco'

console.log('--------------------------');

/*Multimples parametros*/
const operacion = (numero1, numero2) => {
    console.log(numero1 + numero2);
};

operacion(2000, 125);
operacion(500, 500);

console.log('--------------------------');
console.log('--------------------------');

//Funciones con If 
const operacion2 = (tipo, numero3, numero4) => {
    if (tipo === 'suma') {
        console.log(numero3 + numero4);
    } else if (tipo === 'resta') {
        console.log(numero3 - numero4)
    }
};

operacion2('suma', 100, 100);
operacion2('resta', 200, 100);