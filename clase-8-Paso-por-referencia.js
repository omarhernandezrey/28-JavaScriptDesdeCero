// Tipo de dato complejo - Paso por referencia

let frutas = {
    naranja: '🍊'
};

let vegetales = frutas;

vegetales.naranja = '🥦';
console.log(frutas); // Salida: { naranja: '🥦' }

let ropa = {
    blusa: '👚'
};

ropa.pantalon = '👖';
console.log(ropa); // Salida: { blusa: '👚', pantalon: '👖' }
