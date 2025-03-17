/*
Ejercicio 14:

Un DJ no sabe  que genero musical poner en la fiesta...

preguntale al usuario que genero quiere(pop,rock,o rap)

segun lo que prefiera devuelve un mensaje diferente.

*/

let genero = prompt("Que genero de musica prefieres?(Tenemos:Pop,Rock,Rap)");

switch(genero){
    case "Pop":
        alert("Reproduciendo:Billy Jean-Michael Jakson");
        break;
    case "Rock":
        alert("Reproduciendo:Hotel California-Eagles");
        break;   
    case "Rap":
        alert("Reproduciendo:Los zurdos mueren antes-Nach");
        break; 
    default:
        alert("La musica que has elegido no se encuentra disponible");
        
}