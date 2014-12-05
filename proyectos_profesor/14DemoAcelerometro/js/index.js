var controlador = {
    _$sprite : $('<div>'),
    
    inicializar : function() {
        this._inicializarSprite();
        this._inicializarAcelerometro();
    },
    
    _inicializarSprite : function() {
        this._$sprite.css({
            'background-color' : 'red',
            'border' : '3px solid orange',
            'position' : 'absolute',
            'width' : '20px',
            'height' : '20px',
            'left'   : ($(window).width() / 2 - 20/2) + 'px',
            'top'    : ($(window).height() / 2 - 20/2) + 'px'
        }).appendTo('body');
        
    },
    
    _inicializarAcelerometro : function() {
        var self = this;
        navigator.accelerometer.watchAcceleration(
            function(aceleracion) {
                self._actualizarSprite(aceleracion);
            },
            function(err) {
                console.error(err);
            }
        );
    },
    
    _actualizarSprite : function(aceleracion) {
        if (Math.abs(aceleracion.x) > 0.01) {
            this._$sprite.animate({
                'left' : (aceleracion.x > 0 ? '+' : '-') + '=5'
            });
        }
        if (Math.abs(aceleracion.y) > 0.01) {
            this._$sprite.animate({
                'top' : (aceleracion.y > 0 ? '+' : '-') + '=5'
            });
        }
    }
    
};

        
        

$(document).ready(function() {
    document.addEventListener('deviceready', function() {
        controlador.inicializar();
    });    
});