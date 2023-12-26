/*
El método forEach() se utiliza para iterar sobre los elementos de un array y ejecutar una función proporcionada una vez para cada elemento.

array.forEach((item) => {
    // código a ejecutar para cada elemento
})
*/

// Se declara una variable llamada list que contiene un array de strings.
let list = ["eat", "sleep", "code", "repeat"];

// Se utiliza el método forEach para iterar sobre cada elemento del array.
list.forEach((item) => {
    // En cada iteración, se ejecuta la función proporcionada, que imprime el elemento actual.
    console.log(item);
});
