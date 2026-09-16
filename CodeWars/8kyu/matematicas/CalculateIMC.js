// ============================================================
// EJERCICIO: CalculateIMC (bmi) - Clasificar peso
// ============================================================
// 1. ¿QUÉ HACE?
//    Calcula IMC = peso / altura² y devuelve categoría:
//    <=18.5 Underweight, <=25 Normal, <=30 Overweight, mayor Obese.
//    Ejemplo: bmi(100,1.80) -> 100/3.24=30.8 -> 'Obese'.
//
// 2. ¿CÓMO FUNCIONA?
//    - ** : operador potencia. height**2 = altura al cuadrado.
//      OJO precedencia: primero (height**2), luego la división.
//    - Return temprano: cada `if` con return termina la función.
//      No necesitas else porque si entra, ya salió.
//      El orden importa: revisa de menor a mayor.
//    - NOTA: en `function bmi` falta let/const en `result = ...`,
//      eso crea variable global por accidente. En la arrow sí usas const.
//
// 3. PASO A PASO con bmi(50,1.75):
//    Paso 1: 1.75**2 = 3.0625.
//    Paso 2: 50/3.0625 = 16.32.
//    Paso 3: ¿<=18.5? Sí -> return 'Underweight'. Fin, no revisa más.
//    Con 100,1.80: result=30.8. ¿<=18.5? No. ¿<=25? No. ¿<=30? No.
//    Llega al return final -> 'Obese'.
//
// 4. ¿QUÉ SE LOGRA?
//    Fórmula + clasificación por rangos con returns tempranos.
// ============================================================

function bmi(weight, height){
    // ** es potencia: height ** 2 = height al cuadrado
    result = weight / (height ** 2)
    // Return temprano: si se cumple, la función termina ahí
    if (result <= 18.5) return 'Underweight'
    if (result <= 25.0) return 'Normal'
    if (result <= 30.0) return 'Overweight'
    return 'Obese'
}

// arrow function - igual pero con const (correcto, no global)
const bmiArrow = (weight, height) => {
  const result = weight / height ** 2;
  if (result <= 18.5) return 'Underweight';
  if (result <= 25) return 'Normal';
  if (result <= 30) return 'Overweight';
  return 'Obese';
};

console.log(bmi(100, 1.80));
console.log(bmiArrow(50, 1.75));
