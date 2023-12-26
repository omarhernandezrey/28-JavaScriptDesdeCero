/*
El bucle for...of se utiliza para iterar sobre elementos de iterable, como arrays o cadenas.

for (variable of objeto) {
    // código a ejecutar para cada elemento del objeto
}
*/

// Se declara una variable llamada canasta que contiene un array de strings.
let canasta = ["manzana", "pera", "manzana", "uva"];

// Se utiliza el bucle for...of para iterar sobre cada elemento del array canasta.
for (fruta of canasta) {
    // En cada iteración, se ejecuta el código proporcionado, que imprime el array completo en lugar del elemento actual.
    console.log(canasta);
}


