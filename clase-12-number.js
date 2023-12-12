// 1. Tipo entero y decimal
let entero = 42;
let decimal = 3.14;
console.log(typeof entero, typeof decimal);

// 2. Notacion cientifica
let cientifico = 5e3;

// 3. Infinitos i NAN
let infinito = Infinity;
let noEsNumero = NaN;

// 4. Operaciones aricmeticas 
// 4.1 Suma, Resta, Multiplicacion y Division
let suma = 3 + 4;
let resta = 4 - 2;
let multiplicacion = 4 * 7;
let divicion = 16 / 2;

// 4.2 Modulo y exponenciasion
let modulo = 15 % 8;
let exponenciasion = 2 **3;

// precision
let resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado === 0.3);

// 5. Operaciones Avanzadas
let raizCuadrada = Math.sqrt(16);
let valorAbsoluto = Math.abs(-7);
let aleatorio = Math.random();
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(aleatorio);

// 6. Mi Programita
let agua = 287500;
let luz = 130000;
let gas = 80000;
let internet = 70000;

let sumaTotalRecibos = agua + luz + gas + internet;
console.log(sumaTotalRecibos);

let divididoDos = 567500 / 2;
console.log(divididoDos);

// 7. Comparación de números
let numero1 = 10;
let numero2 = 5;

console.log(numero1 > numero2); // Mayor que
console.log(numero1 < numero2); // Menor que
console.log(numero1 >= numero2); // Mayor o igual que
console.log(numero1 <= numero2); // Menor o igual que

// 8. Incremento y decremento
let contador = 0;

contador++; // Incremento
console.log(contador);

contador--; // Decremento
console.log(contador);

// 9. Operadores lógicos
let esMayorDeEdad = true;
let tieneLicencia = true;

let puedeConducir = esMayorDeEdad && tieneLicencia; // AND lógico
console.log(puedeConducir);

let necesitaAutorizacion = !esMayorDeEdad || !tieneLicencia; // OR lógico
console.log(necesitaAutorizacion);
