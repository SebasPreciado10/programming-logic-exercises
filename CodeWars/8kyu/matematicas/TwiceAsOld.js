// Dados dos años, dice cuántos años le faltan o sobran al padre
// para tener el doble de la edad del hijo

function twiceAsOld(dadYearsOld, sonYearsOld){
    // Math.abs() quita el negativo, siempre da positivo
    return Math.abs(dadYearsOld - sonYearsOld * 2)
}

// arrow function
const twiceAsOldArrow = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

console.log(twiceAsOld(55, 30))
console.log(twiceAsOldArrow(42, 21))
