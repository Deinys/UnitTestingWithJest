// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yen
    let valueInYen = valueInDollar * 106.58;
    // retornamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "formYenToPound"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a Pound
    let valueInPound = valueInYen * 0.00625;
    // retornamos el valor
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }