// Métodos que NO modifican el array original (Inmutabilidad).

// every()
// El método "every" verifica si todos los elementos en el array cumplen una condición dada.
const edades = [21, 25, 30, 19, 22];

// Verifica si todas las edades en el array son mayores que 20.
const todosSonAdultos = edades.every(edad => edad > 20);

console.log(edades); // [21, 25, 30, 19, 22]
console.log(todosSonAdultos); // false (no todas las edades son mayores que 20)

// some()
// El método "some" verifica si al menos un elemento en el array cumple una condición dada.
const alMenosUnoMayorDe30 = edades.some(edad => edad > 30);

console.log(edades); // [21, 25, 30, 19, 22]
console.log(alMenosUnoMayorDe30); // true (hay al menos una edad mayor que 30)
