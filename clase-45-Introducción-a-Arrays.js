// Crear un array de frutas
const fruits = Array('apple', 'banana', 'orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// Crear un array con un solo elemento (número 12)
const justOneNumber = Array(12);
console.log(justOneNumber); // Array con 12 elementos indefinidos

// Crear un array de números
const number = Array(1, 2, 3, 4, 5);
console.log(number); // [1, 2, 3, 4, 5]

// Crear un array con un solo número (4)
const oneNumber = [4];
console.log(oneNumber); // [4]

// Crear un array vacío
const emptyArray = [];
console.log(emptyArray); // []

// Crear un array de deportes
const sports = ['soccer', 'tennis', 'rugby'];
console.log(sports); // ['soccer', 'tennis', 'rugby']

// Crear un array con diversos tipos de elementos
const recipeIngredients = ['Flour', true, 2, { ingredient: 'Milk', quantity: '1 cup' }, false];
console.log(recipeIngredients); // ['Flour', true, 2, { ingredient: 'Milk', quantity: '1 cup' }, false]

// Acceder al primer elemento del array de frutas
const firstFruit = fruits[0];
console.log(firstFruit); // 'apple'

// Obtener la longitud del array de frutas
const numberOfFruits = fruits.length;
console.log(numberOfFruits); // 3

// Agregar una nueva fruta al final del array de frutas
fruits.push('watermelon');
console.log(fruits); // ['apple', 'banana', 'orange', 'watermelon']

// Concatenar dos arrays de frutas
const newFruits = fruits.concat(['grape', 'kiwi']);
console.log(fruits); // ['apple', 'banana', 'orange', 'watermelon']
console.log(newFruits); // ['apple', 'banana', 'orange', 'watermelon', 'grape', 'kiwi']

// Verificar si una variable es un array
const isArray = Array.isArray(fruits);
console.log(isArray); // true

// Calcular la suma de los elementos en un array de números
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log(sum); // 15
// Utilizar el método reduce para calcular la suma de los elementos en un array de números
const sumReduce = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumReduce); // 15
// Ordenar un array de números ascendentemente
const sortedNumbers = numbersArray.sort((a, b) => a - b);
console.log(sortedNumbers); // [1, 2, 3, 4, 5]
// Ordenar un array de números descendentemente
const reversedSortedNumbers = sortedNumbers.reverse();
console.log(reversedSortedNumbers); // [5, 4, 3, 2, 1]
// Buscar un elemento en un array utilizando el método indexOf
const searchElement = fruits.indexOf('banana');
console.log(searchElement); // 1
// Eliminar un elemento de un array utilizando el método splice
fruits.splice(1, 1);
console.log(fruits); // ['apple', 'orange', 'watermelon', 'grape', 'kiwi']
// Convertir un string en un array de caracteres
const strToCharArr = "Hello World!";
console.log(strToCharArr.split("")); // ['H','e','l','l','o',' ', 'W','o','
// 'r','d','!'