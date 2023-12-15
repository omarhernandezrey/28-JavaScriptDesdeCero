// Descuento de precios de un producto
function calculateDiscountedPrice(price, discountPercentage) {
    // Calcula el descuento en función del porcentaje proporcionado
    const discount = (price * discountPercentage) / 100;

    // Calcula el precio con el descuento aplicado
    const priceWithDiscount = price - discount;

    // Devuelve el precio con descuento
    return priceWithDiscount;
}

// Precio original del producto
const originalPrice = 100;

// Porcentaje de descuento
const discountPercentage = 20;

// Calcula el precio final con descuento utilizando la función
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

// Muestra la información en la consola
console.log('Original Price: $' + originalPrice);
console.log('Discount: ' + discountPercentage + '%');
console.log('Price with discount: $' + finalPrice);




// Definición de la función sumarRecibos y dividirlos para pagar entre dos

// Esta función recibe tres parámetros (luz, gas e internet) y devuelve la suma de estos.
function sumarRecibos(luz, gas, internet) {
    return luz + gas + internet;
}

// Se llama a la función sumarRecibos con valores específicos para luz, gas e internet,
// y el resultado se almacena en la variable sumaTotal.
const sumaTotal = sumarRecibos(246180, 103790, 70000);

// Se imprime en la consola la suma total de los recibos.
console.log(sumaTotal);

// Se calcula la mitad del total sumado y se almacena en la variable totalPagar.
const totalPagar = sumaTotal / 2;

// Se imprime en la consola el total a pagar después de dividir entre dos.
console.log(totalPagar);

// Se crea una cadena de texto con la suma total de los recibos para imprimir.
let imprimir = `La suma total de los recibos es: ${sumaTotal}`;

// Se crea otra cadena de texto con el total a pagar (dividido entre dos) para imprimir.
let imprimir2 = `Dividiendo entre los dos son: ${totalPagar}`;

// Se imprime en la consola las cadenas de texto previamente creadas.
console.log(imprimir);
console.log(imprimir2);

