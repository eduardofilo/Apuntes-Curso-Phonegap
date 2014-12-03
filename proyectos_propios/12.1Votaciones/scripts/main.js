var servicioPreguntas = {
    URL_GET_PREGUNTA_ACTUAL: 'http://demo0030280.mockable.io/voting/today',
    URL_POST_NUEVO_VOTO: 'http://demo0030280.mockable.io/voting/today/votes/{value}',

    obtenerPreguntaActual: function () {
        var promesa = $.get(this.URL_GET_PREGUNTA_ACTUAL);
        return promesa;
    },

    votar: function (tipoDeVoto) {
        localStorage.setItem('voto', tipoDeVoto);
        var deferred = $.Deferred();
        var promesa = deferred.promise();
        deferred.resolve({
            total: 0,
            positives: 0,
            negatives: 0
        });
        return promesa;
    }
};

var controlador = {
    _$pantallaCargando: $('#cargando'),
    _$pregunta: $('.jumbotron h1'),
    _$pantallaVotacion: $('#votacion'),
    _$pantallaResultado: $('#resultado'),
    _$accionSi: $('#accionSi'),
    _$accionNo: $('#accionNo'),
    _$accionVolver: $('.boton-back'),
    //_$columnaTotales: $('#votosTotales'),
    //_$columnaPositivos: $('#votosPositivos'),
    //_$columnaNegativos: $('#votosNegativos'),

    inicializar: function () {
        this._inicializarHistory();
        this._inicializarUI();
        this._visualizarPregunta();
        this._inicializarCargando();
    },

    _inicializarCargando: function () {
        var self = this;
        $(document).ajaxStart(function () {
            self._$pantallaCargando.fadeIn();
        });
        $(document).ajaxStop(function () {
            self._$pantallaCargando.fadeOut();
        });
        $(document).ajaxError(function () {
            self._$pantallaCargando.text('Error de comunicación.');
        });
    },

    _inicializarHistory: function () {
        var self = this;
        History.Adapter.bind(window, 'statechange', function () {
            var estadoNuevo = History.getState();
            //console.log(estadoNuevo);
            var $pantallaDestino = $('#' + estadoNuevo.data.id);
            self._mostrarPantalla($pantallaDestino);

            // Adaptamos el href del botón volver
            var idxUltimoEstado = History.savedStates.length - 1;
            var estadoAnterior = History.getStateByIndex(idxUltimoEstado - 1);
            if (estadoAnterior) {
                self._$accionVolver.attr('href', estadoAnterior.data.id);
            }
        });
    },

    _inicializarUI: function () {
        var self = this;
        this._$accionSi.click(function (evt) {
            self._ejecutarVotarSi();
        });
        this._$accionVolver.click(function (evt) {
            //self.navegar('votacion');
            evt.preventDefault();
            history.back();
        });
        this._$pantallaResultado.swipe({
            swipeLeft: function () {
                History.back();
            }
        });
    },

    _ejecutarVotarSi: function () {
        var self = this;

        // Invocamos al servicio
        var promesa = servicioPreguntas.votar('yes');
        promesa.done(function (datos) {
            // Actualizamos la tabla con los datos que nos devuelve el servicio
            self._prepararPantallaVotacion(datos.total, datos.positives, datos.negatives);
            // Mostramos la pantalla de resultados
            self.navegar('resultado');
        });
    },

    _prepararPantallaVotacion: function (total, positivos, negativos) {
        this._$pantallaResultado.find('#votosTotales').text(total);
        this._$pantallaResultado.find('#votosPositivos').text(positivos);
        this._$pantallaResultado.find('#votosNegativos').text(negativos);
    },

    _visualizarPregunta: function () {
        var self = this; //Almacenamos el controlador en la closure en que se convierte el callback definido al final
        var promesa = servicioPreguntas.obtenerPreguntaActual();
        promesa.done(function (pregunta) {
            self._actualizarPregunta(pregunta.question);
        });
    },

    _actualizarPregunta: function (texto) {
        var self = this;

        this._$pregunta.fadeOut(function () {
            self._$pregunta.text(texto);
        }).fadeIn(function () {
            self.navegar('votacion');
        }).animate({
            color: '#990000'
        });
    },

    navegar: function (idDestino) {
        //document.location.href = '#' + idDestino;
        History.pushState({
            id: idDestino
        }, $('#' + idDestino).attr('data-title'), idDestino);
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

$(document).ready(function () {
    controlador.inicializar();
});