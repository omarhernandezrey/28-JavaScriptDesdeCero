// Ejercicio: Manejo de una pila (Stack)

// Se declara un array vacío que representará el carrito de libros.
let bookCart = [];

// Se declaran constantes para representar acciones sobre el carrito.
const ADD_TO_CART_ACTION = 'addToCart';
const REMOVE_FROM_CART_ACTION = 'removeFromCart';
const VIEW_CART_ACTION = 'viewCart';

// Función para ver el contenido actual del carrito.
function viewCart() {
    console.log('Carrito actual de libros: ', bookCart);
}

// Función para realizar diversas acciones en el carrito según la acción proporcionada.
function performCartActions(action, newBook) {
    switch (action) {
        // Caso: Agregar al carrito
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook);
            break;

        // Caso: Eliminar del carrito
        case REMOVE_FROM_CART_ACTION:
            if (bookCart.length === 0) {
                console.log('El carrito está vacío. No se puede eliminar ningún libro.');
            } else {
                const removedBook = bookCart.pop();
                console.log(`Libro eliminado del carrito: "${removedBook}"`);
            }
            break;

        // Caso: Ver el contenido del carrito
        case VIEW_CART_ACTION:
            viewCart();
            break;

        // Acción por defecto en caso de una opción no válida
        default:
            console.log('Acción no válida. Por favor, seleccione una opción válida.');
    }
}

// Ejecución de varias acciones en el carrito con explicaciones.
performCartActions(ADD_TO_CART_ACTION, 'Piensa como un monje');
performCartActions(VIEW_CART_ACTION);
performCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy.');
performCartActions(VIEW_CART_ACTION);
performCartActions(REMOVE_FROM_CART_ACTION);
performCartActions(VIEW_CART_ACTION);
