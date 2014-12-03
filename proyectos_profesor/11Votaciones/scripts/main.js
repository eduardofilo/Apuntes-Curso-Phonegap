var servicioPreguntas = {
    URL_GET_PREGUNTA_ACTUAL : 'http://demo0030280.mockable.io/voting/today',
    URL_POST_NUEVO_VOTO : 
        'http://demo0030280.mockable.io/voting/today/votes/{value}',
    
    obtenerPreguntaActual : function() {
        var promesa = $.get(this.URL_GET_PREGUNTA_ACTUAL);
        return promesa;
    },
    
    votar : function(tipoDeVoto) {
        var url = this.URL_POST_NUEVO_VOTO.replace('{value}', tipoDeVoto);
        var promesa = $.post(url);
        return promesa;
    }
};


var controlador =  {
    
    _$pregunta : $('.jumbotron h1'),
    _$pantallaVotacion : $('#votacion'),
    _$pantallaResultado : $('#resultado'),
    _$accionSi : $('#accionSi'),
    _$accionNo : $('#accionNo'),
    _$botonesBack : $('.boton-back'),
    
    inicializar : function() {
        this._inicializarHistory();
        this._inicializarIU();
        this._visualizarPregunta();
    },
    
    _inicializarHistory : function() {
        var self = this;
        History.Adapter.bind(window,'statechange',function(){
            var estadoNuevo = History.getState();
            var $pantallaDestino = $('#' + estadoNuevo.data.id);
            self._mostrarPantalla($pantallaDestino);
        });
    },
    
    _inicializarIU : function() {
        var self = this;
        this._$accionSi.click(function(evt) {
            self._ejecutarVotarSi(); 
        });
        this._$botonesBack.click(function(evt) {
            history.back();
        });
    },
    
    _ejecutarVotarSi : function() {
        var self = this;
        servicioPreguntas.votar('yes').done(function(datos) {
            self._prepararPantallaVotacion(datos.total, datos.positives, datos.negatives);
            self.navegar('resultado');
        });
    },
    
    _prepararPantallaVotacion : function(total, positivos, negativos) {
        this._$pantallaResultado.find('#votosTotales').text(total);
        this._$pantallaResultado.find('#votosPositivos').text(positivos);
        this._$pantallaResultado.find('#votosNegativos').text(negativos);
    },
 
    _visualizarPregunta : function() {
        var self = this;    
        
        var promesa = servicioPreguntas.obtenerPreguntaActual();
        promesa.done(function(pregunta) {
            self._actualizarPregunta(pregunta.question);
        });
    }, 
    
    _actualizarPregunta : function(texto) {
        var self = this;
        
        this._$pregunta
            .fadeOut(function() {
                self._$pregunta.text(texto);
            }).fadeIn(function() {
                self.navegar('votacion');
            });
    },
    
    navegar : function(idDestino) {
        History.pushState({ id: idDestino}, 
                          $('#' + idDestino).attr('data-title'),   idDestino);
        
    },
    
    _mostrarPantalla : function($pantallaDestino) {
        var $pantallaOrigen = $('.pagina.activa');
        
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

controlador.inicializar();














