/* 
    La estructura de control switch permite evaluar una expresión y ejecutar
    diferentes bloques de código según el valor de la expresión.
    
    switch (expresion) {
        case valor1:
            // Código a ejecutar si expresion es igual a valor1
            break;
        case valor2:
            // Código a ejecutar si expresion es igual a valor2
            break;
        case valor3:
            // Código a ejecutar si expresion es igual a valor3
            break;
        default:
            // Código a ejecutar si ninguna de las anteriores se cumple
            break;
    }
*/

// Ejemplo 1

// Se declara la variable expr con el valor "Naranjas".
let expr = "Naranjas";

// Se utiliza un bloque switch para evaluar la expresión expr.
switch (expr) {
    // En el bloque switch, se tienen varios casos (case) que comparan el valor de expr con diferentes opciones.
    case "Naranjas":
        // Si expr coincide con uno de los casos, se ejecuta el bloque de código correspondiente y se sale del switch con break.
        console.log("Las naranjas cuestan $20 el kilo");
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo");
        break;
    case "Platanos":
        console.log("Los plátanos están en $30 el kilo");
        break;
    case "Mangos":
    case "Papayas":
        // Si expr es "Mangos" o "Papayas", se muestra un mensaje compartido para ambas opciones.
        console.log("Los mangos y papayas cuestan $25 el kilo");
        break;
    // Si ninguno de los casos coincide, se ejecuta el bloque de código dentro de default.
    default:
        console.log(`Lo siento, no hay ${expr}`);
}

// Después del bloque switch, se muestra un mensaje final fuera de él.
console.log("¿Hay algo más que desees?");
