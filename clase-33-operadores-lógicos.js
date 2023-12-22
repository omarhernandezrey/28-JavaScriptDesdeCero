// Operadores lógicos: && (AND), || (OR), ! (negación)

// Ejemplos de operadores lógicos
const a = 10;
const b = 20;
const c = "10";

// Operador && (AND): Devuelve true si ambas condiciones son verdaderas
console.log(a == b && a === c); // Resultado: false

// Operador || (OR): Devuelve true si al menos una de las condiciones es verdadera
console.log(a != b || a === c); // Resultado: true

// Operador ! (negación): Invierte el valor de la condición
console.log(!(a < b)); // Resultado: false
console.log(!(a === b)); // Resultado: true
