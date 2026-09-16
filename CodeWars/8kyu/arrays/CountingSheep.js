// ============================================================
// EJERCICIO: CountingSheep - Contar ovejas presentes
// ============================================================
// 1. ¿QUÉ HACE?
//    Cuenta cuántos `true` hay en el array (ovejas que sí están).
//    Ejemplo: [null,false,true,true] -> 2
//
// 2. ¿CÓMO FUNCIONA? (conceptos clave)
//    - .filter(): crea un NUEVO array solo con los elementos que
//      pasen una prueba. No modifica el original.
//    - Boolean como función: Boolean(valor) devuelve true/false.
//      Al pasarla a filter, elimina todo lo "falsy":
//      false, null, undefined, 0, "", NaN.
//    - .length: propiedad que dice cuántos elementos tiene un array.
//
// 3. PASO A PASO con [undefined,null,false,true,true,false,null,undefined]:
//    Paso 1: sheep.filter(Boolean) recorre uno por uno:
//      undefined -> Boolean=false -> se descarta
//      null -> false -> se descarta
//      false -> false -> se descarta
//      true -> true -> SE GUARDA
//      true -> true -> SE GUARDA ... y así.
//    Paso 2: queda [true, true].
//    Paso 3: .length de eso es 2 -> devuelve 2.
//
// 4. ¿QUÉ SE LOGRA?
//    Aprendes el patrón filter + length para contar, y qué son
//    valores truthy/falsy en JS.
// ============================================================

let sheep = [undefined,null,false,true,true,false,null,undefined]

// filter(Boolean) elimina falsy (null, undefined, false, 0, "")
// .length cuenta los que quedan
const countSheeps = sheep => sheep.filter(Boolean).length;

console.log(countSheeps(sheep))
