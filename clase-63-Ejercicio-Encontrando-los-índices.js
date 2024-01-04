// Ejercicio - Encontrar Índices de Subcadenas

// Definir un array de cadenas
const arrayDeCadenas = ['manzana', 'banana', 'naranja', 'uva', 'banana', 'kiwi'];
// Cadena objetivo que queremos buscar en el array
const objetivo = 'banana';

// Función para encontrar índices de la cadena objetivo en el array
function encontrarIndicesDeCadenaEnArray(array, objetivo) {
    // Inicializar el resultado como un objeto con valores predeterminados
    const resultado = {
        incluyeCadenaObjetivo: false,
        primerIndiceDeOcurrencia: -1,
        ultimoIndiceDeOcurrencia: -1,
    };

    // Iterar sobre cada elemento del array
    array.forEach((elemento, indice) => {
        // Verificar si el elemento incluye la cadena objetivo
        if (elemento.includes(objetivo)) {
            // Actualizar el resultado si se encuentra la cadena objetivo
            resultado.incluyeCadenaObjetivo = true;
            resultado.primerIndiceDeOcurrencia = array.indexOf(objetivo);
            resultado.ultimoIndiceDeOcurrencia = array.lastIndexOf(objetivo);
        }
    });

    // Devolver el resultado
    return resultado;
}

// Llamar a la función con el array y la cadena objetivo
const resultado = encontrarIndicesDeCadenaEnArray(arrayDeCadenas, objetivo);
// Imprimir el resultado en la consola
console.log(resultado); // { incluyeCadenaObjetivo: true, primerIndiceDeOcurrencia: 1, ultimoIndiceDeOcurrencia: 4 }
