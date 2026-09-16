// ============================================================
// EJERCICIO: SquareAndElevate - Raíz si es cuadrado perfecto, si no cuadrado
// ============================================================
// 1. ¿QUÉ HACE?
//    Para cada número: si es cuadrado perfecto devuelve su raíz,
//    si no lo eleva al cuadrado.
//    [4,5,9,10,16] -> [2,25,3,100,4].
//
// 2. ¿CÓMO FUNCIONA?
//    - .map(): transforma CADA elemento y devuelve NUEVO array del mismo tamaño.
//    - Math.sqrt(n): raíz cuadrada. sqrt(4)=2 exacto, sqrt(5)=2.236...
//    - Number.isInteger(x): ¿es entero sin decimales? true/false.
//      Si la raíz es entera, el número era cuadrado perfecto.
//    - Ternario: ¿es entero? -> devuelve raíz : devuelve n**2.
//    - **2: elevar al cuadrado.
//
// 3. PASO A PASO con [4,5,9]:
//    4: sqrt=2, ¿entero? Sí -> guarda 2.
//    5: sqrt=2.236..., ¿entero? No -> guarda 5**2=25.
//    9: sqrt=3, ¿entero? Sí -> guarda 3.
//    Resultado [2,25,3].
//
// 4. ¿QUÉ SE LOGRA?
//    Combinar map + Math + validación para transformar listas según condición.
// ============================================================

const numeros = [4, 5, 9, 10, 16];

const squareOrSquareRoot = (numeros) => {
  // .map() transforma cada elemento
  return numeros.map(numero =>
    // Number.isInteger() verifica si es entero
    Number.isInteger(Math.sqrt(numero))
      ? Math.sqrt(numero)    // es cuadrado perfecto → raíz
      : numero ** 2          // no es → elevar al cuadrado
  );
};

console.log(squareOrSquareRoot(numeros))
