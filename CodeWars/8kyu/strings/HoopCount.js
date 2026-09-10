// Si n>=10 → "Great, now move on to tricks", si no → "Keep at it...".
// Ternario: condición ? siTrue : siFalse. Arrow function de una línea.

// Ternario: condición ? siTrue : siFalse
const hoopCount = n =>
    n >= 10 ? "Great, now move on to tricks":
    "Keep at it until you get it"

console.log(hoopCount(5))
console.log(hoopCount(10))
