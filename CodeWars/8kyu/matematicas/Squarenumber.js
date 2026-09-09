// Encuentra el cuadrado perfecto más cercano
// Ejemplo: 11 → 9 (porque √11≈3.3, redondea a 3, y 3²=9)

function nearestSq(n){
    // sqrt() = raíz cuadrada, round() = redondea
    const root = Math.round(Math.sqrt(n));
    return root * root;
}

console.log(nearestSq(11))
console.log(nearestSq(14))
console.log(nearestSq(25))
