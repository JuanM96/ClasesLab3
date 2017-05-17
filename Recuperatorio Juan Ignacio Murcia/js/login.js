$(document).ready(function (){
    $('#login-form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-zoom-in'
        },
        
        fields: {
            email: {
                validators: {
                    
                    notEmpty: {
                        message:"El mail es requerido"
                    },
                    emailAddress: {
                        message:"el mail no es valido"
                    }
                }
            },
            pass: {
                validators: {
                    notEmpty: {
                        message: 'El pass es requerido'
                    }
                }
            }
        }
    })
    var email = $('#mail').val();
    var password = $('#password').val();
    $("#login").click(function (){
        var email = $('#mail').val();
        var password = $('#password').val();
        var datosLogin = {email: email, password: password};
        datosLogin = JSON.stringify(datosLogin);
        $.ajax({
            method: 'POST',
            url: 'http://localhost:1337/loginRecu',
            data: datosLogin,
            dataType: 'json'
        })
        .done(function(data){
            console.log(JSON.stringify(data))
            if(data.role == "admin" && data.autenticado == 'si'){
                var color = data.preferencias.color;
                var fuente = data.preferencias.font;
                var url = 'admin.html' + '?color='+color+'&font='+fuente;
                window.location.replace(url);
            }
            else{
                alert("dato invalidos");
            }
        })
        .fail(function(status){
            console.log(status);
        })
    });
});