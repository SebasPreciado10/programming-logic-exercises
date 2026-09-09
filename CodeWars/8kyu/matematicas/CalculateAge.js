// Dado año de nacimiento y año actual, dice la edad
// Pasado → "You are X years old"
// Futuro → "You will be born in X years"
// Este año → "You were born this very year!"

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
