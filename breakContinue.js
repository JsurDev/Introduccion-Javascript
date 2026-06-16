const nombresMujerB = [
    "Beatriz",
    "Bianca",
    "Bárbara",
    "Marisol",
    "Berenice",
    "Belén",
    "Bruna"
];

for (let nom = 0; nom < nombresMujerB.length; nom++) {
    if (nombresMujerB[nom][0] !== 'B') {
        console.log(nombresMujerB[nom] + ' no comienza con letra B.')
        break;
    }
    console.log(nombresMujerB[nom]);
}

console.log('-------------');
console.log('---Break Continue----');


const nombresZ = [
    "Zulema",
    "",
    "Zoe",
    "Zacarías",
    "Zaira",
    "Zenón"
];

for (let nomZ = 0; nomZ < nombresZ.length; nomZ++) {
    if (nombresZ[nomZ] === 'Zaid') {
        continue;
    }
};
console.log(nombresZ);
