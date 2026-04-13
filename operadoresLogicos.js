const nombre = 'Juan';
const edad = 19;
const entrada = false;
const permiso = true;

const permitirAcceso = edad >= 19 && entrada;
console.log(permitirAcceso);

const permitirAcceso2 = (edad >= 19 && entrada) || permiso;
console.log(permitirAcceso2);

const variable = false;
console.log(!variable);