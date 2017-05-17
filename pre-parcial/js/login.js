function mandar() {
    var email = $('#mail').val();
    var password = $('#password').val();
    var datosLogin = {email: email, password: password};
    datosLogin = JSON.stringify(datosLogin);
    $.ajax({
        method: 'POST',
        url: 'http://localhost:1337/login',
        data: datosLogin,
        dataType: 'json'
    })
    .done(function(data){
        if(data.autenticado == 'si'){
            var color = data.preferencias.color;
            var fuente = data.preferencias.font;
            var url = 'index.html' + '?color='+color+'&font='+fuente+'&email='+email;
            localStorage.setItem('email', email);
            window.location.replace(url);
        }
        else{
            alert("dato invalidos");
        }
    })
    .fail(function(status){
        console.log(status);
    })
}

function inicialize() {
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
                        message: 'el pass es requerido'
                    },
                    numeric : {
                        message: 'Numero'
                    }
                }
            }
        }
    })
    var email = $('#mail').val();
    var password = $('#password').val();
    $("#login").click(mandar);
    //Apreto enter y me manda la solicitud
    $("#login").keypress(function(e){
        if(e.which== 13){
            mandar();
        }
    })
}

$(document).ready(inicialize);