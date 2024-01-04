// Includes() con números
const numeros = [1, 2, 3, 4, 5];

// Verifica si el número 3 está presente en el array.
const resultado1 = numeros.includes(3);
console.log(resultado1); // true

// Verifica si el número 8 está presente en el array.
const resultado2 = numeros.includes(8);
console.log(resultado2); // false

// indexOf()
const frutas = ['manzana', 'cereza', 'uva', 'mango'];

// Obtiene el índice de 'uva' en el array de frutas.
const indice1 = frutas.indexOf('uva');
console.log(indice1); // 2

// Obtiene el índice de 'arándano' en el array de frutas.
const indice2 = frutas.indexOf('arándano');
console.log(indice2); // -1 (no se encuentra en el array)

// lastIndexOf()
const numerosNuevamente = [2, 4, 6, 8, 10, 6];

// Obtiene el último índice de 6 en el array.
const ultimoIndice1 = numerosNuevamente.lastIndexOf(6);
console.log(ultimoIndice1); // 5

// Obtiene el último índice de 3 en el array.
const ultimoIndice2 = numerosNuevamente.lastIndexOf(3);
console.log(ultimoIndice2); // -1 (no se encuentra en el array)
