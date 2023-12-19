// Función para personalizar el mensaje de despedida
const personalizeMessage = () => 'Goodbye everybody! ✨'

// Constructor de objetos Rocket usando una función tradicional
function Rocket(name, ownMessage) {
    this.name = name;
    this.launchMessage = ownMessage;
}

// Crear instancias de objetos Rocket usando el constructor
const falcon9Rocket = new Rocket('Falcon 9', personalizeMessage);
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizeMessage);

// Imprimir el nombre y el mensaje de lanzamiento de Falcon 9
console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());

// Función para crear objetos Rocket usando una arrow function
const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
});

// Función para personalizar el mensaje de lanzamiento con una arrow function
const personalizeMessageForArrowFunction = () => 'Successful launch! 🎉';

// Crear una instancia de un objeto Rocket usando la arrow function
const falcon9Rocket1 = RocketWithArrowFunction('Falcon 9', personalizeMessageForArrowFunction);

// Imprimir el nombre y el mensaje de lanzamiento de Falcon 9 (versión con arrow function)
console.log(falcon9Rocket1.name);
console.log(falcon9Rocket1.launchMessage());
