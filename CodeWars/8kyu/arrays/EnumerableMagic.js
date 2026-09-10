// Dado array y n, devuelve los primeros n elementos.
// slice(0,n) corta desde 0 hasta n sin incluir n. No modifica el original.

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function take(arr, n){
    // slice(0, n) corta desde 0 hasta n (sin incluir n)
    return arr.slice(0, n)
}

// arrow function
const takeArrow = (arr, n) => arr.slice(0, n);

console.log(take(arr, 3))
console.log(takeArrow(arr, 5))
