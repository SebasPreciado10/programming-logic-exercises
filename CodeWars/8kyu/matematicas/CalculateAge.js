// Dado año nacimiento y actual: pasado → "You are X years old", futuro → "You will be born...", igual → "born this very year!"
// Resta para sacar diferencia. Ternario (===1 ? 'year' : 'years') maneja singular/plural.
// Versión arrow usa Math.abs para la diferencia y reutiliza la variable year.

function calculateAge(yearBirth, currentYear) {  
  if(yearBirth < currentYear){
      let calculate = currentYear - yearBirth
      // Ternario para singular/plural: 1="year", otro="years"
      return `You are ${calculate} ${calculate === 1 ? 'year' : 'years'} old.`
  }
  else if(yearBirth > currentYear){
      let calculate = yearBirth - currentYear
      return `You will be born in ${calculate} ${calculate === 1 ? 'year.' : 'years.'}`
  }
  return 'You were born this very year!'
}

// arrow function
const calculateAgeArrow = (yearBirth, currentYear) => {
  const diff = Math.abs(currentYear - yearBirth);
  const year = diff === 1 ? "year" : "years";
  if (yearBirth < currentYear) return `You are ${diff} ${year} old.`;
  if (yearBirth > currentYear) return `You will be born in ${diff} ${year}.`;
  return "You were born this very year!";
};

console.log(calculateAge(2011, 2012))
console.log(calculateAgeArrow(2000, 2000))
