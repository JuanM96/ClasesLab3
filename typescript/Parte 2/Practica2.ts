// Funciones Básicas
/*function sumar( a, b ){
  return a + b;
}*/
function sumar( a:number = 0, b:number = 0 ):number{
  return a + b;
}

/*var contar = function( heroes ){
  return heroes.length;
}*/
var contar = function( heroes:string[] ):number{
  return heroes.length;
}
/*var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);*/
let superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
/*function llamarBatman( llamar ){
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();*/
function llamarBatman( llamar:any = "Batman" ){
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
/*function unirheroes( ...personas:string[] ){
  return personas.join(", ");
}*/
function unirheroes( ...personas:string[] ):string{
  return personas.join(", ");
}


// Tipo funcion
/*function noHaceNada( numero, texto, booleano, arreglo ){
}*/
function noHaceNada( numero:number, texto:string, booleano:boolean, arreglo:any ):void{
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:(numero:number, texto:string, booleano:boolean, arreglo:any)=>void;
noHaceNadaTampoco = noHaceNada;