// Dado 1-7 devuelve día: 1=Sunday ... 7=Saturday. Otro número → mensaje de error.
// weeksDay[num-1] porque arrays empiezan en 0. || devuelve error si índice es undefined (falsy).

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
