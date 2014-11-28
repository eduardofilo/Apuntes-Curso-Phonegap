Apuntes Curso Phonegap
======================
Profesor: [@ciberado](https://github.com/ciberado)

Días 1 a 5: 18/11/2014 -> 24/11/2014
------------------------------------
### Enlaces
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
* [DevDocs](http://devdocs.io/): Filtrado de la documentación MDN.
* [Jade](http://jade-lang.com/) y [HAML](http://haml.info/): Alternativas a HTML.
* [JSFiddle](http://jsfiddle.net/): Prototipos HTML/CSS/JS.
* [Transit](http://ricostacruz.com/jquery.transit/): Plugin jQuery para animaciones.
* [Adobe Color CC](http://color.adobe.com): Ruedas cromáticas.

### Instalación entorno
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

### Creación de proyecto Phonegap
```Batchfile
phonegap create 00HolaMundo --name HolaMundo --id es.eduardofilo.hm
```

### Compilación y ejecución de proyecto Phonegap
```Batchfile
cd 00HolaMundo
phonegap build android
phonegap run android
```
En realidad la tarea `run` hace `build`.

### Inspeccionar dispositivos externos en Chrome
about:inspect

### REST WebServices
Servidor mock ([mockable](http://www.mockable.io/)): demo0034470.mockable.io  
*url*: http://demo0034470.mockable.io/votaciones/38/yes  
*type*: POST  
*dataType*: json  
Respuesta:
```json
{
	"votosTotal": 6000,
	"votosPositivos": 3500,
	"votosNegativos": 2500,
	"fecha": "2013-04-17T12:32:12"
}
```

### jQuery
Hay una convención por la cual cuando invocamos jQuery ($) para localizar un elemento del DOM, la variable donde se carga se pone con el prefijo $. Por ejemplo:
```javascript
var $paragrafos = $('p');
```

##### Ejemplo1
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

##### Ejemplo2
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

##### Ejemplo3
```javascript
var colores = ['Rojo', 'Verde', 'Azul'];
var $ol = $('ol');
$ol.empty();
for (var i=0; i<colores.length; i++) {
    $ol.append($('<li>').text(colores[i]));
    //$('<li>').text(colores[i]).appendTo($ol);
}
```

##### Ejemplo4
```javascript
$('p').on('click', function(evt) {
    evt.preventDefault();
    $(this).css('background-color', 'green');
});
```

##### Ejemplo5
```javascript
$('p').on('click', function(evt) {
    $(this).fadeOut(function() {
        $(this).text($(this).text().toUpperCase());
        $(this).fadeIn();
    });
});
```

Día 6: Martes 25/11/2014
------------------------
### Enlaces
* [Git](http://git-scm.com/)
* [SourceTree](http://www.sourcetreeapp.com/): GUI de Git.
* [La parábola de git](https://www.youtube.com/watch?v=sXudMl5x_5g): Vídeo interesante.
* [gitflow](http://danielkummer.github.io/git-flow-cheatsheet/): Patrón de uso de git.
* [Yeoman](http://yeoman.io/): Plantillas/Scaffolding.
* [Webapp](https://github.com/yeoman/generator-webapp): Plantilla de Yeoman para webapps.
* [Grunt](http://gruntjs.com/): Gestor de tareas.
* [Gulp](http://gulpjs.com/): Gestor de tareas. Equivalente a Grunt. Está de moda ahora.
* [Bower](http://bower.io/): Gestor de librerías (como npm pero a nivel de librerías JS, tipo leaflet o bootstrap). Depende de git.

### Montaje de entorno y workflow
1. Bajamos el instalador de git y lo instalamos. Durante la instalación, en una página del asistente, marcamos la tercera opción que lleva una leyenda en rojo.
2. Inicializamos el proyecto local:
  * `mkdir 06YesNoGit`
  * `cd 06YesNoGit`
  * `git init`
3. Entramos con nuestra cuenta (o creamos una) en GitHub y creamos un repositorio con el mismo nombre que el local (`06YesNoGit`).
4. Creamos un "remote" desde el git local hacia GitHub:
  * `git remote add origin https://github.com/eduardofilo/06YesNoGit.git`
5. Sincronizamos:
  * `git pull origin master`
6. Modificamos un fichero en local (.gitignore), lo commiteamos en local y sincronizamos con GitHub:
  * `git add .gitignore`
  * `git commit -m "Primer commit"`
  * `git push origin master`
7. Inicializamos gitflow en SourceTree (pulsando el botón de la toolbar).
8. Instalamos Bower (la opción g lo instala en global, es decir accesible desde todos los proyectos):
  * `npm install -g bower`
9. Grunt no se suele instalar de forma global porque cambia mucho de versión. Vamos a instalar algo que ejecuta el grunt local del proyecto:
  * `npm install -g grunt-cli`
10. Instalamos Yeoman:
  * `npm install -g yo`
11. Si falla la descarga de algún paquete, es mejor no reejecutar yeoman. Se habrá generado un fichero `package.json` que contiene los paquetes npm que necesitamos. Ejecutando lo siguiente se bajará lo que falte:
  * `npm install`
12. Si `npm install` nos da warnings se puede solucionar inicializando npm (que genera el fichero `package.json`):
  * `npm init`
13. Instalamos la plantilla webapp de Yeoman:
  * `npm install -g generator-webapp`
14. En este punto tenemos todas las herramientas instaladas.
15. “Start New Feature” en gitflow@SourceTree. Le damos el nombre “InicializarConYeoman”.
16. Generamos un proyecto con la plantilla webapp de Yeoman:
  * `yo`
  * Instalamos “webapp”
  * Incluimos las librerías Bootstrap y Modernizr
  * Hacemos overwrite de `.gitignore`
17. Lanzamos los tests para probar Grunt:
  * `grunt test`
18. Compilamos con Grunt:
  * `grunt build`
19. Aparece el directorio `dist` con la versión final (lista para desplegar) de nuestro proyecto.
20. Arrancamos un servidor web para probar el proyecto:
  * `grunt serve`

Día 7: Miércoles 26/11/2014
---------------------------
### Enlaces
* [Phonegap developer app](http://app.phonegap.com/): Sincroniza la app desplegada por Phonegap en el teléfono o en Genymotion para pasar los cambios directamente sin necesidad de volver a desplegar.
* [Genymotion with Google Play Services](https://gist.github.com/wbroek/9321145): Instalación de Google Play Services en Genymotion.

### Bower
La diferencia con npm es que éste instala cosas en máquina; Bower añade librerías al proyecto. Lo vamos a manejar con los siguientes comandos por terminal:
* `bower search leaflet`: Busca las librerías que contienen “leaflet”.
* `bower install --save leaflet`: Instala la librería leaflet. La opción `--save` hace que se apunte en un fichero de referencia de librerías (`bower.json`) para luego no tener que subir las librerías al control de versiones (evitaríamos subir el directorio `bower_components`, que es donde se almacenan las librerías instaladas y sus dependencias). Es parecido al `package.json` de npm.
* `grunt wiredep`: Conecta las dependencias. Por ejemplo vincula los ficheros CSS de las librerías en la posición del comentario `<!-- bower:css -->` del fichero `index.html`. Los CSS de las librerías que había instaladas previamente (bootstrap y modernizr) se habían conectado cuando instalamos la plantilla webapp con yeoman. Esta tarea está incluida en la tarea `build`.
* `bower uninstall --save leaflet`: Desinstala la librería leaflet.

### Grunt
El fichero de configuración tiene forma de script Javascript. Es el fichero `Gruntfile.js`.

### git
Vamos a hacer el merge de la feature que creamos ayer en la rama develop:
1. SourceTree / Commit / Marcamos “Unstage all” para pasar a stage todos los ficheros modificados / Incluimos el comentario del commit en la caja de abajo.
2. SourceTree / Gitflow / Finish Feature (marcamos Delete branch)
3. SourceTree / Push (marcamos las dos ramas: develop y master)

### Phonegap app developer
1. Se instala en el emulador o dispositivo la aplicación.
2. Se abre la aplicación “PhoneGap” en el dispositivo o emulador.
3. Se configura poniendo la URL que aparece al arrancar el servidor phonegap en la máquina de desarrollo:
  * `phonegap serve`

Día 8: Jueves 27/11/2014
---------------------------
### Enlaces
* [Fundation](http://foundation.zurb.com/): Framework CSS basado en em. Bootstrap está basado en px.
* [QuirksMode](http://www.quirksmode.org/about/): Peter Paul Koch. Buscar sus conferencias sobre display.
* [Media Queries](http://mediaqueri.es/): Catálogo de sitios responsive.
* [Swwweet](http://www.swwweet.com/): Estudio de Barcelona con buena filosofía web.
* [CSS Zen garden](http://www.csszengarden.com/): Juego para modificar con CSS un HTML fijado desde hace años.
* [Pedro Arilla](http://pedroarilla.com/es/): Especialista en tipografía de Zaragoza.
* [Fontsinuse](http://fontsinuse.com/): Galería de sitios con tipografía interesante.
* [Unos tipos duros](http://www.unostiposduros.com/): Teoría y práctica de la tipografía.

### CSS
Siguiendo la [lección sobre CSS del curso de HTML5 de Javier](https://github.com/ciberado/javiermoreno-dominahtml5-intro/tree/master/05_css).

*Unidades de medida*  
`em` es una de las más interesantes. Procede del mundo de la tipografía y es la anchura de la M mayúscula en un tamaño que se considera legible con facilidad por un usuario normal. Las `em` se basan en el tamaño de letra del elemento y son relativas entre elementos que se contienen, es decir, si un elemento tiene `2em` pero está afectado por un contenedor en el que se aplica `2em`, el tamaño resultante será equivalente a `6em`. Para evitar la acumulación está la unidad `rem` (=root em).

*Preferencias*  
Hay un orden de prioridad entre los selectores de CSS. Algunos detalles:
* Prioridades generales de menos a más: Reglas definidas por el navegador (useragent stylesheet rules) -> Reglas que seleccionan elementos -> Reglas que seleccionan atributos (`id` o `class`).
* `id` prioriza sobre `class`.
* `!important` se salta las prioridades, es decir se aplica siempre.

*Position*  
`top` y `left` no aplican si `position` es `static`. El `position: absolute` toma el origen de coordenadas del primer contenedor que no es `static`.

*Display*  
El `display` de un `div` por defecto (useragent stylesheet rules) es `block`. El de `span` es `inline`. Se puede modificar tanto un caso como el otro. Por ejemplo si ponemos `display: inline` a un `div`, pasa a comportarse como un `span`. El `display: inline` hace que se ignore el `width`. Con `display: inline-block` sí que se tiene en cuenta el `width`. Hay un truco para conservar la indentación en el código HTML mientras se evita que se introduzca un carácter espacio que ocupa sitio y descoloca la maquetación y es introducir un comentario entre líneas de esta forma:
```html
   <section>
   …
   </section><!--
--><section>
   …
   </section>
```

*Float*  
La propiedad `clear` sólo funciona si el `display` no es `inline`. Se usa mucho el apaño del clearfix para solucionar la pérdida de dimensión vertical de un contenedor cuando todo su contenido más alto flota. El selector `:after` selecciona después del contenido al que se aplica el estilo, no el contenido del siguiente elemento en el DOM. El clearfix favorito de Javier es:
```css
.clearfix:after {
            content: ".";
            visibility: hidden;
            display: block;
            height: 0;
            clear: both;
        }
```

*viewport*  
Diferencia entre layout-viewport y display-viewport. La relación entre ambos es el nivel de zoom. El layout-viewport predeterminado es 960px. Se definió pixel-ratio cuando apareció iPhone 4, inicialmente con un valor de 2 (pantalla retina de 640px de ancho por los 320px del iPhone original). Terminales con pantallas QuadHD tienen un pixel-ratio de alrededor de 4. Tiene el inconveniente de que hace que las imágenes se redimensionen, lo que en terminales con mucha densidad de pixel produce desenfoque. La solución es enviar la imagen adecuada a cada dispositivo. De momento se hace con condiciones en CSS.

*mediaqueries*  
Permite hacer condiciones en CSS. `@media` es un if. En las mediaqueries los `em` son siempre `rem` es decir son absolutos, no relativos. Más que hablar de resoluciones debemos pensar en tamaños. Se suelen considerar cuatro tamaños:
* Móvil: 360 px CSS
* Tablet: 768 px CSS
* Desktop: 1200 px CSS
* TV

### Tipografía
La tipografía cada vez tiene más importancia. Para pantalla, Javier no recomienda Helvetica. Existen muchos tipos buenos, muy legibles y gratuitos, como:
* [Mozilla Fira](https://www.mozilla.org/en-US/styleguide/products/firefox-os/typeface/)
* [Ubuntu](http://font.ubuntu.com/)
* [Google OpenSans](http://www.google.com/fonts/specimen/Open+Sans)

Javier recomienda no descartar las fuentes de pago. La inversión puede tener un impacto muy importante en el proyecto. Algunas foundries:
* [Typekit](https://typekit.com/): Foundry de Adobe.
* [Google Fonts](http://www.google.com/fonts): Foundry de Google.

Nos describe el uso de [Google Fonts](http://www.google.com/fonts) usando el sitio para definir un paquete con dos fuentes.

### Frameworks
Algunos framewoks:
* [Bootstrap](http://getbootstrap.com/): es el más importante ahora mismo. El favorito de Javier, sobre todo por su ecosistema.
* [Bootsnipp](http://bootsnipp.com/): Componentes para bootstrap.
* [Foundation](http://foundation.zurb.com/)
* [Skeleton](http://getskeleton.com/)
* [Ionic](http://ionicframework.com/): Perfecto para pantallas pequeñas.
* [Ratchet](http://goratchet.com/): También para móviles.
* [Sencha Touch](http://www.sencha.com/products/touch/): Para móviles. No recomendado por Javier.
* [jQuery Mobile](http://jquerymobile.com/): No recomendado por Javier.
