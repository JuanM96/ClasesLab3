/**
 * Motor
 */
class Motor {
    potencia:number;
    tipo:string;
    constructor(potencia:number,tipo:string) {
        this.potencia = potencia;
        this.tipo = tipo;
    }
    public Encender(PrenderYApagar:(estado:boolean,tipo:string)=>void):void{
        window.setTimeout(() => {PrenderYApagar(false, this.tipo);}, 1000);
    }
    public Apagar(PrenderYApagar:(estado:boolean,tipo:string)=>void):void{
        window.setTimeout(() => {PrenderYApagar(true, this.tipo);}, 5000);
    }
    public PrenderYApagar(estado:boolean,tipo:string):void{
        var ret:string;
        if (estado == true) {
            ret = "El Motor "+tipo+" fue apagado";
        }
        else{
            ret = "El Motor "+tipo+" fue encendido";
        }
        console.log(ret);
    }
}

/**
 * Accesorio
 */
class Accesorio {
    id:number;
    nombre:string;
    constructor(id:number,nom:string) {
        this.id = id;
        this.nombre = nom;
    }
}
/**
 * Vehiculo
 */
class Vehiculo {
    private _precioBase:number;
    private _motor:Motor;
    marca:string;
    modelo:string;
    private _listaAccessorios:Accesorio[];
    constructor(pb:number,motor:Motor,marca:string,mod:string,...listaAcc:Accesorio[]) {
        this._precioBase = pb;
        this._motor = motor;
        this.marca = marca;
        this.modelo = mod;
        this._listaAccessorios = listaAcc;
    }
    get PrecioBase(): number{
        return this._precioBase;
    }
    get Motor(): Motor{
        return this._motor;
    }
    get ListaAccessorios(): Accesorio[]{
        return this._listaAccessorios;
    }
    set PrecioBase(pb:number){
        this._precioBase = pb;
    }
    set Motor(motor:Motor){
        this._motor = motor;
    }
    set ListaAccessorios(listaAcc:Accesorio[]){
        this._listaAccessorios = listaAcc;
    }
    public CalcularPrecioTotal(){
        return this._precioBase * 1.08;
    }
    public AgregarAccesorios(...accesorios:Accesorio[]):void{
        this._listaAccessorios = this._listaAccessorios.concat(accesorios);
    }
}
/**
 * Camion
 */
class Camion extends Vehiculo {
    largo:string;
    cuatroXcuatro:boolean;
    constructor(largo:"corto"|"mediano"|"largo",cuatroXcuatro:boolean,pb:number,motor:Motor,marca:string,mod:string,...listaAcc:Accesorio[]) {
        super(pb,motor,marca,mod,...listaAcc);
        this.largo = largo;
        this.cuatroXcuatro = cuatroXcuatro;
    }

}
window.onload = function(){
    var motor = new Motor(200,"algo")
    var accesorio1 = new Accesorio(1,"accesorio1");
    var accesorio2 = new Accesorio(2,"accesorio2");
    var camion = new Camion("mediano",true,120000,motor,"marca","modelo",accesorio1,accesorio2);
    camion.Motor.Encender(camion.Motor.PrenderYApagar);
    camion.Motor.Apagar(camion.Motor.PrenderYApagar);
    var accesorio3 = new Accesorio(3,"accesorio3");
    var accesorio4 = new Accesorio(4,"accesorio4");
    camion.AgregarAccesorios(accesorio3,accesorio4);
    console.log(camion.ListaAccessorios);
    console.log(camion.CalcularPrecioTotal());
};