$("#login").submit(function(){
        var email = $("#txtEmail").val();
        var password = $("#txtPassword").val();
        var datosLogin = {
            "email": email,
            "password": password
        }
        $.ajax({            
            url:"http://localhost:1337/login",
            type:"POST",
            data:{datosLogin}
        })
        .done(function (){
            window.location.replace("./index.html");
        })
        .fail(function (){
            window.location.replace("./index.html");
        })
})
