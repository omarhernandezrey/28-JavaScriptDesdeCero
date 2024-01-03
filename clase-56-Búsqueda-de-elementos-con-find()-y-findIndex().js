// Métodos que iteran sobre un array.
// Métodos que NO modifican el array original (Inmutabilidad).

// find()
const multiplesOf5 = [5, 10, 15, 20];
const firstNumberGreaterThan10 = multiplesOf5.find(number => number > 10);
console.log(multiplesOf5);
console.log(`El primer número mayor que 10 es ${firstNumberGreaterThan10}`);

// findIndex()
const randomNumbers = [6, 14, 27, 56, 40];
const indexNumber = randomNumbers.findIndex(number => number > 50);
console.log(randomNumbers);
console.log(`La posición del número mayor que 50 es: ${indexNumber}`);
