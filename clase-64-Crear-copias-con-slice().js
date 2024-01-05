// slice() - Método que devuelve una porción de un array sin modificarlo.

const animales = ['and', 'bison', 'camel', 'duck', 'elephant'];

// Devuelve una porción desde la posición 2 hasta el final.
console.log(animales.slice(2));

// Devuelve una porción desde la posición 2 hasta la posición 4 (sin incluir la posición 4).
console.log(animales.slice(2, 4));

// Devuelve una porción desde la posición 1 hasta la posición 6 (sin incluir la posición 6).
console.log(animales.slice(1, 6));

// Devuelve los dos últimos elementos del array.
console.log(animales.slice(-2));

// Devuelve una porción desde la posición 2 hasta los dos últimos elementos (sin incluir los dos últimos).
console.log(animales.slice(2, -2));

// Devuelve una copia completa del array.
console.log(animales.slice());
