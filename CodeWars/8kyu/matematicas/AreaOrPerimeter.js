// ============================================================
// EJERCICIO: AreaOrPerimeter - ¿Área o perímetro?
// ============================================================
// 1. ¿QUÉ HACE?
//    Si largo y ancho son iguales es un CUADRADO -> devuelve área (l*w).
//    Si son distintos es RECTÁNGULO -> devuelve perímetro (2*(l+w)).
//    Ejemplo: (3,3) -> 9, (4,5) -> 18.
//
// 2. ¿CÓMO FUNCIONA?
//    - area = l*w: base por altura.
//    - perimeter = 2*(l+w): suma lados x2. Paréntesis primero.
//    - === : igualdad estricta (valor y tipo). 3===3 true.
//    - if(l===w) return area: si es cuadrado termina ahí.
//      Si no, sigue al siguiente return (perímetro).
//    - Versión arrow con ternario: misma decisión en una línea.
//
// 3. PASO A PASO:
//    areaOrPerimeter(3,3):
//      area=9, perimeter=12. l===w? Sí -> return 9.
//    areaOrPerimeter(4,5):
//      area=20, perimeter=18. l===w? No -> salta -> return 18.
//
// 4. ¿QUÉ SE LOGRA?
//    Ramificar por forma geométrica y ver function vs ternario.
// ============================================================

const areaOrPerimeter = function(l , w) {
  let area = l * w
  let perimeter = 2 * (l + w)
  // === compara valor y tipo: 3 === 3 → true, "3" === 3 → false
  if(l === w) return area
  return perimeter
};

// arrow function - ternario hace lo mismo
const areaOrPerimeterArrow = (l, w) =>
  l === w ? l * w : 2 * (l + w);

console.log(areaOrPerimeter(3, 3))
console.log(areaOrPerimeterArrow(4, 5))
