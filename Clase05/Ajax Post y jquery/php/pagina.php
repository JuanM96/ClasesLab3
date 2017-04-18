<?php
if (isset($_GET)) {
    echo "Valor Recuperado por GET".$_GET("nombre")." ".$_GET("apellido");
}
elseif (isset($_POST)) {
    echo "Valor Recuperado por POST".$_POST("nombre")." ".$_POST("apellido");
}
else {
    echo "Error al recuperar";
}
?>