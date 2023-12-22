// Definición de la función constructora PowerpuffGirl para crear objetos Powerpuff Girl
function PowerpuffGirl(name, color, superpower) {
    this.name = name;
    this.color = color;
    this.superpower = superpower;
    this.isLeader = false;

    // Método para mostrar la información del personaje
    this.displayInfo = function () {
        console.log(`Powerpuff Girl Information:
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
      `);
    };

    // Método para convertir al personaje en líder
    this.becomeLeader = function () {
        this.isLeader = true;
        console.log(`${this.name} has become the leader of the Powerpuff Girls!`);
    };
}

// Creación de objetos Powerpuff Girl
const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice Breath');
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super Strength');
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Flight');

// Mostrar información de cada Powerpuff Girl
blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

// Convertir a Blossom en líder
blossom.becomeLeader();

// Mostrar información actualizada después de convertir a Blossom en líder
blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();
