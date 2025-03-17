//CONDICIONAL SWITCH
let midesayuno = 2;
switch (midesayuno){
    
    case 1://Bloque de instrucciones
    console.log("Elegiste tortitas");
    break
    case 2://Otro bloque de instrucciones
    console.log("Elegiste huevos con pan");
    case 3:
    console.log("Elegiste colacao");

    /*default:
    console.log("Has elegido otro desayuno diferente debes elegir de la opcion 1 a 3");
    */

  }
//Mismo ejemplo pero con Condicional if 
if (midesayuno == 3){
  console.log("Has elegigo tortitas ");
}
else{
   if(midesayuno == 2){
    console.log("has elegido huevos con pan");
   }
   else if(midesayuno == 1){
    console.log("Has elegido colacao");
   }
   else{
    console.log("Has elegido otro desayuno diferente");
   }
}








//CONDICIONAL TERNARIO
//UN CONDICIONAL BREVE PARA SABER COSAS BREVES (UN IF RESUMIDO)

let nombre = "Alan";

let age = 29;

let resultado = (age >= 18) ? "Es mayor de edad" : " Es menor de edad ";

console.log(resultado);







//DIFERENCIA ENTRE LET Y VAR (ALCANCE/BLOQUES )

//Las variables dependiendo de donde se defina  cambia osea que si hago un 
// (let dentro de un bloque de codigo if y eso no sera global)

//Var tiene un alcance global 

let curso  = " Master en Jacvascripr";

if ("hola" == "hola"){
  curso = "Master en CSS 3 AVANZADO"

  console.log(curso);
}

console.log(curso);

