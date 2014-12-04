var controlador = {
  
    _$botonIniciar : $('#iniciar'),
    _$botonFinalizar : $('#finalizar'),
    _$pantallaResultado : $('.app p'),
    
    _idGeoWatch : 0,
    
    inicializar : function() {
        var self = this;
        this._$botonIniciar.click(function(evt) {
            self.iniciarWatch();
        });
        this._$botonFinalizar.click(function(evt) {
            self.pararWatch();
        });
    },
    
    iniciarWatch : function() {
        var self = this;
        this._idGeoWatch = navigator.geolocation.watchPosition(
            function(position) {
                self._mostrarPosicion(position.coords.latitude,
                                      position.coords.longitude);
            },
            function(err) {
                self._mostrarError(err);
            },
            { enableHighAccuracy : true
            }
        );
    },
    
    pararWatch : function() {
        navigator.geolocation.clearWatch(this._idGeoWatch);
    },
    
    _mostrarPosicion : function(latitude, longitude) {
        this._$pantallaResultado.text(
            latitude + ', ' + longitude  
        );
    },
    
    _mostrarError : function(err) {
        console.error('Error: ', err);
        this._$pantallaResultado.text(err);
    }
    
};


$(document).ready(function() {
    document.addEventListener('deviceready', function() {
        controlador.inicializar(); 
    });
});



























