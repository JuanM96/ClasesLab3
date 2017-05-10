if (typeof(Storage) != "Undefined") {
    localStorage.setItem("autor","Mariano"); // seteo el elemento
    var autor = localStorage.getItem("autor"); // obtengo el elemento
    localStorage.removeItem("autor"); // borro el elemento
}
else{
    alert("ERROR")
}