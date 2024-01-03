// Programa de Verificación de Ganador de Sorteo

const winningParticipants = [
    { id: 1, name: 'Jennifer', ticketNumber: 1 },
    { id: 8, name: 'Michael', ticketNumber: 8 },
    { id: 15, name: 'Emily', ticketNumber: 15 },
    { id: 47, name: 'Charlie', ticketNumber: 47 }
];

  // Función para encontrar al ganador por nombre
function findWinnerByName(name) {
    const winner = winningParticipants.find(participant => participant.name === name);
    return winner || 'No winner found with that name.';
}

  // Función para encontrar el índice del ganador por número de boleto
function findIndexWinnerByTicket(ticketNumber) {
    const index = winningParticipants.findIndex(participant => participant.ticketNumber === ticketNumber);
    return index !== -1 ? index : 'No winner found with that ticket number.';
}

  // Función para mostrar la información del ganador
function displayWinnerInformation(winner) {
    if (winner !== undefined && winner !== null && winner !== 'No winner found with that name.') {
    console.log('Información del ganador: ', winner);
    } else {
    console.log('No se encontró al ganador.');
    }
}

  // Buscar al ganador por nombre (Emily en este caso)
const winnerByName = findWinnerByName('Emily');

  // Buscar el índice del ganador por número de boleto (Número 8 en este caso)
const indexWinnerByTicket = findIndexWinnerByTicket(8);

  // Mostrar la información del ganador por nombre
displayWinnerInformation(winnerByName);

  // Mostrar el índice del ganador por número de boleto
console.log('Índice del ganador por número de boleto: ', indexWinnerByTicket);
