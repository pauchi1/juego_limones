let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
let personajeX = canvas.width/2;

function iniciar() {
    dibujarSuelo();
    dibujarPersonaje();
}

function actualizarPantalla() {
    limpiarcanva();
    dibujarPersonaje();
    dibujarSuelo();
}

function dibujarSuelo() {
    ctx.fillStyle ="#FFB9AB";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO, canvas.width, ALTURA_SUELO);
}

function dibujarPersonaje() {
    ctx.fillStyle="#EBBD6C";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda() {
    personajeX = personajeX - 10;
    actualizarPantalla();
}

function moverDerecha() {
    personajeX = personajeX + 10;
    actualizarPantalla();
}

function limpiarcanva() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}