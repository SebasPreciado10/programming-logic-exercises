// Si el nombre es "Johnny" → "Hello, my love!"
// Para cualquier otro nombre → "Hello, [nombre]!"

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
