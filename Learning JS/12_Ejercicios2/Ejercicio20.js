/*
   Ejercicio 20:

   En base al número que ingrese el usuario, decir si es par o impar.
*/

let numero;

// Bucle para asegurarse de que el usuario ingrese un número válido
do {
    numero = parseInt(prompt("Ingresa un número para ver si es par o impar", 0));
} while (isNaN(numero)); // Si no es un número, sigue pidiendo

// Verificar si es par o impar
if (numero % 2 === 0) {
    alert("El " + numero + " es par");
} else {
    alert("El " + numero + " es impar");
}

