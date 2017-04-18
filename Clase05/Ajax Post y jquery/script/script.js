$(document).ready(function (){
    var peticion;
    $("submit").click(function (){
        var datos = "Nombre: " + $("txtnombre").val() + "Apellido: " + $("txtapellido").val();
        peticion = new XMLHttpRequest();
        peticion.onreadystatechange = procesarPeticion;
        peticion.open("GET","pagina.php",datos,true);
        peticion.send();
    })

    function procesarPeticion(){
        if (peticion.onreadystatechange == 4 && peticion.status == 200) {
            $("resultados").text(peticion.responseText);
        }
    }
})