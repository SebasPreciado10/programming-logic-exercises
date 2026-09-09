// Si es cuadrado (largo=ancho) → devuelve área (l*w)
// Si es rectángulo → devuelve perímetro (2*(l+w))

const areaOrPerimeter = function(l , w) {
  let area = l * w
  let perimeter = 2 * (l + w)
  // === compara valor y tipo: 3 === 3 → true, "3" === 3 → false
  if(l === w) return area
  return perimeter
};

// arrow function
const areaOrPerimeterArrow = (l, w) =>
  l === w ? l * w : 2 * (l + w);

console.log(areaOrPerimeter(3, 3))
console.log(areaOrPerimeterArrow(4, 5))
