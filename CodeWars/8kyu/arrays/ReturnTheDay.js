// ============================================================
// EJERCICIO: ReturnTheDay - Número a día de la semana
// ============================================================
// 1. ¿QUÉ HACE?
//    Dado un número 1-7 devuelve el día: 1=Sunday ... 7=Saturday.
//    Si el número está fuera de rango devuelve mensaje de error.
//    Ejemplo: whatday(1) -> 'Sunday', whatday(9) -> 'Wrong...'
//
// 2. ¿CÓMO FUNCIONA? (conceptos clave)
//    - Array: lista ordenada. OJO: los arrays empiezan en índice 0,
//      no en 1. Por eso weeksDay[0] es 'Sunday'.
//    - num - 1: ajustas el número humano (1-7) al índice real (0-6).
//    - || (OR): si lo de la izquierda es falsy (undefined, null, false,
//      0, "") usa lo de la derecha. Sirve como valor por defecto.
//    - weeksDay[num-1] será undefined si num es 0, 8, 9, etc.
//
// 3. PASO A PASO con whatday(7) y whatday(9):
//    Caso 7:
//      Paso 1: num=7 -> num-1=6.
//      Paso 2: weeksDay[6] -> 'Saturday' (existe, es truthy).
//      Paso 3: 'Saturday' || 'error' -> devuelve 'Saturday'.
//    Caso 9:
//      Paso 1: num=9 -> num-1=8.
//      Paso 2: weeksDay[8] -> undefined (no existe).
//      Paso 3: undefined || 'Wrong...' -> devuelve el mensaje de error.
//
// 4. ¿QUÉ SE LOGRA?
//    Entiendes indexación base-0 y el truco || para valores por defecto
//    sin escribir un if completo.
// ============================================================

let weeksDay = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

function whatday(num) {
  // num-1 porque los arrays empiezan en 0
  // || devuelve error si el índice no existe (undefined es falsy)
  return weeksDay[num - 1] || 'Wrong, please enter a number between 1 and 7'
}

// arrow function - hace exactamente lo mismo en una línea
const whatdayArrow = num =>
  weeksDay[num - 1] || 'Wrong, please enter a number between 1 and 7';

console.log(whatday(1))
console.log(whatdayArrow(7))
console.log(whatday(9))
