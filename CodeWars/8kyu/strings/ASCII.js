// ============================================================
// EJERCICIO: ASCII - Código a carácter
// ============================================================
// 1. ¿QUÉ HACE?
//    Convierte un código ASCII numérico a su carácter.
//    Ejemplo: 65 -> "A", 97 -> "a", 55 -> "7".
//
// 2. ¿CÓMO FUNCIONA?
//    - String.fromCharCode(c): función nativa de JS.
//      Recibe un número (0-65535) y devuelve el carácter de esa
//      posición en la tabla ASCII/Unicode.
//    - Arrow de una línea: c => String.fromCharCode(c).
//
// 3. PASO A PASO con getChar(65):
//    Paso 1: c=65 entra.
//    Paso 2: String.fromCharCode(65) busca en la tabla -> "A".
//    Paso 3: devuelve "A", console.log lo muestra.
//
// 4. ¿QUÉ SE LOGRA?
//    Conoces la tabla ASCII y cómo JS convierte número<->letra.
// ============================================================

// fromCharCode() convierte número ASCII a carácter
const getChar = c => String.fromCharCode(c)

console.log(getChar(55))
console.log(getChar(65))
console.log(getChar(97))
