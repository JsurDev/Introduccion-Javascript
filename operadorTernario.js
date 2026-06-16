/**
const boleto = 'vip';
let codigoAcceso;

if (boleto === 'vip') {
    codigoAcceso = 'VIP-001';
} else {
    codigoAcceso = 'REGULAR-005'
}

console.log(codigoAcceso)

 */

//Forma corta Operador Ternario

const boleto = 'vipi';

const codigoAcceso = (boleto === 'vip') ? 'VIP-001' : 'REGULAR-005';

console.log(codigoAcceso)
boleto === 'vip' ? console.log('Boleto VIP') : console.log('Boleto regular');