// Definición de la clase Persona
class Persona {
    // Constructor que inicializa las propiedades de la clase
    constructor(nombre, apellido, edad) {
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Edad = edad;
    }

    // Método saludar que muestra un mensaje en la consola
    saludar() {
        console.log(`Hola, soy ${this.Nombre} ${this.Apellido} y tengo ${this.Edad} años.`);
    }
}

// Creación de una instancia de la clase Persona
const persona1 = new Persona("Juan", "Perez", 25);

// Llamada al método saludar de la instancia persona1
persona1.saludar();
