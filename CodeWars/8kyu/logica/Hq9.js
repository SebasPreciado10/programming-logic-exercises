// Intérprete HQ9+: H=devuelve 'Hello World!', Q=devuelve 'Q' (quine), 9=genera canción 99 botellas, otro=undefined
// for(number=99; number>0; number--) genera cada estrofa descendente.
// Ternarios manejan singular/plural: 1 bottle vs X bottles vs no more bottles.
// song += concatena cada estrofa con \n (salto de línea).

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

      // += concatena y guarda
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
