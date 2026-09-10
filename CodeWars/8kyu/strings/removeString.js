// Elimina el ÚLTIMO ! : "Hi!!!" → "Hi!!". Si no termina en !, no cambia.
// replace(/!$/, '') regex: ! + $=solo al final. Lo reemplaza por vacío.

// replace() reemplaza. /!$/ significa "¡ solo al final del string"
const remove = string => string.replace(/!$/, '')

console.log(remove('Hi!!!'))
console.log(remove('Hi!'))
console.log(remove('Hi'))
