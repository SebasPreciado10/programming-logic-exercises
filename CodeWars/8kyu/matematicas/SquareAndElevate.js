// Para cada número del array:
// Si es cuadrado perfecto → devuelve su raíz
// Si no → lo eleva al cuadrado
// [4,5,9] → [2, 25, 3]

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
