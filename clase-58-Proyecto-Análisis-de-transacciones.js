// Ejercicio: Análisis de Transacciones

// Se define un array "transactions" que contiene información sobre varias transacciones.
const transactions = [
    { id: 1, description: 'Compra de comestibles', amount: -50 },
    { id: 2, description: 'Depósito de salario', amount: 2000 },
    { id: 3, description: 'Pago de factura de servicios', amount: -100 },
    { id: 4, description: 'Compra en línea', amount: -30 }
];

// 1. Calcular el Saldo Total

// Utilizando el método "reduce" para sumar todos los montos y obtener el saldo total.
const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
console.log(`El saldo total es ${totalBalance}`); // Salida: El saldo total es 1820

// 2. Encontrar la Transacción más Grande (Ingreso o Gasto)

// Utilizando el método "reduce" para encontrar la transacción con el monto más grande (ya sea ingreso o gasto).
const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    // Se compara el valor absoluto de los montos para considerar ingresos y gastos por igual.
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction;
}, transactions[0]);

console.log('Transacción más grande: ', largestTransaction);
// Salida: Transacción más grande: { id: 2, description: 'Depósito de salario', amount: 2000 }

// 3. Filtrar Transacciones de Compras

// Utilizando el método "filter" para obtener un nuevo array con las transacciones de compras (montos negativos).
const purchaseTransaction = transactions.filter(transaction => transaction.amount < 0);
console.log("Transacciones de Compras: ", purchaseTransaction);
// Salida: Transacciones de Compras: [ { id: 1, description: 'Compra de comestibles', amount: -50 },
//                                   { id: 3, description: 'Pago de factura de servicios', amount: -100 },
//                                   { id: 4, description: 'Compra en línea', amount: -30 } ]
