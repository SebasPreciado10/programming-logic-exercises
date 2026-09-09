// Combina dos arrays, elimina duplicados y ordena de menor a mayor
// [1,2,4,6,8] + [1,3,5,7,8] → [1,2,3,4,5,6,7,8]

let arr1 = [1, 2, 4, 6, 8]
let arr2 = [1, 3, 5, 7, 8]

function mergeArrays(arr1, arr2) {
    // concat() → une arrays
    // new Set() → elimina duplicados
    // [...] → convierte Set a array
    // sort((a,b) => a-b) → ordena números de menor a mayor
    let merge = [...new Set(arr1.concat(arr2))].sort((arr1, arr2) => arr1 - arr2)
    return merge
}

console.log(mergeArrays(arr1, arr2))
