//  FUNCIONES
//Una funcion agrupa una serie de instrucciones para poder usarlas varias veces
//Es una agrupación reutilizable de un codigo de instrucciones

function greeting(name ="Alan"){
    console.log("Hello Everyone");
    console.log("I'm "+name);

    return "your greeting has been received";
}
let finalgreeting = greeting("Hermes");

alert(finalgreeting);


//presentando a diferentes personas
greeting("Andres");
greeting("Miguel");
greeting("Sandra");
greeting("Yeimy");
greeting("Luisa");




greeting();
/*
for(let i =0; i < 20; i++){
    greeting();
}

*/