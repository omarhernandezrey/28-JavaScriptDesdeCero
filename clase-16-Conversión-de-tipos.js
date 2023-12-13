// Explicit Type Casting

const string = '42';
const integer = parseInt(string);
console.log(integer);  // Salida: 42
console.log(typeof integer);  // Salida: number

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(float);  // Salida: 3.14
console.log(typeof float);  // Salida: number

const binary = '1010';
const decimal = parseInt(binary, 2);
console.log(decimal);  // Salida: 10
console.log(typeof decimal);  // Salida: number

// Implicit Type Casting

const sum = '5' + 3;
console.log(sum);  // Salida: '53' (concatenación de cadenas)

const sumWithBoolean = '53' + true;
console.log(sumWithBoolean);  // Salida: '53true' (concatenación de cadenas)

const sumWithNumber = 2 + true;
console.log(sumWithNumber);  // Salida: 3 (suma)

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;
console.log('_______________________________');
console.log(stringValue + stringValue);  // Salida: '1010' (concatenación de cadenas)
console.log(stringValue + numberValue);  // Salida: '1010' (concatenación de cadenas)
console.log(stringValue + booleanValue);  // Salida: '10true' (concatenación de cadenas)
console.log(numberValue + stringValue);  // Salida: '1010' (concatenación de cadenas)
console.log(numberValue + numberValue);  // Salida: 20 (suma)
console.log(numberValue + booleanValue);  // Salida: 11 (suma)
console.log(booleanValue + stringValue);  // Salida: 'true10' (concatenación de cadenas)
console.log(booleanValue + numberValue);  // Salida: 11 (suma)
console.log(booleanValue + booleanValue);  // Salida: 2 (suma)
