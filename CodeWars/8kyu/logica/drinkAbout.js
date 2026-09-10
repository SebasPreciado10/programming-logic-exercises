// Según la edad, devuelve qué beber: <14 → toddy | 14-17 → coke | 18-20 → beer | 21+ → whisky
// Ternarios anidados (condición ? valorTrue : siguiente). Revisa en orden de menor a mayor.
// peopleWithAgeDrink es arrow function de una línea: old => ...

// Ternarios anidados: revisa en orden
const peopleWithAgeDrink = old =>
  old < 14 ? 'drink toddy' :
  old < 18 ? 'drink coke' :
  old < 21 ? 'drink beer' :
  'drink whisky';

console.log(peopleWithAgeDrink(10))
console.log(peopleWithAgeDrink(15))
console.log(peopleWithAgeDrink(19))
console.log(peopleWithAgeDrink(34))
