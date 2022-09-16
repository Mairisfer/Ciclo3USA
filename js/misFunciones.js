function traerInformacion() {
    $.ajax({
        url: "url del servidor",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            //Acá se puede validar la respuesta.
        }
    });

}