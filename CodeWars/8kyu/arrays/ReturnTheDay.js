// Dado un número 1-7, devuelve el día de la semana
// 1=Sunday, 2=Monday, ..., 7=Saturday

let weeksDay = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

function whatday(num) {
  // num-1 porque los arrays empiezan en 0
  // || devuelve error si el índice no existe (undefined es falsy)
  return weeksDay[num - 1] || 'Wrong, please enter a number between 1 and 7'
}

// arrow function
const whatdayArrow = num =>
  weeksDay[num - 1] || 'Wrong, please enter a number between 1 and 7';

console.log(whatday(1))
console.log(whatdayArrow(7))
console.log(whatday(9))
