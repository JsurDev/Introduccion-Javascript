const boton1 = document.getElementById('boton1');
const primerCaja = document.querySelector('.caja');

boton1.addEventListener('click', () => {
    primerCaja.classList.toggle('activa');
});