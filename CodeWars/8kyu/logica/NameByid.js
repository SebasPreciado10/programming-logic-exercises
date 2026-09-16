// ============================================================
// EJERCICIO: NameByid - Planeta por ID (bug clásico de switch)
// ============================================================
// 1. ¿QUÉ HACE?
//    Dado 1-8 devuelve el planeta: 1 Mercury ... 5 Jupiter ... 8 Neptune.
//    La primera función tiene BUG y siempre devuelve Neptune.
//    La segunda (Fixed) es la correcta.
//
// 2. ¿CÓMO FUNCIONA? (concepto estrella: switch + break)
//    - switch(id): salta al `case` que coincida.
//    - Sin `break`, JS NO se detiene: sigue ejecutando los cases de abajo
//      ("fall-through"). Por eso sin break, aunque entres en case 5,
//      pisas name con 6,7,8 y terminas en Neptune.
//    - Con `break;` sales del switch justo después de asignar.
//    - var name: variable que guarda el resultado y se retorna al final.
//
// 3. PASO A PASO DEL BUG con getPlanetName(5):
//    Paso 1: entra a case 5 -> name='Jupiter'.
//    Paso 2: como no hay break, sigue -> name='Saturn'.
//    Paso 3: sigue -> name='Uranus'.
//    Paso 4: sigue -> name='Neptune'. Fin switch. Return Neptune (mal).
//    CON FIX: entra case 5 -> name='Jupiter' -> break -> sale -> return Jupiter (bien).
//
// 4. ¿QUÉ SE LOGRA?
//    Entender por qué el break es obligatorio en switch y cómo depurar
//    un fall-through.
// ============================================================

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
