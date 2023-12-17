const owner = 'Lucy';
const address = '123 Avenue';

// Función 'dogGreeting' que imprime un mensaje con el nombre del perro, el propietario y la dirección.
function dogGreeting(owner, address) {
  console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

// Objeto 'newHouse' con una propiedad 'dogName'.
const newHouse = {
  dogName: 'Coconut',
}

// Llamada a la función 'dogGreeting' usando el método 'call' para establecer el contexto al objeto 'newHouse' y pasar los valores de 'owner' y 'address' como argumentos.
dogGreeting.call(newHouse, owner, address);

// Llamada a la función 'dogGreeting' usando el método 'apply' para establecer el contexto al objeto 'newHouse' y pasar un array ('necessaryValues') que contiene los valores de 'owner' y 'address' como argumentos.
const necessaryValues = [owner, address];
dogGreeting.apply(newHouse, necessaryValues);

// Uso de 'bind' para crear una nueva función ('bindingWithBind') con el contexto establecido en 'newHouse' y los valores de 'owner' y 'address' ya proporcionados.
const bindingWithBind = dogGreeting.bind(newHouse, owner, address);

// Llamada a la función creada con 'bind'.
bindingWithBind(); // Muestra "Hi, I'm Coconut and I live with Lucy on 123 Avenue"
