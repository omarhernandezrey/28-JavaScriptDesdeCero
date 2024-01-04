// Methods that DO NOT modify the original array (Immutability).

// every()
// The "every" method checks if all elements in the array satisfy a given condition.
const ages = [21, 25, 30, 19, 22];

// Check if all ages in the array are greater than 20.
const allAreAdults = ages.every(age => age > 20);

console.log(ages); // [21, 25, 30, 19, 22]
console.log(allAreAdults); // false (not all ages are greater than 20)

// some()
// The "some" method checks if at least one element in the array satisfies a given condition.
const atLeastOneIsOver30 = ages.some(age => age > 30);

console.log(ages); // [21, 25, 30, 19, 22]
console.log(atLeastOneIsOver30); // true (there is at least one age greater than 30)
