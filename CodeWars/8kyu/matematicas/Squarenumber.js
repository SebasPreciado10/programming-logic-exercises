// ============================================================
// EJERCICIO: Squarenumber - Cuadrado perfecto más cercano
// ============================================================
// 1. ¿QUÉ HACE?
//    Encuentra el cuadrado perfecto más cercano a n.
//    Ejemplo: 11 -> 9, 14 -> 16, 25 -> 25.
//
// 2. ¿CÓMO FUNCIONA?
//    - Math.sqrt(n): raíz. sqrt(11)=3.316...
//    - Math.round(x): redondea al entero más cercano. 3.316->3, 3.74->4.
//    - root*root: eleva al cuadrado para volver al cuadrado perfecto.
//
// 3. PASO A PASO:
//    nearestSq(11): sqrt=3.316 -> round=3 -> 3*3=9. Return 9.
//    nearestSq(14): sqrt=3.741 -> round=4 -> 4*4=16. Return 16.
//    nearestSq(25): sqrt=5 -> round=5 -> 25. Return 25.
//
// 4. ¿QUÉ SE LOGRA?
//    Ir y volver: raíz -> redondeo -> cuadrado para "encajar" al más cercano.
// ============================================================

function nearestSq(n){
    // sqrt() = raíz cuadrada, round() = redondea
    const root = Math.round(Math.sqrt(n));
    return root * root;
}

console.log(nearestSq(11))
console.log(nearestSq(14))
console.log(nearestSq(25))
