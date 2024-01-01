// Ejercicio: Implementación de un Juego de Cartas
// Autor: Omar Hernández

// Baraja de cartas
const deck = ['♠', '♣', '♥', '♦', '♠', '♣', '♥', '♦', '♠', '♣', '♥', '♦'];

// Algoritmo Fisher-Yates para barajar la baraja
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Función para repartir cartas
function dealCards(numCards) {
    const dealtCards = deck.splice(0, numCards);
    return dealtCards;
}

// Barajar la baraja
shuffleDeck();

// Repartir cartas a cada jugador
const player1Hand = dealCards(3);
const player2Hand = dealCards(3);
const player3Hand = dealCards(3);

// Mostrar las manos de los jugadores
console.log('Mano del Jugador 1: ', player1Hand);
console.log('Mano del Jugador 2: ', player2Hand);
console.log('Mano del Jugador 3: ', player3Hand);
