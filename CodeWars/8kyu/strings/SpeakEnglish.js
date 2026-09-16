// ============================================================
// EJERCICIO: SpeakEnglish - ¿Contiene "english"?
// ============================================================
// 1. ¿QUÉ HACE?
//    Devuelve true si la frase contiene la palabra "english",
//    sin importar mayúsculas/minúsculas. Si no, false.
//    Ejemplo: "asdfEngliSHdfs" -> true.
//
// 2. ¿CÓMO FUNCIONA?
//    - .toLowerCase(): convierte TODO a minúsculas.
//      "EngliSH" -> "english". Así la comparación es insensible a mayúsculas.
//    - .includes("english"): busca si ese pedazo existe dentro del texto.
//      Devuelve booleano true/false, no la posición.
//
// 3. PASO A PASO con "asdfEngliSHdfs":
//    Paso 1: sentence = "asdfEngliSHdfs".
//    Paso 2: .toLowerCase() -> "asdfenglishdfs".
//    Paso 3: .includes("english") -> ¿está dentro? Sí -> true.
//    Paso 4: return true.
//    Caso "No hay inglés aquí" -> minúsculas no contiene "english" -> false.
//
// 4. ¿QUÉ SE LOGRA?
//    Patrón normalizar (lowercase) + buscar (includes), clave para
//    búsquedas sin importar capitalización.
// ============================================================

function spEng(sentence){
    // toLowerCase() convierte todo a minúsculas
    // includes() busca si existe "english"
    let letter = sentence.toLowerCase().includes("english");
    return letter
}

// arrow function - mismo en una línea
const spEngArrow = sentence => sentence.toLowerCase().includes("english");

console.log(spEng("asdfEngliSHdfs"))
console.log(spEngArrow("No hay inglés aquí"))
