/*
   Ejercicio 18:

   Tenemos una colección de números del 1 al 17.

   El usuario tiene que adivinar cuál es el número elegido.

   Haz un programa que pueda adivinar el número.
*/

const numeroelegido = 7;
let intento = null; // Inicializar la variable

while (intento !== numeroelegido) {
    intento = parseInt(prompt("Adivina el número elegido del 1 al 17:"));

    // Validar si el usuario ingresó un número válido
    if (isNaN(intento) || intento < 1 || intento > 17) {
        alert("Por favor, ingresa un número válido entre 1 y 17.");
        continue; // Vuelve a pedir el número sin evaluar la lógica
    }

    if (intento === numeroelegido) {
        alert("¡Acertaste el número! Felicitaciones 🎉");
    } else {
        alert("No es el número elegido, sigue intentando...");
    }
}


