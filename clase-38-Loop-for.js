/* for (variable; condicion; incremento) {
    codigo a ejecutar
} */

// Se declara una variable llamada list que contiene un array de strings.
let list = ["eat", "sleep", "code", "repeat"];

// Se utiliza un bucle for para iterar sobre los elementos del array.
for (let i = 0; i < list.length; i++) {
    // En cada iteración, se muestra un mensaje utilizando el valor del elemento actual.
    console.log(`I want to ${list[i]}`);
}
