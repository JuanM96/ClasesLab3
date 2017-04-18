$(document).ready(function (){
    var peticion;
    $("submit").click(function (){
        $.ajax({
            url:"pagina.php",
            type:"GET",
            data:(nombre: $("txtnombre").val(), apellido: $("apellido").val())
        })
        // var datos = "Nombre: " + $("txtnombre").val() + "Apellido: " + $("txtapellido").val();
        // peticion = new XMLHttpRequest();
        // peticion.onreadystatechange = procesarPeticion;
        // peticion.open("GET","php/pagina.php",datos,true);
        // peticion.send();
    })

    function procesarPeticion(){
        if (peticion.onreadystatechange == 4 && peticion.status == 200) {
            $("resultados").text(peticion.responseText);
        }
    }
})