/*
   Ejercicio 19:

   Muestra todos los números divisores de un número.
*/

let numero = parseInt(prompt("Ingresa un número para decirte sus divisores"));

console.log(`Los divisores de ${numero} son:`);

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(`El ${i} es divisor de ${numero}`);
    }
}
