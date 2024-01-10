/*
this--class
this--objeto--class
*/

class Persona {
    constructor(nombre, apellido, edad) {
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Edad = edad;
    }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Juan", "Perez", 25);

// Imprimir el objeto persona1 en la consola
console.log(persona1);
// Salida: Persona { Nombre: 'Juan', Apellido: 'Perez', Edad: 25 }git status


// Imprimir los datos de la persona utilizando el objeto
console.log(`${persona1.Nombre} ${persona1.Apellido} ${persona1.Edad} años`);
// Salida: Juan Perez 25 años

// Añadir un nuevo método a la instancia persona1
persona1.nuevoMetodo = function() {
    console.log(`Soy ${this.Nombre} ${this.Apellido} tengo ${this.Edad}`);
};
persona1.nuevoMetodo();
// Salida: Soy Juan Perez tengo 25
