// Enlace implicito -> Implicit binding

const house = {
    dogName: 'Fido',
    dogGreeting: function  () {
        console.log(`Hi, I'm ${this.dogName}`);
    }
}
house.dogGreeting()

// Enlace Explicito -> Explicit binding
function  dogGreeting() {
    console.log(`Hi, I'm ${this.dogName}`);
}

const newHouse = {
    dogName: 'Lucas',
    dogAge: 3
}

dogGreeting.call(newHouse)

function  newdogGreeting(owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live whith ${owner} on ${address}`);
}

const owner = 'Lucy'
const address = 'carrera2N#39d-16sur'
newdogGreeting().call(newHouse. owner, address)