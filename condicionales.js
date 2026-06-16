//Condicionales- Practicando las bases. 

//Ejercicio 1
persona = {
    nombre: 'Jesur',
    edad: 27,
    pais: 'El Salvador',
};

if (persona.edad > 17) {
    console.log('Puedes entrar ya que eres mayor de edad');

} else {
    console.log('No puedes entrar pues no eres mayor de edad.');
}

//Ejercicio 2.
/*Tienes un arreglo de herramientas. 
Tienes que revisar si hay más de 3 herramientas. 
Si es así, manda un mensaje de "Caja llena", 
si no, manda "Aún cabe más". */
herramientas = ['Martillo', 'Pala', 'Machete', 'Taladro', 'Tornillo'];

if (herramientas.length > 3) {
    console.log('Caja llena')
} else {
    console.log('Aun cabe mas en la caja')
}

//Ejercicio 3.
/*Quieres saber si la caja está llena Y 
si además tienes un 'Machete' dentro. */
const herramientas2 = ['Martillo', 'Pala', 'Pulidora', 'Taladro', 'Tornillo', 'Machete'];
//const herramientas2 = ['Martillo', 'Pala', 'Pulidora', 'Taladro', 'Tornillo'];

const buscarHerr = 'Machete';
const herrBuscada = herramientas2.indexOf(buscarHerr);

if (herramientas2.length > 3 && herramientas2[herrBuscada]) {
    console.log(`Caja llena ${herramientas2[herrBuscada]} en caja`)
} else {
    console.log(`Aun cabe mas en la caja, ${buscarHerr} no tienes aun`)
}

//Ejercicio 4
//Combinando operadores.
persona2 = {
    nombre: 'Jesur',
    edad: 27,
    pais: 'El Salvador',
    ticket: false,
};

//puedo usar esta forma 'persona2.ticket === true'
if (persona2.edad >= 18 && persona2.ticket) {
    console.log('Eres mayor de edad y tienes ticket')
} else if (persona2.edad >= 18 && !persona2.ticket) {
    console.log('Eres mayor de edad pero No tienes ticket')
} else {
    console.log('No cumples ningun requisito para ingresar')
}



//Ejercicio 5
/**Crea un objeto producto con nombre y precio.
 *  Si el cliente tiene un cupon, 
 * resta un 20% al precio;
 *  si no, muestra el precio original. */

const producto = {
    nombre: 'Martillo',
    precio: 15,
    cupon: true,
};

//const productoFinal = 'Martillo';
const precio = 15;
const descuento = 0.2;

const descuentoAplicar = (precio * descuento);
const precioFinal = (precio - descuentoAplicar);

if (producto.cupon == true) {
    console.log(`El precio del ${producto.nombre} es de ${precio} , tienes ${descuento} de descuento el cual es ${descuentoAplicar}`);
    console.log(`El total a pagar es de ${precioFinal}`);
} else {
    console.log(`No posees cupon, el precio a pagar es ${precio}`)
}

//Ejercicio 6.
/*Tienes una lista de productos 
 *y una lista de cantidades (stock). 
 Tienes que decirle al usuario 
 si lo que busca está disponible o no. */

//Recorriendo un obj con array
console.log('Ejercicio 6')

const objArray = {
    arrayElements: ['Martillo', 'Pala', 'Machete'],
    arrayStocks: [3, 4, 0],
};

const buscandoProd = 'Machete';
const indice = objArray.arrayElements.indexOf(buscandoProd);
console.log(indice)

if (indice !== -1) {
    console.log(`La cantidad actual de ${buscandoProd} es '${objArray.arrayStocks[indice]}' en nuestra base de datos`)
}