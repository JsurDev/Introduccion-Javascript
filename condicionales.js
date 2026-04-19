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
const herramientas2 = ['Martillo', 'Pala', 'Pulidora', 'Taladro', 'Tornillo'];
const buscarHerr = 'Machete';
const herrBuscada = herramientas2.indexOf(buscarHerr);

if (herramientas2.length > 3 && herramientas2.includes('Machete')) {
    console.log(`Caja llena ${herramientas2[herrBuscada]} en caja`);
} else {
    console.log(`Aun cabe mas en la caja, ${buscarHerr} no tienes aun`);
}

