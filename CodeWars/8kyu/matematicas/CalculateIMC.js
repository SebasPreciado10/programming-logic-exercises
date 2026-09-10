// Calcula IMC = peso / (altura²) y clasifica: <=18.5 Underweight, <=25 Normal, <=30 Overweight, si no Obese.
// ** es potencia. Return temprano: cada if termina la función, no necesita else. Revisa en orden.

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
