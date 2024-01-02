// Métodos que iteran sobre un array
// Métodos que NO modifican el array original (Inmutabilidad)

// filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filtra los números pares
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Números pares: ', evenNumbers); // [2, 4, 6, 8, 10]

// reduce() - Caso 1
const numbersReduce = [1, 2, 3, 4, 5];
// Suma todos los elementos del array
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`La suma de ${numbersReduce} es ${sum}`);

// reduce() - Caso 2
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];
// Calcula la frecuencia de cada palabra en el array
const wordFrequency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return  accumulator;
}, {});
console.log("Frecuencia de palabras: ", wordFrequency);
