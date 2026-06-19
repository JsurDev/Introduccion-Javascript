const eliminarCaja = () => {
    const padre = document.getElementById('contenedor1');
    const cajaEliminar = padre.querySelector('.caja');
    if (cajaEliminar) {
        padre.removeChild(cajaEliminar);
    }
};

const eliminarCaja2 = () => {
    const eCaja2 = document.querySelector('#contenedor2 .caja2');
    if (eCaja2) {
        eCaja2.remove();
    }
};