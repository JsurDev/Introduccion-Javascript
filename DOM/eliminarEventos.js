const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const primerCaja = document.querySelector('.caja');

const toggleClase = () => {
    primerCaja.classList.toggle('activa');
};

boton1.addEventListener('click', () => {
    primerCaja.removeEventListener('click', toggleClase);
    primerCaja.addEventListener('click', toggleClase);
});

boton2.addEventListener('click', () => {
    primerCaja.removeEventListener('click', toggleClase);
})