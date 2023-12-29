// Métodos que modifican el array original (Mutabilidad)
// shift() - Elimina el primer elemento de un array y devuelve ese elemento

const colors = ['yellow', 'blue', 'red'];
const removedColor = colors.shift();
console.log(colors); // [ 'blue', 'red' ]
console.log(removedColor); // yellow

// unshift() - Agrega elementos al principio de un array
const newColorsCount = colors.unshift('pink', 'purple');
console.log(colors); // [ 'pink', 'purple', 'blue', 'red' ]
console.log(newColorsCount); // 4

// Función para gestionar una lista de reproducción
function managePlayList(playList, newSong) {
    playList.shift(); // Elimina la primera canción
    playList.unshift(newSong); // Agrega una nueva canción al principio
    return playList;
}

// Ejemplo de lista de reproducción inicial y adición de nueva canción
const initialPlayList = ['Sweater Weather', 'What you Know', 'Eventually'];
const newSongToAdd = 'The Adults Are Talking';

// Actualización de la lista de reproducción y visualización
const updatedPlayList = managePlayList(initialPlayList, newSongToAdd);
console.log('Lista de reproducción inicial: ', initialPlayList);
console.log('Nueva canción a añadir: ', newSongToAdd);
console.log('Lista de reproducción actualizada: ', updatedPlayList);
