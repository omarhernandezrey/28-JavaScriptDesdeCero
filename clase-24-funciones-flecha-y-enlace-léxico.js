// Definición de la función de saludo tradicional
const greeting = function(name) {
    return `Hi, ${name}`;
  }
  
  // Arrow function con retorno explícito
  const newGreeting = (name) => {
    return `Hi, ${name}`;
  }
  
  // Arrow function con retorno implícito
  const newGreetingImplicit = name => `Hi, ${name}`;
  const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`;
  
  // Objeto con un personaje y dos métodos de saludo
  const functionalCharacter = {
    name: 'Uncle Ben',
    
    // Método de saludo con función tradicional
    messageWithTraditionalFunction: function(message) {
      console.log(`${this.name} says: ${message}`);
    },
    
    // Método de saludo con arrow function (ten en cuenta el comportamiento del this)
    messageWithArrowFunction: (message) => {
      console.log(`${this.name} says: ${message}`);
    }
  }
  
  // Llamadas a los métodos de saludo
  functionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility.');
  functionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.');
  