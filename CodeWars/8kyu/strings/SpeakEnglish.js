// Verifica si contiene "english" sin importar mayúsculas. Devuelve true/false.
// toLowerCase() pasa todo a minúsculas. includes("english") busca si existe dentro.

function spEng(sentence){
    // toLowerCase() convierte todo a minúsculas
    // includes() busca si existe "english"
    let letter = sentence.toLowerCase().includes("english");
    return letter
}

// arrow function
const spEngArrow = sentence => sentence.toLowerCase().includes("english");

console.log(spEng("asdfEngliSHdfs"))
console.log(spEngArrow("No hay inglés aquí"))
