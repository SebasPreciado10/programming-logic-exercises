// Si el nombre es "Johnny" → "Hello, my love!". Otro nombre → "Hello, [nombre]!".
// Ternario: condición ? siTrue : siFalse. === compara estricto.
// `Hello, ${name}!` es template literal, igual que "Hello, " + name + "!" pero más limpio.

function greet(name){
    // Ternario: condición ? siEsVerdadero : siEsFalso
    let say = name === 'Johnny' ? 'Hello, my love!' :
            "Hello, " + name + "!"
    return say
}

// arrow function
const greetArrow = name =>
  name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;

console.log(greet('Johnny'))
console.log(greetArrow('Carlos'))
