/*This file contains practice exercises focused
 * on handling arrays of objects in JavaScript.*/

//Ejercicio 1. Procesador de Carrito de Compras.
/**
Trabajas en el sistema de facturación de una tienda tecnológica. 
Tienes un arreglo de objetos donde cada objeto 
representa un producto con su nombre y su precio base.
------------
Tu tarea es crear un script que:
1-Recorra el arreglo de productos utilizando el método .forEach()
2-Calcule un Descuento: Si el precio del producto es mayor a $20$, 
  aplícale un descuento del 10% (multiplicar por 0.90)
3-Calcule el Impuesto: A todos los productos (hayan tenido descuento o no), 
  súmales el 13% de IVA (multiplicar por 1.13)
4-Muestre el resultado: Imprime en la consola el nombre del producto
  y su precio final con el formato: 
  "Producto: [Nombre] | Precio Total: $[Precio con 2 decimales]".
 */

const carrito = [
    { nombre: "Monitor Gamer", precio: 250 },
    { nombre: "Cable USB-C", precio: 12 },
    { nombre: "Teclado Mecánico", precio: 90 },
    { nombre: "Protector de pantalla", precio: 8 }
];

carrito.forEach(producto => {
    let precioBase = producto.precio;
    let productoNombre = producto.nombre;
    let newPrice = 0;

    if (precioBase < 20) {
        newPrice = precioBase * 1.13;
    } else {
        newPrice = precioBase * 1.13 * 0.90;
    }

    console.log(`El producto es ${productoNombre} y su precio final es: ${newPrice.toFixed(2)}`)
});

