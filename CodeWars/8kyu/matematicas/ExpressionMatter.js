// Dados 3 números, prueba 5 combinaciones y devuelve la MAYOR. Ej: 1,2,3 → 9 por (1+2)*3.
// Math.max() devuelve el más grande. Cada expresión usa precedencia (* antes que +) y paréntesis.

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
