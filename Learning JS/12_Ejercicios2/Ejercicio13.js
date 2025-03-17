/*
Ejercicio 13:

Tengo un kanguro que salta 3 metros cada vez.

haz un programa que me diga cuantos saltos ha dado el kanguro...

y cual es la distancia total recorrida tras 17 saltos.

*/
 
let distanciasalto = 3;

let saltos = 17;

let distanciatotal = 0

for(let contador = 1;contador <= saltos;contador++){

distanciatotal +=distanciasalto;
console.log("El kanguro a saltado "+contador+
    "saltos, y ha recorrido"+ distanciatotal+" metros")}
    