// Mutability
const fruits = Array('apple', 'banana', 'orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// Modificar el array original agregando un nuevo elemento
fruits.push('melones');
console.log(fruits); // ['apple', 'banana', 'orange', 'melones']

// Immutability
const newFruits = fruits.concat(['grape', 'Kiwi']);
console.log(newFruits); // ['apple', 'banana', 'orange', 'melones', 'grape', 'Kiwi']

// Verificar si es un array usando Array.isArray()
const isArray = Array.isArray(fruits);
console.log(isArray); // true

// Ejercicio práctico: sumar todos los elementos de un array
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

// Iterar sobre el array y sumar los elementos
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}

console.log(sum); // 15
