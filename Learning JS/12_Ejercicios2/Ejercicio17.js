/*
   Ejercicio 17:

   Mostrar todos los números impares que hay entre 
   dos números que nos da el usuario.
*/

let num1 = parseInt(prompt("Ingresa tu primer número", 0));
let num2 = parseInt(prompt("Ingresa tu segundo número", 0));

// Asegurar que num1 es menor que num2 antes de comenzar
if (num1 > num2) {
    console.log("El primer número debe ser menor que el segundo.");
} else {
    // Bucle que recorre los números entre num1 y num2
    while (num1 < num2) {
        num1++; // Incrementamos antes de verificar

        // Verificar si es impar antes de imprimirlo
        if (num1 % 2 !== 0) {
            console.log(`El ${num1} es impar`);
        }
    }
}
