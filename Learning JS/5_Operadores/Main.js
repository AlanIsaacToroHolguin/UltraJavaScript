//Hay diferentes tipos de operadores y vamos a verlos todos 


//OPERADORES ARITMETICOS/MATEMATICOS
let num1 =12;
let num2 =44;

let suma=num1+num2;

let resta =num2-num1;
 
let multiplicacion=num1*num2;

let division=num1/num2;

let resto=num1%num2;

let Potencia =num1 ** 2

console.log("El valor de la suma es: " + suma )
console.log("El valor de la resta es: " + resta)
console.log("El valor de la multiplicacion es: " + multiplicacion)
console.log("El valor de la division es: " + division)
console.log("El valor de la resto es: " + resto)








//OPERADORES DE AISGNACION
let Numerito = 17;

//Numerito = +  3
//Esto debe dar 20 
Numerito   += 3;
/*Numerito   += 3;
Numerito   -= 3;
Numerito   *= 3;  
Numerito   /= 3;*/


console.error(Numerito);
console.warn(Numerito);   //OTRAS FORNAS DE IMPRIMIR CONSOLES
console.info(Numerito);








//OPERADORES DE COMPARACION

let Numerazo = 31;
console.log(Numerazo == 31);    //Es un operador de igualdad no estricto no importa el tipo de dato ya que el valor es el mismo en si como tal


console.log(Numerazo === "31");  //Este si es un operador estricto ya que aqui si importa el tipo de ddato


console.log(Numerazo != "31");   //Operador de comparacion cuando  los valores son diferentes

console.log(Numerazo !== "31");     //Operador de comparacion que es lo mismo pero si es estricto con el tipo de dato


console.log(Numerazo > 100);   //Comparar mas que todo cuando un valor es mayor que el otro 

console.log(Numerazo < 100);   //Comparar mas que todo cuando un valor es menor que el otro 

console.log(Numerazo >= 1000);

console.warn(Numerazo <=1000);



//OPERADORES LOGICOS
let Esmayordeedad = false;

let tieneentrada = false;

console.log(Esmayordeedad && tieneentrada);

console.log(Esmayordeedad || tieneentrada);

console.log(!Esmayordeedad);  // con el (!)  invertimos el valor basicamente significa (not)




//OPERADORES DE CADENA

let mensaje = "Hola";

let mensaje2 = "¿Como estas?"


let mensajetotal = mensaje +" "+ mensaje2;

mensajetotal += " Mi nombre es  Alan Toro "

console.log(mensajetotal);




//OPERADORES DE INCREMENTO Y DECREMENTO 
let cifra = 1200;

cifra ++;
cifra ++;
cifra ++;
cifra ++;
cifra ++;
cifra ++;

cifra --;
cifra --;
cifra --;

console.log(cifra);
