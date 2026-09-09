// Si repeticiones >= 10 → "Great, now move on to tricks"
// Si repeticiones < 10 → "Keep at it until you get it"

// Ternario: condición ? siTrue : siFalse
const hoopCount = n =>
    n >= 10 ? "Great, now move on to tricks":
    "Keep at it until you get it"

console.log(hoopCount(5))
console.log(hoopCount(10))
