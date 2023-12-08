// Tipo de dato primitivo - inmutable
let numero = 23;
numero = numero + 10; // Se puede reasignar el valor de la variable
console.log(numero); // Salida: 33

//---------------------------
let esVerdadero = true;
esVerdadero = false; // Se puede reasignar el valor de la variable
console.log(esVerdadero); // Salida: false

// Tipo de dato complejo - mutable
let usuario = { nombre: 'Pepito', apellido: 'Hernandez', edad: 15 };
usuario.edad = 33; // Se puede modificar las propiedades del objeto
usuario.nombre = 'Omar'; // Se puede modificar las propiedades del objeto
console.log(usuario); // Salida: { nombre: 'Omar', apellido: 'Hernandez', edad: 33 }

//---------------------------

let frutas = ['manzana', 'pera', 'uva'];
frutas[0] = 'sandia'; // Se puede modificar elementos del array
console.log(frutas); // Salida: ['sandia', 'pera', 'uva']

//------------------------------------
function cambiarNombre(objeto) {
    objeto.nombre = 'Nuevo Nombre'; // Se puede modificar el objeto pasado como argumento
}

let persona = { nombre: 'Antonio' };
cambiarNombre(persona);
console.log(persona); // Salida: { nombre: 'Nuevo Nombre' }