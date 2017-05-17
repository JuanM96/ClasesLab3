function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function logout(){
    localStorage.removeItem('email');
    window.location.replace('login.html');
}
function inicialize(){
    var color = getParameterByName('color');
    var fuente = getParameterByName('font');
    var email = getParameterByName('email');
    if(email === null){
        email = localStorage.getItem('email');
    }
    $("#logout").click(logout);
    $("#postear").click(function(){
        var texttitle = $('#texttitle').val();
        var textheader = $('#textheader').val();
        var posttext = $('#posttext').val();
        var author = email;
        var datosPost = {
            "title" : texttitle,
            "header": textheader,
            "posttext": posttext,
            "author": author
        }

        $.ajax({
            method:'POST',
            url: 'http://localhost:1337/postearNuevaEntrada',
            data: JSON.stringify(datosPost),
            dataType: 'json',
            beforeSend: function(){
                var imagen="<img src='image/126.gif' class='spinner'>";
                $('#posts').append(imagen);
            },
            success: function(data){
                var post = ' <div class="col-md-4 col-md-offset-3"><h1>' + data.title + '</h1>';
                post += '<h2>' + data.header + '</h2>';
                post += '<p>' + data.posttext + '</p>';
                post += '<p>' + data.author + '</p> </div>';
                $('.spinner').remove();
                $('#posts').append(post);
            },
            error: function(xhr, status, error){
                alert(status);
            }
        });
    })
}


$(document).ready(inicialize);