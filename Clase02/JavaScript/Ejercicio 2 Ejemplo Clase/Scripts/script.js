function calcular()
{
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if(isNaN(n1 + n2))
    {
        document.getElementById("res").value= "Math Error";
    }
    else
    {
        document.getElementById("res").value= n1+" + "+n2+" = "+(n1+n2);
    }
}