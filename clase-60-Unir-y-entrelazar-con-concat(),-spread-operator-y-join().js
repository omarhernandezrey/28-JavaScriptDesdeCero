// Methods that DO NOT modify the original array (Immutability).
// concat()
// - Way 1: Combine with concat()
const morseCode1 = ['....', '---']; // H O
const morseCode2 = ['.-..', '.-']; // L A

// Using the "concat" method to combine two arrays without modifying the originals.
const morseCodeMessage = morseCode1.concat(morseCode2);

console.log(morseCode1); // ['....', '---']
console.log(morseCode2); // ['.-..', '.-']
console.log('Concatenated Morse Code Message: ', morseCodeMessage);

// - Way 2: Combine with concat()
const morseCodeMessage2 = [].concat(morseCode1, morseCode2);

console.log(morseCode1); // ['....', '---']
console.log(morseCode2); // ['.-..', '.-']
console.log('Concatenated Morse Code Message: ', morseCodeMessage2);

// Combine with Spread Operator
function combineMorseMessage(morseCode1, morseCode2) {
    console.log([...morseCode1, ...morseCode2]);
}
combineMorseMessage(morseCode1, morseCode2);

// Attempt to combine with different data types (numbers and string)
const numbers = [1, 2, 3];
const string = 'string';
combineMorseMessage(numbers, string); // [1, 2, 3, 's', 't', 'r', 'i', 'n', 'g']

// join()
// Join all elements of an Array into a single String.

// Using the "join" method to join all elements of the array with the delimiter ' e '.
const morseCodeMessageString = morseCodeMessage.join(' e ');
console.log(morseCode1); // ['....', '---']
console.log(morseCode2); // ['.-..', '.-']
console.log(`Joined Morse Code Message: ${morseCodeMessageString}`);
