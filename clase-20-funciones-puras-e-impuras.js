// Funciones puras

// Side effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o en consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// Definición de una función impura que suma dos números y muestra el valor de 'a' en la consola.
function sum(a, b) {
    console.log('A: ', a);
    return a + b;
}

// Variable global 'total' que es modificada por una función impura.
let total = 0;

// Función impura que suma un número 'a' al valor de la variable global 'total' y retorna el nuevo valor.
function sumWithSideEffects(a) {
    total += a;
    return total;
}

// Función pura que retorna el cuadrado de un número 'x'.
function square(x) {
    return x * x;
}

// Función pura que suma 10 a un número 'y'.
function addTen(y) {
    return y + 10;
}

// Uso de funciones puras para calcular el resultado final.
const number = 5;
const squaredNumber = square(number); // Se calcula el cuadrado de 5 (función pura).
const finalResult = addTen(squaredNumber); // Se suma 10 al cuadrado de 5 (función pura).
console.log(finalResult); // Se muestra el resultado final (sin efectos secundarios).
