// Función favoriteCharacter que intenta acceder al nombre dentro del contexto "this"
function favoriteCharacter() {
    console.log(`I'm ${this.name}`);
}

// Objeto character con propiedades "name" y "age"
const character = {
    name: 'Batman',
    age: 100
};

// Llamada a favoriteCharacter sin establecer el contexto, "this" será undefined
favoriteCharacter(); // Salida: "I'm undefined" (this no está definido, puede causar un error)

// Función favoriteCharacter1 que imprime el valor de "this"
function favoriteCharacter1() {
    console.log(this);
}

// Llamada a favoriteCharacter1 sin establecer el contexto, "this" será undefined en strict mode
favoriteCharacter1(); // Salida: "undefined" (modo estricto)

// Función favoriteCharacter2 que intenta acceder directamente a "this.name"
// Definición de la función que imprime el personaje favorito
function favoriteCharacter2() {
    console.log(this.name);
}

// Llamada a la función sin un objeto asociado (en el contexto global)
favoriteCharacter2();  // Salida esperada: TypeError: Cannot read property 'name' of undefined


// Asignación de un valor a la variable global x y suma, pero el resultado no se guarda en ninguna variable
x = 5;
x + 4;

// Modo estricto para activar el strict mode
'use strict';

// Constante z con valor 3 (el código anterior a 'use strict' no se ve afectado)
const z = 3;

// Salida: No hay salidas directas, ya que el código se ejecuta pero no imprime nada directamente.
