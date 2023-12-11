// Creacion de string

const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas simples"
const terceraOpcion = `Comillas simples`

// 1. Concatenacion: Opcion +

const direccion  = 'Calle falsa 123'
const ciudad  = 'Sprinfild'
const direccionCompleta = 'Mi direccion cpompleta es: ' + direccion + ciudad
console.log(direccionCompleta);

const direccionCompletaConEspacios ='Mi direccion cpompleta es: ' + direccion + ' '+ ciudad
console.log(direccionCompletaConEspacios);

// 2. Concatenacion con Template Literals

const nombre = 'Omar'
const paiz = '🇨🇴lombia'
const presentacion = `hola, soy ${nombre} de ${paiz}`
console.log(presentacion);

// 3. Concatenacion: join()

const primeraParte = 'Me encanta '
const segundaParte = 'la gente de:'
const terceraParte = 'Colombia'
const pensamiento = [primeraParte, segundaParte,terceraParte]
console.log(pensamiento.join(' 💓 '));

// 3. Concatenacion: concat()

const hobbie1 = 'coorer'
const hobbie2 = 'leer'
const hobbie3 = 'estudiar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.');
console.log(hobbies);

// Caracteres de escape
//const whatDoitIdo = 'I'm software Engineer'

// 1. Escape alternativo
const escapeAlternativo = "I'm software Engineer"


// 2. Barra inverida
const escapeBarraInvertida='I\'m Software Engineer'


// 3. Template literals
const escapeComillaInvertida=`I\'m Software Engineer`

//Escritura de Strings Largos
/*
Las rosas son rojas,
Las violetas son azules,
Carecter inespererado,
en la liena 86.
*/

const  poema = 'Las rosas son rojas,\n' +
                'Las violetas son azules,\n' +
                'Carecter inespererado,\n' +
                'en la liena 86.'

console.log(poema);

const  poema2 = 'Las rosas son rojas,\n\
Las violetas son azules,\n\
Carecter inespererado,\n\
en la liena 86.'
console.log(poema2);


const  poema3 = `Las rosas son rojas,\n\
Las violetas son azules,\n\
Carecter inespererado,\n\
en la liena 86.`
console.log(poema3);