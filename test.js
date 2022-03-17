const { sum } = require('./app.js')

test("adds 14 + 9 to equal 23", () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("One dollars should be 106.58 Yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(20)).toBe(2131.6); //1 Dollar son 106.58 Yen, entonces 20 dollars deberian ser = (20 * 106.58)
});

test("One Yen should be 0.00625 Pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(20)).toBe(0.125); //1 Yen son 0.00625 pound, entonces 20 Yen deberian ser = (20 * 0.00625)
})