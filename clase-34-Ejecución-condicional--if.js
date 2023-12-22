// Suponiendo que 'let' es una variable que ya ha sido declarada y tiene un valor
// y 'algo' es otra variable con la que quieres comparar.

if (let === algo) {
    // Código a ejecutar si la condición es verdadera
    console.log('La condición es verdadera');
  } else if (otraCondicion) {
    // Código a ejecutar si la primera condición es falsa y esta condición es verdadera
    console.log('Otra condición es verdadera');
  } else {
    // Código a ejecutar si ninguna de las condiciones anteriores es verdadera
    console.log('Ninguna condición es verdadera');
  }

// Ejemplo con nombres
let nombre = "Omar";  // Se declara una variable 'nombre' con el valor "Omar".
if (nombre === "Omar") {  // Se verifica si 'nombre' es igual a "Omar".
    console.log("Hola Omar");  // Si la condición es verdadera, imprime "Hola Omar".
}

let nombre1 = "Alberto";  // Se declara una variable 'nombre1' con el valor "Alberto".
if (nombre1 === "Omar") {  // Se verifica si 'nombre1' es igual a "Omar".
    console.log("Hola Omar");
} else {
    console.log("Nombre no encontrado");  // Si la condición es falsa, imprime "Nombre no encontrado".
}

let nombre2 = "Alberto";  // Se declara una variable 'nombre2' con el valor "Alberto".
if (nombre2 === "Omar") {  // Se verifica si 'nombre2' es igual a "Omar".
    console.log("Hola Omar");
} else if (nombre == "Alberto") {  // Si la primera condición es falsa, verifica si 'nombre' es igual a "Alberto".
    console.log("Hola Alberto");  // Si la segunda condición es verdadera, imprime "Hola Alberto".
} else {
    console.log("Nombre no encontrado");  // Si ninguna de las condiciones anteriores es verdadera, imprime "Nombre no encontrado".
}
