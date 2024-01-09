// Definición de un constructor Persona
function Persona(nombre, apellido, edad) {
    // Inicialización de propiedades
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// Creación de una instancia persona1 usando el constructor Persona
const persona1 = new Persona("Juan", "Perez", 20);

// Mostrar en la consola la instancia persona1
console.log(persona1);

// Agregar la propiedad nacionalidad a la instancia persona1
persona1.nacionalidad = "Mexicano";

// Creación de otra instancia persona2 usando el constructor Persona
const persona2 = new Persona("Diego", "De Granda", 35);

// Mostrar en la consola la instancia persona2
console.log(persona2);

// Agregar un método saludar al prototipo de Persona
Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

// Llamar al método saludar de las instancias persona1 y persona2
persona1.saludar();
persona2.saludar();
