// Operaciones de comparación

/* 
==       Igualdad (sin verificar tipo de dato)
===      Igualdad estricta (verificando tipo de dato)
!=      Desigualdad (sin verificar tipo de dato) - Notación alternativa: <>
!==     Desigualdad estricta (verifica tipo de dato)
>
<
>=
<=
*/

const a = 10;
const b = 20;
const c = "10";

// Comparación de igualdad (sin verificar tipo de dato)
console.log(a == b); // false

// Comparación de igualdad estricta (verificando tipo de dato)
console.log(a === c); // false

// Desigualdad (sin verificar tipo de dato)
console.log(a != b); // true

// Desigualdad estricta (verifica tipo de dato)
console.log(a !== c); // true

// Mayor que
console.log(a > c); // false

// Menor que
console.log(a < c); // true

// Comparación mayor o igual que
console.log(a >= b); // false

// Comparación menor o igual que
console.log(a <= c); // true

// Comparación menor o igual que
console.log(a <= b); // true

// Igualdad (sin verificar tipo de dato)
console.log(2 == '2'); // true

// Igualdad estricta (verificando tipo de dato)
console.log(2 === '2'); // false

// Desigualdad (sin verificar tipo de dato)
console.log(2 != '2'); // false

// Desigualdad estricta (verifica tipo de dato)
console.log(2 !== '2'); // true

// Mayor que
console.log(5 > 3); // true

// Menor que
console.log(5 < 3); // false

// Mayor o igual que
console.log(5 >= 5); // true

// Menor o igual que
console.log(5 <= 3); // false
