const operacion = (tipo, numero1, numero2) => {
    let resultado;

    if (tipo === 'suma') {
        resultado = numero1 + numero2;
    } else if (tipo === 'resta') {
        resultado = numero1 - numero2;
    } else {
        console.log('Necesito numeros para poder operar')
    }

    return resultado;
};

//El resultado lo guardamos en la miVariable
const miVariable = operacion('resta', 200, 100);
console.log(miVariable);
