// ============================================================
// EJERCICIO: Cookie - ¿Quién comió la galleta según el tipo?
// ============================================================
// 1. ¿QUÉ HACE?
//    Según el TIPO de dato que reciba, culpa a alguien:
//    string -> Zach, number -> Monica, otro (boolean, etc) -> dog.
//    Ejemplo: cookie("crunch") -> Zach, cookie(42) -> Monica, cookie(true) -> dog.
//
// 2. ¿CÓMO FUNCIONA?
//    - typeof x: devuelve el tipo como string: "string","number",
//      "boolean","undefined","object", etc.
//    - if con return temprano: si se cumple, la función termina ahí
//      y no sigue revisando. No necesitas else.
//    - Versión arrow usa ternarios anidados: revisa en orden.
//
// 3. PASO A PASO:
//    cookie("crunch"):
//      Paso 1: typeof "crunch" -> "string". Primer if true -> return Zach.
//    cookie(42):
//      Paso 1: typeof 42 -> "number". Primer if false, sigue.
//      Paso 2: segundo if true -> return Monica.
//    cookie(true):
//      Paso 1 y 2 falsos -> llega al return final -> dog.
//
// 4. ¿QUÉ SE LOGRA?
//    Entiendes typeof para ramificar por tipo y el patrón return temprano.
// ============================================================

function cookie(x) {
  // typeof te dice el tipo: "string", "number", "boolean", etc.
  if (typeof x === 'string') return "Who ate the last cookie? It was Zach!"
  if (typeof x === 'number') return "Who ate the last cookie? It was Monica!"
  return "Who ate the last cookie? It was the dog!"
}

// arrow function (ternarios anidados, mismo orden)
const cookieArrow = x =>
  typeof x === "string" ? "Who ate the last cookie? It was Zach!" :
  typeof x === "number" ? "Who ate the last cookie? It was Monica!" :
  "Who ate the last cookie? It was the dog!";

console.log(cookie("crunch"))
console.log(cookie(42))
console.log(cookieArrow(true))
