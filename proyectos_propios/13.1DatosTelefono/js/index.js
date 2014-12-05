var controlador = {
    inicializar: function () {
        var pantallaResultado = document.querySelector('.app p');
        telefono.getInfo(function (info) {
            pantallaResultado.innerHTML = "IMEI: " + info.imei;
        }, function (err) {
            pantallaResultado.innerHTML = err;
        });
    }
};

document.addEventListener('deviceready', function () {
    controlador.inicializar();
});