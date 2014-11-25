Apuntes Curso Phonegap
======================

Enlaces
-------
* [Presentación sobre Phonegap](https://www.pue.es/website/contents/events/2014/phonegap/slides/#/ "PHONEGAP 3.3. Primeros pasos y algo más")
* [Freelance Corner](http://freelancecorner.org/): Listas de distribución de proyectos para freelancers.
* [Socrative](http://www.socrative.com/): Gestor de aula (tests de profesor a alumnos).
* [Brackets](http://brackets.io/): Editor de código.
* [10 trucos para mejorar la terminal de Windows](http://www.emezeta.com/articulos/mejorar-terminal-windows)
* [JSLint](http://www.jslint.com/):Chequeador sintaxis JS.
* [Cursos MongoDB](https://university.mongodb.com/courses/catalog)
* [Microjs](http://microjs.com/#): Microjs: Fantastic Micro-Frameworks and Micro-Libraries for Fun and Profit!
* [Leaflet](http://leafletjs.com/): An Open-Source JavaScript Library for Mobile-Friendly Interactive Maps.
* [Vídeos de Douglas Crockford](https://www.google.es/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=douglas+crockford&tbm=vid) (evangelizador JavaScript).
* [Emmet](http://emmet.io/): Plugin para Brackets. Macros para crear documentos fácilmente.
* [Beautify](https://github.com/drewhamlett/brackets-beautify): Plugin para Brackets para formatear la indentación automáticamente.
* [Mockable](http://www.mockable.io/): Para construir mocks de web services.
* Proveedores de WebServices:
  * [Digital Ocean](https://www.digitalocean.com/)
  * [AWS](http://aws.amazon.com/es/): Una máquina micro (estilo Raspberry Pi) gratis durante un año.
  * [AWS Lambda](http://aws.amazon.com/es/lambda/)
  * Google AppEngine: Gratis hasta un umbral. [Especial](http://wedevelopers.com/2014/11/06/we-developers-036-google-app-engine/) sobre AppEngine de We.Developers.
* [DonDominio.com](http://www.dondominio.com/): Proveedor de dominios recomendado por alumno curso.
* [json.org](http://json.org/): Definición/documentación de JSON.
* Firefox REST Easy addon: Cliente de servicios REST para testeos.
* [jQuery](http://jquery.com/): Librería Javascript.
* [Angular](https://angularjs.org/): Framework Javascript.
* [CanIUse](http://caniuse.com/): Indica las tecnologías soportadas por los distintos navegadores.
* [W3C TRs](http://www.w3.org/TR/): Listado de estándares y borradores del W3C.
* [Mozilla Developer Network](https://developer.mozilla.org/es/): Alternativa al W3C para consultar la documentación de HTML.
* [Jade](http://jade-lang.com/) y [HAML](http://haml.info/): Alternativas a HTML.
* [JSFiddle](http://jsfiddle.net/): Prototipos HTML/CSS/JS.
* [Transit](http://ricostacruz.com/jquery.transit/): Plugin jQuery para animaciones.

Instalación entorno
-------------------
Módulos necesarios:
* JDK (instalado en `C:\jdk1.8`)
  * Poner en el PATH: `C:\jdk1.8\bin`
* [Ant](http://ant.apache.org/) (instalado en `C:\ant`)
  * Poner en el PATH: `C:\ant\bin`
* Android SDK (instalado en `C:\android-sdk`)
  * Definir variable de entorno `ANDROID_HOME` con: `C:\android-sdk`
* [Node](http://nodejs.org/) ([en Ubuntu](https://github.com/creationix/nvm))
* Phonegap: `npm install -g phonegap`
* [Genymotion](http://www.genymotion.com/): Emulador Android (muy rápido).
* [Vagrant](https://www.vagrantup.com/) (opcional): Empaquetador de entornos de desarrollo

Creación de proyecto Phonegap
-----------------------------
```Batchfile
phonegap create 00HolaMundo --name HolaMundo --id es.eduardofilo.hm
```

Compilación y ejecución de proyecto Phonegap
--------------------------------------------
```Batchfile
cd 00HolaMundo
phonegap build android
phonegap run android
```

Inspeccionar dispositivos externos en Chrome
--------------------------------------------
about:inspect

WebServices
-----------
Servidor mock ([mockable](http://www.mockable.io/)): demo0034470.mockable.io

jQuery
------
Hay una convención por la cual cuando invocamos jQuery ($) para localizar un elemento del DOM, la variable donde se carga se pone con el prefijo $. Por ejemplo:
```javascript
var $paragrafos = $('p');
```

**Ejemplo1**
```javascript
var $paragraphs = $('p');
for (var i=0; i < $paragraphs.length ; i++) {
    console.log(i, $paragraphs[i]);
}
$paragraphs.css('color', 'red');
$paragraphs.css('background-color', 'green');

$paragraphs.css({'color': 'blue',
                 'background-color': 'yellow'});

console.log($paragraphs.css('color'));
$firstp = $('p:first');
//$firstp = $('p').first();
//$firstp = $('p').eq(0);
$firstp.addClass('importante');
```

**Ejemplo2**
```javascript
var $firstp = $('p:first');
var texto = $firstp.text();
$firstp.text(texto.toUpperCase());
//var $strong = $('<strong>');
//$strong.text('contenido');
//$firstp.prepend($strong);

$('<strong>')
    .text('contenido')
    .prependTo($firstp);
```

**Ejemplo3**
```javascript
var colores = ['Rojo', 'Verde', 'Azul'];
var $ol = $('ol');
$ol.empty();
for (var i=0; i<colores.length; i++) {
    $ol.append($('<li>').text(colores[i]));
    //$('<li>').text(colores[i]).appendTo($ol);
}
```

**Ejemplo4**
```javascript
$('p').on('click', function(evt) {
    evt.preventDefault();
    $(this).css('background-color', 'green');
});
```

**Ejemplo5**
```javascript
$('p').on('click', function(evt) {
    $(this).fadeOut(function() {
        $(this).text($(this).text().toUpperCase());
        $(this).fadeIn();
    });
});
```
