// Mezcla dos strings alternando letras: "abc" + "dfg" -> "adbfcg"
// Math.max(length1,length2) saca la longitud del más largo para que el for llegue hasta el final.
// for recorre posición por posición; if(i < length) agrega la letra si aún existe.
// Así intercala, y si una es más larga, al final solo agrega la restante.
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

const mergeAlternately = function (word1, word2) {
  let result = ""
  let maxLength = Math.max(word1.length, word2.length)

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) result += word1[i]
    if (i < word2.length) result += word2[i]
  }

  return result
}

console.log(mergeAlternately("abc", "dfg"))
