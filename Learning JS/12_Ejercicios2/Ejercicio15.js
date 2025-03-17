/*
   Ejercicio 15:
   Este programa solicita al usuario ingresar números positivos hasta que introduzca un número negativo.
   Luego, muestra la suma total de los números ingresados y su promedio.
*/

// Inicialización de variables
let suma = 0;  // Acumulador para la suma de los números
let numero = 0;  // Variable para almacenar el número ingresado
let ejecuciones = 0;  // Contador de números válidos ingresados

// Bucle que solicita números hasta que se ingrese un número negativo
do {
    // Solicitar número al usuario
    numero = parseInt(prompt("Ingresa números hasta ingresar uno negativo", 0));

    // Verificar si el valor ingresado no es un número (NaN)
    if (isNaN(numero)) {
        numero = 0; // Si el usuario ingresa algo inválido, se convierte en 0
    }
    // Si el número es positivo o cero, se suma y se cuenta
    else if (numero >= 0) {
        suma += numero;  // Sumar el número al acumulador
        ejecuciones++;  // Aumentar el contador de números ingresados
    }

// La condición para repetir el bucle es que el número sea positivo o cero
} while (numero >= 0);

// Mostrar resultados finales
alert("La suma de los números es: " + suma);

// Evitar división por cero si no se ingresó ningún número válido
if (ejecuciones > 0) {
    alert("La media de los números es: " + (suma / ejecuciones));
} else {
    alert("No ingresaste números válidos.");
}
