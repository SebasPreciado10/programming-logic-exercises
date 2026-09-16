// ============================================================
// EJERCICIO: vowelCount - Contar vocales
// ============================================================
// 1. ¿QUÉ HACE?
//    Cuenta cuántas vocales (a,e,i,o,u) hay, sin importar mayúsculas.
//    Ejemplo: 'babeci' -> 3 (a,e,i), 'HELLO' -> 2 (E,O).
//
// 2. ¿CÓMO FUNCIONA? (dos versiones)
//    Versión for:
//    - vowels="aeiou": lista de referencia.
//    - for...of: recorre cada CARÁCTER del string uno por uno.
//    - letter.toLowerCase(): convierte a minúscula para que 'A'=='a'.
//    - vowels.includes(...): ¿esa letra está en "aeiou"? Si sí, es vocal.
//    - count++: suma 1.
//    Versión arrow:
//    - [...str]: spread convierte string en array de letras.
//    - .filter(...): se queda solo con las que son vocales.
//    - .length: cuenta cuántas quedaron.
//
// 3. PASO A PASO con 'babeci':
//    count=0. Recorre:
//    'b' -> ¿en "aeiou"? No.
//    'a' -> Sí -> count=1.
//    'b' -> No.
//    'e' -> Sí -> count=2.
//    'c' -> No.
//    'i' -> Sí -> count=3. Return 3.
//
// 4. ¿QUÉ SE LOGRA?
//    Practicas bucles, includes y el patrón filter+length como alternativa funcional.
// ============================================================

function getCount(str){
    let vowels = "aeiou";
    let count = 0;

    // for...of recorre cada carácter del string
    for (const letter of str){
        // includes() verifica si la letra está en "aeiou"
        // toLowerCase() convierte a minúscula para que "A" = "a"
        if (vowels.includes(letter.toLowerCase())){
            count++;
        }
    }
    return count
}

// arrow: convierte a array, filtra vocales, cuenta
const getCountArrow = str =>
  [...str].filter(l => "aeiou".includes(l.toLowerCase())).length;

console.log(getCount('babeci'))
console.log(getCountArrow('HELLO'))
