// ============================================================
// EJERCICIO: Reversed - Invertir un string
// ============================================================
// 1. ¿QUÉ HACE?
//    Invierte el orden de las letras. "abc" -> "cba", "hello" -> "olleh".
//
// 2. ¿CÓMO FUNCIONA? (cadena de 3 métodos)
//    Los strings no tienen .reverse(), los arrays sí. Por eso:
//    - .split(""): convierte string en array de letras.
//      "abc".split("") -> ["a","b","c"]. Con "" vacío separa por letra.
//    - .reverse(): invierte el array EN SU LUGAR.
//      ["a","b","c"] -> ["c","b","a"].
//    - .join(""): convierte array de vuelta a string, pegando con "".
//      ["c","b","a"] -> "cba".
//
// 3. PASO A PASO con 'hello':
//    Paso 1: 'hello'.split("") -> ['h','e','l','l','o'].
//    Paso 2: .reverse() -> ['o','l','l','e','h'].
//    Paso 3: .join("") -> 'olleh'.
//    Paso 4: la arrow function lo devuelve directo.
//
// 4. ¿QUÉ SE LOGRA?
//    Entiendes que puedes convertir entre string<->array para usar
//    métodos que solo existen en uno de los dos.
// ============================================================

// 1. split("") → convierte string a array: ["a","b","c"]
// 2. reverse() → invierte el array: ["c","b","a"]
// 3. join("") → convierte array a string: "cba"
const solution = str => str.split("").reverse().join("")

console.log(solution('abc'))
console.log(solution('hello'))
