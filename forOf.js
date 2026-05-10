/* 
Practica sencilla , comprendiendo el for...of
Aqui no se ocupa un contador que se acumule.
-----------------------------------------------
Mostrando los precios en oferta menores $20.00
 */

const precios = [15.99, 25.50, 10.00, 45.00, 12.75, 5.00, 30.20];

const preciosOferta = [];

for (const p of precios) {
    if (p < 20) {
        preciosOferta.push(p - 1.00);
    }
}