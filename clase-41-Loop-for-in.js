/*
El bucle for...in se utiliza para iterar sobre las propiedades enumerables de un objeto.

Itera sobre objetos y recupera las propiedades (claves) del objeto, no los valores.

Estructura general:
for (variable in objeto) {
	// Código a ejecutar para cada propiedad del objeto
}

En el caso de arrays y strings, itera sobre sus índices o posiciones.

Ejemplo con un objeto:
const nombreDelObjeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    ...,
    propiedadN: valorN
}

En el bucle for...in, la variable tomará el valor de cada propiedad en cada iteración.

*/

// Se declara un objeto llamado listaDeCompras con propiedades que representan frutas y sus cantidades.
const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

// Se utiliza el bucle for...in para iterar sobre las propiedades del objeto listaDeCompras.
for (fruta in listaDeCompras) {
    // En cada iteración, se imprime el nombre de la fruta.
    console.log(fruta);
}

// Se declara otro objeto llamado listaDeCompras1 con propiedades que representan frutas y sus cantidades.
const listaDeCompras1 = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

// Se utiliza el bucle for...in para iterar sobre las propiedades del objeto listaDeCompras1.
for (fruta1 in listaDeCompras1) {
    // En cada iteración, se imprime el nombre y la cantidad de cada fruta.
    console.log(`${fruta1} : ${listaDeCompras1[fruta1]}`);
}