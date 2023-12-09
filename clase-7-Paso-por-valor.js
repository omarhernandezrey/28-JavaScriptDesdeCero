// Paso por valor
let x = 1;
let y = 'Hola';
let z = null;

let b = y; // 'Hola' se asigna a b (paso por valor)
let a = x; // 1 se asigna a a (paso por valor)
let c = z; // null se asigna a c (paso por valor)

console.log(x, y, z, a, b, c); // Salida: 1 'Hola' null 1 'Hola' null

b = 12; // No afecta a y, ya que es una copia (paso por valor)
a = 'platzi'; // No afecta a x, ya que es una copia (paso por valor)
c = undefined; // No afecta a z, ya que es una copia (paso por valor)

// Paso por referencia
let frutas = ['manzana'];
frutas.push('pera'); // 'pera' se agrega al array original (paso por referencia)
console.log(frutas); // Salida: ['manzana', 'pera']

let panes = ['🥐'];
let copiaDePanes = panes; // Se hace una referencia al array original (paso por referencia)
panes.push('🥖'); // '🥖' se agrega al array original, afectando también a la copia
console.log(panes, copiaDePanes); // Salida: ['🥐', '🥖'] ['🥐', '🥖']
