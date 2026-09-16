// ============================================================
// EJERCICIO: ConvertStringToArray - Convertir frase a array
// ============================================================
// 1. ¿QUÉ HACE?
//    Convierte una frase en un array de palabras.
//    Ejemplo: 'hello how are yo' -> ['hello', 'how', 'are', 'yo']
//
// 2. ¿CÓMO FUNCIONA? (conceptos clave)
//    - Arrow function: `string => ...` es una función corta.
//      Recibe un parámetro `string` y devuelve el resultado directo,
//      sin necesidad de escribir `return` ni `{}`.
//    - .split(" "): método de strings que CORTA el texto cada vez
//      que encuentra el separador que le pases y devuelve un ARRAY.
//      Si le pasas " " (espacio) separa por palabras.
//      Si le pasaras "" (vacío) separaría por letras.
//
// 3. PASO A PASO DE LA EJECUCIÓN con 'hello how are yo':
//    Paso 1: entra el string 'hello how are yo' al parámetro `string`.
//    Paso 2: se ejecuta `string.split(" ")`.
//      - Encuentra 3 espacios, entonces corta en 4 pedazos.
//      - Crea ['hello', 'how', 'are', 'yo'].
//    Paso 3: la arrow function devuelve ese array automáticamente.
//    Paso 4: console.log lo imprime para verificar.
//
// 4. ¿QUÉ SE LOGRA?
//    Aprendes a transformar texto en lista manipulable, base para
//    contar palabras, filtrar, mapear, etc.
// ============================================================

const stringToArray = string => string.split(" ")

console.log(stringToArray('hello how are yo'))
