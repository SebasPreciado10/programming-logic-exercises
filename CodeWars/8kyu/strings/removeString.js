// ============================================================
// EJERCICIO: removeString - Quitar el último "!"
// ============================================================
// 1. ¿QUÉ HACE?
//    Elimina SOLO el signo ! si está al FINAL. Solo uno.
//    "Hi!!!" -> "Hi!!", "Hi!" -> "Hi", "Hi" -> "Hi" (no cambia).
//
// 2. ¿CÓMO FUNCIONA?
//    - .replace(buscar, reemplazo): reemplaza lo encontrado.
//    - Regex /!$/ : ¡ es literal, $ significa "fin del string".
//      O sea "un ! justo al final". Sin $ borraría el primero que vea.
//    - '' : lo reemplaza por vacío, o sea lo borra.
//
// 3. PASO A PASO:
//    'Hi!!!': termina en ! -> /!$/ encuentra el último -> lo borra -> 'Hi!!'.
//    'Hi': no termina en ! -> no encuentra nada -> devuelve igual 'Hi'.
//
// 4. ¿QUÉ SE LOGRA?
//    Aprendes regex con ancla $ y replace para ediciones quirúrgicas.
// ============================================================

// replace() reemplaza. /!$/ significa "¡ solo al final del string"
const remove = string => string.replace(/!$/, '')

console.log(remove('Hi!!!'))
console.log(remove('Hi!'))
console.log(remove('Hi'))
