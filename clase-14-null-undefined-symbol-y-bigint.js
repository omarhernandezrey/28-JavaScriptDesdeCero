// Null
const snoopy = null;
console.log(snoopy);  // Salida: null
console.log(typeof snoopy);  // Salida: object (es un comportamiento extraño en JavaScript)

// Undefined
let name;
console.log(name);  // Salida: undefined

// Symbol
const uniqueId = Symbol('id');
const Symbol1 = Symbol(1);
const Symbol2 = Symbol(1);
console.log(Symbol1 === Symbol2);  // Salida: false (los símbolos son únicos)

const ID = Symbol('id');
let user = {};
user[ID] = '1234';  // Uso de un símbolo como clave en un objeto
console.log(user);  // Salida: { [Symbol(id)]: '1234' }

// BigInt
const bigNumber = 165466556552656565956263596565555n;
console.log(bigNumber);  // Salida: 165466556552656565956263596565555n

const numberOfParticlesInTheUniverse = 10000000000000000n;
console.log(numberOfParticlesInTheUniverse);  // Salida: 10000000000000000n
