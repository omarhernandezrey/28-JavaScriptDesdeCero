/*
Estructura de datos
clave / valor

propiedad = valor

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor,
    Métodos
}
*/

// Definición de un objeto persona con propiedades y un método
const persona = {
    nombre: 'Omar',
    apellido: 'Hernandez',
    edad: 33,
    direccion: {
        calle: 'Lorem Ipsum 187',
        ciudad: 'Ciudad de Bogotá'
    },
    // Método que muestra los datos de la persona
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} años`);
    }
};
persona.saludar();//Llamada al método saludar para ver el mensaje en la consola
