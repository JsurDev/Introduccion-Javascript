/**
 * Aqui estamos practicando un poco de for,if, push y objetos.
 * ------------------------
 Organizador de catalogo.
 */

const netflixSeries = [
    { title: "Stranger Things", year: 2016 },
    { title: "Dark", year: 2017 },
    { title: "The Crown", year: 2016 },
    { title: "One Piece", year: 2023 },
    { title: "Black Mirror", year: 2017 }
];

const catalogo = {};

for (const serie of netflixSeries) {

    const anio = serie.year;
    const nombre = serie.title;

    //si catalogo[año] no existe
    if (!catalogo[anio]) {
        catalogo[anio] = [];// Lo agregamos a un array vacio
    }

    //mandamos nombre de la serie segun se año.
    catalogo[anio].push(nombre);
}

console.log(catalogo);

console.log('/--------------------/')

//Segundo ejercicio
const trendingMovies = [
    { title: "The Last Protocol", year: 2026 },
    { title: "Neon Dreams", year: 2025 },
    { title: "Midnight in Tokyo", year: 2026 },
    { title: "Quantum Heist", year: 2025 },
    { title: "Project Lazarus", year: 2025 },
    { title: "Solaris Drift", year: 2025 },
    { title: "Echoes of Silence", year: 2024 },
    { title: "Beyond the Horizon", year: 2024 },
    { title: "The Night Agent", year: 2024 },
    { title: "Beef", year: 2023 }
];

const miCatalogo = {};

for (const peli of trendingMovies) {
    const anio = peli.year;
    const titulo = peli.title;

    // 1. Pregunta si NO existe el cajón del año en 'miCatalogo'
    if (!miCatalogo[anio])
    // 2. Si no existe, inicializa 'miCatalogo[anio]' como un array vacío []
    {
        miCatalogo[anio] = [];
    }
    // 3. Fuera del IF, haz el .push() del 'titulo' al cajón correspondiente
    miCatalogo[anio].push(titulo);

    /**
     for (const peli of trendingMovies) {
    const { year, title } = peli; // Esto se llama destructuración (muy pro)

    // "Si no existe, asígnale un array vacío, y luego haz el push"
    (miCatalogo[year] ??= []).push(title);
}
     */

}

console.log(miCatalogo);