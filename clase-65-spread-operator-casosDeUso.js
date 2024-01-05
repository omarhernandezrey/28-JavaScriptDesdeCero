// Spread operator - Operador de propagación

// 1. Copiando un array
let originalArray = [1, 2, 3, 4, 5];
let copyOfArray = [...originalArray]; // Se crea una copia del array original usando el spread operator.
console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(copyOfArray);    // [1, 2, 3, 4, 5]

// 2. Combinando arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2]; // Se combinan dos arrays en uno nuevo usando el spread operator.
console.log(array1);        // [1, 2, 3]
console.log(array2);        // [4, 5, 6]
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// 3. Creando arrays con elementos adicionales
let baseArray = [10, 20, 30];
let arrayWithAdditionalElements = [...baseArray, 40, 50, 60, 70]; // Se crea un nuevo array agregando elementos al array base.
console.log("Base Array: ", baseArray);                        // [10, 20, 30]
console.log("Con elementos adicionales: ", arrayWithAdditionalElements); // [10, 20, 30, 40, 50, 60, 70]

// 4. Pasando elementos a funciones
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum(...numbers); // Se pasan los elementos del array como argumentos a la función usando el spread operator.
console.log(`La suma es ${result}`); // La suma es 6
