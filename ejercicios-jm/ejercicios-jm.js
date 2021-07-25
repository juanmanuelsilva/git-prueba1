// *
// **
// ***
// ****
// *****

/*  CON CICLO WHILE
let niveles = prompt("Ingresa un numero ...");
let incremento = 1;
let asteriscos = "*";
  while (incremento < niveles) {
      console.log(asteriscos + incremento);
      incremento++;
      asteriscos = `${asteriscos}*`;
  }
 */

/*   CON CLICLO FOR -> aumenta el incremento
let niveles = prompt("Ingresa un numero ...");
let asteriscos = "*";
for (let incremento = 1; incremento <= niveles; incremento++) {
  console.log(asteriscos + incremento);
  asteriscos = `${asteriscos}*`;
} */

/* CON CICLO FOR -> aumenta asteriscos con int */
let niveles = prompt("Ingresa un numero ...");
let incremento = 0;
let asteriscos = "*";

for (let i = 0; i < niveles; i++) {
 console.log(asteriscos);
 asteriscos = asteriscos + "*"; 
}

/* OTRA FORMA CON CICLO FOR -> aumenta asteriscos como string 
let niveles = prompt("Ingresa un numero ...");
let asteriscos = "*";

for (let asteriscos = "*"; asteriscos.length <= niveles; asteriscos+= "*") {
  console.log(asteriscos);
}
*/



