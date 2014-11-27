var votarSi = function () {
    console.log('Has votado SÍ!.');
};
var votarNo = function () {
    console.log('Has votado NOOOOOOOOOOOOOOOOOOO!.');
};

var inicializarPantalla = function () {
    var cmdYes = document.querySelector('[name=yes]');
    cmdYes.addEventListener('click', votarSi);

    var cmdNo = document.querySelector('[name=no]');
    cmdNo.addEventListener('click', votarNo);
};

document.addEventListener('deviceready', inicializarPantalla);