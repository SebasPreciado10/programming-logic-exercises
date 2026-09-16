// ============================================================
// EJERCICIO: EnumerableMagic - Tomar los primeros N elementos
// ============================================================
// 1. ¿QUÉ HACE?
//    Dado un array y un número n, devuelve un nuevo array con
//    solo los primeros n elementos.
//    Ejemplo: take([0,1,2,3,4], 3) -> [0,1,2]
//
// 2. ¿CÓMO FUNCIONA? (conceptos clave)
//    - .slice(inicio, fin): corta una copia del array desde `inicio`
//      hasta `fin` SIN incluir `fin`. No modifica el original.
//      slice(0,n) = desde 0 hasta n-1, o sea los primeros n.
//    - Si n es mayor que el array, devuelve todo el array.
//    - Si n es 0, devuelve [] vacío.
//
// 3. PASO A PASO con arr=[0..8], take(arr,3):
//    Paso 1: entra arr y n=3.
//    Paso 2: arr.slice(0,3) mira índices 0,1,2 y se detiene antes del 3.
//    Paso 3: crea y devuelve [0,1,2].
//    El array original sigue intacto con 9 elementos.
//
// 4. ¿QUÉ SE LOGRA?
//    Dominas slice para paginar, recortar y copiar sin mutar datos.
// ============================================================

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function take(arr, n){
    // slice(0, n) corta desde 0 hasta n (sin incluir n)
    return arr.slice(0, n)
}

// arrow function - mismo comportamiento en una línea
const takeArrow = (arr, n) => arr.slice(0, n);

console.log(take(arr, 3))
console.log(takeArrow(arr, 5))
