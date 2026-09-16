// ============================================================
// EJERCICIO: CountLowerCase - Contar minúsculas
// ============================================================
// 1. ¿QUÉ HACE?
//    Cuenta cuántas letras minúsculas a-z hay en un string.
//    Ejemplo: 'abcABC' -> 3 (solo a,b,c).
//
// 2. ¿CÓMO FUNCIONA?
//    - Regex /[a-z]/g: patrón de búsqueda.
//      [a-z] = cualquier letra de a a z minúscula.
//      g = flag global, busca TODAS, no solo la primera.
//    - .match(regex): devuelve array con coincidencias o null si no hay.
//      'abcABC'.match(/[a-z]/g) -> ['a','b','c'].
//      ''.match(...) -> null.
//    - `letter ? letter.length : 0`: si es null (falsy) devuelve 0
//      para no romper con error.
//    - Versión moderna: `?.` (optional chaining) no falla si es null,
//      `?? 0` (nullish) pone 0 cuando es null/undefined.
//
// 3. PASO A PASO con 'abcABC':
//    Paso 1: str.match(/[a-z]/g) recorre y guarda ['a','b','c'].
//    Paso 2: letter existe -> devuelve letter.length -> 3.
//    Caso '': match devuelve null -> entra : 0 -> devuelve 0.
//
// 4. ¿QUÉ SE LOGRA?
//    Aprendes regex básico, match, y cómo protegerte de null.
// ============================================================

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
