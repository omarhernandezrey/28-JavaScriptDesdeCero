// Métodos que modifican el array original (Mutabilidad)

// 1. Push: Agrega un elemento al final del array
const countries = ['USA', 'Canada,', 'UK'];
const newCountries = countries.push('Germany', 'Australia');
console.log(countries);
console.log(newCountries);

// 2. Pop: Elimina el último elemento del array y lo devuelve
const removedCountry = countries.pop()
console.log(countries);
console.log(removedCountry);
