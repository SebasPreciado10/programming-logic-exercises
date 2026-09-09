// Elimina el ÚLTIMO signo de exclamación: "Hi!!!" → "Hi!!"

// replace() reemplaza. /!$/ significa "¡ solo al final del string"
const remove = string => string.replace(/!$/, '')

console.log(remove('Hi!!!'))
console.log(remove('Hi!'))
console.log(remove('Hi'))
