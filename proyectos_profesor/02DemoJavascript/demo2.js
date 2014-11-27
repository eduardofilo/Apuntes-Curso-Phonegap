
var empleado = {
    nombre    : 'Alice',
    apellidos : 'Wonderland',
    mostrarNombreCompleto : function() {
       console.log(empleado.nombre + ' ' +
                   empleado.apellidos);
    }
};

empleado.mostrarNombreCompleto();