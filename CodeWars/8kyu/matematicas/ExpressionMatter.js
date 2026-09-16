// ============================================================
// EJERCICIO: ExpressionMatter - Mayor resultado con 3 números
// ============================================================
// 1. ¿QUÉ HACE?
//    Con a,b,c prueba todas las combinaciones con + y * y devuelve la mayor.
//    Ejemplo: 1,2,3 -> (1+2)*3=9 es la mayor -> devuelve 9.
//
// 2. ¿CÓMO FUNCIONA?
//    - Math.max(...): devuelve el número más grande de los que le pases.
//    - Las 5 expresiones cubren las formas de agrupar:
//      a*(b+c), a*b*c, a+b*c, (a+b)*c, a+b+c.
//    - Precedencia: * se hace antes que + salvo paréntesis.
//      Por eso a+b*c = a+(b*c), distinto de (a+b)*c.
//
// 3. PASO A PASO con (1,2,3):
//    a*(b+c)=1*5=5
//    a*b*c=6
//    a+b*c=1+6=7
//    (a+b)*c=3*3=9
//    a+b+c=6
//    Math.max(5,6,7,9,6) -> 9. Return 9.
//
// 4. ¿QUÉ SE LOGRA?
//    Fuerza bruta: probar todas las opciones y quedarse con el máximo.
// ============================================================

function expressionMatter(a, b, c) {
  // Math.max() devuelve el número más grande
  let result = Math.max(
    a * (b + c),    // a por (b+c)
    a * b * c,      // multiplicar todos
    a + b * c,      // a más (b*c)
    (a + b) * c,    // (a+b) por c
    a + b + c       // sumar todos
  )
  return result
}

console.log(expressionMatter(1, 1, 1))
console.log(expressionMatter(1, 2, 3))
console.log(expressionMatter(2, 10, 3))
