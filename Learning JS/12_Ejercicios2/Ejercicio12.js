/*
Ejercicio 12:

Haz un programa que pida dos numeros y que nos diga cual es el mayor ,el menor y si son iguales 

 PLUS:Si los numeros no son un numero  o son menores o iguales a cero,
 nos los vuelva a pedir 
*/
 

let num1 = parseInt(prompt("Ingresa un primer numero",0));

let num2 = parseInt(prompt("Ingresa un segundo numero",0));


while(num1<=0 || num2 <= 0 || isNaN(num2)){

num1 = parseInt(prompt("Ingresa un primer numero",0));

num2 = parseInt(prompt("Ingresa un segundo numero",0));
}
        
if(num1 === num2){
    alert("Los numeros son iguales");
}
else if(num1 > num2){
    alert("El numero mayor es el "+num1);
    alert("El numero menor es el "+num2);
}
else if(num1 < num2){
    alert("El numero mayor es el "+num2);
    alert("El numero menor es el "+num1);
}
else{
    alert("No haz ingresado los numeros correctamente");
}