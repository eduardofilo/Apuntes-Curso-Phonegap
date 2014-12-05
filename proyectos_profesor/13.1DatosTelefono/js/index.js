var controlador = {
  
    inicializar : function() {
        
        var pantallaResultado = document.querySelector('.app p');
        
        window.telefono.obtenerInfo(
            function(info) {
                pantallaResultado.innerHTML = info.imei;
         }, function(err) {
                pantallaResultado.innerHTML = err;
        });
        
    }
        
};

document.addEventListener('deviceready', function() {
    controlador.inicializar();
});

