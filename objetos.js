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