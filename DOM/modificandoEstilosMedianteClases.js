/*Modificando estilos por medio de clases*/
const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList);

const agregarClase = () => {
    primeraCaja.classList.add('activa')
}

const eliminarClase = () => {
    primeraCaja.classList.remove('activa');
}

const toggleClase = () => {
    primeraCaja.classList.toggle('activa');
}


const comprobarClase = () => {
    if (primeraCaja.classList.contains('activa')) {
        console.log('La caja contiene la clase "activa"');
    } else {
        console.log('La clase no contiene la clase "activa"')
    }
}