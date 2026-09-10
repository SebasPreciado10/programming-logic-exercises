// Encuentra el cuadrado perfecto más cercano. Ej: 11 → 9 (√11≈3.3 → round 3 → 3²=9)
// Math.sqrt() = raíz, Math.round() = redondea al entero más cercano, luego multiplica root*root.

function nearestSq(n){
    // sqrt() = raíz cuadrada, round() = redondea
    const root = Math.round(Math.sqrt(n));
    return root * root;
}

console.log(nearestSq(11))
console.log(nearestSq(14))
console.log(nearestSq(25))
