// ============================================================
// EJERCICIO: JennyMessage - Saludo especial a Johnny
// ============================================================
// 1. ¿QUÉ HACE?
//    Si el nombre es "Johnny" devuelve "Hello, my love!".
//    Para cualquier otro nombre devuelve "Hello, [nombre]!".
//    Ejemplo: greet('Johnny') -> 'Hello, my love!'
//             greet('Carlos') -> 'Hello, Carlos!'
//
// 2. ¿CÓMO FUNCIONA?
//    - === : comparación estricta (valor y tipo). 'Johnny' === 'Johnny' es true.
//    - Ternario `condición ? valorSiTrue : valorSiFalse`: es un if/else en una línea.
//    - Concatenación vs template literal:
//      "Hello, " + name + "!"  es igual a  `Hello, ${name}!`
//      El segundo es más limpio y moderno.
//
// 3. PASO A PASO:
//    Caso greet('Johnny'):
//      Paso 1: name='Johnny'. Evalúa name === 'Johnny' -> true.
//      Paso 2: como es true, elige la primera rama: 'Hello, my love!'.
//      Paso 3: guarda en `say` y hace return.
//    Caso greet('Carlos'):
//      Paso 1: name='Carlos'. Evalúa === -> false.
//      Paso 2: elige la segunda rama: "Hello, " + "Carlos" + "!" -> "Hello, Carlos!".
//
// 4. ¿QUÉ SE LOGRA?
//    Practicas condicionales y ternarios, y dos formas de construir strings.
// ============================================================

function greet(name){
    // Ternario: condición ? siEsVerdadero : siEsFalso
    let say = name === 'Johnny' ? 'Hello, my love!' :
            "Hello, " + name + "!"
    return say
}

// arrow function - misma lógica con template literal ${}
const greetArrow = name =>
  name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;

console.log(greet('Johnny'))
console.log(greetArrow('Carlos'))
