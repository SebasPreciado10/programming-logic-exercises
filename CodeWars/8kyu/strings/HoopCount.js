// ============================================================
// EJERCICIO: HoopCount - ¿Pasa de trucos?
// ============================================================
// 1. ¿QUÉ HACE?
//    Si hace 10 o más repeticiones lo felicita para pasar a trucos.
//    Si hace menos, lo anima a seguir.
//    hoopCount(10) -> "Great...", hoopCount(5) -> "Keep at it...".
//
// 2. ¿CÓMO FUNCIONA?
//    - Ternario `condición ? valorTrue : valorFalse`.
//    - n >= 10: operador mayor o igual. Incluye el 10.
//    - Arrow de una línea sin llaves ni return explícito.
//
// 3. PASO A PASO:
//    hoopCount(5): 5>=10? No -> elige segunda rama -> "Keep at it...".
//    hoopCount(10): 10>=10? Sí -> elige primera rama -> "Great...".
//
// 4. ¿QUÉ SE LOGRA?
//    Condicional mínima en una línea, ideal para decisiones true/false.
// ============================================================

// Ternario: condición ? siTrue : siFalse
const hoopCount = n =>
    n >= 10 ? "Great, now move on to tricks":
    "Keep at it until you get it"

console.log(hoopCount(5))
console.log(hoopCount(10))
