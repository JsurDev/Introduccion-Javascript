/**
    for...in: Camina sobre la estructura (los nombres de las etiquetas)
 */

const serie = {
    titulo: "Stranger Things",
    anio: 2016,
    genero: "Sci-Fi",
    calificacion: 9.5
};

for (const propiedad in serie) {
    // 'propiedad' tomará el valor de: "titulo", "anio", "genero", "calificacion"
    console.log(`${propiedad}: ${serie[propiedad]}`);
}

/**
 * Ocupar el FOR IN en un array me devolvera los indices,no el valor.
 
const nombres = ["Zulema", "Zaid"];

for (const x in nombres) {
    console.log(x); // ¡Imprimirá "0" y "1", no los nombres!
}

 */