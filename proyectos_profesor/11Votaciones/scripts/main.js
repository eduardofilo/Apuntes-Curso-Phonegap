var servicioVotacion =  {
    URL_OBTENER_PREGUNTA_ACTUAL : 
        'http://demo0030280.mockable.io/voting/today',
    
    URL_CREAR_NUEVO_VOTO : 
        'http://demo0030280.mockable.io/voting/today/votes/{tipo}',
    
    obtenerPreguntaActual : function() {
        var promesa = $.get(this.URL_OBTENER_PREGUNTA_ACTUAL);
        return promesa;
    },
    
    votar : function(tipoDeVoto) {
        var url = this.URL_CREAR_NUEVO_VOTO.replace('{tipo}', tipoDeVoto);
        var promesa = $.post(url, {});
        return promesa;
    }
};

var controlador = {
  
    _$pregunta : $('header h1'),
    _$pantallaVotacion : $('#votacion'),
    _$pantallaResultados : $('#resultados'),
    _$accionSi : $('#accionSi'),
    _$accionNo : $('#accionNo'),
    _$botonesBack : $('.boton-back'),
    
    inicializar : function() {
        this._inicializarPregunta();        
        this._inicializarIU();
        this._inicializarHistory();
    },
    
    _inicializarHistory : function() {
        var self = this;
        
        History.Adapter.bind(window, 'statechange', function() {
            var evt = History.getState();
            var estado = evt.data;
            var $nuevaPantalla = $('#' + estado.id);
            self._mostrarPantalla($nuevaPantalla);      
            
            var idxUltimoEstado = History.savedStates.length-1;
            var estadoAnterior = History.getStateByIndex(idxUltimoEstado-1);
            if (estadoAnterior) {
                $('.boton-back').attr('href', estadoAnterior.data.id);
            }
            
        });
    },
    
    _inicializarIU : function() {
        var self = this;
        this._$accionSi.click(function(evt) {
            self._ejecutarVotarSi();
        });
        
        this._$botonesBack.click(function(evt) {
            evt.preventDefault();
            History.back();
        });
    },
    
    _ejecutarVotarSi : function() {
        var self = this;
        var promesa = servicioVotacion.votar('yes');
        promesa.done(function(datos) {
            self._prepararPantallaResultados(
                datos.total, datos.positives, datos.negatives);
            self.navegar('resultados');
        });
    },
    
    _prepararPantallaResultados : function(total, positivos, negativos) {
        this._$pantallaResultados.find('#total').text(total);
        this._$pantallaResultados.find('#positivos').text(positivos);
        this._$pantallaResultados.find('#negativos').text(negativos);
    },
    
    _inicializarPregunta : function() {
        var self = this;
        
        var promesa = servicioVotacion.obtenerPreguntaActual();
        promesa.done(function(respuesta) {
            self._actualizarCabecera(respuesta.question); 
        });
    },
    
    _actualizarCabecera : function(texto) {
        var self = this;
        this._$pregunta
                .fadeOut(function() {
                   self._$pregunta.text(texto);
                   self.navegar('votacion');
                }).fadeIn();
    },
    
    navegar : function(idDestino) {
        var $pantallaDestino = $('#' + idDestino);
        History.pushState({ id : idDestino },
                          $pantallaDestino.attr('data-titulo'),
                          idDestino);
    },
    
    _mostrarPantalla : function($pantallaDestino) {
        var $pantallaOrigen = $('.pantalla.activa');
        if ($pantallaOrigen.length === 0) {
            $pantallaDestino.fadeIn(function() {
                $pantallaDestino.addClass('activa');
            });
        } else {
            $pantallaOrigen.fadeOut(function() {
                $pantallaOrigen.removeClass('activa');
                $pantallaDestino.addClass('activa');
                $pantallaDestino.fadeIn();
            });
        }
    }
};

// index.html
controlador.inicializar();












