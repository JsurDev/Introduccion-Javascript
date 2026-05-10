/**
    Operador Spread.

 */
const frutas = ['manzana', 'pera'];
const citricos = ['limón', 'naranja'];
const todas = [...frutas, ...citricos, 'mango'];

console.log(todas);


console.log('--------------');

const datosLogIn = {
    nombre: 'usuario1',
    correo: 'correo@mail.com',
    password: '123',
};

const usuario = {
    nombre: 'carlos',
    ...datosLogIn,
    edad: 25,
};

console.log(usuario);

//Destructuracion de objetos
const amigos = ['Jonas', 'Charly', 'Michael'];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(tercerAmigo);

const datos = {
    nombre: 'usuario2',
    correo: 'correo@mail.com',
    password: '123',
};

const { nombre, correo } = datos;
console.log(nombre, correo);