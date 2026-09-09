// Calcula el IMC y devuelve la categoría
// peso / (altura²) → Underweight | Normal | Overweight | Obese

function bmi(weight, height){
    // ** es potencia: height ** 2 = height al cuadrado
    result = weight / (height ** 2)
    // Return temprano: si se cumple, la función termina ahí
    if (result <= 18.5) return 'Underweight'
    if (result <= 25.0) return 'Normal'
    if (result <= 30.0) return 'Overweight'
    return 'Obese'
}

// arrow function
const bmiArrow = (weight, height) => {
  const result = weight / height ** 2;
  if (result <= 18.5) return 'Underweight';
  if (result <= 25) return 'Normal';
  if (result <= 30) return 'Overweight';
  return 'Obese';
};

console.log(bmi(100, 1.80));
console.log(bmiArrow(50, 1.75));
