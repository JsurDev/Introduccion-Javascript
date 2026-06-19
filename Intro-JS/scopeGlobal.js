/* Globarl Scope o Variable Globales
-Variables declaradas fuera de la funcion. 
-Accedemos a ellas desde cualquier parte del codigo.
-Podemos usar const , let y var.
 */

var saludo = 'hola';

const funcionSaludo = () => {
    console.log(saludo + ' Joseph')
}
funcionSaludo();
