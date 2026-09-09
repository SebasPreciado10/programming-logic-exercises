// Invierte un string: "abc" → "cba"

// 1. split("") → convierte string a array: ["a","b","c"]
// 2. reverse() → invierte el array: ["c","b","a"]
// 3. join("") → convierte array a string: "cba"
const solution = str => str.split("").reverse().join("")

console.log(solution('abc'))
console.log(solution('hello'))
