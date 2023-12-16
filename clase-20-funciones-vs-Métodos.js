// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback
function a() {}

// Función b recibe una función como argumento (callback).
function b(callback) {
    // Se llama a la función recibida como argumento.
    callback();
}

// Se pasa la función a como argumento a la función b.
b(a);

// Retornar funciones
function a() {
    // Función b es definida dentro de la función a.
    function b() {}
    // La función a retorna la función b.
    return b;
}

// Asignar funciones a variables -> Expresión de función
// Se crea una variable a y se le asigna una función anónima.
const a = function () {};

// Tener propiedades y métodos
function a() {}

// Se crea un objeto vacío.
const obj = {};

// Se llama a la función a y se asigna su contexto (this) al objeto obj.
a.call(obj);

// Anidar funciones -> Nested functions
function a() {
    // Función b está definida dentro de la función a.
    function b() {
        // Función c está definida dentro de la función b.
        function c() {}
        // Se llama a la función c.
        c();
    }
    // Se llama a la función b.
    b();
}

// Se llama a la función a, que a su vez llama a las funciones b y c.
a();

// Es posible almacenar funciones en objetos?
const rocket = {
    name: 'Falcon 9',
    // Se define un método launchMessage en el objeto rocket.
    launchMessage: function launchMessage() {
        console.log('🔥');
    }
}

// Se llama al método launchMessage del objeto rocket.
rocket.launchMessage();

//________________________________________________
