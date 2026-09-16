// ============================================================
// EJERCICIO (LeetCode): MergeStringsAlternately - Mezclar alternando
// ============================================================
// 1. ¿QUÉ HACE?
//    Mezcla dos strings letra por letra empezando con word1.
//    Si una es más larga, pega lo que sobra al final.
//    Ejemplo: "abc"+"pqrs" -> "apbqcrs". Con "abc"+"dfg" -> "adbfcg".
//
// 2. ¿CÓMO FUNCIONA?
//    - result="": acumulador donde se arma la respuesta.
//    - Math.max(l1,l2): el for debe llegar hasta el más largo,
//      si no se cortaría la cola del largo.
//    - for(i=0;i<maxLength;i++): recorre posiciones 0,1,2...
//    - word1[i]: acceso por índice a la letra i.
//    - if(i < word1.length) result+=...: solo agrega si esa posición
//      existe en ese string. Esto permite intercalar y luego solo
//      agregar la cola del más largo.
//    - += : concatena la letra al resultado.
//
// 3. PASO A PASO con word1="abc", word2="dfg" (max=3):
//    i=0: i<3 sí -> result+="a" -> "a". i<3 sí -> +="d" -> "ad".
//    i=1: +="b" -> "adb". +="f" -> "adbf".
//    i=2: +="c" -> "adbfc". +="g" -> "adbfcg".
//    Fin for. Return "adbfcg".
//    Caso disparejo "ab"+"pqrs" (max=4):
//    i=0: a,p -> "ap". i=1: b,q -> "apbq". i=2: (ya no hay word1) solo r -> "apbqr".
//    i=3: solo s -> "apbqrs".
//
// 4. ¿QUÉ SE LOGRA?
//    Patrón de dos punteros con un solo índice + acumulador,
//    y manejo de longitudes distintas sin cortar.
// ============================================================

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
