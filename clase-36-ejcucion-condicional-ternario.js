// Evaluación de la edad para permitir el acceso
let mensaje;  // Variable para almacenar el mensaje de acceso
const edad = 20;
// Uso de un bloque if-else para determinar el mensaje según la edad
if (edad >= 18) {
    mensaje = "Es mayor de edad, puede pasar";
} else {
    mensaje = "No es mayor de edad, no puede pasar";
}
console.log(mensaje);
// Uso de la operación ternaria para lograr lo mismo de manera más concisa
const edad1 = 20;
const mensaje1 = edad1 >= 18 ? "Es mayor de edad, puede pasar" : "No es mayor de edad, no puede pasar";
console.log(mensaje1);
