// Creación de strings con diferentes métodos

// Opciones para crear un string
const primeraOpcion = 'Comillas simples';
const segundaOpcion = "Comillas simples";
const terceraOpcion = `Comillas simples`;

// 1. Concatenación usando el operador +
const direccion = 'Calle falsa 123';
const ciudad = 'Springfield';
const direccionCompleta = 'Mi dirección completa es: ' + direccion + ' ' + ciudad;
console.log(direccionCompleta);

// Concatenación con Template Literals
const nombre = 'Omar';
const pais = '🇨🇴 Colombia';
const presentacion = `Hola, soy ${nombre} de ${pais}`;
console.log(presentacion);

// 3. Concatenación usando join()
const primeraParte = 'Me encanta ';
const segundaParte = 'la gente de:';
const terceraParte = 'Colombia';
const pensamiento = [primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join(' 💓 '));

// 4. Concatenación usando concat()
const hobbie1 = 'correr';
const hobbie2 = 'leer';
const hobbie3 = 'estudiar';
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.');
console.log(hobbies);

// Caracteres de escape y escritura de strings largos

// 1. Escape alternativo
const escapeAlternativo = "I'm software Engineer";

// 2. Barra invertida
const escapeBarraInvertida = 'I\'m Software Engineer';

// 3. Template literals
const escapeComillaInvertida = `I'm Software Engineer`;

// Escritura de Strings Largos
const poema =
  'Las rosas son rojas,\n' +
  'Las violetas son azules,\n' +
  'Carácter inesperado,\n' +
  'en la línea 86.';
console.log(poema);

const poema2 =
  'Las rosas son rojas,\n\
Las violetas son azules,\n\
Carácter inesperado,\n\
en la línea 86.';
console.log(poema2);

const poema3 = `Las rosas son rojas,\n\
Las violetas son azules,\n\
Carácter inesperado,\n\
en la línea 86.`;
console.log(poema3);
