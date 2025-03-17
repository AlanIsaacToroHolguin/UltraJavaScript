/*
Ejercicio 8

Temgo una heladeria y cada  bola de helado  vale
 1.8 euros.

¿Cuanto cuestan los cucuruchos de 1, 2 y 3 bolas?

Ten en cuenta que el barquillo 
cuesta 50 centimos de euros*/

let preciobola = 1.8;

let barquillo = 50;

let unabola =  preciobola + barquillo;

let dosbolas = (preciobola * 2) + barquillo;
 
let tresbolas = (preciobola *3) + barquillo;

let resultado =`El cucurucho de una bola cuesta ${unabola}
El de dos cuesta ${dosbolas}
y el de tresbolas cuesta ${tresbolas}`;

console.log(resultado);
