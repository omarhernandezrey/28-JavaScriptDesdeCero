// Métodos que modifican el array original (Mutabilidad).

// splice() - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato'];
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion');
console.log(vegetables); // ['carrot', 'broccoli', 'cucumber', 'onion', 'tomato']
console.log(removedVegetables); // ['spinach']

// reverse() - Invierte los elementos de un array.
const numbers = [1, 2, 3, 4, 5];
const reverseNumbers = numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]
console.log(reverseNumbers); // [5, 4, 3, 2, 1]

// sort() con números - Ordena los elementos de un array.
const unsortedNumbers1 = [4, 18, 1, 62, 34];
const unicodeNumbers = unsortedNumbers1.sort();
console.log(unsortedNumbers1); // [1, 18, 34, 4, 62] (ordenado según UTF-16)
console.log(unicodeNumbers); // [1, 18, 34, 4, 62] (ordenado según UTF-16)

const unsortedNumbers2 = [4, 18, 1, 62, 34];
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b);
// La función de comparación resta a de b para ordenar de forma ascendente.
console.log(unsortedNumbers2); // [1, 4, 18, 34, 62]
console.log(sortedNumbers); // [1, 4, 18, 34, 62]

// sort() con strings - Ordena los elementos de un array de cadenas según UTF-16.
const cities = ["New York", "Paris", "Tokyo", "London"];
const sortedCities = cities.sort();
console.log(cities); // ["London", "New York", "Paris", "Tokyo"]
console.log(sortedCities); // ["London", "New York", "Paris", "Tokyo"]

// fill() - Rellena todos los elementos de un array con un valor estático desde un índice inicial hasta un índice final (opcional).
const ages = [21, 35, 45, 50];
console.log(ages.fill(0, 2, 4)); // [21, 35, 0, 0]
console.log(ages.fill(15, 1)); // [21, 15, 15, 15]
console.log(ages.fill(15)); // [15, 15, 15, 15]
