/* 
El bucle while se utiliza para ejecutar un bloque de código mientras una condición sea verdadera.

Estructura general:
while (condicion) {
    // Código a ejecutar mientras la condición sea verdadera
}

En este ejemplo, se declara una variable contador con un valor inicial de 0.

El bucle while se ejecutará mientras la condición (contador < 10) sea verdadera.

En cada iteración, se imprime el valor del contador y luego se incrementa en 1 (contador++).

El bucle se repetirá hasta que la condición sea falsa (cuando contador sea igual o mayor a 10).

*/

// Se declara una variable contador con un valor inicial de 0.
let contador = 0;

// El bucle while se ejecutará mientras la condición (contador < 10) sea verdadera.
while (contador < 10) {
    // En cada iteración, se imprime el valor del contador.
    console.log(contador);

    // Se incrementa el valor del contador en 1.
    contador++;
}