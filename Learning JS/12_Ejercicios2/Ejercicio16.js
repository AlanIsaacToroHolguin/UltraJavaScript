/*
   Ejercicio 16:
   
   Escribe un programa que muestre la tabla de multiplicar del
   número que indique el usuario.
*/

// Pedir al usuario un número para generar la tabla de multiplicar
let numero = parseInt(prompt("¿De qué número quieres la tabla?", 1));

// Inicializar la variable con el título de la tabla
let resultadocompleto = "Tabla del " + numero + ":\n";

// Bucle para generar la tabla de multiplicar del 1 al 10
for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numero;
    
    // Concatenar cada operación en la variable resultadocompleto
    resultadocompleto += i + " x " + numero + " = " + multiplicacion + "\n";
}

// Mostrar la tabla en la consola
console.log(resultadocompleto);
