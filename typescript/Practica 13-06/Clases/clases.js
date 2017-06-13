var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Motor
 */
var Motor = (function () {
    function Motor(potencia, tipo) {
        this.potencia = potencia;
        this.tipo = tipo;
    }
    Motor.prototype.Encender = function (PrenderYApagar) {
        var _this = this;
        window.setTimeout(function () { PrenderYApagar(false, _this.tipo); }, 1000);
    };
    Motor.prototype.Apagar = function (PrenderYApagar) {
        var _this = this;
        window.setTimeout(function () { PrenderYApagar(true, _this.tipo); }, 5000);
    };
    Motor.prototype.PrenderYApagar = function (estado, tipo) {
        var ret;
        if (estado == true) {
            ret = "El Motor " + tipo + " fue apagado";
        }
        else {
            ret = "El Motor " + tipo + " fue encendido";
        }
        console.log(ret);
    };
    return Motor;
}());
/**
 * Accesorio
 */
var Accesorio = (function () {
    function Accesorio(id, nom) {
        this.id = id;
        this.nombre = nom;
    }
    return Accesorio;
}());
/**
 * Vehiculo
 */
var Vehiculo = (function () {
    function Vehiculo(pb, motor, marca, mod) {
        var listaAcc = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            listaAcc[_i - 4] = arguments[_i];
        }
        this._precioBase = pb;
        this._motor = motor;
        this.marca = marca;
        this.modelo = mod;
        this._listaAccessorios = listaAcc;
    }
    Object.defineProperty(Vehiculo.prototype, "PrecioBase", {
        get: function () {
            return this._precioBase;
        },
        set: function (pb) {
            this._precioBase = pb;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "Motor", {
        get: function () {
            return this._motor;
        },
        set: function (motor) {
            this._motor = motor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "ListaAccessorios", {
        get: function () {
            return this._listaAccessorios;
        },
        set: function (listaAcc) {
            this._listaAccessorios = listaAcc;
        },
        enumerable: true,
        configurable: true
    });
    Vehiculo.prototype.CalcularPrecioTotal = function () {
        return this._precioBase * 1.08;
    };
    Vehiculo.prototype.AgregarAccesorios = function () {
        var accesorios = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accesorios[_i] = arguments[_i];
        }
        this._listaAccessorios = this._listaAccessorios.concat(accesorios);
    };
    return Vehiculo;
}());
/**
 * Camion
 */
var Camion = (function (_super) {
    __extends(Camion, _super);
    function Camion(largo, cuatroXcuatro, pb, motor, marca, mod) {
        var listaAcc = [];
        for (var _i = 6; _i < arguments.length; _i++) {
            listaAcc[_i - 6] = arguments[_i];
        }
        var _this = _super.apply(this, [pb, motor, marca, mod].concat(listaAcc)) || this;
        _this.largo = largo;
        _this.cuatroXcuatro = cuatroXcuatro;
        return _this;
    }
    return Camion;
}(Vehiculo));
window.onload = function () {
    var motor = new Motor(200, "algo");
    var accesorio1 = new Accesorio(1, "accesorio1");
    var accesorio2 = new Accesorio(2, "accesorio2");
    var camion = new Camion("mediano", true, 120000, motor, "marca", "modelo", accesorio1, accesorio2);
    camion.Motor.Encender(camion.Motor.PrenderYApagar);
    camion.Motor.Apagar(camion.Motor.PrenderYApagar);
    var accesorio3 = new Accesorio(3, "accesorio3");
    var accesorio4 = new Accesorio(4, "accesorio4");
    camion.AgregarAccesorios(accesorio3, accesorio4);
    console.log(camion.ListaAccessorios);
    console.log(camion.CalcularPrecioTotal());
};
