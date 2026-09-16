// ============================================================
// EJERCICIO: TwiceAsOld - ¿Cuánto falta para el doble?
// ============================================================
// 1. ¿QUÉ HACE?
//    Dice cuántos años faltan o pasaron para que el padre tenga
//    exactamente el doble de la edad del hijo. Siempre positivo.
//    Ejemplo: padre 55, hijo 30 -> doble sería 60 -> faltan 5 -> devuelve 5.
//
// 2. ¿CÓMO FUNCIONA?
//    - sonYearsOld * 2: edad objetivo (doble del hijo).
//    - dadYearsOld - eso: diferencia (puede dar negativo si aún falta).
//    - Math.abs(): valor absoluto, quita el signo negativo.
//      Math.abs(-5) -> 5, Math.abs(5) -> 5.
//
// 3. PASO A PASO con twiceAsOld(55,30):
//    Paso 1: 30*2 = 60 (edad doble).
//    Paso 2: 55-60 = -5 (le faltan 5).
//    Paso 3: Math.abs(-5) = 5.
//    Paso 4: return 5.
//    Caso (42,21): 21*2=42, 42-42=0 -> ya tiene el doble -> 0.
//
// 4. ¿QUÉ SE LOGRA?
//    Usar Math.abs para distancias/edades donde el signo no importa.
// ============================================================

function twiceAsOld(dadYearsOld, sonYearsOld){
    // Math.abs() quita el negativo, siempre da positivo
    return Math.abs(dadYearsOld - sonYearsOld * 2)
}

// arrow function - misma fórmula en una línea
const twiceAsOldArrow = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

console.log(twiceAsOld(55, 30))
console.log(twiceAsOldArrow(42, 21))
