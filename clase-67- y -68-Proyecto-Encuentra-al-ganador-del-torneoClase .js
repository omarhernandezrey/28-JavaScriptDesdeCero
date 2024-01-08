// Exercise: Tournament winner

// Función para determinar al ganador de un torneo
function ganadorTorneo(competencias, resultados) {
    // Objeto para almacenar los puntajes de cada equipo
    const puntajes = {};
    // Variable para almacenar al ganador general
    let ganador = '';

    // Iterar sobre las competencias y resultados
    for (let i = 0; i < competencias.length; i++) {
        // Obtener los equipos locales y visitantes de la competencia actual
        const [local, visitante] = competencias[i];
        // Determinar el equipo ganador según el resultado (0: visitante, 1: local)
        const equipoGanador = resultados[i] === 0 ? visitante : local;

        // Actualizar los puntajes del equipo ganador
        puntajes[equipoGanador] = (puntajes[equipoGanador] || 0) + 3;

        // Actualizar al ganador general si es necesario
        if (!ganador || puntajes[equipoGanador] > puntajes[ganador]) {
            ganador = equipoGanador;
        }
    }

    // Devolver al ganador general del torneo
    return ganador;
}

// Definición de competencias y resultados
const competencias = [['JavaScript', 'C#'], ['C#', 'Python'], ['Python', 'JavaScript']];
const resultados = [0, 0, 1];

// Llamar a la función y mostrar el ganador del torneo
console.log(ganadorTorneo(competencias, resultados));
