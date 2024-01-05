// Arrays Bidimensionales
let array1D = [1, 2, 3] // Declaración de un array unidimensional
var array2D = [[4,5], [6,7]] // Declaración de un array bidimensional
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matrix[1][2] = 10
console.log(matrix) // Modificación de un valor en la matriz

let value = matrix[0][1]
console.log(value) // Acceso y asignación de un valor de la matriz

// Operaciones con la matriz
for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j]) // Iteración y acceso a cada elemento de la matriz
    }
}

// Función para encontrar un elemento en la matriz
function findElement(matrix, element) {
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === element) {
                return true
            } 
        }
    }
    return false
}
console.log(findElement(matrix, 5)) // Búsqueda de un elemento en la matriz

// Función para duplicar la matriz
function duplicateMatrix(matrix) {
    let newMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = [...matrix[i]]
    }
    return newMatrix
}
console.log(duplicateMatrix(matrix)) // Duplicación de la matriz

// Función para sumar los elementos de una fila o columna
function sumRowCol(matrix, rowOrColumn) {
    let total = 0
    for (let i = 0; i < matrix[rowOrColumn].length; i++) {
        total += matrix[rowOrColumn][i]
    }
    return total
}

console.log(sumRowCol(matrix, 0)) // Sumatoria de los elementos de la fila 0
console.log(sumRowCol(matrix, 1)) // Sumatoria de los elementos de la columna 1



