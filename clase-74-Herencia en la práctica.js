/*
Clases
Funciones constructoras

Prototype
    Métodos
    Propiedades
*/

// Definición de la clase Animal
class Animal {
    // Constructor que inicializa las propiedades nombre y tipo
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    // Método emitirSonido que muestra un mensaje en la consola
    emitirSonido() {
        console.log(`Estoy sonando como un ${this.tipo}`);
    }
}

// Definición de la clase Perro que hereda de la clase Animal
class Perro extends Animal {
    // Constructor que inicializa las propiedades nombre, tipo y raza
    constructor(nombre, tipo, raza) {
        super(nombre, tipo); // Llamada al constructor de la clase padre (Animal)
        this.raza = raza;
    }

    // Sobrescritura del método emitirSonido de la clase padre
    emitirSonido() {
        console.log("El perro ladra");
    }

    // Nuevo método correr específico de la clase Perro
    correr() {
        console.log(`${this.nombre} corre alegremente`);
    }
}

// Creación de una instancia de la clase Perro
const perro1 = new Perro('Buddy', 'perro', 'Labrador');

// Impresión del objeto perro1 en la consola
console.log(perro1);

// Llamada a los métodos correr y emitirSonido de la clase Perro
perro1.correr();
perro1.emitirSonido();

