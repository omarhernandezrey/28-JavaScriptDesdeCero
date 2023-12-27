/*
Juguemos a adivinar la palabra.
El usuario tiene tres intentos
Requerimientos:
- El juego debe tener una palabra oculta.
- El jugo puede dar 1 pista de la palabra.
- El usuario debe ingresar una suposición.
- El juego debe verificar si la suposición del usuario es correcta.
- El juego debe tener un número limitado de intentos.
- El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos.
*/

let palabraOculta = "javascript";
let intentos = 3;

// Función para verificar si la suposición del usuario es correcta
function verificarSuposicion(suposicion, palabraOculta) {
    return suposicion.toLowerCase() === palabraOculta;
}

// Función principal para jugar a adivinar la palabra
function jugarAdivinaLaPalabra() {
    alert("Bienvenido a jugar la palabra oculta");
    alert("Tienes tres intentos para adivinar la palabra");
    alert("-pista- La palabra oculta es un lenguaje de programación!");

    while (intentos > 0) {
        let suposicion = prompt("Adivina la palabra ");
        if (verificarSuposicion(suposicion, palabraOculta)) {
            alert("!Correcto¡ Has adivinado la palabra. 🎉");
            break;
        } else {
            intentos--;
            if (intentos > 0) {
                alert(`Incorrecto ⚠️ Pero aún tienes ${intentos} intentos restantes`);
            } else {
                alert(`Perdiste 😪 La palabra era ${palabraOculta}`);
            }
        }
    }
}

// Llama a la función para iniciar el juego
jugarAdivinaLaPalabra();