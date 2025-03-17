/*
Ejercicio 11:

Pregunta a los  usuarios si tienen perros y quieren saber edad

de perro tienen sus mascotas.

un año de humano equivale a 7 de perro.

pregunta a los usuarios que edad tiene su perro y dile
la edad canina
*/
let edadoriginal = prompt("Ingresa la edad de tu perro en años humanos", 0)

let edadperro = edadoriginal*7;

alert("Tu perro tiene"+edadperro+"  años caninos");