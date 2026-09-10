// Convierte código ASCII a carácter: 65 → "A", 97 → "a".
// String.fromCharCode(c) es la función nativa que hace la conversión.

// fromCharCode() convierte número ASCII a carácter
const getChar = c => String.fromCharCode(c)

console.log(getChar(55))
console.log(getChar(65))
console.log(getChar(97))
