// Métodos que iteran sobre un array
// Métodos que NO modifican el array original (Inmutabilidad)

// Map
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number * number);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// forEach()
const colors = ['red', 'pink', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color));
console.log(colors); // ['red', 'pink', 'blue']
console.log(iteratedColors); // undefined

// Ejercicio: Conversión de Fahrenheit a Celsius
const temperaturesInFahrenheit = [32, 68, 95, 104, 212];
const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32));
console.log('Temperaturas en Fahrenheit: ', temperaturesInFahrenheit); // [32, 68, 95, 104, 212]
console.log('Temperaturas en Celsius: ', temperaturesInCelsius); // [0, 20, 35, 40, 100]

// Ejercicio: Suma de elementos en un array
const newNumbers = [1, 2, 3, 4, 5];

let sum = 0;

newNumbers.forEach(number => {
    sum += number;
});
console.log("Array de números: ", newNumbers); // [1, 2, 3, 4, 5]
console.log("Suma de números: ", sum); // 15
