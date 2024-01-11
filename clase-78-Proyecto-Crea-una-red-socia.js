/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y
contraseña son correctos.
3. Si el usuario y la contraseña son correctos, el sistema
debe mostrar un mensaje de bienvenida y mostrar el timeline
del usuario.
4. Si el usuario o la contraseña son incorrectos, el sistema
debe mostrar un mensaje de error y no mostrar ningun timeline.
*/

// Base de datos de usuarios
const usersDatabase = [
    { username: "andres", password: "123" },
    { username: "caro", password: "456" },
    { username: "mariana", password: "789" },
];

// Línea de tiempo de usuarios
const usersTimeline = [
    { username: "Estefany", timeline: "Me encanta Javascript!" },
    { username: "Oscar", timeline: "Bebeloper es lo mejor!" },
    { username: "Mariana", timeline: "A mí me gusta más el café que el té" },
    { username: "Andres", timeline: "Yo hoy no quiero trabajar" },
];

// Pedir al usuario que ingrese su usuario y contraseña
const userName = prompt("Cual es tu usuario");
let passWord = prompt(`Ingrese la contraseña para ${userName}`);

// Función para verificar si el usuario y la contraseña son correctos
function usuarioExistente(userName, passWord) {
    // Bucle for para recorrer la base de datos de usuarios
    for (let i = 0; i < usersDatabase.length; i++) {
        // Condición para verificar si el usuario y la contraseña coinciden
        if (usersDatabase[i].username === userName && usersDatabase[i].password === passWord) {
            console.log("Es correcto"); // Mensaje si la autenticación es exitosa
            return; // Se añadió para salir de la función después de encontrar una coincidencia
        } else {
            console.log("No es correcto"); // Mensaje si la autenticación falla después de recorrer toda la base de datos
        }
    }
}

// Llamada a la función para verificar el usuario
usuarioExistente(userName, passWord);
