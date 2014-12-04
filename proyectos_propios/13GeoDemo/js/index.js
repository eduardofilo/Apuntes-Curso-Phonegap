var controlador = {
    _$botonIniciar: $('#iniciar'),
    _$botonFinalizar: $('#finalizar'),
    _$pantallaResultado: $('.app p'),

    _idGeoWatch: 0,

    inicializar: function () {
        var self = this;
        this._$botonIniciar.click(function (evt) {
            self.iniciarWatch();
        });
        this._$botonFinalizar.click(function (evt) {
            self.pararWatch();
        });

    },

    iniciarWatch: function () {
        var self = this;
        this._idGeoWatch = navigator.geolocation.watchPosition(function (position) {
                self._mostrarPosicion(position.coords.latitude, position.coords.longitude);
            },
            function (err) {
                self._mostrarError(err);
            }, {
                enableHighAccuracy: true
            });
    },

    pararWatch: function () {
        navigator.geolocation.clearWatch(this._idGeoWatch);
        this._$pantallaResultado.text("Esperando información.");
    },

    _mostrarPosicion: function (lat, long) {
        this._$pantallaResultado.text("Lat.: " + lat + "; Long.: " + long);
    },

    _mostrarError: function (err) {
        this._$pantallaResultado.text("HORROR!");
    }

};

$(document).ready(function () {
    document.addEventListener('deviceready', function () {
        controlador.inicializar();
    });
});