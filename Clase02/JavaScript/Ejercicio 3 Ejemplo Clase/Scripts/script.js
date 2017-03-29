window.onload = function(){
    // var parrafos = document.getElementsByTagName("p");
    //var parrafos = document.getElementsByClassName("");
    // for(var i = 0; i<parrafos.length;i++)
    // {
    //     parrafos[i].innerHTML =  "Parrafo n°"+(i+1);
    // }

    //parrafos[0].innerHTML = "Primer Parrafo";
    //parrafos[1].innerHTML = "Segundo Parrafo";
    //parrafos[2].innerHTML = "Tercero Parrafo";
    var txttexto = document.getElementById("texto");
    var txttexto2 = document.getElementById("texto2");
    var contador = 0;
    // txttexto.onblur = function()
    // {
    //     txttexto2.value = txttexto.value;
    // }
    // txttexto.onchange = function()
    // {
    //     contador++;
    //     txttexto2.value = contador;
    // }
    // txttexto.onkeypress = function()
    // {
    //     contador++;
    //     txttexto2.value = contador;
    // }
    // txttexto.onkeydown = function()
    // {
    //     contador++;
    //     txttexto2.value = txttexto.value;
    // }
    txttexto.onkeyup = function()
    {
        contador++;
        txttexto2.value = txttexto.value;
    }
}

