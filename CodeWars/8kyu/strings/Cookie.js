// Según el tipo de dato, devuelve quién comió la galleta:
// string → Zach | number → Monica | otro → el perro

function cookie(x) {
  // typeof te dice el tipo: "string", "number", "boolean", etc.
  if (typeof x === 'string') return "Who ate the last cookie? It was Zach!"
  if (typeof x === 'number') return "Who ate the last cookie? It was Monica!"
  return "Who ate the last cookie? It was the dog!"
}

// arrow function (ternarios anidados)
const cookieArrow = x =>
  typeof x === "string" ? "Who ate the last cookie? It was Zach!" :
  typeof x === "number" ? "Who ate the last cookie? It was Monica!" :
  "Who ate the last cookie? It was the dog!";

console.log(cookie("crunch"))
console.log(cookie(42))
console.log(cookieArrow(true))
