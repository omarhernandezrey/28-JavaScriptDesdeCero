/* 
El bucle do-while se utiliza para ejecutar un bloque de código al menos una vez y luego repetirlo mientras una condición sea verdadera.

Estructura general:
do {
    // Código a ejecutar al menos una vez
} while (condicion);

En este ejemplo, se declara una variable contador con un valor inicial de 0.

El bloque do contiene el código que se ejecutará al menos una vez, ya que la condición se evalúa después de la primera ejecución.

Dentro del bloque do, se imprime el valor del contador y se incrementa en 1 (contador++).

La condición del bucle do-while es (contador < 10), por lo que el bucle se repetirá mientras la condición sea verdadera. Como la condición inicial es verdadera (0 < 10), el bloque se ejecuta al menos una vez y luego se repite mientras la condición se cumpla.

*/

// Se declara una variable contador con un valor inicial de 0.
let contador = 0;

// El bloque do contiene el código que se ejecutará al menos una vez.
do {
    // Se imprime el valor del contador.
    console.log(contador);

    // Se incrementa el valor del contador en 1.
    contador++;
} while (contador < 10);
