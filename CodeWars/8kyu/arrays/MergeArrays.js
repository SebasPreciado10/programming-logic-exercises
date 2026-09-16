// ============================================================
// EJERCICIO: MergeArrays - Unir, deduplicar y ordenar
// ============================================================
// 1. ¿QUÉ HACE?
//    Combina dos arrays, quita duplicados y ordena de menor a mayor.
//    Ejemplo: [1,2,4,6,8] + [1,3,5,7,8] -> [1,2,3,4,5,6,7,8]
//
// 2. ¿CÓMO FUNCIONA? (conceptos clave por partes)
//    - .concat(): une arrays. [1,2].concat([3]) -> [1,2,3].
//    - new Set(): estructura que NO permite repetidos.
//      new Set([1,1,2]) -> Set{1,2}. Elimina duplicados automático.
//    - [...Set]: spread `...` desparrama el Set dentro de un nuevo [].
//    - .sort((a,b)=>a-b): ordena NÚMEROS de menor a mayor.
//      Sin comparador, sort ordena como TEXTO ("10" antes que "2") y falla.
//
// 3. PASO A PASO con [1,2,4,6,8] y [1,3,5,7,8]:
//    Paso 1: concat -> [1,2,4,6,8,1,3,5,7,8] (10 elementos, con repetidos).
//    Paso 2: new Set(...) -> Set{1,2,4,6,8,3,5,7} (quita el 1 y 8 extra).
//    Paso 3: [...Set] -> [1,2,4,6,8,3,5,7] (ya es array normal).
//    Paso 4: sort((a,b)=>a-b) compara de a pares y ordena:
//      -> [1,2,3,4,5,6,7,8].
//    Paso 5: return merge.
//
// 4. ¿QUÉ SE LOGRA?
//    Aprendes el pipeline completo unir -> deduplicar -> ordenar,
//    muy usado en limpieza de datos.
// ============================================================

let arr1 = [1, 2, 4, 6, 8]
let arr2 = [1, 3, 5, 7, 8]

function mergeArrays(arr1, arr2) {
    let merge = [...new Set(arr1.concat(arr2))].sort((a, b) => a - b)
    return merge
}

console.log(mergeArrays(arr1, arr2))
