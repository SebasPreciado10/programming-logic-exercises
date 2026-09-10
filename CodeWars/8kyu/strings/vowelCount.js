// Cuenta vocales a,e,i,o,u (insensible a mayúsculas).
// for...of recorre cada carácter. toLowerCase() iguala "A"="a". vowels.includes() verifica si es vocal. count++ suma.
// Versión arrow: [...str] a array, .filter() solo vocales, .length las cuenta.

function getCount(str){
    let vowels = "aeiou";
    let count = 0;

    // for...of recorre cada carácter del string
    for (const letter of str){
        // includes() verifica si la vocal está en el string
        // toLowerCase() convierte a minúscula para que "A" = "a"
        if (vowels.includes(letter.toLowerCase())){
            count++;
        }
    }
    return count
}

// arrow function
const getCountArrow = str =>
  [...str].filter(l => "aeiou".includes(l.toLowerCase())).length;

console.log(getCount('babeci'))
console.log(getCountArrow('HELLO'))
