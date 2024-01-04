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
//-------------------------------------------------------------------------------------------------------//

// 4. Encontrar una Transacción por Descripción

// Utilizando el método "find" para encontrar la primera transacción con una descripción específica.
const specificTransaction = transactions.find(transaction => transaction.description === 'Compra en línea');
console.log("La transacción con descripción 'Compra en línea': ", specificTransaction);
// Salida: La transacción con descripción 'Compra en línea': { id: 4, description: 'Compra en línea', amount: -30 }

// 5. Encontrar el Índice de una Transacción por Monto

// Utilizando el método "findIndex" para encontrar el índice de la primera transacción con un monto específico.
const indexTransactionWithAmount = transactions.findIndex(transaction => transaction.amount === -30);
console.log('Índice de la transacción con monto -30: ', indexTransactionWithAmount);
// Salida: Índice de la transacción con monto -30: 3

// 6. Actualizar Descripciones de Transacciones

// Utilizando el método "forEach" para actualizar las descripciones de las transacciones (agregando 'Expense' o 'Income' según el monto).
transactions.forEach(transaction => {
    if (transaction.amount < 0) {
        transaction.description += ` Gasto: ${transaction.description}`;
    } else {
        transaction.description += ` Ingreso: ${transaction.description}`;
    }
});

console.log('Lista actualizada de las transacciones: \n', transactions);
// Salida: Lista actualizada de las transacciones:
// [ { id: 1, description: 'Compra de comestibles Gasto: ', amount: -50 },
//   { id: 2, description: 'Depósito de salario Ingreso: ', amount: 2000 },
//   { id: 3, description: 'Pago de factura de servicios Gasto: ', amount: -100 },
//   { id: 4, description: 'Compra en línea Gasto: ', amount: -30 } ]
