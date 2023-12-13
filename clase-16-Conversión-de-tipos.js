// Explicit Type Casting

const string = '42'
const integer = parseInt(string)
console.log(integer);
console.log(typeof integer);

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float);
console.log(typeof float);

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal);
console.log(typeof decimal);

// Implicit Type Casting

const sum = '5' + 3
console.log(sum);

const sumWithBoolean = '3' +  true
console.log(sumWithBoolean);