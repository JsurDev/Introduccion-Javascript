/* Block scope / alacance de tipo bloque
 * Pertenecen las variables declaradas con const o let dentro de un bloque{ }
 * Solo podemos acceder a ellas dentro de un bloque.
 */

const edad = 22;
if (edad >= 18) {
    const acccesoPermitido = true;
    console.log(acccesoPermitido)
}


console.log('-----------------------');

const edad2 = 20;

if (edad2 >= 20) {
    const acccesoPermitido = true;
    if (true) {
        console.log('Segundo bloque: ');
        console.log(acccesoPermitido);
    }

    const miFuncion = () => {
        console.log('Funcion : ');
        console.log(acccesoPermitido);
    };
    miFuncion();
}

