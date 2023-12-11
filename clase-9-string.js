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