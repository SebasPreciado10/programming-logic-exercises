// ============================================================
// EJERCICIO: CalculateAge - Edad según año nacimiento y actual
// ============================================================
// 1. ¿QUÉ HACE?
//    Tres casos:
//    - Nació antes (2011,2012) -> "You are 1 year old."
//    - Nacerá después (2030,2025) -> "You will be born in 5 years."
//    - Mismo año -> "You were born this very year!"
//    Maneja singular "year" vs plural "years".
//
// 2. ¿CÓMO FUNCIONA?
//    - if(yearBirth < currentYear): ya nació, resta actual-nacimiento.
//    - else if(yearBirth > currentYear): aún no nace, resta nacimiento-actual.
//    - Template literal `${}`: mete variables dentro del texto.
//    - Ternario `${diff===1 ? 'year':'years'}`: elige singular/plural.
//    - Versión arrow usa Math.abs para la diferencia una sola vez y
//      reutiliza la variable `year`.
//
// 3. PASO A PASO con calculateAge(2011,2012):
//    Paso 1: 2011<2012? Sí -> entra primer if.
//    Paso 2: calculate=2012-2011=1.
//    Paso 3: 1===1? Sí -> 'year'.
//    Paso 4: arma "You are 1 year old." y return. Termina.
//    Con (2000,2000): ningún if se cumple -> return mensaje "very year!".
//
// 4. ¿QUÉ SE LOGRA?
//    Lógica de 3 ramas + interpolación + singular/plural dinámico.
// ============================================================

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

// arrow function - usa Math.abs y variable year reutilizable
const calculateAgeArrow = (yearBirth, currentYear) => {
  const diff = Math.abs(currentYear - yearBirth);
  const year = diff === 1 ? "year" : "years";
  if (yearBirth < currentYear) return `You are ${diff} ${year} old.`;
  if (yearBirth > currentYear) return `You will be born in ${diff} ${year}.`;
  return "You were born this very year!";
};

console.log(calculateAge(2011, 2012))
console.log(calculateAgeArrow(2000, 2000))
