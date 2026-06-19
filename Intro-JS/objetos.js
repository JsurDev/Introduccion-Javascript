//creadno un Objeto : Paquete

const paquete = {
    id: '0',
    destino: 'El Salvador',
    entrega: true,
}

//creando el arreglo Camion
const camion = [paquete];
console.log(camion)


//creando un segundo objeto dentro del metodo Camion
camion.push({ idSegOb: '0', destino: 'Mexico', entregado: 'false' });

console.log(camion);

// Cambia 'entregado' del primer paquete (índice 0) a true
camion[0].entrega = false;

//mostramos resultados


//Practica adicional -Ejercicio

const personaArreglo = ['Carlos', 27, 'correo@mail.com', true, true];

const persona = {
    nombre: 'jesur',
    edad: '25',
    correo: 'correo@mail.com',
    subscripciones: {
        web: true,
        correo: true,
    },

    coloresFavoritos: ['Negro', 'Rojo'],
    saludo: function () {
        alert('Esta es una alerta');
    },
};

console.log('---------------------');
console.log(persona.coloresFavoritos);
console.log(persona['edad']);//entre comillas

const variable = 'correo';
console.log(persona[variable]);

//Accediendo a la suscripcion
console.log(persona.subscripciones.web);

//agregando nuevo valor al objeto
persona.pais = 'Mexico';
persona.pais = 'España';
persona.city = 'Tijuana';

console.log(persona);


