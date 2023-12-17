// Enlace implícito · Implicit binding

// Objeto 'house' con una propiedad 'dogName' y un método 'dogGreeting'.
const house = {
    dogName: 'Fido',
    dogGreeting: function () {
      console.log(`Hi, I'm ${this.dogName}`);
    }
}

// Llamada al método 'dogGreeting' usando el enlace implícito.
house.dogGreeting();

// Enlace explícito · Explicit binding

// Función 'dogGreeting' que se utilizará con el enlace explícito.
function dogGreeting() {
    console.log(`Hi, I'm ${this.dogName}`);
}

// Nuevo objeto 'newHouse' con una propiedad 'dogName'.
const newHouse = {
    dogName: 'Coconut',
}

// Llamada a la función 'dogGreeting' usando el método 'call' para establecer el contexto al objeto 'newHouse'.
dogGreeting.call(newHouse);

// Función 'newDogGreeting' que toma dos parámetros ('owner' y 'address') e imprime un mensaje con el nombre del perro y la información proporcionada.
function newDogGreeting(owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

// Definición de valores para 'owner' y 'address'.
const owner = 'Lucy';
const address = 'Avenue 123';

// Llamada a la función 'newDogGreeting' usando el método 'call' para establecer el contexto al objeto 'newHouse' y pasar los valores de 'owner' y 'address' como argumentos adicionales.
newDogGreeting.call(newHouse, owner, address);
