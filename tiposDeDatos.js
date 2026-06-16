//Texto
const nombre = 'Jsur';
const parrafo = "Esto es un 'parrafo' ";

console.log(parrafo)

//Numero
const Numero1 = 4;
const Numero2 = 7;

//Boolean
const usuarioConectado1 = true;
const usuarioConectado2 = false;
const mayorQue = 1 > 2;
console.log(mayorQue);

//arrays
const arreglo = ['texto', 456, true, { propiedad: 'valor' }, [1, 10, 5]];
console.log(arreglo);

//objetos
const persona = {
    nombre: 'Jesur',
    edad: 90,
    carro: {
        marca: 'Honda',
        color: 'Negro',
    }
};
console.log(persona);
console.log(persona.carro.marca);

//Funcion
function jS() {
    console.log('Javascript');
}

jS();