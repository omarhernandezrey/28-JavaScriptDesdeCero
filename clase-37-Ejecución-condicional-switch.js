/* switch (expresion) {
    case valor1:
        // codigo a jecutar
        break;
    case valor2:
         // codigo a jecutar
         break;
    case valor3:
        // codigo a jecutar
         break;
    default:
        // codigo a jecutar
        break;
} */

// Ejemplo 1

let expr = "Naranjas"

switch (expr) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo");
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo");
        break;
    case "Platanos":
        console.log("Los platanos esta en $30 kilo");
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los mangos y papayas cuestan $25 el kilo");
        break;
      default:
        console.log(`Lo siento no hay ${expr}`);
}

console.log("¿ Hay algo mas que deses?");
