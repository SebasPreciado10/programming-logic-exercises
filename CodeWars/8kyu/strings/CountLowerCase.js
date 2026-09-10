// Cuenta letras minúsculas a-z.
// match(/[a-z]/g) regex: [a-z]=minúscula, g=todas. Devuelve array o null.
// letter ? length : 0 evita error si es null. Versión arrow usa ?. (optional chaining) y ?? 0.

function lowercaseCount(str){
    // match(/[a-z]/g) busca todas las minúsculas, devuelve array o null
    let letter = str.match(/[a-z]/g)
    // Si hay coincidencias, cuenta .length; si no, devuelve 0
    return letter ? letter.length : 0
}

// arrow function (?. evita error si es null, ?? devuelve 0 si es null)
const lowercaseCountArrow = str => str.match(/[a-z]/g)?.length ?? 0;

console.log(lowercaseCount(''))
console.log(lowercaseCountArrow('abcABC'))
