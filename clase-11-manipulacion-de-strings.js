// Strings: primitivos y objetos

// Strings primitivos
const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String('Soy un string primitivo también');
console.log(typeof stringPrimitivoTambien);

// Strings objeto
const stringObjeto = new String('Soy un string objeto');
console.log(typeof stringObjeto);

// Acceder a caracteres
const saludo = 'Hola. ¿Cómo estás?';
console.log(saludo[3]); // Acceder al cuarto caracter (cero indexado)
console.log(saludo.charAt(3)); // Método charAt para acceder al cuarto caracter
console.log(saludo.indexOf('C')); // Encontrar la posición de 'C'
console.log(saludo[7]); // Acceder al octavo caracter
console.log(saludo.indexOf('Como')); // Encontrar la posición de la subcadena 'Como'
console.log(saludo.indexOf('como')); // Encontrar la posición de la subcadena 'como' (no encontrará)
console.log(saludo.lastIndexOf('o')); // Última ocurrencia de 'o'
console.log(saludo.slice(3, 5)); // Extraer una porción del string (desde el índice 3 hasta el 5, sin incluirlo)
console.log(saludo.length); // Longitud del string
console.log(saludo.toLocaleUpperCase()); // Convertir a mayúsculas
console.log(saludo.toLocaleLowerCase()); // Convertir a minúsculas

// Métodos adicionales
const saludoDividido = saludo.split(' '); // Dividir el string en un array usando el espacio como separador
console.log(saludoDividido);
console.log(saludoDividido[1]); // Acceder a la segunda palabra

const saludosConEspacios = ' Hola mundo ';
const saludosSinEspacios = saludosConEspacios.trim(); // Eliminar espacios al inicio y al final
console.log(saludosSinEspacios);

const saludoOriginal = 'Hola Mundo';
const nuevoSaludo = saludoOriginal.replace('Mundo', '🌎'); // Reemplazar 'Mundo' con '🌎'
console.log(nuevoSaludo);

