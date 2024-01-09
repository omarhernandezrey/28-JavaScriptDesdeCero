/*
Estructura de datos

key / value 

objeto {
  propiedad: valor, 
  propiedad: valor, 
  propiedad: valor 
  Métodos
}
*/

// Definición de un objeto persona con propiedades y métodos
const persona = {
    nombre: "John",
    edad: 30,
    direccion: {
      calle: "Av Insurgentes 187",
      ciudad: "CDMX",
    },
    saludar() {
      console.log(`Hola, mi nombre es ${persona.nombre}`);
    },
  };
  
  // Imprimir el objeto persona en la consola
  console.log(persona);
  
  // Acceder a la propiedad nombre del objeto persona y mostrar en la consola
  console.log(persona.nombre);
  
  // Llamar al método saludar del objeto persona
  persona.saludar();
  
  // Agregar la propiedad telefono al objeto persona
  persona.telefono = "555-555-5555";
  
  // Mostrar en la consola la propiedad telefono del objeto persona
  console.log(persona.telefono);
  
  // Agregar el método despedir al objeto persona
  persona.despedir = () => {
    console.log("Adiós");
  };
  
  // Llamar al método despedir del objeto persona
  persona.despedir();
  
  // Acceder a la propiedad calle dentro del objeto direccion y mostrar en la consola
  console.log(persona.direccion.calle);
  
  // Eliminar la propiedad telefono del objeto persona
  delete persona.telefono;
  
  // Eliminar el método despedir del objeto persona
  delete persona.despedir();
  