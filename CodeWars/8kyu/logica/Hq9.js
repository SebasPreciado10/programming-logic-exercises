// ============================================================
// EJERCICIO: HQ9 - Intérprete del lenguaje HQ9+
// ============================================================
// 1. ¿QUÉ HACE?
//    Simula 3 comandos:
//    'H' -> 'Hello World!', 'Q' -> 'Q' (devuelve su propio código),
//    '9' -> letra completa de "99 bottles of beer". Otro -> undefined.
//
// 2. ¿CÓMO FUNCIONA? (piezas)
//    - if(code==='H') return...: salida inmediata, termina la función.
//    - for(let number=99; number>0; number--): bucle descendente 99...1.
//    - Ternario para singular/plural: number===1 ? '1 bottle' : `${n} bottles`.
//    - nextNumber = number-1: calcula la siguiente estrofa. Si es 0 -> 'no more'.
//    - Template literal `${}`: mete variables en el texto.
//    - song += ...: ACUMULA cada estrofa. \n es salto de línea.
//    - Al final agrega las 2 líneas de cierre y retorna todo.
//
// 3. PASO A PASO (resumido, son 99 vueltas):
//    Vuelta number=99: current='99 bottles', next='98 bottles'.
//      song = "99 bottles of beer on the wall, 99 bottles of beer.\n"
//           + "Take one down..., 98 bottles...wall.\n"
//    Vuelta number=2: current='2 bottles', next='1 bottle'.
//    Vuelta number=1: current='1 bottle', next='no more bottles'.
//    Fuera del for: agrega "No more bottles..." + "Go to the store...99...".
//    Return song gigante.
//    HQ9('H'): primer if true -> 'Hello World!' inmediato, no entra al for.
//    HQ9('Q'): segundo if -> devuelve 'Q'.
//
// 4. ¿QUÉ SE LOGRA?
//    Practicas return temprano, bucles, acumuladores con += y
//    construcción de texto largo con singular/plural.
// ============================================================

function HQ9(code) {
  if (code === 'H') return 'Hello World!';
  if (code === 'Q') return code;

  if (code === '9') {
    let song = '';

    // for empieza en 99, baja hasta 1
    for (let number = 99; number > 0; number--) {
      // singular vs plural: 1="bottle", otro="bottles"
      let current = number === 1 ? '1 bottle' : `${number} bottles`;
      let nextNumber = number - 1;
      let next;

      if (nextNumber === 0) {
        next = 'no more bottles';
      } else if (nextNumber === 1) {
        next = '1 bottle';
      } else {
        next = `${nextNumber} bottles`;
      }

      // += concatena y guarda en el acumulador
      song += `${current} of beer on the wall, ${current} of beer.\n`;
      song += `Take one down and pass it around, ${next} of beer on the wall.\n`;
    }

    song += `No more bottles of beer on the wall, no more bottles of beer.\n`;
    song += `Go to the store and buy some more, 99 bottles of beer on the wall.`;

    return song;
  }

  return undefined;
}

console.log(HQ9('H'))
console.log(HQ9('Q'))
