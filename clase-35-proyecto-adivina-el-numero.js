// Juego de adivinar el número secreto

// Genera un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10 + 1);

// Solicita al jugador que adivine el número secreto
const numeroJugador = parseInt(
    prompt("Adivina el número secreto entre el 1 y el 10")
);
console.log(`Este es el número con el que juegas: ${numeroJugador}`);

// Compara el número del jugador con el número secreto y muestra mensajes según el resultado
if (numeroJugador === numeroSecreto) {
    console.log("¡Enhorabuena! Has acertado");
} else if (numeroJugador < numeroSecreto) {
    console.log("El número es demasiado bajo, intenta de nuevo");
} else if (numeroJugador > numeroSecreto) {
    console.log("El número es demasiado alto, intenta de nuevo");
} else {
    console.log("Error en la comparación, intenta de nuevo");
}
