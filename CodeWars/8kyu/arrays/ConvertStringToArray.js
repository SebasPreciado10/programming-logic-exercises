// Convierte una frase en array de palabras: 'hello how are yo' -> ['hello','how','are','yo']
// string.split(" ") corta el string cada vez que encuentra un espacio " " y devuelve un array.
// Arrow function: recibe `string` y devuelve el resultado directo sin return.
const stringToArray = string => string.split(" ")

console.log(stringToArray('hello how are yo'))