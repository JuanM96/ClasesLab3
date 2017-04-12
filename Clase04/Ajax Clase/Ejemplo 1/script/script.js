    addEventListener("load",InicializarEventos,false);
    function InicializarEventos()
    {
        var button = document.getElementById("submit");
        button.addEventListener("click",presionEnlance);
    }
    var req = new XMLHttpRequest();
    function presionEnlance()
    {
            req.open("GET","http//localhost/getpost",true);
            req.onreadystatechange = ProcesarPost;
            req.send();
    /*
    ESTADOS DEL REQUEST
    0 no cargo
    1 open
    2 llega al servidor
    3 cargando
    4 done
    */   
    }
    function ProcesarPost()
    {
        var midivhtml = document.getElementById("div");
        if (req.readyState == 4) 
        { // ya esta la respuesta del servidor
            //midivhtml.innerhtml = req.responseText;
            midivhtml.innerHTML = req.responseText;
        }
        else
        {
            //midivhtml.innerhtml = cargando;
            midivhtml.innerHTML = "cargando";
        }
    }