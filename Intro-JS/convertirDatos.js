const ingresosBrutos = ["$120.50", "$80.00", "$250.10", "$45.00"];

// Usamos .map() para aplicar la regla a cada elemento
const ingresosNumeros = ingresosBrutos.map(texto => {
    //reemplazamos el simbolo por un espacio vacio
    const sinSimbolo = texto.replace("$", "");
    //el string numero sin simbolo lo convertimos a numero y lo guardamos
    const numero = parseFloat(sinSimbolo);
    //retornamos el nuevo valor
    return numero;
});

console.log(ingresosNumeros);

console.log("-----------------------------");
console.log("-----------------------------");
console.log("Segundo ejercicio");

const campanasSucias = ["  cybermonday  ", "navidad2026 ", "  blackfriday", "verano-pro"];

const campanaLimpia = campanasSucias.map(nomCampana => {
    const nomSinEspacio = nomCampana.trim();
    const nomMayuscula = nomSinEspacio.toUpperCase();
    return nomMayuscula;
});

/** Opcional
const campanaLimpia = campanasSucias.map(nomCampana => nomCampana.trim().toUpperCase());
*/

console.log(campanaLimpia);

console.log("-----------------------------");
console.log("-----------------------------");
console.log("Tercer ejercicio");

const campanasLimpias2 = ["CYBERMONDAY", "NAVIDAD2026", "BLACKFRIDAY", "VERANO-PRO"]
const campanasDescuento = campanasLimpias2.filter(evento => evento.includes("DAY"));
console.log(campanasDescuento);

console.log("-----------------------------");
console.log("-----------------------------");
console.log("Cuarto ejercicio");

const campanasSucias2 = ["  cybermonday  ", "navidad2026 ", "  blackfriday", "verano-pro"];

const listaSucia = campanasSucias2.filter(texto2 => texto2.toUpperCase().trim().include("DAY")); 0