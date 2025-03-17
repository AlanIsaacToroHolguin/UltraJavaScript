//Condicional IF

//Si A es igual a B  entonces haz esto.


//EJEMPLO 1:


let estalloviendo =false;

if(estalloviendo === true){
    //se ejecuta esto
    console.log("Entonces debo salir debo salir con el paraguas");
} else{
    console.log("No llevo paraguas");
   }


//EJEMPLO 2 
let concebolla = false;

if (!concebolla) {
   console.log("Tu hamburguesa no lleva cebolla");

} else {console.log("Tu hamburguesa no lleva cebolla");

}

//EJEMPLO 3:"

let name = "Alan Toro";

let age = 17;

if (age >=18) {
    console.log("Eres mayor de edad,puedes ir a la fiesta");
     
} else {age < 18
    console.log(`Deja de ser cabron tienes ${age} y no puedes ir a la fiesta`);
    
}


//EJEMPLO 4.5

let name2 = "Alan Toro";

let age2 = 70;

if (age2 >=18) {
     
    //Soy mayor de edad
    console.log(`${name2} tiene ${age2} años de edad,por lo tanto es mayor de edad`);
 
if(age2 < 20){console.log("Pero aun es un adolescente");
     
} else if(age2 >= 60){console.log("Pero es un anciano");
}
    else {console.log("Es un adulto promedio ");

    }
}
    

//EJEMPLO 4

let buentiempo =  false;

if(!buentiempo){
    console.log("nos quedamos en casa  ");

    }


    //EJEMPLO 5

let year = 2005;

if(year >= 2000 && year <= 2030){
    console.log("estamos en la era moderna");
    }
    else if(year > 2030){
        console.log("Estamos en la era postmoderna");
    }else{
        console.log("Estamos en la era antigua");
    }
    

//EJEMPLO 6


if(year == 2007 || year == 2017 || year == 2027 || year == 2037 ||year == 2047){
    console.log("El año acaba en 7 !!");
   }
else{console.log("Año desconocido");

}



