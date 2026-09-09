// Cuenta cuántos true hay en el array (las ovejas)

let sheep = [undefined,null,false,true,true,false,null,undefined]

// filter(Boolean) elimina falsy (null, undefined, false, 0, "")
// .length cuenta los que quedan
const countSheeps = sheep => sheep.filter(Boolean).length;

console.log(countSheeps(sheep))
