function Saludar()
{
    //alert("Hola Mundo")
    //console.log("Hola Mundo")
    //document.write("HOLA MUNDO!!!!!!!!!!!!!");
    // var numero;
    // var numero2;
    // var res;
    // numero = prompt("Ingrese numero");
    // numero2 = prompt("Ingrese numero");
    // res = parseInt(numero) + parseInt(numero2);
    // if(isNaN(numero + numero2))
    // {
    //     alert("Ingreso una palabra ¬¬");
    // }
    // else
    // {
    //     alert(numero+" + "+numero2+" = "+res);
    // }
    // res = confirm("mensaje");
    // if(res)
    // {
    //     alert("ok");
    // }
    // else
    // {
    //     alert("no ok");
    // }
    var nombre;
    var txtnombre;
    var txtsaludo = document.getElementById("txtsaludo");
    nombre = document.getElementById("nombre").value;
    txtnombre = document.getElementById("nombre");
    //alert("Su nombre es: "+nombre+"\ntxtnombre.value = "+txtnombre.value);
    txtsaludo.value = "Hola " + nombre;
}