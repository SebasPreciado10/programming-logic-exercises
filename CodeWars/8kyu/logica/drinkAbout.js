// ============================================================
// EJERCICIO: drinkAbout - ¿Qué beber según edad?
// ============================================================
// 1. ¿QUÉ HACE?
//    Devuelve bebida por edad:
//    <14 toddy, 14-17 coke, 18-20 beer, 21+ whisky.
//    Ejemplo: 10->toddy, 15->coke, 19->beer, 34->whisky.
//
// 2. ¿CÓMO FUNCIONA?
//    - Ternarios anidados: `cond ? valor : (siguiente pregunta)`.
//      Es un if/else if/else en cascada pero en una línea.
//    - El ORDEN importa: revisa de menor a mayor.
//      Si preguntaras primero <21, un niño de 10 también cumpliría y daría mal.
//    - Arrow con parámetro `old` (la edad).
//
// 3. PASO A PASO con 19:
//    Paso 1: ¿19<14? No -> pasa al siguiente.
//    Paso 2: ¿19<18? No -> pasa al siguiente.
//    Paso 3: ¿19<21? Sí -> devuelve 'drink beer'. Fin, no evalúa más.
//    Con 10: primera pregunta Sí -> 'drink toddy' inmediato.
//
// 4. ¿QUÉ SE LOGRA?
//    Clasificar por rangos con ternarios encadenados y ver por qué
//    el orden de las condiciones cambia el resultado.
// ============================================================

// Ternarios anidados: revisa en orden de menor a mayor
const peopleWithAgeDrink = old =>
  old < 14 ? 'drink toddy' :
  old < 18 ? 'drink coke' :
  old < 21 ? 'drink beer' :
  'drink whisky';

console.log(peopleWithAgeDrink(10))
console.log(peopleWithAgeDrink(15))
console.log(peopleWithAgeDrink(19))
console.log(peopleWithAgeDrink(34))
