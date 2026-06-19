/*
Mostrando los precios en oferta menores $20.00
 */


const precios = [15.99, 25.50, 10.00, 45.00, 12.75, 5.00, 30.20];

const preciosOferta = [];

for (let precio = 0; precio < precios.length; precio++) {
    if (precios[precio] < 20) {
        const pBajo = precios[precio] - 1.00;
        preciosOferta.push(pBajo);
    }
}

console.log(`Los precios menores de $20.00 tienen $1.00 de descuento y son: ${preciosOferta}`);