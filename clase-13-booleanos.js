const isActive = true;
const hasPermission = false;

// Conversión Implícita
const result = 5 > 3;  // Resultado de una comparación
console.log(result);

const name = 'Platzi';
console.log(!!name);  // Conversión implícita a boolean usando el operador lógico NOT (!)

// Conversión Explícita
const value = 0;
const otherValue = -24;
const explicitBoolean = Boolean(otherValue);  // Conversión explícita a boolean usando la función Boolean()
console.log(explicitBoolean);

