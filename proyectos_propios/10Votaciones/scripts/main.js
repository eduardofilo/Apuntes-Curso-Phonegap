var servicioPreguntas = {
    URL_GET_PREGUNTA_ACTUAL: '//demo0030280.mockable.io/voting/today',

    obtenerPreguntaActual: function () {
        var promesa = $.get(this.URL_GET_PREGUNTA_ACTUAL);
        return promesa;
    }
};

var controlador = {
    _$pregunta: $('.jumbotron h1'),
    _$pantallaVotacion: $('#votacion'),

    inicializar: function () {
        this._visualizarPregunta();
    },

    _visualizarPregunta: function () {
        var self = this; //Almacenamos el controlador en la closure
        var promesa = servicioPreguntas.obtenerPreguntaActual();
        promesa.done(function (pregunta) {
            //self._$pregunta.text(pregunta.question);
            //self._$pregunta.fadeOut(function () {
            //    self._$pregunta.text(pregunta.question);
            //    self._$pregunta.fadeIn();
            //});
            self._actualizarPregunta(pregunta.question);
        });
    },

    _actualizarPregunta: function (texto) {
        var self = this;

        this._$pregunta
            .fadeOut(function () {
                self._$pregunta.text(texto);
            }).fadeIn(function () {
                self._mostrarPantalla(self._$pantallaVotacion);
            });
    },

    _mostrarPantalla: function ($pantallaDestino) {
        var $pantallaOrigen = $('.pagina.activa');

        if ($pantallaOrigen.length === 0) {
            $pantallaDestino.fadeIn(function () {
                $pantallaDestino.addClass('activa');
            })
        } else {
            $pantallaOrigen.fadeOut(function () {
                $pantallaOrigen.removeClass('activa');
                $pantallaDestino.addClass('activa');
                $pantallaDestino.fadeIn();
            });
        }
    }

};

controlador.inicializar();