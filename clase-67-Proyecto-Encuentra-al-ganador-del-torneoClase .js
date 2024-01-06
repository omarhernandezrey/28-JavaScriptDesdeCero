// Exercise: Tournament winner

function tournamentWinner(competitions, result) {
    for (let i = 0; i < competitions.length; i++) {
        const [home, away] = competitions[i]
        const winningTeam = result[i] === 0 ? away : home
    }
}

const competitions = [
    ['JavaScript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'JavaScript'],
]

const result = [0, 0, 1]
tournamentWinner(competitions, result)
