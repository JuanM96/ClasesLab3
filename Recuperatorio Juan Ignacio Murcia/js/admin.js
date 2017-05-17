function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
$(document).ready(function (){
    var color = getParameterByName('color');
    var fuente = getParameterByName('font');
    $("#postear").click(function(){
    $('#style').html("h1{color: "+color+"}h2{font-family:" +fuente+ "}");
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var website = $('#website').val();
        var ubicacion = $('#ubicacion').val();
        var fechaNacimiento = $('#fechaDeNacimiento').val();
        var datosPost = {
            "nombre": nombre,
            "email": email,
            "website": website,
            "ubicacion": ubicacion,
            "fechaNacimiento": fechaNacimiento
        }

        $.ajax({
            method:'POST',
            url: 'http://localhost:1337/crearNuevoContacto',
            data: JSON.stringify(datosPost),
            dataType: 'json',
            beforeSend: function(){
                var imagen="<img src='img/triangle.gif' class='spinner'>";
                $('#resultados').append(imagen);
            },
            success: function(data){
                var post = ' <div class="col-md-4 col-md-offset-3"><h1>' + "Usuario Cargado" + '</h1>';
                post += '<p> Nombre: ' + data.nombre + '</p>';
                post += '<p> Email: ' + data.email + '</p>';
                post += '<p> Website: ' + data.website + '</p>';
                post += '<p> Ubicacion: ' + data.ubicacion + '</p>';
                post += '<p> Fecha De Nacimiento: ' + data.fechaNacimiento + '</p>';
                post += '<p> Registrado: ' + data.fechaIngreso + '</p> </div>';
                $('.spinner').remove();
                $('#resultados').append(post);
            },
            error: function(xhr, status, error){
                alert(status);
            }
        });
    })
})