// Tipos
//var batman = "Bruce";
let batman:string = "Bruce";
//var superman = "Clark";
let superman:string = "Clark";
//var existe = false;
let existe:Boolean = false;
// Tuplas
//var parejaHeroes = [batman,superman];
//var villano = ["Lex Lutor",5,true];
let parejaHeroes:[string,string] = [superman, batman]
let villano:[string, number, boolean] = ["Lex Lutor", 5, true];

// Arreglos
//var aliados = ["Mujer Maravilla","Acuaman","San", "Flash"];
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
//var fuerzaFlash = 5;
//var fuerzaSuperman = 100;
//var fuerzaBatman = 1;
//var fuerzaAcuaman = 0;
enum Fuerza {
  Acuaman,
  Batman = 1,
  Flash = 5,
  Superman = 100
}
let flash:Fuerza = Fuerza.Flash;
let Fbatman:Fuerza = Fuerza.Batman;
let acuaman:Fuerza = Fuerza.Acuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:any = 100;
let largoDelPoder = (<string>poder).length;
console.log( largoDelPoder );
let x:any = "juan";
//Asercin de tipo
(<string>x).length;
