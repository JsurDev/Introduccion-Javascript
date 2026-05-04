/*Usa .map() para transformar el array rawUsers en 
un nuevo array de objetos llamado cleanUsers.
1-Nombre: Debe tener la primera letra en Mayúscula 
y el resto en minúscula (ej: "ben").
2-ID: Debe ser el índice del elemento en el array.
3-Status: Si el nombre tiene más de 3 letras, 
su status será "Premium", 
de lo contrario será "Standard".
*/

const rawUsers = ["bEn", "mIA", "lEO", "avA", "jaXON"];
const cleanUsers = rawUsers.map(formatUsers);


//Imprimiento el nuevo array.
console.log(cleanUsers);

//Imprimirlo con formato profesional COMUN
cleanUsers.forEach((usuario) => {
    console.log("----------------------");
    console.log(`El id es:  ${usuario.id}`);
    console.log(`El nombre es: ${usuario.nombre}`);
    console.log(`El stado es: ${usuario.status}`);
});


//Imprimiendo como Pro : Destructuring
console.log("---------DESTRUCTURING-------------");
for (const { id, nombre, status } of cleanUsers) {
    console.log(`ID: ${id} | nombre: ${nombre} | Tipo: ${status}`)
}


//filtramos solo los premium 
console.log();
console.log("---------FILTER: Solo `Premium`-------------");
const usuariosPremium = cleanUsers.filter(user => user.status === "Premium");

usuariosPremium.forEach(({ id, nombre, status }) => {
    console.log(`ID: ${id} | nombre: ${nombre} | Tipo: ${status}`)
})

function formatUsers(nombre, indice) {
    const nombreCorrecto = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    //Aqui retornare un objeto
    return {
        id: indice,//el id es la posicion que tiene en el array
        nombre: nombreCorrecto,
        status: nombreCorrecto.length > 3 ? "Premium" : "Standar"
    };
};

