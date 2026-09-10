// Dado un número 1-8, devuelve el nombre del planeta (1=Mercury ... 8=Neptune)
// switch(id) entra al case que coincida. Sin break hace "fall-through" y sigue a los de abajo.
// Por eso la versión con bug siempre termina en Neptune. Con break en cada case se corta y devuelve el correcto.

// ❌ BUG: sin break, el switch "se cae" al siguiente case
function getPlanetName(id){
  var name;
  switch(id){
    case 1: name = 'Mercury'   // ¡sin break! ejecuta todo hacia abajo
    case 2: name = 'Venus'
    case 3: name = 'Earth'
    case 4: name = 'Mars'
    case 5: name = 'Jupiter'
    case 6: name = 'Saturn'
    case 7: name = 'Uranus'
    case 8: name = 'Neptune'
  }
  return name; // siempre devuelve Neptune (el último)
}

console.log("Bug:", getPlanetName(5))

// ✅ SOLUCIÓN: agregar break en cada case
function getPlanetNameFixed(id){
  var name;
  switch(id){
    case 1: name = 'Mercury'; break;
    case 2: name = 'Venus'; break;
    case 3: name = 'Earth'; break;
    case 4: name = 'Mars'; break;
    case 5: name = 'Jupiter'; break;
    case 6: name = 'Saturn'; break;
    case 7: name = 'Uranus'; break;
    case 8: name = 'Neptune'; break;
  }
  return name;
}

console.log("Corregido:", getPlanetNameFixed(5))
