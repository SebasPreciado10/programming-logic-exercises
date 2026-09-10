// Dados padre e hijo, dice cuántos años faltan/sobran para que el padre sea el doble que el hijo.
// son*2 = doble del hijo. dad - eso = diferencia. Math.abs() quita el negativo, siempre positivo.
// Hay versión function y versión arrow, hacen lo mismo.

function twiceAsOld(dadYearsOld, sonYearsOld){
    // Math.abs() quita el negativo, siempre da positivo
    return Math.abs(dadYearsOld - sonYearsOld * 2)
}

// arrow function
const twiceAsOldArrow = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

console.log(twiceAsOld(55, 30))
console.log(twiceAsOldArrow(42, 21))
